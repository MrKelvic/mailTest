<template>
    <div @keypress="triggerHotKey" @keyup.esc="opened=null" class="wrapper">
      <div class="wrapper_container">
        <p class="wrapper_container_route"> {{ $route.name }}</p>
        <h2 v-if="selected.length">Emails selected ({{ selected.length }})</h2>
        <div class="wrapper_container_actions">
          <input ref="actions" :checked="selected.length" @change="$event=>triggerSelect($event)" class="wrapper_container_actions_item" type="checkbox" name="selectAll" id="">
          <button  @click="$store.dispatch('setToRead',selected);selected=[]" class="wrapper_container_actions_item wrapper_container_actions_actionBtn">Mark as read (r)</button>
          <button @click="$store.dispatch('setArchived',selected);selected=[]" class="wrapper_container_actions_item wrapper_container_actions_actionBtn">Archive (a)</button>
        </div>
        <ul class="wrapper_container_emails" >
          <li v-on:click="$event=>clickCheck($event,mail)" :class="mailClass(mail.read)" v-for="mail in mails" :key="mail.id" class="wrapper_container_emails_item">
            <input @change="$event=>triggerSelect($event,mail.id)" :checked="selectedMail(mail.id)" type="checkbox" class="wrapper_container_emails_item_child" name="" >
            <p class="wrapper_container_emails_item_child"> {{mail.header}}</p>
          </li>
        </ul>
      </div>
      <overlay v-if="opened" :mail="opened" @closeOverlay="opened=null"/>
    </div>
  </template>
  
  <script>
  import overlay from '@/components/overlay.vue';

  export default {
    name: 'inbox_mess',
    components:{
      overlay
    },
    props: {},
    data(){
      return{
        selected:[],
        showArchived:false,
        opened:null
      }
    },
    computed:{
      mailClass(){
        return (read)=>(read?'wrapper_container_emails_item wrapper_container_emails_item--inactive':'wrapper_container_emails_item')
      },
      mails(){
        return !this.showArchived?
              this.$store.state.emails:
              this.$store.state.emails.filter(e=>e.archived)
      },
      selectedMail(){
        return (id)=>this.selected.includes(id)
      }
    },
    methods:{
      triggerSelect(event,id){
        let action = event?.target.checked //true to add false to remove 
        if(!id){
          if(action) this.selected=this.mails.map(e=>e.id);
          else this.selected = []
        }else{
          if(action&&!this.selected.includes(id)) this.selected.push(id);
          else if (!action&&this.selected.includes(id)) this.selected=this.selected.filter(e=>e!=id)
        }
      },
      triggerHotKey(event){
        let key = event?.key
        switch (key) {
          case 'r':
            this.$store.dispatch('setToRead',this.selected)
            this.selected=[]
            break;
          case 'a':
            this.$store.dispatch('setArchived',this.selected)
            this.selected=[]
            break;
          default:
            break;
        }
      },
      clickCheck(event,mail){
        if(event?.target?.nodeName=='INPUT') return 0;
        this.openMail(mail)
      },
      openMail(mail){
        this.opened=mail
      }
    },
    mounted(){
      this.$refs.actions.focus();
    },
    watch:{
      '$route.name':function(e) {
          this.showArchived=e=='archive'
      }
    }
  }
  </script>
  
<style scoped>
.wrapper{
  padding:20px 40px;
}
.wrapper_container_route{
  text-transform: capitalize;
  margin-bottom:10px;
}
.wrapper_container_actions{
  display:flex;
  place-items:center;
  width:100%;
  margin:25px 0px;
  padding:0px 15px;
}
.wrapper_container_actions_item,.wrapper_container_emails_item_child{
  margin:0px 15px;
}
.wrapper_container_actions_actionBtn{
    border-radius: 5px;
    padding:5px 10px;
}
.wrapper_container_emails{
  width:100%;
} 
.wrapper_container_emails_item:hover{
  cursor: pointer;
}
.wrapper_container_emails_item{
  display:flex;
  padding: 15px;
  background-color:#f5f5f5;
  border:1px solid #e5e4e4;
  margin:10px 0px;
}
.wrapper_container_emails_item--inactive{
  opacity:0.5;
}
</style>
  
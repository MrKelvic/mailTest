<template>
    <div class="wrapper">
        <div class="wrapper_container">
            <button @click="changeRoute('inbox')" class="wrapper_container_button">
                Inbox ({{ $store.state.emails.length }})
            </button>
            <button @click="changeRoute('archive')" class="wrapper_container_button">
                Archive ({{ archivedCount }})
            </button>
        </div>
        <div class="wrapper_container">
            <button class="wrapper_container_button wrapper_botton_bottom">
                Logout
            </button>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'side-bar',
    props: {},
    components:{
    },
    computed:{
      archivedCount(){
        return this.$store.state.emails.filter(e=>e.archived).length
      }
    },
    methods:{
        changeRoute(path){
            this.$router.push({name:path})
        }
    }
  }
  </script>
  
<style scoped>
.wrapper{
    padding:20px 30px;
    height:90%;
    display:flex;
    flex-wrap:wrap;
    place-content: space_between;
}
.wrapper_container{
    width:100%;
}
.wrapper_container_button{
    border-radius: 5px;
    padding:10px 20px;
    width:100%;
    text-align:left;
    margin: 5px 0px;
}
</style>
  
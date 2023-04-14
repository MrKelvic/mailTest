<template>
    <div class="overlay">
      <div class="overlay_close" @click="$emit('closeOverlay')"></div>
      <div class="overlay_content">
        <button ref="closePrmt" @click="$emit('closeOverlay')" class="overlay_content_close">Close(Esc)</button>
        <div class="overlay_content_actions">
          <button @click="$store.dispatch('setToRead',[mail.id])" class="overlay_content_close_actionBtn">Mark as read (r)</button>
          <button @click="$store.dispatch('setArchived',[mail.id])" class="overlay_content_close_actionBtn">Archive (a)</button>
        </div>
        <h2 class="overlay_content_head">{{ mail.header }}</h2>
        <p class="overlay_content_content">{{ mail.content }}</p>
        <!-- <h2 class="overlay_content_head">Hello</h2>
        <p class="overlay_content_content">jdiojwqoid</p> -->
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'overlay-comp',
    props: {
        mail: {type: Object, default: () => ({})},
    },
    components:{
        
    },
    mounted(){
      this.$refs.closePrmt.focus();
    }
  }
  </script>
  
<style scoped>
.overlay{
  position: fixed;
  left: 0px;
  top:0%;
  width:100%;
  height:100%;
  z-index:3;
  display:flex;
}
.overlay_close{
  width:40%;
  background:rgb(0,0,0,0.45);
}
.overlay_content{
  width:60%;
  background: white;
  padding:10px 20px;
}
.overlay_content_close{
  text-decoration:underline;
}
.overlay_content_close:hover{
  cursor: pointer;
}
.overlay_content_actions{
  display:flex;
  place-items:center;
  width:100%;
  margin:25px 0px;
}
.overlay_content_close_actionBtn{
  border-radius: 5px;
  padding:5px 10px;
  margin-right:15px;

}
.overlay_content_head{
  margin-bottom:15px;
}
</style>
  
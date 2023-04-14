import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      emails:[
        {
            header:'Your 7-figure plan goes bye-bye at midnight',
            content:'Hi there, mail in relation to Your 7-figure plan goes bye-bye at midnight ...',
            archived:false,
            read:false,
            id:'0'
        },
        {
            header:'[WEEKEND ONLY] Get this NOW before',
            content:'[WEEKEND ONLY] remember your options are now expandable ...',
            archived:true,
            read:false,
            id:'1'
        },
        {
            header:'Uh-oh, your prescription is expiring',
            content:'Opps renew them now ...',
            archived:false,
            read:true,
            id:'2'
        },
      ]
    }
  },
  mutations: {
    setToRead (state,selectors) {
      state.emails = state.emails.map((e)=>{
        if(selectors.includes(e.id)) e.read =true
        return e
      })
    },
    setArchived (state,selectors) {
        state.emails = state.emails.map((e)=>{
          if(selectors.includes(e.id)) e.archived =true
          return e
        })
      }
  },
  actions: {
    setToRead (context,paylaod) {
      context.commit('setToRead',paylaod)
    },
    setArchived (context,paylaod) {
        context.commit('setArchived',paylaod)
    }
  }
})

export default store
export const state = () => ({
    notificationQue: []
})
  
export const mutations = {
    NOTIFY(state, obj) {
        state.notificationQue.push(obj)
        setTimeout(()=>{
            state.notificationQue.shift();
        }, 5000);
    },
    HIDE_NOTIFY(state, i) {
        state.notificationQue.splice(i,1);
    },
}

export const actions = {
    notifyErrors({commit}, text){
        let newNotificationObj = {
            title: "Error",
            text: text,
            class: "error"
        }
        commit('NOTIFY', newNotificationObj);
    },
    notifySuccess({commit}, text){
        let newNotificationObj = {
            title: "Success",
            text: text,
            class: "success"
        }
        commit('NOTIFY', newNotificationObj)
    }
}
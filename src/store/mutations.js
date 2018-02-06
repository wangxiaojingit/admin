import * as types from "./mutationTypes"
export const mutations={
    [types.USERMESSAGE](state,obj){
     return  state.userMessage=obj
    }
}
import create from 'zustand'
import {persist} from 'zustand/middleware'
const userFav = create(persist(
  set => ({
  saved: [],
  liked: [],
  addSavedlink: (link) => set(state =>
    {
      state.saved.unshift({ image:link });
      return state;
    } 
    ),
  addLikedlink: (link) => set(state =>
    {
      state.liked.unshift({ image:link});
      return state;
    } 
    ),
  removeSavedlink: (link) => set(state => {
    let  i = state.saved.indexOf({image:link})
    state.saved.splice(i,1);
    return state;
  }),
  removeLikedlink: (link) => set(state => {
    let  i = state.liked.indexOf({image:link})
    state.liked.splice(i,1);
    return state;
  }),
}), {
  name:"userFav",
  storage: window.localStorage,
}), "userFav")
export default userFav

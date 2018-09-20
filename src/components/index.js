// import Vue from 'vue'
import VAvatar from './VAvatar'
// let Components = {
//     VAvatar
// }
// Object.keys(Components).forEach(name => {
//     Vue.component(name, Components[name])
// });

// export default Components


const MyPlugin = {
    install(Vue, options) {
        Vue.component(VAvatar.name, VAvatar)
    }
};

export default MyPlugin;
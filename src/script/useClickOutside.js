/**
 *
 * @param {*} el_target_ref The Root element for which clicking outside will trigger callback_fn
 * @param {*} callback_fn The function to call when user clicks outside of
 * @returns
 */

import {onBeforeMount, onMounted} from "vue";

export function useClickOutside (el_target_ref,callback_fn){
    if(!el_target_ref) return;

    let listener = (e) =>{
        if(e.target == el_target_ref.value || e.composedPath().includes(el_target_ref.value)){
            //We clicked iside the region
            return
        }
        if(typeof  callback_fn == 'function'){
            callback_fn();
        }
    }

    onMounted(()=>{window.addEventListener('click',listener)})

    onBeforeMount(()=>{window.removeEventListener('click',listener)})

    return{
        listener
    }
}
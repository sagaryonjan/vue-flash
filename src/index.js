import Flash      from './components/VueFlash.vue';
import FlashFloat from './components/FlashFloat.vue';
import Notify     from './classes/Notify';

const VueFlash = {

    install(Vue, options) {

        if (this.installed) {
            return
        }

        this.installed = true;

        Vue.component('flash', Flash);
        Vue.component('flash-float', FlashFloat);

        Vue.prototype.$flash = new Notify(options);

    }

};

export default VueFlash;
import Flash      from './components/flash/VueFlash.vue';
import FlashFloat from './components/flash/FlashFloat.vue';
import defaults   from './defaults';
import { flash }  from './util/index';
import { additionalAttr } from './methods';

const VueFlash = {

    install(Vue, options) {

        if (this.installed) {
            return
        }

        this.installed = true;

        Vue.component('flash', Flash);
        Vue.component('flash-float', FlashFloat);

        let methods = additionalAttr(options);

        Vue.prototype.$flash = {
            info    : methods.info,
            danger  : methods.danger,
            success : methods.success,
            warning : methods.warning,
            notify(type, message, group = defaults.notify_group ) {
                flash({
                    notify :'notify',
                    type,
                    message,
                    group,
                });
            },
            push(type, message, group = defaults.notify_group) {

                flash({
                    notify :'push',
                    type,
                    message,
                    group,
                });

            }
        };
    }
};

export default VueFlash;
import VueFlash     from './VueFlash';
import CustomNotify from './CustomNotify';

import {isNotNull, isObj} from '../util/index';
import { updateAdditionalOption } from '../util/helper';

/**
 * You can define method here to access in public
 * Notify Class
 */
export default class Notify {

    constructor(options) {

        this.type      = 'success';
        this.vue_flash = new VueFlash();
        let data       = updateAdditionalOption(options);

        for (const [type, color] of Object.entries( data.message_type )) {

            this[type] = (param = null) =>  this.notify(type, param)

        }

        for (const [method, data] of Object.entries(data.message)) {

            this[method] = (param = null) => {
                let custom_notify = new CustomNotify(this);
                custom_notify.get(method, data, param);
            };

        }

    }

    notify(type, obj = null) {

        this.type = type;

        if(isNotNull(obj)) {

            this.vue_flash.set(obj, this.type);

        } else  {

            return this;

        }


    }

    push(type, obj = null) {

        this.type = type;

        if(isObj(obj)) {
            obj.notify_type = 'push';
        }

        if(isNotNull(obj)) {

            this.vue_flash.set(obj, this.type);

        } else  {

            return this;

        }

    }

}
import VueFlash from './VueFlash';
import defaults from '../defaults';
import {hasProp, isStr, isAry, getMessage, isObj} from '../util/index';

/**
 * Get Custom Default Notify message
 */

export default class CustomNotify {

    constructor(notify) {

        this.notify    = notify;
        this.vue_flash = new VueFlash();

        this.group       = defaults.notify_group;
        this.message     = '';
        this.notify_type = 'flash';

    }

    get(method, data, param) {

        if(hasProp(data, 'type')) {

            if(isStr(data.type)) {

                if(this.notify.type == data.type) {

                    this.updateNotifyMsg(data , param);
                } else {
                    throw new Error(method+ ": method is not available in "+this.notify.type+ " type. Its type is : " + data.type );
                }

            }
            else if(isAry(data.type)) {

                if(data.type.includes(this.notify.type)) {

                    this.updateNotifyMsg(data, param);
                } else {
                    throw new Error(method+ ": method is not available in "+this.notify.type+ " type. Its type is :" + data.type.join()  );
                }

            }
            else {
                throw new Error("Make Sure Your Pre define message type must be String or Array.");
            }

        } else {
            throw new Error("Must include type for your pre define message.Type must be (String or Array).");
        }

    };

    updateNotifyMsg(data, param) {

        this.message = getMessage(data.message, 'Data');

        if(isStr(param)) {

            if(['push', 'flash'].includes(param)) {

                this.notify_type = param;

            }
            else {

                this.message = getMessage(data.message, param);

            }

        }
        if(isObj(param)) {

            if(hasProp(param, 'title')) {

                this.message = getMessage(data.message, param.title);

            }

            if(hasProp(param, 'group')) {
                this.group = param.group
            }

        }

        this.vue_flash.set(this, this.notify.type);

    };

}
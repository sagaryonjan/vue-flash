import VueFlash from './VueFlash';
import defaults from '../defaults';
import MethodNotAvailableError from '../errors/MethodNotAvailableError';
import StringOrArray from '../errors/StringOrArray';
import {MESSAGE_TYPE_STRING_OR_ARRAY, MESSAGE_TYPE_INCLUDE} from '../defaults/errors';

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

        try {

            if(hasProp(data, 'type')) {

                if(isStr(data.type)) {

                    if(this.notify.type == data.type) {

                        this.updateNotifyMsg(data , param);

                    } else {
                        throw new MethodNotAvailableError(method, this.notify.type, data.type);
                    }

                }
                else if(isAry(data.type)) {

                    if(data.type.includes(this.notify.type)) {

                        this.updateNotifyMsg(data, param);
                    } else {
                        throw new MethodNotAvailableError(method, this.notify.type, data.type.join());
                    }

                }
                else {
                    throw new StringOrArray('MESSAGE_TYPE_STRING_OR_ARRAY_ERROR', MESSAGE_TYPE_STRING_OR_ARRAY)
                }

            } else {
                throw new StringOrArray('INCLUDE_MESSAGE_TYPE_ERROR', MESSAGE_TYPE_INCLUDE)
            }

        } catch (e) {
            console.log(e.name + ': ' + e.message);
        }

    };

    updateNotifyMsg(data, param) {

        this.message = getMessage(data.message, defaults.title);

        if(isStr(param)) {

            if(defaults.notify_response.includes(param)) {

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
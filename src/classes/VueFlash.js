import { flash, isObj,hasProp, isStr }  from '../util/index';
import defaults   from '../defaults';

export default class VueFlash {

    constructor() {
        this.type        = 'success';
        this.group       = defaults.notify_group;
        this.message     = '';
        this.notify_type = 'flash';
    }

    /**
     * Set Notification Data.
     * @param data
     * @param type
     */
     set(data, type) {

        this.updateNotifyIfObj(data);
        this.updateNotifyIfStr(data);

        let { notify_type, group, message } = this;

        flash({notify_type, type, message, group});

        return this.get();

    }

    /**
     * Get Notification.
     */
     get() {

        let { type, group, message, notify_type } = this;

        return {
            type,
            group,
            message,
            notify_type
        }

    }

    /**
     * Update Notify If the data is object
     * @param data object
     */
    updateNotifyIfObj(data){

        if( isObj( data ) ) {

            if(hasProp(data, 'notify_type')) {
                this.notify_type = data.notify_type
            }

            if(hasProp(data, 'group')) {
                this.group = data.group
            }

            if(hasProp(data, 'message')) {
                this.message = data.message
            }

        }

    };

    /**
     * Update Notify If the data is string
     * @param data string
     */
    updateNotifyIfStr(data) {

        if( isStr(data) ) {

            if (['flash', 'push'].includes(data)) {
                this.notify_type = data;
            } else {
                this.message = data;
            }
        }
    }

}

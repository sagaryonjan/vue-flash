import FlashEvent from '../events/FlashEvent';
import defaults from  '../defaults';
import Vue from 'vue';


/**
 * Check if the object has property
 * @param object
 * @param prop
 * @returns {boolean}
 */
export const hasProp = (object, prop) => {

    if(object.hasOwnProperty(prop)) {
        return true;
    } else {
        return false;
    }

};


/**
 * Check if the val is null
 * @param val
 * @returns {boolean}
 */
export const isNull = (val) => {

    if(val == null) {
        return true;
    } else {
        return false;
    }

};

/**
 * Check if the val is not null
 * @param val
 * @returns {boolean}
 */
export const isNotNull = (val) => {

    if(val != null) {
        return true;
    } else {
        return false;
    }

};

export const isObj = (object) => {

    if(object !== null && typeof object === 'object') {
        return true;
    } else {
        return false;
    }

};

export const isStr = (string) => {

    if(string !== null && typeof string === 'string') {
        return true;
    } else {
        return false;
    }

};

export const isAry = (ary) => {

    if(Array.isArray(ary))
        return true;
    else
        return false;
};

/**
 * Get Value inside curly brackets
 * @param value
 * @returns {string}
 */
export const getValInsideCurl =  (value) => {

    let message_replace = value.match(/{([^}]+)}/);

    if(message_replace) {
        return message_replace[1];
    } else {
        return 'no-string';
    }
};

/**
 * Get Message replacing the title..
 * @param message
 * @param title
 */
export const getMessage = (message, title) => {

    let msg = message;

    let value_replace = getValInsideCurl(msg);

    if(value_replace != 'no-string') {
        msg = msg.replace('{'+value_replace+'}', title);
    }

    return msg;

};


export const flash = (notify) => {

    if(notify.notify_type == 'push') {

        if(!updatedArray(defaults.notifications, notify) ) {
            defaults.notifications.push(notify)
        }

    } else {

        let flash_event = new FlashEvent(notify.type);
        flash_event.call(notify.message, notify.group);

    }
};

export const updatedArray = (array, notify) => {

    let updated = false;
    array.map((ary, key) =>{
        if(ary.group == notify.group ) {
            Vue.set(array, key,notify );
            updated = true
        }
    });

   return updated;

};

export const groupExitInArray = (array, group) => {

    let index = 0;

    array.map((ary, key) =>{

        if(ary.group == group ) {
            index = key;
        }
    });

    return index;

};

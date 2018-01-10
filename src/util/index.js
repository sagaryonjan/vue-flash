import FlashEvent from '../events/FlashEvent';
import defaults from  '../defaults';
import Vue from 'vue';

export const addMethodToObj = (object, methods, bootstrap_type) => {

    for (var name in methods) {
        object[name] =  (data) => setNotifyMessage(data, bootstrap_type, methods[name]);
    }

};

export const hasProp = (object, prop) => {

    if(object.hasOwnProperty(prop)) {
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

export const flash = (notify) => {

    if(notify.notify == 'push') {

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

export const updateProps = (options) => {

    if(hasProp(options, 'props_default')) {

        if(hasProp(options.prop_default, 'duration')) {
            defaults.props_default.duration = options.props_default.duration;
        }
        if(hasProp(options.prop_default, 'classes')) {
            defaults.props_default.classes = options.props_default.classes;
        }
        if(hasProp(options.prop_default, 'animation')) {
            defaults.props_default.animation = options.props_default.animation;
        }

    }
};

export const checkDataForNotify = (data, message_type) => {
    let notify_types = ['flash', 'push'];
    let title = 'Data';
    let type = 'flash';
    let group = defaults.notify_group;
    let message;

    if( isObj( data ) ) {

        if(hasProp(data, 'type')) {
             type = data.type
        }

        if(hasProp(data, 'title')) {
             title = data.title
        }

        if(hasProp(data, 'group')) {
             group = data.group
        }

        if(hasProp(data, 'message')) {
             message = data.message
        }

    }

    if( isStr(data) ) {

        if (notify_types.includes(data)) {
             type = data;
        } else {
             title = data;
        }
    }

    if(!message) {
        let message_replace = message_type.match(/{([^}]+)}/);
        if(message_replace) {
            message = message_type.replace('{'+message_replace[1]+'}', title);
        } else {
            message = message_type;
        }
    }

    return {
        type,
        group,
        message
    }
};

export const setNotifyMessage = (data, bootstrap_type, message_type) => {

    let flash_data = checkDataForNotify(data, message_type);

    flash({
        notify  : flash_data.type,
        type    : bootstrap_type ,
        message : flash_data.message,
        group   : flash_data.group,
    });

};
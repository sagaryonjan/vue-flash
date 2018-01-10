import events   from './index';

export default class FlashEvent {

    constructor(type) {
        this.type = type
    }

    call(message, group) {
        events.$emit('notifyMessage', {
            type: this.type,
            message:message,
            group: group
        });
    }
}
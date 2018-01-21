import events   from '../events';
import defaults from '../defaults';
import {updatedArray, groupExitInArray, isStr} from '../util/index';

export default {
    data() {
        return {
            notifications: defaults.notifications,
        }
    },
    props: {
        duration: {
            type: Number,
            default: defaults.props_default.duration
        },
        classes: {
            type: String,
            default: defaults.props_default.classes
        },
        animation: {
            type: String,
            default: defaults.props_default.animation
        },
        group: {
            type: String,
            default: defaults.notify_group
        },
        title: {
            type: [String, Boolean],
            default: defaults.props_default.title
        },
    },
    filters: {
        capitalize: function (value) {
            if (!value) return '';
            value = value.toString();
            return value.charAt(0).toUpperCase() + value.slice(1)
        }
    },
    created() {

        this.checkTimeOut();

        events.$on('notifyMessage', this.eventNotifyMessage);
    },
    methods: {
        checkTimeOut() {

            if(this.notifications.length > 0) {

                if (this.duration >= 0) {

                   let timer = setTimeout(() => {

                       this.remove(groupExitInArray(this.notifications, this.group));

                       clearTimeout(timer)

                    }, this.duration);

                }
            }
        },
        eventNotifyMessage(data) {

            if(!updatedArray(this.notifications, data)) {
                this.notifications.push(data);
            }

            this.checkTimeOut();

        },
        remove(index) {
            this.notifications.splice(index, 1);
        }
    }

}
import events   from '../../events';
import defaults from 'defaults';
import {updatedArray, groupExitInArray} from '../../util/index';

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
        }
    },
    watch: {
        show(val) {
            if(val == true) {
                 this.checkTimeOut();
            }
        }
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
        this.eventNotifyMessage();
    },
    methods: {
        checkTimeOut() {
            setTimeout(() => this.remove(groupExitInArray(this.notifications, this.group)), this.duration);
        },
        eventNotifyMessage() {
            events.$on('notifyMessage', (data) => {
                if(!updatedArray(this.notifications, data)) {
                    this.notifications.push(data);
                }
            });
        },
        remove(index) {
            this.notifications.splice(index, 1);
        }
    }

}
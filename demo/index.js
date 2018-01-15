import Vue from 'vue';
import VueFlash from '../src/index';

Vue.use(VueFlash, {
    predefine_msg: {
        warner : {
            message: 'You Warner {data}',
            type: 'warning'
        }
    },
    type: {
        describe : 'red'
    },
    props_default : {
        duration: 10000,
        classes: 'new-class',
        animation: 'slide',
    }

});

import defaults from '../src/defaults/index';

new Vue({
    el: '#app',
    data: {
        title: 'Hello World',
        area: 'top-right',
        select_area: 'top-right',
        animation: 'fade',
        select_animation: 'fade',
        input_duration: 4000,
        duration: 4000,
        component: 'float-notification',
        notification_type: 'success',
        message: 'User Get Successfully'
    },
    methods: {
        addNotify() {
            this.area      = this.select_area;
            this.animation = this.select_animation;
            this.duration  = this.input_duration;

            //Feature 1
            /*this.$flash.notify('success', {
                group: this.component,
                message: this.message,
                notify_type: 'push'
            });*/

            //Feature 2
            //this.$flash.notify('success', 'User Created Successfully');

            //Feature 3
            /*this.$flash.push('success', {
                group: this.component,
                message: this.message,
            });*/

            //Feature 4
            //this.$flash.push('success', 'Hello Success Message');

           // console.log(defaults)

            /*this.$flash.success({
                group: this.component,
                message: this.message,
                notify_type: 'push'
            });*/

            /*this.$flash.success('User Created Successfully');*/

            /*this.$flash.success().created();*/

            /*this.$flash.success().created('Sagar');*/
            /*this.$flash.success().created('push');*/

            /*this.$flash.success().created({
                group: this.component,
                title: 'Manager',
                notify_type: 'push'
            });*/


            /*Vue.use(VueFlash, {
                predefine_msg: {
                    warner : {
                        message: 'You Warner {data}',
                        type: 'warning'
                    }
                },
                type: {
                    describe : 'red'
                },
                props_default : {
                    duration: 10000,
                    classes: 'new-class',
                    animation: 'slide',
                }

            });*/


            /*
             * predefine_msg: {
                    warner : {
                        message: 'You Warner {data}',
                        type: 'warning'
                    }
                },
             type: {
                    describe : 'red'
                },
             */

            //this.$flash.warning();
            //this.$flash.notify(this.notification_type, this.message ,this.component);
        }
    }
});
import Vue from 'vue';
import VueFlash from 'vue2-flash';

Vue.use(VueFlash, {
    predefine_msg: {
        warner : {
            message: 'You Warner {data}',
            type: ['warning', 'describe']
        },
        tackel : {
            message: 'You Warner {data}',
            type: ['warning']
        }
    },
    type: {
        describe : {
            flash_float : {
                color: '#ffffff',
                background: 'yellow'
            },

            vue_flash : {
                borderColor: '#bce8f1',
                color: 'green',
                backgroundColor: 'yellow'
            }

        }
    },
    props_default : {
        duration: 10000,
        classes: 'new-class',
        animation: 'slide',
    }

});

new Vue({
    el: '#app',
    data: {
        title: 'Hello World',
        area: 'top-right',
        select_area: 'top-right',
        animation: 'fade',
        select_animation: 'fade',
        input_duration: 50000,
        duration: 50000,
        component: 'float-notification',
        notification_type: 'success',
        message: 'User Get Successfully'
    },
    methods: {
        addNotify() {
            this.area      = this.select_area;
            this.animation = this.select_animation;
            this.duration  = this.input_duration;

            this.$flash.describe().warner({
                title: 'Manager'
            });

            /*this.$flash.success().created({
                title: 'Manager',
                notify_type: 'trash'
            });*/
            //Feature 1
            /*this.$flash.notify('success', {
                group: this.component,
                message: this.message
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
import Vue from 'vue';
import VueFlash from '../src/index';

Vue.use(VueFlash,{
    success: {
        'originated' : "Are you crazy {data}"
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

            this.$flash.notify(this.notification_type, this.message ,this.component);
        }
    }
});
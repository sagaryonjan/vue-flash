import Vue from 'vue';
import VueFlash from 'vue2-flash';

Vue.use(VueFlash,{
    success: {
        'originated' : "Are you crazy {data}"
    }
});

new Vue({
    el: '#app',
    data: {
        title: 'Hello World'
    },
    methods: {
        addNotify() {

            this.$flash.success.created({
                group: 'notify',
                title: 'User'
            });

        }
    }
})
<template>
    <transition :name="animation">
        <div v-if="group == notify.group"
             v-for="(notify, index) in notifications"
             :class="classes +' sy-vue-notify--'+notify.type + ' sy-vue-notify--'+area"
             :style="upDateStyle(notify.type)"
             class="sy-vue-notify--alert">
            <a href="#"
               class="close"
               title="close"
               @click="remove(index)"
            >×</a>
            <strong v-if="title == true">{{ notify.type | capitalize }} !!</strong>
            <strong v-if="typeof title === 'string'">{{ title | capitalize }}</strong>
            {{ notify.message }}
        </div>
    </transition>
</template>

<script>

    import defaults from '../defaults';
    import flashMixin  from  './flashMixin';

    export default {
        name: 'FlashFloat',
        mixins: [flashMixin],
        props: {
            area: {
                type: String,
                default: defaults.props_default.area
            }
        },
        methods: {
            upDateStyle(type) {
                for (const [bootstrap_type, styles] of Object.entries(defaults.type)) {

                    if (type == bootstrap_type) {

                        return styles.flash_float;

                    }

                }
            }
        }
    }

</script>

<style scoped>

    .sy-vue-notify--top-right {
        position: fixed;
        top: 10px;
        background: #eee;
        box-shadow: 0 0 6px 0 #999;
        right: 20px;
        border-radius: 3px;
        width: 28rem;
        padding: 1.6rem;
        z-index: 99999;
    }

    .sy-vue-notify--middle-right {
        position: fixed;
        top: 275px;
        box-shadow: 0 0 6px 0 #999;
        right: 20px;
        border-radius: 3px;
        width: 28rem;
        padding: 1.6rem;
        z-index: 99999;
    }

    .sy-vue-notify--down-right {
        position: fixed;
        top: 555px;
        box-shadow: 0 0 6px 0 #999;
        right: 20px;
        border-radius: 3px;
        width: 28rem;
        padding: 1.6rem;
        z-index: 99999;
    }

    /* Middle top*/
    .sy-vue-notify--top-middle {
        position: fixed;
        top: 10px;
        right: 525px;
        left: 525px;
        background: #eee;
        box-shadow: 0 0 6px 0 #999;
        border-radius: 3px;
        width: 28rem;
        padding: 1.6rem;
        z-index: 99999;
    }

    .sy-vue-notify--middle {
        position: fixed;
        top: 275px;
        right: 525px;
        left: 525px;
        box-shadow: 0 0 6px 0 #999;
        border-radius: 3px;
        width: 28rem;
        padding: 1.6rem;
        z-index: 99999;
    }

    .sy-vue-notify--down-middle {
        position: fixed;
        top: 555px;
        box-shadow: 0 0 6px 0 #999;
        right: 525px;
        left: 525px;
        border-radius: 3px;
        width: 28rem;
        padding: 1.6rem;
        z-index: 99999;
    }

    /*left*/
    .sy-vue-notify--top-left {
        position: fixed;
        top: 10px;
        background: #eee;
        box-shadow: 0 0 6px 0 #999;
        left: 10px;
        border-radius: 3px;
        width: 28rem;
        padding: 1.6rem;
        z-index: 99999;
    }

    .sy-vue-notify--middle-left {
        position: fixed;
        top: 275px;
        box-shadow: 0 0 6px 0 #999;
        left: 10px;
        border-radius: 3px;
        width: 28rem;
        padding: 1.6rem;
        z-index: 99999;
    }

    .sy-vue-notify--down-left {
        position: fixed;
        top: 555px;
        box-shadow: 0 0 6px 0 #999;
        left: 10px;
        border-radius: 3px;
        width: 28rem;
        padding: 1.6rem;
        z-index: 99999;
    }

   /* .sy-vue-notify--success {
        background: #68cd86;
        color: #ffffff;
    }

    .sy-vue-notify--warning {
        background: #ffb648;
        color: #ffffff;
    }
    .sy-vue-notify--info {
        background: #5bc0de;
        color: #ffffff;
    }
    .sy-vue-notify--danger {
        background: #e54d42;
        color: #ffffff;
    }*/

    .fade-enter {
        opacity: 0;
    }

    .fade-enter-active {
        transition: opacity 1s;
    }

    .fade-leave {

    }

    .fade-leave-active {
        transition: opacity 1s;
        opacity: 0;
    }


    .slide-enter {
        opacity: 0;
    }

    .slide-enter-active {
       animation: slide-in 1s ease-out forwards;
        transition: opacity .5s;
    }

    .slide-leave {

    }

    .slide-leave-active {
       animation: slide-out 1s ease-out forwards;
       transition: opacity 1s;
       opacity: 0;
    }

    @keyframes slide-in {
         from {
             transform: translateX(20px);
         }
         to {
             transform: translateX(0);
         }

    }
    @keyframes slide-out {
        from {
            transform: translateX(0);
        }
        to {
            transform: translateX(20px);
        }

    }


    .slide-left-enter {
        opacity: 0;
    }

    .slide-left-enter-active {
        animation: slide-left-in 1s ease-out forwards;
        transition: opacity .5s;
    }

    .slide-left-leave {

    }

    .slide-left-leave-active {
        animation: slide-left-out 1s ease-out forwards;
        transition: opacity 1s;
        opacity: 0;
    }

    @keyframes slide-left-in {
        from {
            transform: translateY(20px);
        }
        to {
            transform: translateY(0);
        }

    }
    @keyframes slide-left-out {
        from {
            transform: translateY(0);
        }
        to {
            transform: translateY(20px);
        }

    }
</style>
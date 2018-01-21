<template>
    <transition :name="animation">
       <div
       v-if="group == notify.group"
       v-for="(notify, index) in notifications"
       :style="upDateStyle(notify.type)"
       class="sy-vue-notify--alert"
       :class="classes">
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
        name: 'Flash',
        mixins: [flashMixin],
        methods: {
            upDateStyle(type) {
                for (const [bootstrap_type, styles] of Object.entries(defaults.type)) {

                    if (type == bootstrap_type) {

                        return styles.vue_flash;

                    }

                }
            }
        }
    }

</script>

<style scoped>

   .sy-vue-notify--alert{
       padding: 15px;
       margin-bottom: 22px;
       border: 1px solid transparent;
       border-radius: 4px;

   }



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
</style>
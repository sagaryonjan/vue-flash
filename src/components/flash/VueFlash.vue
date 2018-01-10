<template>
    <transition :name="animation">
       <div
       v-if="group == notify.group"
       v-for="(notify, index) in notifications"
       class="sy-vue-notify--alert"
       :class="classes +' sy-vue-notify--'+notify.type">
           <a href="#"
              class="close"
              title="close"
              @click="remove(index)"
           >×</a>
           <strong>{{ notify.type | capitalize }} !</strong>{{ notify.message }}
       </div>
    </transition>
</template>

<script>
    import flashMixin  from  './flashMixin';

    export default {
        name: 'Flash',
        mixins: [flashMixin]
    }

</script>

<style scoped>

   .sy-vue-notify--alert{
       padding: 15px;
       margin-bottom: 22px;
       border: 1px solid transparent;
       border-radius: 4px;

   }

    .sy-vue-notify--success {
        background-color: #dff0d8;
        border-color: #d6e9c6;
        color: #3c763d;
    }

    .sy-vue-notify--warning {
        color: #8a6d3b;
        background-color: #fcf8e3;
        border-color: #faebcc;
    }

    .sy-vue-notify--info {
        color: #31708f;
        background-color: #d9edf7;
        border-color: #bce8f1;
    }

    .sy-vue-notify--danger {
        color: #a94442;
        background-color: #f2dede;
        border-color: #ebccd1;
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
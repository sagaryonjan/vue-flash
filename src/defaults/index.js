export default {
    notifications:[],
    notify_group: 'sy-vue-notify',
    notify_type: 'flash',
    message_type: {
        info: 'info',
        danger: 'danger',
        success: 'success',
        warning: 'warning'
    },
    props_default : {
        duration: 4000,
        classes: 'sy-vue-notify',
        animation: '',
        area: 'top-right',
        float: ''
    },
}
export default {
    title: 'Data',
    notifications:[],
    notify_group: 'sy-vue-notify',
    notify_type: 'flash',
    notify_response: ['push', 'flash'],
    message_type: {
        info:    'info',
        danger:  'danger',
        success: 'success',
        warning: 'warning'
    },
    props_default : {
        duration: 4000,
        classes: 'sy-vue-notify',
        animation: '',
        area: 'top-right',
        float: '',
        title: true
    },
    type : {
        info : {
            flash_float: {
                color: '#ffffff',
                background: '#5bc0de'
            },
            vue_flash : {
                backgroundColor : '#d9edf7',
                borderColor     : '#bce8f1',
                color           : '#31708f',
            }
        },
        danger : {
            flash_float: {
                color: '#ffffff',
                background: '#e54d42'
            },
            vue_flash : {
                backgroundColor : '#f2dede',
                borderColor     : '#ebccd1',
                color           : '#a94442',
            }
        },
        warning : {
            flash_float: {
                color: '#ffffff',
                background: '#ffb648'
            },
            vue_flash : {
                backgroundColor : '#fcf8e3',
                borderColor     : '#faebcc',
                color           : '#8a6d3b',
            }
        },
        success : {
            flash_float: {
                color: '#ffffff',
                background: '#68cd86'
            },
            vue_flash : {
                backgroundColor : '#dff0d8',
                borderColor     : '#d6e9c6',
                color           : '#3c763d',
            }
        },
    }
}

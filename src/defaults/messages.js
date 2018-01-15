export default  {
    created : {
        message : '{data} Created Successfully',
        type: [ 'success', 'warning' ]
    },
    updated: {
        message : '{data} Updated Successfully',
        type: 'success'
    },
    deleted: {
        message : '{data} Deleted Successfully',
        type: 'success'
    },
    saved: {
        message : '{data} Saved Successfully',
        type: 'success'
    },
    create_failed : {
        message : 'Sorry, {data} is not created!!',
            type: [ 'danger', 'warning' ]
    },
    update_failed: {
        message : 'Sorry, {data} is not updated!!',
        type    : 'danger'
    },
    delete_failed: {
        message : 'Sorry, {data} couldn\'t be deleted!!.',
        type    : 'danger'
    },
    saved_failed: {
        message : 'Sorry, {data} is not saved!!',
        type    : 'danger'
    },
    access_denied: {
        message : 'Access Denied!, TryAgain.',
        type    : 'warning'
    },
    invalid_request: {
        message : 'Sorry, Your request was invalid!!.',
        type    : 'warning'
    }
};


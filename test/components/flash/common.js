import expect from 'expect';

/**
 *
 * Check Notification default props
 * @param wrapper
 */
export const checkNotificationProps = (wrapper) => {
    expect(wrapper.vm.$props.duration).toEqual(4000);
    expect(wrapper.vm.$props.classes).toEqual('sy-vue-notify');
    expect(wrapper.vm.$props.animation).toEqual('');
    expect(wrapper.vm.$props.group).toEqual('sy-vue-notify');
};

/**
 * Check if notification is empty array.
 * @param wrapper
 */
export const checkNotificationIsEmptyArray = (wrapper) => {
    expect(wrapper.vm.notifications).toEqual([]);
};

/**
 * Remove Notification
 */
export const checkIfNotifyIsRemoveOnClick = (wrapper) => {

    wrapper.setData({
        notifications : [{
            type: 'success',
            group: 'sy-vue-notify',
            message: 'User Created Successfully'
        }]
    });

    expect(wrapper.vm.notifications.length).toEqual(1);

    wrapper.find('.close').trigger('click');

    expect(wrapper.vm.notifications).toEqual([]);

};

/**
 * Remove Notification On Duration
 * @param wrapper
 * @param duration
 */
export const removeNotificationOnDuration = (wrapper, duration) => {

    let sinon = require("sinon");

    let clock = sinon.useFakeTimers();

    wrapper.vm.eventNotifyMessage({
        type:    'success',
        message: 'Success Message',
        group:   'sy-vue-notify'
    });

    expect(wrapper.vm.notifications.length).toEqual(1);

    clock.tick(duration);

    expect(wrapper.vm.notifications.length).toEqual(0);

    clock.restore();

};
/**
 * Check if message is correct after notify
 * @param wrapper
 */
export const checkDataAfterNotify = (wrapper, done) => {

    wrapper.vm.eventNotifyMessage({
        type:    'success',
        message: 'Title',
        group:   'sy-vue-notify'
    });

    wrapper.vm.$nextTick(() => {
        const title = wrapper.find('.notify-message').text();
        expect(title).toEqual('Title');
        if(done != null) {
            done()
        }
    });

};

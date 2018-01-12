import  { mount } from 'vue-test-utils';
import VueFlash from '../../../src/components/flash/VueFlash.vue';
import FlashFloat from '../../../src/components/flash/FlashFloat.vue';
import expect from 'expect';
import {
    checkNotificationProps,
    checkNotificationIsEmptyArray,
    checkIfNotifyIsRemoveOnClick,
    removeNotificationOnDuration,
    checkDataAfterNotify
} from './common';

let vueFlashWrapper   = mount(VueFlash);
let flashFloatWrapper = mount(FlashFloat);

/**
 * Check Default Props for both
 * flash-float and vue flash component.
 */
export const checkDefaultProps = () => {
    checkNotificationProps(vueFlashWrapper);
    checkNotificationProps(flashFloatWrapper);
    expect(flashFloatWrapper.vm.$props.area).toEqual('top-right');
};

/**
 * Check If notification is empty array
 */
export const checkDefaultData = () => {
    checkNotificationIsEmptyArray(vueFlashWrapper);
    checkNotificationIsEmptyArray(flashFloatWrapper);
};

/**
 * Remove Notification on Click
 */
export const removeNotifyOnClick = () => {
    checkIfNotifyIsRemoveOnClick(vueFlashWrapper);
    checkIfNotifyIsRemoveOnClick(flashFloatWrapper);
};

/**
 * Remove Notification After Certain Duration.
 */
export const removeNotificationAfterCertainDuration = () => {

    let duration = 4000;
    removeNotificationOnDuration(mount(VueFlash, { duration }), duration);
    removeNotificationOnDuration(mount(FlashFloat, { duration }), duration);
};

/**
 * Add Notification With Correct Data
 */
export const  addNotificationWithCorrectData = (done) => {

    checkDataAfterNotify(vueFlashWrapper, null);
    checkDataAfterNotify(flashFloatWrapper, done);

};






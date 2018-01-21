import {
    checkDefaultProps,
    removeNotifyOnClick,
    checkDefaultData,
    removeNotificationAfterCertainDuration,
    addNotificationWithCorrectData
} from './index';

/**
 * Vue Flash It Test both vue-flash and flash-float component
 */
describe('VueFlash', () => {

    describe('set default value', () => {

        it('check the default props are correct', () => checkDefaultProps() );

        it('check notifications list is empty array', () => checkDefaultData() );
    });

    describe('check methods', () => {
        it('remove notification on click in remove', () => removeNotifyOnClick());

        it('remove notification after certain duration', () => removeNotificationAfterCertainDuration());

        //it('adds notification item with correct data', (done) => addNotificationWithCorrectData(done));

    });

});
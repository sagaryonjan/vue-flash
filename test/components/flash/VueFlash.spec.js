import { shallow } from '@vue/test-utils';
import VueFlash from '../../../src/components/flash/VueFlash.vue';

describe('VueFlash.spec.js', () => {
    let cmp;
    beforeEach(() => {
        cmp = shallow(VueFlash);
    });

    it('is the VueFlash component', () => {
        expect(cmp.isVueInstance()).toBe(true);
    });
});
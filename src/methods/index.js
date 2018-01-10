import * as info    from './info';
import * as danger  from './danger';
import * as success from './success';
import * as warning from './warning';

import { addMethodToObj, hasProp, updateProps, isObj } from '../util/index';

/**
 * Manage Additional Attr
 *
 * @param options
 * @returns {{success, info, danger, warning}}
 */
export const additionalAttr = (options) => {

    if(isObj(options)) {

        if(hasProp(options, 'success')) {
            addMethodToObj(success, options.success, 'success');
        }

        if(hasProp(options, 'warning')) {
            addMethodToObj(warning, options.warning, 'warning');
        }

        if(hasProp(options, 'info')) {
            addMethodToObj(info, options.info, 'info');
        }

        if(hasProp(options, 'danger')) {
            addMethodToObj(danger, options.danger, 'danger');
        }

        updateProps(options);

    }
    return {
        success,
        info,
        danger,
        warning,
    }
};
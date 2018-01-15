import defaults from '../defaults/index';
import default_messages from '../defaults/messages';
import { isNotNull, hasProp, isObj } from '../util/index';

/**
 * Update Additional Options
 * @param options: object
 * @returns {{message: string, message_type: string}}
 */
export const updateAdditionalOption = (options) => {

    let message      = '';
    let message_type = '';

    if(isNotNull(options) && isObj(options)) {

        if(hasProp(options, 'predefine_msg')) {
            message = Object.assign(default_messages, options.predefine_msg)
        }

        if(hasProp(options, 'type')) {
            message_type = Object.assign(defaults.type, options.type)
        }

        if(hasProp(options, 'props_default')) {

            if(hasProp(options.props_default, 'duration')) {
                defaults.props_default.duration = options.props_default.duration;
            }
            if(hasProp(options.props_default, 'classes')) {
                defaults.props_default.classes = options.props_default.classes;
            }
            if(hasProp(options.props_default, 'animation')) {
                defaults.props_default.animation = options.props_default.animation;
            }

        }

    }

    return { message, message_type }
};

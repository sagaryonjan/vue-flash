import {
    ACCESS_DENIED,
    INVALID_REQUEST,
} from '../defaults/messages';

import defaults from '../defaults';
import { setNotifyMessage } from '../util/index';

export const accessDenied   = (data = defaults.notify_type) =>{
    setNotifyMessage(data, defaults.message_type.warning, ACCESS_DENIED);
};

export const invalidRequest = (data = defaults.notify_type) => {
    setNotifyMessage(data, defaults.message_type.warning, INVALID_REQUEST);
};
import {
    WELCOME
} from '../defaults/messages';

import defaults from '../defaults';

import { setNotifyMessage } from '../util/index';

export const welcome = (data = defaults.notify_type) => setNotifyMessage(data, defaults.message_type.info, WELCOME);
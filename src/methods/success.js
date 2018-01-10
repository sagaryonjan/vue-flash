import {
    CREATED,
    UPDATED,
    DELETED,
    SAVED
} from '../defaults/messages';

import defaults from 'defaults';

import { setNotifyMessage } from '../util/index';

export const created = (data = defaults.notify_type) => setNotifyMessage(data, defaults.message_type.success, CREATED);

export const saved   = (data = defaults.notify_type) => setNotifyMessage(data, defaults.message_type.success, SAVED);

export const updated = (data = defaults.notify_type) => setNotifyMessage(data, defaults.message_type.success, UPDATED);

export const deleted = (data = defaults.notify_type) => setNotifyMessage(data, defaults.message_type.success, DELETED);
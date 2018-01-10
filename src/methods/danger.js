import {
    SAVE_FAILED,
    UPDATE_FAILED,
    DELETE_FAILED,
    CREATED_FAILED
} from 'defaults/messages';

import defaults from 'defaults';

import { setNotifyMessage } from '../util/index';

export const createdFailed = (data = defaults.notify_type) => {
    setNotifyMessage(data, defaults.message_type.danger, CREATED_FAILED);
};

export const savedFailed   = (data = defaults.notify_type) => {
    setNotifyMessage(data, defaults.message_type.danger, SAVE_FAILED);
};

export const updatedFailed = (data = defaults.notify_type) => {
    setNotifyMessage(data, defaults.message_type.danger, UPDATE_FAILED);
};

export const deletedFailed = (data = defaults.notify_type) => {
    setNotifyMessage(data, defaults.message_type.danger, DELETE_FAILED);
};

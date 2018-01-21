import {METHOD_NOT_AVAILABLE} from '../defaults/errors';
/**
 * Get Custom Default Notify message
 */
export default class MethodNotAvailableError extends Error {

    constructor(method, notify_type, types, ...params) {

        super(...params);

        this.message = METHOD_NOT_AVAILABLE.replace('{method}', method)
            .replace('{notify_type}', notify_type).replace('{types}', types);

        this.name = 'MethodNotAvailableError';

        this.date = new Date();

    }
}
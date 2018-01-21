/**
 * Get Custom Default Notify message
 */
export default class StringOrArray extends Error {

    constructor(name, ...params) {

        super(...params);

        this.name = name;
        this.date = new Date();

    }
}
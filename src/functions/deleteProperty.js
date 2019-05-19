/**
 * Removes the provided property from `obj`.
 *
 * @since 0.1.0
 * @category Object
 * @param {Object} obj The object to modify.
 * @param {String} property The property to remove.
 * @returns {Object} Returns the modified object.
 * @throws {TypeError} If the first parameter is not an object.
 * @throws {TypeError} If the second parameter is not a string.
 * @throws {Error} If the provided property is not in the object.
 * @example
 *
 * deleteProperty({ a: 1, b: 2 }, 'a')
 * // => { b: 2 }
 */
export default function (obj, property) {
    const firstIsObject = obj instanceof Object && !(obj instanceof Array);

    if (firstIsObject && typeof property === 'string') {
        const objCopy = {
            ...obj
        };

        if ({}.hasOwnProperty.call(objCopy, property)) {
            delete objCopy[property];

            return objCopy;
        }

        throw new Error('Object does not have the provided property!');
    }

    if (!firstIsObject) {
        throw new TypeError('The first parameter must be an Object!');
    } else {
        throw new TypeError('The second parameter must be a String!');
    }
}

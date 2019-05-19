/**
 * Removes one or more element(s) from `array` starting at `index`.
 *
 * @function
 * @module
 * @since 0.1.0
 * @param {Array} array The array to modify.
 * @param {Number} index The starting index to remove.
 * @param {Number} [count=1] The number of elements to remove.
 * @returns {Array} Returns the modified array.
 * @throws {TypeError} If the first parameter is not an array.
 * @throws {TypeError} If the second parameter is not an integer.
 * @throws {Error} If the provided index is not in the array.
 * @example
 *
 *     removeAtIndex([1, 2, 3], 1)
 *     // => [1, 3]
 * @example
 *
 *     removeAtIndex([1, 2, 3], 1, 2)
 *     // => [1]
 */
export default function (array, index, count = 1) {
    if (Array.isArray(array) && Number.isInteger(index)) {
        const arrayCopy = [...array];

        if (index >= 0 && index < arrayCopy.length) {
            arrayCopy.splice(index, count);
        } else if (index < 0) {
            throw new Error('Index cannot be less than zero!');
        } else {
            throw new Error('Index cannot be greater than or equal to the length of the array!');
        }

        return arrayCopy;
    }

    if (!Array.isArray(array)) {
        throw new TypeError('The first parameter must be an Array!');
    } else {
        throw new TypeError('The second parameter must be an Integer!');
    }
}

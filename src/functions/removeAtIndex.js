/**
 * Removes the provided index from `array`.
 *
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to modify.
 * @param {Number} index The index to remove.
 * @returns {Array} Returns the modified array.
 * @throws {TypeError} If the first parameter is not an array.
 * @throws {TypeError} If the second parameter is not an integer.
 * @throws {Error} If the provided index is not in the array.
 * @example
 *
 * removeIndex([1, 2, 3], 1)
 * // => [1, 3]
 */
export default function (array, index) {
    if (Array.isArray(array) && Number.isInteger(index)) {
        const arrayCopy = [...array];

        if (index >= 0 && index < arrayCopy.length) {
            arrayCopy.splice(index, 1);
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

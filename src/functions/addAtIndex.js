/**
 * Adds an item to `array` at `index`.
 *
 * @since 0.1.3
 * @category Array
 * @param {Array} array The array to modify.
 * @param {Number} index The index to add the new item at.
 * @param {*} item The item to add.
 * @returns {Array} Returns the modified array.
 * @throws {TypeError} If the first parameter is not an array.
 * @throws {TypeError} If the second parameter is not an integer.
 * @throws {Error} If the provided index is not in the array.
 * @example
 *
 * addIndex([1, 2, 3], 1, 5)
 * // => [1, 5, 2, 3]
 */
export default function (array, index, item) {
    if (Array.isArray(array) && Number.isInteger(index)) {
        const arrayCopy = [...array];

        if (index >= 0 && index <= arrayCopy.length) {
            arrayCopy.splice(index, 0, item);
        } else if (index < 0) {
            throw new Error('Index cannot be less than zero!');
        } else {
            throw new Error('Index cannot be greater than the length of the array!');
        }

        return arrayCopy;
    }

    if (!Array.isArray(array)) {
        throw new TypeError('The first parameter must be an Array!');
    } else {
        throw new TypeError('The second parameter must be an Integer!');
    }
}

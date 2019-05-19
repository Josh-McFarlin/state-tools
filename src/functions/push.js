/**
 * Adds one or more items to the end of `array`.
 *
 * @since 0.1.3
 * @category Array
 * @param {Array} array The array to modify.
 * @param {...*} items The item(s) to add.
 * @returns {Array} Returns the modified array.
 * @throws {TypeError} If the first parameter is not an array.
 * @example
 *
 * push([1, 2, 3], 5)
 * // => [1, 2, 3, 5]
 */
export default function (array, ...items) {
    if (Array.isArray(array)) {
        const arrayCopy = [...array];

        arrayCopy.push(...items);

        return arrayCopy;
    }

    throw new TypeError('The first parameter must be an Array!');
}

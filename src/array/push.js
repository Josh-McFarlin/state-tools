/**
 * Adds one or more item(s) to the end of `array`.
 *
 * @function
 * @module
 * @since 0.1.3
 * @param {Array} array The array to modify.
 * @param {...*} items The item(s) to add.
 * @returns {Array} Returns the modified array.
 * @throws {TypeError} If the first parameter is not an array.
 * @example
 *
 *     push([1, 2, 3], 5)
 *     // => [1, 2, 3, 5]
 * @example
 *
 *     push([1, 2, 3], 4, 5, 6)
 *     // => [1, 2, 3, 4, 5, 5]
 */
export default function (array, ...items) {
    if (Array.isArray(array)) {
        const arrayCopy = [...array];

        arrayCopy.push(...items);

        return arrayCopy;
    }

    throw new TypeError('The first parameter must be an Array!');
}

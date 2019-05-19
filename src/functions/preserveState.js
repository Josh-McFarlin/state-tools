/**
 * An optional wrapper to preserve the original state if a state-tools function fails.
 *
 * @since 0.1.3
 * @category Utils
 * @param {Function} func The state-tools function to run.
 * @param {...*} params The parameter to use for func.
 * @returns {*} Returns the result of the function or the original state if it fails.
 * @example
 *
 * var array = [1, 2, 3, 4, 5];
 *
 * preserveState(removeIndex, array, 1)
 * // => [1, 3, 4, 5]
 *
 * preserveState(removeIndex, array, 'willError')
 * // => [1, 2, 3, 4, 5]
 */
export default function (func, ...params) {
    const stateVal = params[0];

    try {
        return func(...params);
    } catch (error) {
        return stateVal;
    }
}

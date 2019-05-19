/**
 * Sets a property in `obj` using a simple or deep `path`.
 *
 * @function
 * @module
 * @since 0.1.3
 * @param {Object} obj The object to modify.
 * @param {String} path The name or path of the property to add.
 * @param {*} value The value of the property to add.
 * @returns {Object} Returns the modified object.
 * @throws {TypeError} If the first parameter is not an array.
 * @example
 *
 *     set({ a: 1 }, 'b', 2)
 *     // => { a: 1, b: 2 }
 * @example
 *
 *     set({}, 'a.b[2].c', 123)
 *     // => { a: { b: [ undefined, undefined, { c: 123 } ] }}
 */
export default function (obj, path, value) {
    const firstIsObject = obj instanceof Object && !(obj instanceof Array);

    if (firstIsObject && typeof path === 'string') {
        const objCopy = {
            ...obj
        };

        const pathFix = Array.isArray(path) ?
            path : path.toString().match(/[^.[\]]+/g) || [];

        let curObj = objCopy;

        pathFix.forEach((curPath, index) => {
            if (index === pathFix.length - 1) {
                curObj[curPath] = value;
            } else if ({}.hasOwnProperty.call(curObj, curPath)) {
                curObj = curObj[curPath];
            } else {
                const pathNum = Number.parseInt(pathFix[index + 1], 10);

                if (Number.isNaN(pathNum)) {
                    curObj[curPath] = {};
                    curObj = curObj[curPath];
                } else {
                    curObj[curPath] = new Array(pathNum);
                    curObj[curPath].push({});
                    curObj = curObj[curPath];
                }
            }
        });

        return objCopy;
    }

    if (!firstIsObject) {
        throw new TypeError('The first parameter must be an Object!');
    } else {
        throw new TypeError('The second parameter must be a String!');
    }
}

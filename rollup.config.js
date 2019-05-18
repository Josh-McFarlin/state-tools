import resolve from 'rollup-plugin-node-resolve';
import json from 'rollup-plugin-json';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';

import pkg from './package.json';


const banner = `/*!
 * ${pkg.name}
 * ${pkg.description}
 *
 * @version v${pkg.version}
 * @author ${pkg.author}
 * @homepage ${pkg.homepage}
 * @repository ${pkg.repository.url}
 * @license ${pkg.license}
 */`;

export default (commandLineArgs) => {
    const configs = [
        // UMD Development
        {
            input: 'src/index.js',
            output: {
                banner,
                name: pkg.name,
                file: 'dist/index.umd.js',
                format: 'umd'
            },
            plugins: [
                json({
                    exclude: 'node_modules/**',
                    preferConst: true,
                    indent: '    ',
                    compact: true,
                    namedExports: true
                }),
                resolve(),
                commonjs(),
                babel({
                    exclude: ['node_modules/**']
                })
            ]
        },

        // CommonJS (for Node) and ES module (for bundlers) build
        {
            input: 'src/index.js',
            external: [], // indicate which modules should be treated as external
            output: [
                {
                    banner,
                    file: 'dist/index.cjs.js',
                    format: 'cjs'
                },
                {
                    banner,
                    file: 'dist/index.esm.js',
                    format: 'es'
                }
            ],
            plugins: [
                json({
                    exclude: 'node_modules/**',
                    preferConst: true,
                    indent: '    ',
                    compact: true,
                    namedExports: true
                }),
                resolve(),
                babel({
                    exclude: ['node_modules/**']
                })
            ]
        }
    ];

    if (commandLineArgs.environment === 'BUILD:production') {
        // UMD Production
        configs.push({
            input: 'src/index.js',
            output: {
                banner,
                name: pkg.name,
                file: 'dist/index.umd.min.js',
                format: 'umd'
            },
            plugins: [
                json({
                    exclude: 'node_modules/**',
                    preferConst: true,
                    indent: '    ',
                    compact: true,
                    namedExports: true
                }),
                resolve(),
                commonjs(),
                babel({
                    exclude: ['node_modules/**']
                }),
                terser({
                    output: {
                        comments: /^!/
                    }
                })
            ]
        });

        // CommonJS
        configs.push({
            input: 'src/index.js',
            external: [], // indicate which modules should be treated as external
            output: [
                {
                    banner,
                    file: 'dist/index.cjs.min.js',
                    format: 'cjs'
                },
                {
                    banner,
                    file: 'dist/index.esm.min.js',
                    format: 'es'
                }
            ],
            plugins: [
                json({
                    exclude: 'node_modules/**',
                    preferConst: true,
                    indent: '    ',
                    compact: true,
                    namedExports: true
                }),
                resolve(),
                babel({
                    exclude: ['node_modules/**']
                }),
                terser({
                    output: {
                        comments: /^!/
                    }
                })
            ]
        });
    }

    return configs;
};

import commonjs from 'rollup-plugin-commonjs'
import nodeResolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import json from 'rollup-plugin-json'

export default {
    input: './src/main.js',
    output: {
        file: 'static/main.js',
        format: 'iife',
        name: 'JofFinderBundle',
        sourcemap: true
    },
    plugins: [
        nodeResolve({
            jsnext:true
        }),
        commonjs(),
        babel({
            exclude: ['node_modules/**', '**/*.json']
        }),
        json()
    ]
}
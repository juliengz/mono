#!/usr/bin/env node

const {spawn} = require('child_process')
const {resolve} = require('path')
const {readFileSync} = require('fs')

const minimist = require('minimist')

const argv = minimist(process.argv.slice(2));
console.log('argv', argv)

function help() {
    const man = readFileSync(resolve(__dirname, './man.txt'), {encoding: 'utf-8'});
    console.log(man);
}

// --help
if (argv.help) {
    help()
    process.exit(0);
}

const inputFile = argv._[0]

async function webpack() {
    const configAbsPath = resolve(__dirname, './rollup.config.js')

    return new Promise((resolve, reject) => {
        const args = ['rollup']

        args.push('-c', argv.c || configAbsPath)
        if (argv.watch) args.push('--watch')
        args.push('--', inputFile)

        const cra = spawn('npx', args, { stdio: 'inherit' })
        cra.on('exit', code => {
            if (code !== 0) {
                reject(new Error('Rollup failed'))
            }

            resolve()
        })
    })
}

async function main() {
    await rollup()
    console.log(`🙌 rollup done.`)
}
main().catch(err => {
    console.error(err)
    process.exit(1)
})
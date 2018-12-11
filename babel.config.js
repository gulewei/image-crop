
const isEsBuild = process.argv.indexOf('es') > -1

const presets = [
    [
        '@babel/env',
        {
            targets: {
                chrome: '39',
                // safari: '11.1',
            },
            useBuiltIns: 'usage',
            modules: !isEsBuild
        },
    ],
];
  
module.exports = { presets };

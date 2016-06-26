
// fis.match('*.js', {
//   useHash: false, // default is true
//   // 指定压缩插件 fis-optimizer-uglify-js
//   optimizer: fis.plugin('uglify-js', {
//     // option of uglify-js
//   }),
//   // packTo: '/static/aio.js'
// });



fis.match('{a, b}.js', {
    packTo: '/static/aio.js'
});



// fis3 release -d ./output

// fis3 release -h  查看help
// -h, --help                print this help message
// -d, --dest <path>         release output destination
// -l, --lint                with lint
// -w, --watch               monitor the changes of project
// -L, --live                automatically reload your browser
// -c, --clean               clean compile cache
// -u, --unique              use unique compile caching
// -r, --root <path>         specify project root
// -f, --file <filename>     specify the file path of `fis-conf.js`
// --no-color                disable colored output
// --verbose                 enable verbose mode

//比如进入目录  运行 fis3 release -d hehe

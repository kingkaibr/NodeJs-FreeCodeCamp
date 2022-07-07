// globals - no window 

// __dirname  - path to urrent directory
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where te progam is being executed

console.log(__dirname);
setInterval(() => {
    console.log(`hello world`)
}, 1000)
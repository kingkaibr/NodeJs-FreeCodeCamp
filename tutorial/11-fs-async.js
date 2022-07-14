const {readFile, writeFile} = require('fs')


readFile('./content/first.txt', 'utf8', (err, result) => {
    if(err){
        console.log(err)
        return;
    }
    const firstText = result
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if(err){
            console.log(err)
            return;
        }
        const secontText = result
        writeFile('./content/result-async.txt', `Here is the result: ${firstText}, ${secontText}`, (err, result) =>{
            if(err){
                console.log(err)
                return;
            }
            console.log(result);
        })
    })
})

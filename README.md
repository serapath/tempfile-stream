# tempfile-stream
makes a temporary file to write to, which is deleted on process.exit

# usage

```js
var tempfile = require('tempfile-stream')

var file$ = tempfile('.js') // specify extension if needed

var filename = file$.path()

file$.write('console.log("foobar")')

// test
var fs = require('fs')
console.log(filename)
fs.readFile(filename, function (error, filecontent) {
  if (error) throw error
  console.log(filecontent.toString())
})
```

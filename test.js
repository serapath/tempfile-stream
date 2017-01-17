var test = require('tape')
var fs = require('fs')

var tempfile = require('./index')

test('filename & filecontent', function (t) {
  t.plan(2)

  var file$ = tempfile('.js') // specify extension if needed
  var js = 'console.log("foobar")'
  file$.write(js)
  var filename = file$.path()

  t.equal(typeof filename, 'string', `filename===${filename}`)

  fs.readFile(filename, function (error, filecontent) {
    if (error) throw error
    t.equal(filecontent.toString(), js, `filecontent===${filecontent}`)
  })
})

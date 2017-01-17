var fs = require('fs')
var os = require('os')
var path = require('path')

module.exports = tempfile

function tempfile (ext) {
  var filepath = path.format({
    dir: os.tmpdir(),
    name: 'tempfile' + (''+Math.random()).substr(2),
    ext: ext
  })
  var file$ = fs.createWriteStream(filepath)
  process.on('exit', exit)
  file$.valueOf = file$.toString = file$.path = filename
  return file$
  function filename () { return filepath }
  function exit () {
    file$.end()
    fs.unlinkSync(filepath)
  }
}

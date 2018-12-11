var ghpages = require('gh-pages')

console.log('gh-pages start')
ghpages.publish('demo-site', function (err) { 
  console.log('gh-pages published')
})

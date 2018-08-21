# telelogger
Send logs to telegram

# install
`npm i telelogger --save`

# usage example
```js
const builder = require('./index')

const logger = builder({
  chatId: '-263936734',
  botToken: '5666542:AAH3CWdsadsadC83dKzKxP_enzo'
})

logger('fefe')
```

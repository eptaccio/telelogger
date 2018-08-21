const axios = require('axios')

module.exports = ({ chatId, botToken }) => text => {
  const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${text}`

  axios({
    method: 'GET',
    url
  })
}

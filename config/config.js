require('dotenv').config()

module.exports = {
  HYGRAPH_CONTENT_API: process.env.HYGRAPH_CONTENT_API || '',
  HYGRAPH_TOKEN: process.env.HYGRAPH_TOKEN || ''
}
require('dotenv').config()

module.exports = {
  development: {
    HYGRAPH_CONTENT_API:process.env.HYGRAPH_CONTENT_API || '',
    HYGRAPH_TOKEN:process.env.HYGRAPH_TOKEN || ''
  },
  test: {
    HYGRAPH_CONTENT_API:process.env.HYGRAPH_CONTENT_API || '',
    HYGRAPH_TOKEN:process.env.HYGRAPH_TOKEN || ''
  },
  production: {
    HYGRAPH_CONTENT_API:process.env.HYGRAPH_CONTENT_API || '',
    HYGRAPH_TOKEN:process.env.HYGRAPH_TOKEN || ''
  }
}
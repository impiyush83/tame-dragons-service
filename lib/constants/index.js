'use strict'

const Constants = {

  SERVER: {
    PORT: process.env.PORT || 3000
  },

  MONGO: {
    DATABASE: {
      NAME: 'tame-service',
      CONNECTION_URI: process.env.MONGODB_URI || `mongodb://localhost/tame-service`,
      TEST_CONNECTION_URI: `mongodb://localhost/tame-service-local`
    }
  }
}

module.exports = Constants

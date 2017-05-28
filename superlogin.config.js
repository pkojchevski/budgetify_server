//require('dotenv').config();

module.exports = {
  dbServer: {
    protocol: 'https://',
    host: CLOUDANT_URL,
    user: CLOUDANT_USER,
    password: CLOUDANT_PASSWORD,
    userDB: 'sl-users',
    couchAuthDB: '_users'
  },
  mailer: {
    fromEmail: 'gmail.user@gmail.com',
    options: {
      service: 'Gmail',
        auth: {
          user: 'gmail.user@gmail.com',
          pass: 'userpass'
        }
    }
  },
  //   session: {
  //   adapter: 'redis',
  //   redis: {
  //     url: process.env.REDIS_URL
  //   }
  // },
      defaultSecurityRoles: {
      admins: ['$slAdmin'],
      members: []
    },
  security: {
    maxFailedLogins: 3,
    lockoutTime: 600,
    tokenLife: 86400,
    loginOnRegistration: true,
  },
    userDBs: {
    model: {
      budgetify: {
        designDocs: [],
        permissions: ['_reader', '_writer', '_replicator']
      }
    },
    defaultDBs: {
      private: ['budgetify']
    }
  },
  providers: {
    local:true
  }


};
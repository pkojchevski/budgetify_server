module.exports = {
  dbServer: {
    protocol: 'https://',
    host: process.env.CLOUDANT_URL || 'pkojchevski.cloudant.com',
    user: process.env.CLOUDANT_USER || 'pkojchevski',
    password: process.env.CLOUDANT_PASSWORD || 'Pet@r.9791190',
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
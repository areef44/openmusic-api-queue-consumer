const config = {
    postgres: {
      host: process.env.PGHOST,
      database: process.env.PGDATABASE,
      port: process.env.PGPORT,
      user: process.env.PGUSER,
      password: process.env.PGPASSWORD,
    },
    rabbitMq: {
      server: process.env.RABBITMQ_SERVER,
    },
    mail: {
      host: process.env.MAIL_HOST,
      port: Number(process.env.MAIL_PORT),
      user: process.env.MAIL_ADDRESS,
      password: process.env.MAIL_PASSWORD,
    },
  };
  
  module.exports = config;
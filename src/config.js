const config = (process.env.ENVIRONMENT && process.env.ENVIRONMENT === 'production') ?
  {
    ufgAPIBaseUrl: 'http://localhost:8080' // TODO: set prod api url
  } :
  {
    ufgAPIBaseUrl: 'http://localhost:8080'
  };

module.exports = config;

module.exports = ({ env }) => ({
    // ...
    email: {
      provider: 'mailgun',
      providerOptions: {
        apiKey: env('MAILGUN_API_2'),
        domain: 'concord-medialtd.com', //Required if you have an account with multiple domains
        host: 'api.eu.mailgun.net', //Optional. If domain region is Europe use 'api.eu.mailgun.net'
      },
      settings: {
        defaultFrom: 'info@concord-medialtd.com',
        defaultReplyTo: 'milan@localsalesforce.io',
      },
    },
    // ...
  });
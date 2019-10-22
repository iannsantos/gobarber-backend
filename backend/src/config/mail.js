export default {
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: false,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
  default: {
    from: 'Iann Santos <noreply@gobarber.com>',
  },
};

// amazon ses, mailgun, sparkpost, mandril (mailchimp)
// mailtrap (ambiente de dev)

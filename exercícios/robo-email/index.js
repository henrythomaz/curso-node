const nodemailer = require('nodemailer');
const { readFileSync } = require('node:fs')

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465, // ou 587 se for com STARTTLS
  secure: true, // true para 465, false para 587
  auth: {
    user: 'seu-email',
    pass: 'sua-senha'
  }
});

const indexText = readFileSync('./index.js', 'utf8');

const mailOptions = {
  from: 'seu-primeiro-nome <seu-email>',
  to: 'emial-destinatário',
  subject: 'teste de envio de email por js',
  text: `O index.js: ${indexText}`
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log('Erro ao enviar e-mail:', error);
  }
  console.log('E-mail enviado:', info.response);
});

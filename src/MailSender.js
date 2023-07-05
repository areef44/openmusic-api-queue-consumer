const config = require('./utils/config');
const nodemailer = require('nodemailer');

class MailSender {
    constructor() {
        this._transporter = nodemailer.createTransport({
            host: config.mail.host,
            port: config.mail.port,
            auth: {
                user: config.mail.user,
                pass: config.mail.password,
            },
        });
    }

    sendEmail(targetEmail, content) {
        const message = {
            from: 'Open Music API',
            to: targetEmail,
            subject: 'Eksport Lagu Playlist',
            text: 'Terlampir Hasil ekspor attachment',
            attachments: [
                {
                    filename: 'playlist.json',
                    content,
                },
            ],
        };

        return this._transporter.sendMail(message);
    }
}

module.exports = MailSender;
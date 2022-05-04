import nodemailer from 'nodemailer';

import { IMailAdapter, ISendMailData } from '../mail-adapter';

const transport = nodemailer.createTransport({
	host: 'smtp.mailtrap.io',
	port: 2525,
	auth: {
		user: '9c87933634b54d',
		pass: '2c0a18038b1bd7',
	},
});

class NodemailerMailAdapter implements IMailAdapter {
	async sendMail({ subject, body }: ISendMailData) {
		await transport.sendMail({
			from: 'Team Feedget <hello@feedget.com>',
			to: 'André Quintino <pandrequintino@gmail.com>',
			subject,
			html: body,
		});
	}
}

export { NodemailerMailAdapter };

import { IMailAdapter } from '../adapters/mail-adapter';
import { IFeedbacksRepository } from '../repositories/feedbacks-repository';

interface ISubmitFeedbackUseCaseRequest {
	type: string;
	comment: string;
	screenshot?: string;
}

class SubmitFeedbackUseCase {
	constructor(
		private feedbacksRepository: IFeedbacksRepository,
		private mailAdapter: IMailAdapter
	) {}

	async execute({ type, comment, screenshot }: ISubmitFeedbackUseCaseRequest) {
		if (!type) throw new Error('type is required.');

		if (!comment) throw new Error('comment is required.');

		if (screenshot && !screenshot.startsWith('data:image/png;base64,'))
			throw new Error('Invalid screenshot format.');

		await this.feedbacksRepository.create({ type, comment, screenshot });

		await this.mailAdapter.sendMail({
			subject: 'New feedback',
			body: [
				`<div style="font-family: sans-serif; font-size: 16px; color: #111;">`,
				`<p>Tipo do feedback: ${type}</p>`,
				`<p>Comentário: ${comment}</p>`,
				screenshot ? `<img src="${screenshot}" />` : ``,
				`</div>`,
			].join('\n'),
		});
	}
}

export { SubmitFeedbackUseCase };

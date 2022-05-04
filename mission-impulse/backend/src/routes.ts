import { Router } from 'express';

import { NodemailerMailAdapter } from './adapters/nodemailer/nodemailer-mail-adapter';
import { PrismaFeedbacksRepository } from './repositories/prisma/prisma-feedbacks-repository';
import { SubmitFeedbackUseCase } from './use-cases/submit-feedback-use-case';

const routes = Router();

routes.post(
	'/feedbacks',
	async ({ body: { type, comment, screenshot } }, res) => {
		const prismaFeedbackRepository = new PrismaFeedbacksRepository();

		const nodemailerMailAdapter = new NodemailerMailAdapter();

		const submitFeedbackUseCase = new SubmitFeedbackUseCase(
			prismaFeedbackRepository,
			nodemailerMailAdapter
		);

		await submitFeedbackUseCase.execute({ type, comment, screenshot });

		return res.sendStatus(201); //* Created
	}
);

export { routes };

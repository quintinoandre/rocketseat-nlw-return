import { prisma } from '../../prisma';
import {
	IFeedbackCreateData,
	IFeedbacksRepository,
} from '../feedbacks-repository';

class PrismaFeedbacksRepository implements IFeedbacksRepository {
	async create({ type, comment, screenshot }: IFeedbackCreateData) {
		await prisma.feedback.create({
			data: { type, comment, screenshot },
		});
	}
}

export { PrismaFeedbacksRepository };

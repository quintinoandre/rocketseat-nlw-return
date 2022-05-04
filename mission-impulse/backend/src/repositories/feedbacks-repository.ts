interface IFeedbackCreateData {
	type: string;
	comment: string;
	screenshot?: string;
}

interface IFeedbacksRepository {
	create: (data: IFeedbackCreateData) => Promise<void>;
}

export { IFeedbackCreateData, IFeedbacksRepository };

import { TFeedbackType } from '../Widget/types';

interface IProps {
	feedbackType: TFeedbackType;
	onFeedbackCanceled: () => void;
	onFeedbackSent: () => void;
}

export type { IProps };

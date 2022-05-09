import { TFeedbackType } from '../Widget/types';

interface IProps {
	onFeedbackTypeChanged: (feedbackType: TFeedbackType) => void;
}

export type { IProps, TFeedbackType };

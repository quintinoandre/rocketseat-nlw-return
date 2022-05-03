import { TFeedbackType } from '../FeedbackTypeStep/types';

interface IFeedbackContentStepProps {
	feedbackType: TFeedbackType;
	onFeedbackRestartRequested: () => void;
	onFeedbackSent: () => void;
}

export type { IFeedbackContentStepProps };

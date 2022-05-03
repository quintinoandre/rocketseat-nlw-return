import { feedbackTypes } from '.';

type TFeedbackType = keyof typeof feedbackTypes;

interface IFeedbackTypeStepProps {
	onFeedbackTypeChanged: (type: TFeedbackType) => void;
}

export type { TFeedbackType, IFeedbackTypeStepProps };

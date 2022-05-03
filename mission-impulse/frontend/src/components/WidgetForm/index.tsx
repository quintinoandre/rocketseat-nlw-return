import { useState } from 'react';

import {
	FeedbackContentStep,
	FeedbackSuccessStep,
	FeedbackTypeStep,
	TFeedbackType,
} from './Steps';
import styles from './styles';

function WidgetForm() {
	const [feedbackType, setFeedbackType] = useState<TFeedbackType | null>(null);
	const [feedbackSent, setFeedbackSent] = useState(false);

	function handleRestartFeedback() {
		setFeedbackType(null);

		setFeedbackSent(false);
	}

	return (
		<div className={styles['.c-card']}>
			{feedbackSent ? (
				<FeedbackSuccessStep
					onFeedbackRestartRequested={handleRestartFeedback}
				/>
			) : (
				<>
					{!feedbackType ? (
						<FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
					) : (
						<FeedbackContentStep
							feedbackType={feedbackType}
							onFeedbackRestartRequested={handleRestartFeedback}
							onFeedbackSent={() => setFeedbackSent(true)}
						/>
					)}
				</>
			)}
			<footer className={styles['.c-card__footer']}>
				Made with ♥ by{' '}
				<a className={styles['.c-card__a']} href="https://rocketseat.com.br">
					Rocketseat
				</a>
			</footer>
		</div>
	);
}

export { WidgetForm };

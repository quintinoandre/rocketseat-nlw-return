import { ArrowLeft } from 'phosphor-react';
import { FormEvent, useState } from 'react';

import { api } from '../../../../lib/api';
import { CloseButton } from '../../../CloseButton';
import { Loading } from '../../../Loading';
import { ScreenshotButton } from '../../ScreenshotButton';
import { feedbackTypes } from '../FeedbackTypeStep';
import styles from './styles';
import { IFeedbackContentStepProps } from './types';

function FeedbackContentStep({ ...props }: IFeedbackContentStepProps) {
	const [screenshot, setScreenshot] = useState<string | null>(null);
	const [comment, setComment] = useState('');
	const [isSendingFeedback, setIsSendingFeedback] = useState(false);

	const feedbackTypeInfo = feedbackTypes[props.feedbackType];

	async function handleSubmitFeedback(event: FormEvent) {
		event.preventDefault();

		setIsSendingFeedback(true);

		await api.post('/feedbacks', {
			type: props.feedbackType,
			comment,
			screenshot,
		});

		setIsSendingFeedback(false);

		props.onFeedbackSent();
	}

	return (
		<>
			<header>
				<button
					type="button"
					className={styles['.c-card__button']}
					onClick={props.onFeedbackRestartRequested}
				>
					<ArrowLeft
						weight="bold"
						className={styles['.c-card__button .c-icon']}
					/>
				</button>
				<span className={styles['.c-card__span']}>
					<img
						className={styles['.c-card__span .c-image']}
						src={feedbackTypeInfo.image.source}
						alt={feedbackTypeInfo.image.alt}
					/>
					{feedbackTypeInfo.title}
				</span>
				<CloseButton />
			</header>
			<form
				className={styles['.c-card__form']}
				onSubmit={(event) => handleSubmitFeedback(event)}
			>
				<textarea
					className={styles['.c-card__textarea']}
					placeholder="Isn't something working well? We want to correct. Count on detail what is happening ..."
					onChange={({ target: { value } }) => setComment(value)}
				/>
				<footer className={styles['.c-card__footer']}>
					<ScreenshotButton
						screenshot={screenshot}
						onScreenshotTook={setScreenshot}
					/>
					<button
						type="submit"
						className={styles['.c-card__footer__button']}
						disabled={comment.length === 0 || isSendingFeedback}
					>
						{isSendingFeedback ? <Loading /> : 'Send feedback'}
					</button>
				</footer>
			</form>
		</>
	);
}

export { FeedbackContentStep };

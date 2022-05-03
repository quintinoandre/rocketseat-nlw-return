import { bugImageUrl, ideaImageUrl, thoughtImageUrl } from '../../../../assets';
import { CloseButton } from '../../../CloseButton';
import styles from './styles';
import { TFeedbackType, IFeedbackTypeStepProps } from './types';

const feedbackTypes = Object.freeze({
	BUG: {
		title: 'Problem',
		image: {
			source: bugImageUrl,
			alt: 'Image of an insect',
		},
	},
	IDEA: {
		title: 'Idea',
		image: {
			source: ideaImageUrl,
			alt: 'Image of a lamp',
		},
	},
	OTHER: {
		title: 'Other',
		image: {
			source: thoughtImageUrl,
			alt: 'Image of a cloud of thought',
		},
	},
});

function FeedbackTypeStep({ ...props }: IFeedbackTypeStepProps) {
	return (
		<>
			<header>
				<span className={styles['.c-card__span']}>Leave your feedback</span>
				<CloseButton />
			</header>
			<div className={styles['.c-card__content']}>
				{Object.entries(feedbackTypes).map(([key, value]) => {
					return (
						<button
							key={key}
							type="button"
							className={styles['.c-card__content .c-button']}
							onClick={() => props.onFeedbackTypeChanged(key as TFeedbackType)}
						>
							<img src={value.image.source} alt={value.image.alt} />
							<span>{value.title}</span>
						</button>
					);
				})}
			</div>
		</>
	);
}

export { feedbackTypes, FeedbackTypeStep };

import { successUrl } from '../../../../assets';
import { CloseButton } from '../../../CloseButton';
import styles from './styles';
import { IFeedbackSuccessStepProps } from './types';

function FeedbackSuccessStep({ ...props }: IFeedbackSuccessStepProps) {
	return (
		<>
			<header>
				<CloseButton />
			</header>
			<div className={styles['.c-card__content']}>
				<img src={successUrl} alt="Successful arrow" />
				<span className={styles['.c-card__span']}>
					Thanks for the feedback!
				</span>
				<button
					type="button"
					className={styles['.c-card__content .c-button']}
					onClick={props.onFeedbackRestartRequested}
				>
					I want to send another
				</button>
			</div>
		</>
	);
}

export { FeedbackSuccessStep };

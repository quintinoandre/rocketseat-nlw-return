import html2canvas from 'html2canvas';
import { Camera, Trash } from 'phosphor-react';
import { useState } from 'react';

import { Loading } from '../../Loading';
import styles from './styles';
import { IScreenShotButtonProps } from './types';

function ScreenshotButton({ ...props }: IScreenShotButtonProps) {
	const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);

	async function handleTakeScreenshot() {
		setIsTakingScreenshot(true);

		const canvas = await html2canvas(document.querySelector('html')!);

		const base64image = canvas.toDataURL('image/png');

		props.onScreenshotTook(base64image);

		setIsTakingScreenshot(false);
	}

	if (props.screenshot)
		return (
			<button
				type="button"
				className={styles['.c-first-button']}
				style={{
					backgroundImage: `url(${props.screenshot})`,
					backgroundPosition: 'right bottom',
					backgroundSize: 180,
				}}
				onClick={() => props.onScreenshotTook(null)}
			>
				<Trash weight="fill" />
			</button>
		);

	return (
		<button
			type="button"
			className={styles['.c-second-button']}
			onClick={handleTakeScreenshot}
		>
			{isTakingScreenshot ? (
				<Loading />
			) : (
				<Camera className={styles['.c-second-button .c-icon']} />
			)}
		</button>
	);
}

export { ScreenshotButton };

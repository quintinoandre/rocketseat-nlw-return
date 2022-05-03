interface IScreenShotButtonProps {
	screenshot: string | null;
	onScreenshotTook: (screenshot: string | null) => void;
}

export type { IScreenShotButtonProps };

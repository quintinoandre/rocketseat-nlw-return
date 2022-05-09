import { ImageProps, TouchableOpacityProps } from 'react-native';

interface IProps extends TouchableOpacityProps {
	title: string;
	image: ImageProps;
}

export type { IProps };

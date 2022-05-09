import { Camera, Trash } from 'phosphor-react-native';
import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';

import { THEME } from '../../theme';
import { styles } from './styles';
import { IProps } from './types';

function ScreenShotButton({ ...props }: IProps) {
	return (
		<TouchableOpacity
			style={styles.container}
			onPress={props.screenshot ? props.onRemoveShot : props.onTakeShot}
		>
			{props.screenshot ? (
				<View>
					<Image style={styles.image} source={{ uri: props.screenshot }} />
					<Trash
						size={22}
						color={THEME.colors.text_secondary}
						weight="fill"
						style={styles.removeIcon}
					/>
				</View>
			) : (
				<Camera size={24} color={THEME.colors.text_secondary} weight="bold" />
			)}
		</TouchableOpacity>
	);
}

export { ScreenShotButton };

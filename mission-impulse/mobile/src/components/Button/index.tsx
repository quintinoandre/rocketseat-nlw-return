import React from 'react';
import { ActivityIndicator, Text, TouchableOpacity } from 'react-native';

import { THEME } from '../../theme';
import { styles } from './styles';
import { IProps } from './types';

function Button({ isLoading, ...rest }: IProps) {
	return (
		<TouchableOpacity style={styles.container} {...rest}>
			{isLoading ? (
				<ActivityIndicator color={THEME.colors.text_on_brand_color} />
			) : (
				<Text style={styles.title}>Send feedback</Text>
			)}
		</TouchableOpacity>
	);
}

export { Button };

import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';
import { IProps } from './types';

function Option({ title, image, ...rest }: IProps) {
	return (
		<TouchableOpacity style={styles.container} {...rest}>
			<Image source={image} style={styles.image} />
			<Text style={styles.title}>{title}</Text>
		</TouchableOpacity>
	);
}

export { Option };

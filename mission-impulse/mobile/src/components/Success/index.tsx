import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import successImg from '../../assets/success.png';
import { Copyright } from '../Copyright';
import { styles } from './styles';
import { IProps } from './types';

function Success({ ...props }: IProps) {
	return (
		<View style={styles.container}>
			<Image source={successImg} style={styles.image} />
			<Text style={styles.title}>Thanks for the feedback</Text>
			<TouchableOpacity
				style={styles.button}
				onPress={props.onSendAnotherFeedback}
			>
				<Text style={styles.buttonTitle}>I want to send another</Text>
			</TouchableOpacity>
			<Copyright />
		</View>
	);
}

export { Success };

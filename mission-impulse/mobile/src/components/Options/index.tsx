import React from 'react';
import { Text, View } from 'react-native';

import { FEEDBACK_TYPES } from '../../utils/feedbackTypes';
import { Copyright } from '../Copyright';
import { Option } from '../Option';
import { styles } from './styles';
import { IProps, TFeedbackType } from './types';

function Options({ ...props }: IProps) {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Leave your feedback</Text>
			<View style={styles.options}>
				{Object.entries(FEEDBACK_TYPES).map(([key, value]) => (
					<Option
						key={key}
						title={value.title}
						image={value.image}
						onPress={() => props.onFeedbackTypeChanged(key as TFeedbackType)}
					/>
				))}
			</View>
			<Copyright />
		</View>
	);
}

export { Options };

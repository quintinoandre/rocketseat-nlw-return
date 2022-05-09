import * as FileSystem from 'expo-file-system';
import { ArrowLeft } from 'phosphor-react-native';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import { captureScreen } from 'react-native-view-shot';

import { api } from '../../libs/api';
import { THEME } from '../../theme';
import { FEEDBACK_TYPES } from '../../utils/feedbackTypes';
import { Button } from '../Button';
import { ScreenShotButton } from '../ScreenShotButton';
import { styles } from './styles';
import { IProps } from './types';

function Form({ ...props }: IProps) {
	const [screenshot, setScreenshot] = useState<string | null>(null);
	const [isSendingFeedback, setIsSendingFeedback] = useState(false);
	const [comment, setComment] = useState('');

	const feedbackTypeInfo = FEEDBACK_TYPES[props.feedbackType];

	function handleScreenshot() {
		captureScreen({ format: 'jpg', quality: 0.8 })
			.then((uri) => setScreenshot(uri))
			.catch((error) => console.error(error));
	}

	function handleScreenshotRemove() {
		setScreenshot(null);
	}

	async function handleSendFeedback() {
		if (isSendingFeedback) return;

		setIsSendingFeedback(true);

		const screenshotBase64 =
			screenshot &&
			(await FileSystem.readAsStringAsync(screenshot, { encoding: 'base64' }));

		try {
			await api.post('/feedbacks', {
				type: props.feedbackType,
				screenshot: `data:image/png;base64, ${screenshotBase64}`,
				comment,
			});

			props.onFeedbackSent();
		} catch (error) {
			console.error(error);

			setIsSendingFeedback(false);
		}
	}

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<TouchableOpacity onPress={props.onFeedbackCanceled}>
					<ArrowLeft
						size={24}
						weight="bold"
						color={THEME.colors.text_secondary}
					/>
				</TouchableOpacity>
				<View style={styles.titleContainer}>
					<Image source={feedbackTypeInfo.image} style={styles.image} />
					<Text style={styles.titleText}>{feedbackTypeInfo.title}</Text>
				</View>
			</View>

			<TextInput
				multiline
				style={styles.input}
				placeholder="Isn't something working well? We want to correct. Tell as on detail what is happening ..."
				placeholderTextColor={THEME.colors.text_secondary}
				autoCorrect={false}
				onChangeText={setComment}
			/>
			<View style={styles.footer}>
				<ScreenShotButton
					onTakeShot={handleScreenshot}
					onRemoveShot={handleScreenshotRemove}
					screenshot={screenshot}
				/>
				<Button isLoading={isSendingFeedback} onPress={handleSendFeedback} />
			</View>
		</View>
	);
}

export { Form };

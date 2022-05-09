import { StyleSheet } from 'react-native';

import { THEME } from '../../theme';

export const styles = StyleSheet.create({
	container: { alignItems: 'center' },
	image: { width: 36, height: 36, marginTop: 42, marginBottom: 10 },
	title: {
		fontSize: 20,
		marginBottom: 24,
		fontFamily: THEME.fonts.medium,
		color: THEME.colors.text_primary,
	},
	button: {
		height: 40,
		backgroundColor: THEME.colors.surface_secondary,
		borderRadius: 4,
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal: 24,
		marginBottom: 56,
	},
	buttonTitle: {
		fontSize: 14,
		fontFamily: THEME.fonts.medium,
		color: THEME.colors.text_secondary,
	},
});

import { StyleSheet } from 'react-native';

import { THEME } from '../../theme';

const styles = StyleSheet.create({
	container: {
		width: 104,
		height: 112,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 8,
		borderRadius: 8,
		marginHorizontal: 8,
		backgroundColor: THEME.colors.surface_secondary,
	},
	image: {
		width: 40,
		height: 40,
	},
	title: {
		fontSize: 14,
		marginTop: 8,
		fontFamily: THEME.fonts.medium,
		color: THEME.colors.text_primary,
	},
});

export { styles };

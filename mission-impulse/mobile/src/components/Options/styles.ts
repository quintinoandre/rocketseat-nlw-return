import { StyleSheet } from 'react-native';

import { THEME } from '../../theme';

const styles = StyleSheet.create({
	container: { alignItems: 'center' },
	title: {
		fontSize: 20,
		marginBottom: 32,
		fontFamily: THEME.fonts.medium,
		color: THEME.colors.text_primary,
	},
	options: {
		flexDirection: 'row',
		justifyContent: 'center',
		width: '100%',
		marginBottom: 48,
	},
});

export { styles };

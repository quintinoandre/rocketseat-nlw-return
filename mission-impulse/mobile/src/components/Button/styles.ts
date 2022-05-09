import { StyleSheet } from 'react-native';

import { THEME } from '../../theme';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		height: 40,
		backgroundColor: THEME.colors.brand,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 4,
	},
	title: {
		fontSize: 14,
		fontFamily: THEME.fonts.medium,
		color: THEME.colors.text_on_brand_color,
	},
});

export { styles };

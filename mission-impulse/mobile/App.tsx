import 'react-native-gesture-handler';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import {
	useFonts,
	Inter_400Regular,
	Inter_500Medium,
} from '@expo-google-fonts/inter';

import Widget from './src/components/Widget';
import { THEME } from './src/theme';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: THEME.colors.background,
	},
});

function App() {
	const [fontsLoaded] = useFonts({ Inter_400Regular, Inter_500Medium });

	if (!fontsLoaded) return <AppLoading />;

	return (
		<View style={styles.container}>
			<StatusBar style="light" backgroundColor="transparent" translucent />
			<Widget />
		</View>
	);
}

export default App;

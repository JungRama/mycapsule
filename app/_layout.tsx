import { Stack } from 'expo-router'
import { DefaultTheme, PaperProvider } from 'react-native-paper'

const theme = {
	...DefaultTheme,
	// Override the colors of the default theme
	colors: {
		...DefaultTheme.colors,
		primary: '#000000', // Set primary color to black
		// You can also change other colors like accent, background, etc.
	},
}

const RootLayout = () => {
	return (
		<PaperProvider theme={theme}>
			<Stack>
				<Stack.Screen
					name="index"
					options={{
						headerShown: false,
					}}
				></Stack.Screen>
				<Stack.Screen name="home/index"></Stack.Screen>
			</Stack>
		</PaperProvider>
	)
}

export default RootLayout

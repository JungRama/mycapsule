import { Stack } from 'expo-router'
import { DefaultTheme, PaperProvider } from 'react-native-paper'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const theme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		primary: '#000000',
		background: '#ffffff',
		text: '#ffffff',
	},
}

const RootLayout = () => {
	return (
		<SafeAreaProvider>
			<PaperProvider theme={theme}>
				<Stack>
					<Stack.Screen
						name="(onboarding)/index"
						options={{
							headerShown: false,
						}}
					></Stack.Screen>
					<Stack.Screen
						name="tabs"
						options={{
							headerShown: false,
						}}
					></Stack.Screen>

					<Stack.Screen
						name="auth/sign-up"
						options={{
							title: '',
							headerShadowVisible: false,
						}}
					></Stack.Screen>
					<Stack.Screen
						name="auth/sign-in"
						options={{
							title: '',
							headerShadowVisible: false,
						}}
					></Stack.Screen>
				</Stack>
			</PaperProvider>
		</SafeAreaProvider>
	)
}

export default RootLayout

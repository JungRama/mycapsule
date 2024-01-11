import { globalStyles } from '@/styles/global.styles'
import { LinearGradient } from 'expo-linear-gradient'
import { StatusBar } from 'expo-status-bar'
import { ImageBackground } from 'react-native'
import { Button, Text, withTheme } from 'react-native-paper'
import { styles } from './index.styles'
import { router } from 'expo-router'

const App = () => {
	return (
		<ImageBackground
			source={require('@/assets/images/onboarding.png')}
			style={styles.backgroundImage}
		>
			<StatusBar style="light"></StatusBar>
			<LinearGradient
				style={styles.overlay}
				colors={['rgba(0, 0, 0, 0.00)', 'rgba(0, 0, 0, 0.91)', '#000']}
				start={{ x: 0.5, y: 0 }}
				end={{ x: 0.5, y: 1 }}
				locations={[0, 0.45, 0.669]}
			>
				<Text style={styles.title}>
					Yearly resolution success throughout daily action
				</Text>
				<Text style={styles.subtitle}>
					Break down your objectives into monthly milestones and daily tasks,
					ensuring consistent progress and adaptability. Celebrate small wins to
					maintain motivation.
				</Text>
				<Button
					mode="contained"
					uppercase={false}
					textColor="black"
					buttonColor="white"
					style={globalStyles.button}
					contentStyle={globalStyles.buttonContentStyle}
					labelStyle={{
						fontSize: 16,
					}}
					onPress={() => router.push('/auth/sign-up')}
				>
					Join MyCapsule
				</Button>
				<Button
					mode="contained"
					uppercase={false}
					labelStyle={{
						fontSize: 16,
					}}
					onPress={() => router.push('/auth/sign-in')}
				>
					Log in
				</Button>
			</LinearGradient>
		</ImageBackground>
	)
}

export default withTheme(App)

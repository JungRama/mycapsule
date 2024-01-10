import * as React from 'react'
import { StyleSheet, View, ImageBackground, Dimensions } from 'react-native'
import { Button, Text, withTheme } from 'react-native-paper'
import { LinearGradient } from 'expo-linear-gradient'
import { StatusBar } from 'expo-status-bar'

const { width, height } = Dimensions.get('window')

const App = ({ theme }) => {
	const { colors } = theme

	return (
		<ImageBackground
			source={require('../assets/images/onboarding.png')}
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
				<Text style={styles.title}>Hire with Confidence</Text>
				<Text style={styles.subtitle}>
					Employers, Highlight Your Open Positions. Connect with the Best
					Candidates. We'll Make Hiring Effortless.
				</Text>
				<Button
					mode="contained"
					uppercase={false}
					textColor="black"
					onPress={() => console.log('Pressed')}
					style={[styles.button, { backgroundColor: colors.surface }]}
					labelStyle={styles.buttonLabel}
				>
					Join MyCapsule
				</Button>
				<Button
					mode="text"
					uppercase={false}
					onPress={() => console.log('Pressed')}
					labelStyle={styles.loginLabel}
				>
					Log in
				</Button>
			</LinearGradient>
			{/* </View> */}
		</ImageBackground>
	)
}

const styles = StyleSheet.create({
	backgroundImage: {
		flex: 1,
		width: width,
		height: height,
		justifyContent: 'flex-end',
	},
	overlay: {
		height: '100%',
		padding: 20,
		alignItems: 'center',
		justifyContent: 'flex-end',
		paddingBottom: 40,
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		color: 'white',
		textAlign: 'center',
		marginBottom: 8,
	},
	subtitle: {
		fontSize: 16,
		color: 'white',
		opacity: 0.7,
		textAlign: 'center',
		marginBottom: 24,
	},
	button: {
		height: 60,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 30,
		width: '100%',
		color: '#000000',
		marginBottom: 16,
	},
	buttonLabel: {
		fontWeight: 'bold',
		fontSize: 18,
	},
	loginLabel: {
		fontSize: 16,
		color: 'white',
	},
})

export default withTheme(App)

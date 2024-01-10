import { Dimensions, StyleSheet } from 'react-native'

const { width, height } = Dimensions.get('window')

export const styles = StyleSheet.create({
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
})

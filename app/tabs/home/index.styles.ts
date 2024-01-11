import { Dimensions, StyleSheet } from 'react-native'

const { width, height } = Dimensions.get('window')

export const styles = StyleSheet.create({
	backgroundImage: {
		flex: 1,
		width: width,
		height: 250,
		justifyContent: 'flex-end',
	},
	overlay: {
		height: '100%',
		padding: 15,
		justifyContent: 'flex-end',
		paddingBottom: 20,
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		color: 'white',
		textAlign: 'center',
		marginBottom: 8,
	},
})

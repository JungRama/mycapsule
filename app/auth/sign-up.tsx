import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { TextInput, Button, Card, Title } from 'react-native-paper'

const LoginPage = () => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	const handleLogin = () => {
		// Handle login logic here
		console.log('Login credentials', { username, password })
	}

	return (
		<View style={styles.container}>
			<Title style={styles.title}>Login</Title>
			<TextInput
				label="Username"
				value={username}
				onChangeText={(text) => setUsername(text)}
				mode="outlined"
				style={styles.input}
			/>
			<TextInput
				label="Password"
				value={password}
				onChangeText={(text) => setPassword(text)}
				secureTextEntry
				mode="outlined"
				style={styles.input}
			/>
			<Button mode="contained" onPress={handleLogin}>
				Login
			</Button>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		padding: 20,
		backgroundColor: '#f5f5f5',
	},
	card: {
		padding: 5,
		margin: 5,
	},
	title: {
		textAlign: 'center',
		marginBottom: 16,
	},
	input: {
		marginBottom: 16,
	},
})

export default LoginPage

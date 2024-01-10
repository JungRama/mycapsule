import { globalStyles } from '@/styles/global.styles'
import { Link, router } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { View } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'

import ErrorValidation from '@/components/form/error-validation'
import {
	ValidationSignIn,
	ValidationSignUp,
	validationSignIn,
	validationSignUp,
} from '@/schema/auth.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import {
	Controller,
	FormProvider,
	SubmitHandler,
	useForm,
} from 'react-hook-form'

const SignUpPage = () => {
	const form = useForm<ValidationSignUp>({
		resolver: zodResolver(validationSignUp),
		mode: 'onBlur',
	})

	const handleRegister: SubmitHandler<ValidationSignUp> = (data) => {
		console.log(form.formState.errors)
		router.push('/tabs/home')
	}

	return (
		<View style={globalStyles.container}>
			<StatusBar style="dark"></StatusBar>
			<Text
				variant="displaySmall"
				style={{
					fontWeight: 'bold',
					marginBottom: 10,
				}}
			>
				Register an account
			</Text>
			<Text
				style={{
					marginBottom: 30,
				}}
			>
				Register to access personalized features and keep track of your
				preferences and activities
			</Text>

			<FormProvider {...form}>
				<Controller
					control={form.control}
					name="fullName"
					rules={{ required: true }}
					render={({ field: { onChange, onBlur, value }, formState }) => (
						<View
							style={{
								marginBottom: 16,
							}}
						>
							<TextInput
								label="Fullname"
								placeholder="Enter fullname"
								onBlur={onBlur}
								value={value}
								onChangeText={(value) => onChange(value)}
								error={!!form.formState.errors.fullName}
								mode="outlined"
							/>
							<ErrorValidation
								message={formState.errors.fullName?.message}
							></ErrorValidation>
						</View>
					)}
				/>

				<Controller
					control={form.control}
					name="email"
					rules={{ required: true }}
					render={({ field: { onChange, onBlur, value }, formState }) => (
						<View
							style={{
								marginBottom: 16,
							}}
						>
							<TextInput
								label="Email"
								placeholder="Enter email address"
								onBlur={onBlur}
								value={value}
								onChangeText={(value) => onChange(value)}
								error={!!form.formState.errors.email}
								mode="outlined"
							/>
							<ErrorValidation
								message={formState.errors.email?.message}
							></ErrorValidation>
						</View>
					)}
				/>

				<Controller
					control={form.control}
					name="password"
					rules={{ required: true }}
					render={({ field: { onChange, onBlur, value }, formState }) => (
						<View
							style={{
								marginBottom: 16,
							}}
						>
							<TextInput
								label="Password"
								placeholder="Enter password"
								secureTextEntry
								onBlur={onBlur}
								value={value}
								onChangeText={(value) => onChange(value)}
								error={!!form.formState.errors.password}
								mode="outlined"
							/>

							<ErrorValidation
								message={formState.errors.password?.message}
							></ErrorValidation>
						</View>
					)}
				/>

				<Button
					mode="contained"
					onPress={form.handleSubmit(handleRegister)}
					style={globalStyles.button}
					contentStyle={globalStyles.buttonContentStyle}
					icon={'email'}
				>
					Register with Email
				</Button>
			</FormProvider>

			<Text
				variant="bodyMedium"
				style={{
					textAlign: 'center',
					marginBottom: 8,
				}}
			>
				or
			</Text>

			<Button
				icon={'google'}
				mode="outlined"
				style={globalStyles.button}
				contentStyle={globalStyles.buttonContentStyle}
			>
				Continue with Google
			</Button>
		</View>
	)
}
export default SignUpPage

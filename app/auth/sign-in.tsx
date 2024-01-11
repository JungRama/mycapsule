import { globalStyles } from '@/styles/global.styles'
import { Link, router } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { View } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'

import ErrorValidation from '@/components/general/error-validation'
import { ValidationSignIn, validationSignIn } from '@/schema/auth.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import {
	Controller,
	FormProvider,
	SubmitHandler,
	useForm,
} from 'react-hook-form'

const SignInPage = () => {
	const form = useForm<ValidationSignIn>({
		resolver: zodResolver(validationSignIn),
		mode: 'onBlur',
		defaultValues: {
			email: 'email@mail.com',
			password: 'password',
		},
	})

	const handleLogin: SubmitHandler<ValidationSignIn> = (data) => {
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
				Login to your existing account
			</Text>
			<Text
				style={{
					marginBottom: 30,
				}}
			>
				Enter your credentials below to access your account and continue using
				the feature.
			</Text>

			<FormProvider {...form}>
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
								marginBottom: 8,
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
				<Link
					href={'/auth/forgot-password'}
					style={{
						marginBottom: 24,
					}}
				>
					<Text>Forgot Password?</Text>
				</Link>

				<Button
					mode="contained"
					onPress={form.handleSubmit(handleLogin)}
					style={globalStyles.button}
					contentStyle={globalStyles.buttonContentStyle}
					icon={'email'}
				>
					Login with Email
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
export default SignInPage

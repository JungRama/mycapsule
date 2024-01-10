import { z } from 'zod'

export const validationSignUp = z.object({
	fullName: z.string().min(1, { message: 'Fullname is required' }),
	email: z.string().min(1, { message: 'Email is required' }).email({
		message: 'Must be a valid email',
	}),
	password: z
		.string()
		.min(6, { message: 'Password must be atleast 6 characters' }),
	confirmPassword: z
		.string()
		.min(1, { message: 'Confirm Password is required' }),
})

export const validationSignIn = z.object({
	email: z.string().min(1, { message: 'Email is required' }).email({
		message: 'Must be a valid email',
	}),
	password: z
		.string()
		.min(8, { message: 'Password must be atleast 8 characters' }),
})

export type ValidationSignUp = z.infer<typeof validationSignUp>
export type ValidationSignIn = z.infer<typeof validationSignIn>

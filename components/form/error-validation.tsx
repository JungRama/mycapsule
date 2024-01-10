import { Text } from 'react-native-paper'

const ErrorValidation = ({ message }: { message?: string }) => {
	return message ? (
		<Text variant="labelMedium" style={{ color: 'red' }}>
			{message}
		</Text>
	) : null
}

export default ErrorValidation

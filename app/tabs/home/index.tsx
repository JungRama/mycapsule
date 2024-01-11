import { LinearGradient } from 'expo-linear-gradient'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { ImageBackground, ScrollView, View } from 'react-native'
import { Button, Checkbox, List, ProgressBar, Text } from 'react-native-paper'
import { styles } from './index.styles'
import FormTaskBottomSheet from '@/components/tasks/form-task-bottom-sheet'

const TaskItem = ({ title, description }) => {
	const [checked, setChecked] = React.useState(false)

	return (
		<List.Item
			title={title}
			description={description}
			style={{
				padding: 12,
			}}
			left={() => (
				<Checkbox
					status={checked ? 'checked' : 'unchecked'}
					onPress={() => setChecked(!checked)}
				/>
			)}
			right={() => <List.Icon icon="chevron-right" />}
			onPress={() => {}}
		/>
	)
}

const App = () => {
	return (
		<>
			<ScrollView
				style={{
					flex: 1,
				}}
			>
				<ImageBackground
					source={require('@/assets/images/home.png')}
					style={styles.backgroundImage}
				>
					<LinearGradient
						style={styles.overlay}
						colors={['rgba(0, 0, 0, 0.00)', '#000']}
						start={{ x: 0.5, y: 0 }}
						end={{ x: 0.5, y: 1 }}
						locations={[0, 100]}
					>
						<View
							style={{
								display: 'flex',
							}}
						>
							<Text style={styles.title}>
								Hi Rama, let’s check off your tasks today
							</Text>
							<ProgressBar
								progress={5 / 12}
								color="blue"
								style={{
									marginTop: 10,
									marginBottom: 10,
								}}
							></ProgressBar>
							<Text
								style={{
									color: 'white',
								}}
							>
								5/12 Task Completed
							</Text>
						</View>
					</LinearGradient>
				</ImageBackground>

				<StatusBar style="light"></StatusBar>

				<View
					style={{
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'space-between',
						alignItems: 'center',
						paddingLeft: 20,
						paddingRight: 20,
						paddingTop: 20,
						paddingBottom: 5,
					}}
				>
					<Text variant="titleMedium">Daily Task</Text>
					<Button mode="contained">+</Button>
				</View>

				{[...Array(3)].map((item) => {
					return (
						<TaskItem
							title="Flush water heater"
							description="Flush out the water to remove sediment."
						/>
					)
				})}

				<View
					style={{
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'space-between',
						alignItems: 'center',
						paddingLeft: 20,
						paddingRight: 20,
						paddingTop: 20,
						paddingBottom: 5,
					}}
				>
					<Text variant="titleMedium">Monthly Task</Text>
					<Button mode="contained">+</Button>
				</View>

				{[...Array(4)].map((item) => {
					return (
						<TaskItem
							title="Flush water heater"
							description="Flush out the water to remove sediment."
						/>
					)
				})}
			</ScrollView>

			{/* <FormTaskBottomSheet></FormTaskBottomSheet> */}
		</>
	)
}
export default App

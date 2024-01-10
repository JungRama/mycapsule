import * as React from 'react'
import { BottomNavigation, Text } from 'react-native-paper'
import HomePage from './home'

const HomeRoute = () => <HomePage></HomePage>

const AlbumsRoute = () => <Text>Albums</Text>

const RecentsRoute = () => <Text>Recents</Text>

const ProfileRoute = () => <Text>Notifications</Text>

const MyComponent = () => {
	const [index, setIndex] = React.useState(0)
	const [routes] = React.useState([
		{
			key: 'home',
			title: 'Home',
			focusedIcon: 'home',
			unfocusedIcon: 'home-outline',
		},
		{
			key: 'task',
			title: 'Task',
			focusedIcon: 'checkbox-multiple-marked',
			unfocusedIcon: 'checkbox-multiple-outline',
		},
		{
			key: 'recents',
			title: 'Goals',
			focusedIcon: 'text-box-check',
			unfocusedIcon: 'text-box-check-outline',
		},
		{
			key: 'profile',
			title: 'Profile',
			focusedIcon: 'account',
			unfocusedIcon: 'account-outline',
		},
	])

	const renderScene = BottomNavigation.SceneMap({
		home: HomeRoute,
		task: AlbumsRoute,
		recents: RecentsRoute,
		profile: ProfileRoute,
	})

	return (
		<BottomNavigation
			navigationState={{ index, routes }}
			barStyle={{
				borderTopWidth: 1,
				borderTopColor: '#E7E7E7',
				backgroundColor: '#ffffff',
			}}
			activeColor="#000000"
			inactiveColor="#8E8E8E"
			onIndexChange={setIndex}
			renderScene={renderScene}
		/>
	)
}

export default MyComponent

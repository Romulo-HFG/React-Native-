import { createStackNavigator } from '@react-navigation/stack';
import HomePage from '../pages/Homepage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import RecoverPage from '../pages/RecoverPage';
import ProfilePage from '../pages/ProfilePage';

const {Navigator, Screen} = createStackNavigator();

export default function MyStack() {
  return (
    <Navigator>
      <Screen name="Home" component={HomePage} options={{
        title: '', headerTransparent: true, headerShown: false

      }} />
      <Screen name="Login" component={LoginPage} options={{
        title: '', headerTransparent: true, headerShown: false }} />
      <Screen name="Register" component={RegisterPage} options={{
        title: '', headerTransparent: true, headerShown: false }} />
      <Screen name="Recover" component={RecoverPage} options={{
        title: '', headerTransparent: true, headerShown: false }} />
          <Screen name="Profile" component={ProfilePage} options={{
        title: '', headerTransparent: true, headerShown: false }} />
    </Navigator>
  );
}
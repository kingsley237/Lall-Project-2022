import React from 'react';
import FirstPage from './component/FirstPage';
import choice from './component/choice/choice';
import SecondPage from './component/SecondPage';
import Home from './component/Home/Home';
import About from './component/About'
import signHome from './component/sign/signHome';
import Userhome from './component/languages/lamnso/Userhome';
import KoropTab from './component/languages/Korop/Userhome';
import DualaTab from './component/languages/Duala/Userhome';
import DoyayoTab from './component/languages/Doyayo/Userhome';
import EwondoTab from './component/languages/Ewondo/Userhome';
import BuluTab from './component/languages/Bulu/Userhome';
import BakaTab from './component/languages/Baka/Userhome';
import GbayaTab from './component/languages/Gbaya/Userhome';
import BanjunTab from './component/languages/Banjun/Userhome';
import Signup from './component/screen/Signup';
import Onboard from './component/Onboard'
import Confirm from './component/Home/Confirm'
import oku from './component/languages/Oku/Userhome'
import splashLamnso from './component/languages/lamnso/splashLamnso'
import splashAwing from './component/languages/Oku/splashAwing'
import splashEwondo from './component/languages/Ewondo/splashEwondo'
import splashBulu from './component/languages/Bulu/splashBulu'
import splashKorop from './component/languages/Korop/splashKorop'
import splashDuala from './component/languages/Duala/splashDuala'
import splashDoyayo from './component/languages/Doyayo/splashDoyayo'
import splashBanjun from './component/languages/Banjun/splashBanjun'
import splashBaka from './component/languages/Baka/splashBaka'
import splashGbaya from './component/languages/Gbaya/splashGbaya'
import internet from './component/Internet/internet'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();
export default function App() {


  return (
    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="FirstPage" component={FirstPage} options={{ headerShown: false }}/>   
        <Stack.Screen name="Onboard" component={Onboard} options={{ headerShown: false }}/>
        <Stack.Screen name="SecondPage" component={SecondPage} options={{ headerShown: false }}/>
        <Stack.Screen name="About" component={About}  options={{ title: '',  headerStyle: {backgroundColor: '#fff'}, headerTintColor: '#000',}}/>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
        <Stack.Screen name="Confirm" component={Confirm} options={{ headerShown: false }}/>
        <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }}/>
        <Stack.Screen name="Choice" component={choice} options={{ headerShown: false }}/>
        <Stack.Screen name="signHome" component={signHome} options={{ headerShown: false }}/>
        <Stack.Screen name="internet" component={internet} options={{ headerShown: false }}/>
         {/* Languages */}
        <Stack.Screen name="Userhome" component={Userhome} options={{ headerShown: false }}/>
        <Stack.Screen name="OkuTab" component={oku} options={{ headerShown: false }}/>
        <Stack.Screen name="Ewondo" component={EwondoTab} options={{ headerShown: false }}/>
        <Stack.Screen name="Bulu" component={BuluTab} options={{ headerShown: false }}/>
        <Stack.Screen name="Baka" component={BakaTab} options={{ headerShown: false }}/>
        <Stack.Screen name="Banjun" component={BanjunTab} options={{ headerShown: false }}/>
        <Stack.Screen name="Korop" component={KoropTab} options={{ headerShown: false }}/>
        <Stack.Screen name="Duala" component={DualaTab} options={{ headerShown: false }}/>
        <Stack.Screen name="Doyayo" component={DoyayoTab} options={{ headerShown: false }}/>
        <Stack.Screen name="Gbaya" component={GbayaTab} options={{ headerShown: false }}/>
        {/* SplashScreens */}
        <Stack.Screen name="splashLamnso" component={splashLamnso} options={{ headerShown: false }}/>
        <Stack.Screen name="splashAwing" component={splashAwing} options={{ headerShown: false }}/>
        <Stack.Screen name="splashEwondo" component={splashEwondo} options={{ headerShown: false }}/>
        <Stack.Screen name="splashBulu" component={splashBulu} options={{ headerShown: false }}/>
        <Stack.Screen name="splashBaka" component={splashBaka} options={{ headerShown: false }}/>
        <Stack.Screen name="splashBanjun" component={splashBanjun} options={{ headerShown: false }}/>
        <Stack.Screen name="splashKorop" component={splashKorop} options={{ headerShown: false }}/>
        <Stack.Screen name="splashDuala" component={splashDuala} options={{ headerShown: false }}/>
        <Stack.Screen name="splashDoyayo" component={splashDoyayo} options={{ headerShown: false }}/>
        <Stack.Screen name="splashGbaya" component={splashGbaya} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

import Formula from '@/screens/Formula'
import FormulaDetail from '@/screens/FormulaDetail'
import Home from '@/screens/Home'
import SplashScreen from '@/screens/SplashScreen'
import Sample from '@/screens/Sample'
import Tool from '@/screens/Tool'
import ToolDetail from '@/screens/ToolDetail'
import Trick from '@/screens/Trick'
import TrickDetail from '@/screens/TrickDetail'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

export type RootStackParamList = {
  SplashScreen: undefined
  Home: undefined
  Formula: undefined
  Tool: undefined
  ToolDetail: undefined
  FormulaDetail: {
    id: number
  }
  Trick: undefined
  TrickDetail: {
    id: number
  }
  Sample: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function RootStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="SplashScreen"
        component={SplashScreen}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Home"
        component={Home}
      />
      <Stack.Screen
        options={{
          title: 'Công thức',
          headerStyle: {
            backgroundColor: '#EFC7FF',
          },
          headerTintColor: '#1F2937',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerBackTitleVisible: false,
        }}
        name="Formula"
        component={Formula}
      />
      <Stack.Screen
        options={{
          title: 'Công thức',
          headerStyle: {
            backgroundColor: '#EFC7FF',
          },
          headerTintColor: '#1F2937',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerBackTitleVisible: false,
        }}
        name="FormulaDetail"
        component={FormulaDetail}
      />
      <Stack.Screen
        options={{
          title: 'Dụng cụ',
          headerStyle: {
            backgroundColor: '#C7CCFF',
          },
          headerTintColor: '#1F2937',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerBackTitleVisible: false,
        }}
        name="Tool"
        component={Tool}
      />
      <Stack.Screen
        options={{
          title: 'Dụng cụ',
          headerStyle: {
            backgroundColor: '#C7CCFF',
          },
          headerTintColor: '#1F2937',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerBackTitleVisible: false,
        }}
        name="ToolDetail"
        component={ToolDetail}
      />
      <Stack.Screen
        options={{
          title: 'Mẹo nhỏ',
          headerStyle: {
            backgroundColor: '#C7E6AF',
          },
          headerTintColor: '#1F2937',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerBackTitleVisible: false,
        }}
        name="Trick"
        component={Trick}
      />
      <Stack.Screen
        options={{
          title: 'Mẹo nhỏ',
          headerStyle: {
            backgroundColor: '#C7E6AF',
          },
          headerTintColor: '#1F2937',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerBackTitleVisible: false,
        }}
        name="TrickDetail"
        component={TrickDetail}
      />
      <Stack.Screen
        options={{
          title: 'Ký hiệu',
          headerStyle: {
            backgroundColor: '#B1E2ED',
          },
          headerTintColor: '#1F2937',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerBackTitleVisible: false,
        }}
        name="Sample"
        component={Sample}
      />
    </Stack.Navigator>
  )
}

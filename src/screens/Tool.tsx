import { ScrollView, Text, View } from 'react-native'
import React from 'react'
import Card from '@/components/Card'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '@/navigation'
import { toolData } from '@/data/data'

type Props = NativeStackScreenProps<RootStackParamList, 'Tool'>

const Tool = ({}: Props) => {
  return (
    <ScrollView className="py-6 px-5 bg-white flex-1">
      <View>
        <View className="mt-2 ">
          {toolData.map((tool) => (
            <View key={tool.title}>
              <Card title={tool.title} imageSource={tool.imageSource} />
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  )
}

export default Tool

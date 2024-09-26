import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '@/navigation'
import { postData } from '@/data/data'

type Props = NativeStackScreenProps<RootStackParamList, 'TrickDetail'>

const TrickDetail = ({ route }: Props) => {
  const { id } = route.params
  const data = postData.find((data) => {
    console.log('🚀 ~ TrickDetail ~ data:', data)
    return data.id === id
  })

  return (
    <View className="flex-1">
      <StatusBar style="light" />
      <Image source={data!.image} className="w-full h-[240px]" />
      <ScrollView>
        {/* Content */}
        <View className="p-4 gap-4">
          {/* Overview */}
          <View className="space-y-2">
            <Text className="text-primary text-xl font-bold">{data!.title}</Text>
            <Text className="text-gray-800 text-md leading-6">{data!.description}</Text>
          </View>
          {data!.content.map((contentPart, idx) => (
            <View className="space-y-2" key={`${contentPart.title}-${idx}`}>
              <Text className="text-primary text-lg font-semibold">{contentPart.title}</Text>
              <View className="space-y-2">
                {/* {contentPart.image && (
                  <Image
                    source={contentPart.image}
                    w="$full"
                    alt="image"
                    height={200}
                    resizeMode="contain"
                  />
                )} */}
                {contentPart.body.map((elm) => (
                  <Text className="text-gray-800 text-md leading-6" key={elm}>
                    {elm}
                  </Text>
                ))}
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  )
}

export default TrickDetail

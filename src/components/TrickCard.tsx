import { Image, ImageSourcePropType, Text, View } from 'react-native'
import React from 'react'

type Props = {
  imageSource: ImageSourcePropType
  title: string
}

const TrickCard = ({ imageSource, title }: Props) => {
  return (
    <View className="w-full mb-2 rounded-2xl flex-row items-center space-x-2">
      <Image source={imageSource} className="w-24 h-24 rounded-lg" />
      <View className="flex-1">
        <Text className="text-lg font-semibold text-gray-800">{title}</Text>
      </View>
    </View>
  )
}

export default TrickCard

import { View, Text, ScrollView, Image, Alert } from 'react-native'
import React, { useCallback, useState } from 'react'
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types'
import { RootStackParamList } from '@/navigation'
import { formulaData } from '@/data/data'
import YoutubePlayer from 'react-native-youtube-iframe'

type Props = {} & NativeStackScreenProps<RootStackParamList, 'FormulaDetail'>

const FormulaDetail = ({ route }: Props) => {
  const params = route.params
  const id = params.id
  const data = formulaData[id]

  const [playing, setPlaying] = useState(false)

  const onStateChange = useCallback((state) => {
    if (state === 'ended') {
      setPlaying(false)
      Alert.alert('video has finished playing!')
    }
  }, [])

  return (
    <ScrollView className="bg-white flex-1">
      <Image source={data.image} className="w-full h-52" resizeMode="cover" />
      <View className="p-5 space-y-8">
        <Text className="font-semibold text-3xl text-primary">{data.title}</Text>
        <View>
          <Text className="text-primary text-xl mb-2">Video hướng dẫn</Text>
          <YoutubePlayer
            height={200}
            play={playing}
            videoId={data.youtubeId}
            onChangeState={onStateChange}
          />
        </View>
        <View>
          <Text className="text-primary text-xl">Các bước thực hiện</Text>
          <View className="space-y-2">
            {data.instructions.map((part, index) => (
              <View className="space-y-4" key={part.title}>
                <View className="space-y-2">
                  <Text className="text-lg font-medium">
                    {index + 1}. {part.title}
                  </Text>
                  <View className="border p-2 rounded-lg">
                    <View className="flex-row justify-between border-b border-gray-300 py-2">
                      <Text className="font-semibold">Round</Text>
                      <Text className="font-semibold">Formula</Text>
                      <Text className="font-semibold">Total sticks</Text>
                    </View>
                    {part.content.map((step, index) => (
                      <View
                        className="flex-row justify-between py-2"
                        key={`${step.formula}-${index}`}
                      >
                        <Text>{index + 1}</Text>
                        <Text>{step.formula}</Text>
                        <Text>{step.sticks}</Text>
                      </View>
                    ))}
                    {/* Add more rows as needed */}
                  </View>
                </View>
                {part.image && (
                  <View className="items-center space-y-2">
                    <Image
                      source={part.image}
                      className="w-full h-44 rounded-sm"
                      resizeMode="cover"
                    />
                    <Text className="text-md font-medium text-primary">
                      Ảnh minh họa phần {part.title}
                    </Text>
                  </View>
                )}
              </View>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default FormulaDetail

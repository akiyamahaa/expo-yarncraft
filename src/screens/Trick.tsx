import { View, TouchableOpacity } from 'react-native'
import React from 'react'
import TrickCard from '@/components/TrickCard'
import { postData } from '@/data/data'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '@/navigation'

type Props = NativeStackScreenProps<RootStackParamList, 'Trick'>

const Trick = ({ navigation }: Props) => {
  return (
    <View className="py-6 px-5 bg-white flex-1">
      <View className="">
        {postData.map((post) => (
          <TouchableOpacity
            key={post.id}
            onPress={() => {
              navigation.navigate('TrickDetail', {
                id: post.id,
              })
            }}
          >
            <TrickCard title={post.title} imageSource={post.image} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  )
}

export default Trick

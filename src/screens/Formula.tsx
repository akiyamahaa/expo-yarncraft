import { TouchableOpacity, View } from 'react-native'
import React from 'react'
import Card from '@/components/Card'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '@/navigation'
import { formulaData } from '@/data/data'

type Props = NativeStackScreenProps<RootStackParamList, 'Formula'>

const Formula = ({ navigation }: Props) => {
  return (
    <View className="py-6 px-5 bg-white flex-1">
      <View>
        <View className="mt-2 ">
          {formulaData.map((data, idx) => (
            <TouchableOpacity
              key={`${data.title}-${idx}`}
              onPress={() =>
                navigation.navigate('FormulaDetail', {
                  id: idx,
                })
              }
            >
              <Card title={data.title} imageSource={data.image} />
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  )
}

export default Formula

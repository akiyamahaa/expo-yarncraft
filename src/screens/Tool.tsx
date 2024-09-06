import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Card from '@/components/Card'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '@/navigation'

type Props = NativeStackScreenProps<RootStackParamList, 'Tool'>

const Tool = ({ navigation }: Props) => {
  return (
    <View className="py-6 px-5 bg-white flex-1">
      <View>
        <Text className="text-[20px] text-gray-800 font-semibold">Mũi cơ bản</Text>
        <View className="mt-2 ">
          <TouchableOpacity onPress={() => navigation.navigate('ToolDetail')}>
            <Card
              title="Len sợi"
              imageUrl="https://s3-alpha-sig.figma.com/img/a497/89fe/d811aad33ccda87eb6e7a77fdca98053?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aL5QZXuNU27815Wd7PAuzvlA961VEfXSVfopxpBvtDyqKLFZTh1D9oymFnagz5E6ve7gijWEcto-Nwdv32IBeZq9vETscebkbtkpnXyOhbqd1SOPe5LGMy0plJTKcyx9S7iyqi8Q3iu5XL63fClAcIWqqM4SbVGwrnH0doJcqa9ASGu04eskBgxnqKs2BrhSOCHTRsIsovP-jc49oZqPRp~wdfavxJVRe2ycEgCRe3m44lXEVwnRWzp4glWD-9xjpyR6P~QfDLZeMrS5Cytdc3rIimnwJQVNHNQS9K4XVfWl2Se1kWDKaKrQfdERnAIUfpR7vkwEIYNQF0qCH1O~~A__"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Tool

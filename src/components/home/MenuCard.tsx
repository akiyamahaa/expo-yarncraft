import { Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

interface Props {
  bgColor: string
  iconName?: string
  title: string
  numberOfFormula: number
}

const MenuCard = ({ bgColor, iconName, numberOfFormula, title }: Props) => {
  return (
    <View className="w-full p-4 rounded-2xl" style={{ backgroundColor: bgColor }}>
      <View className="space-y-12">
        <Ionicons name={iconName || 'apps'} size={40} color={'black'} />
        <View>
          <Text className="text-lg font-semibold text-gray-800">{title}</Text>
          <View className="flex-row items-center justify-between">
            <Text className="text-xs font-semibold text-gray-800">
              {numberOfFormula} {title}
            </Text>
            <Ionicons name={'arrow-forward'} size={20} color={'black'} />
          </View>
        </View>
      </View>
    </View>
  )
}

export default MenuCard

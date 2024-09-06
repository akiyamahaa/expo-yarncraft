import { View, Text } from 'react-native'
import React from 'react'
import TrickCard from '@/components/TrickCard'

type Props = {}

const Trick = (props: Props) => {
  return (
    <View className="py-6 px-5 bg-white flex-1">
      <View className=''>
        <TrickCard
          title="Khám phá cách sửa lỗi móc len bị rối"
          imageUrl="https://s3-alpha-sig.figma.com/img/8198/841a/c2df413439a7e0216fbc24a7cbe928a5?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=orYoJ8vjtzFnB1pKkf95pk0R4YuW0OKFarGpCotg67SDw18E-nZKzVP0yGlkZFViNs0ObZq-lZXwvBo8VZvBfHED7Zn2CWoKMKwy1wMA6E4fwJt3UBZxeLPTyaZ3odnPjE5nds5T3v1Q3y23qo6eB954jle6oFATAXI-hUdU9U~2IilwTQ1dSihdnIXj5thf9Y~YCAYxKmSOGrihKjWiTVbfM9O6jAfjfXxjWMKlrORK5MqHhjjPQVfJj82pRixBDzPqOCaVgc01e79QxNn4p8mYlfHVGFa99CY2yzFyKRl6D0oIggUUzld8u6RpMNh1nViul8fPXfFm2hPlB6Yesw__"
        />
      </View>
    </View>
  )
}

export default Trick

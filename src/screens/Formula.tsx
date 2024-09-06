import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Card from '@/components/Card'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '@/navigation'

type Props = NativeStackScreenProps<RootStackParamList, 'Formula'>

const Formula = ({ navigation }: Props) => {
  return (
    <View className="py-6 px-5 bg-white flex-1">
      <View>
        <Text className="text-[20px] text-gray-800 font-semibold">Mũi cơ bản</Text>
        <View className="mt-2 ">
          <TouchableOpacity onPress={() => navigation.navigate('FormulaDetail')}>
            <Card
              title="Móc xích"
              imageUrl="https://s3-alpha-sig.figma.com/img/555a/b42e/f8c769a3dcd035f84b62397e98c27b9c?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=U8-orzLT2HwnUwcYyeREWKDlXvByWEBbpsu7-oxvQtnqT3aM2~rURVTZ2e~mpcMyaA~y6dlCNhmXtS34cEahJfRlxcHrqnMrXRpe0NYlEc0SIiENc1htS0wPXb1yTKW83YGQ4UTe5u83KndOEAuHYNjNOIpt7JNl0u~Ue4Yg-ExvcSWh0qV1T0IRvMSbRKGYHkwFfQPkKdjblpWCj5rEOCNVxHnQDZQNSroPYzFTrhfOpErJrZE3AIJeoARM~nkBMT9M3foqb3aHebBKruU2ZQmy8KUTHeSjiU8raxsCgaYTJggIsmg4dLfteaNCKdTGwXBxoJ32BVxwgrkBpZC2HQ__"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Card
              title="Mũi trượt"
              imageUrl="https://s3-alpha-sig.figma.com/img/1b86/b058/facb55117d4855d71847afff5c22d447?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CIe--aexknWEK3dmQ49huiIxpKxxJnta10-b22~69ABXGxuk3Np~KM1Sj4W6HEYZ3lv71wZmj27zfIDRHIbcGR7Ky1YeUmuF5ebLHv5AhSAvFXRbm3Fvh9Yl0j6IFo~uE4rk6sYaMu5aWqnaPHqCzWiRBWYQJ5BFBsBF3hQ8lU1LJHdEyvvx~AEwM0qqlcncnVHTL1~OlJmco8XdJpBE9z1l~txirTji23ziRT2N3oSBPHER9ogWhKBI~ZF595d0XV6DuJ-VbEl024FMtmL7Y7CynginwuSVe3GFcpNgpehtkcQ-wekYzvLm8xDgN1y54Qft4S7-hxkn2UT5fyflEQ__"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Card
              title="Móc đơn"
              imageUrl="https://s3-alpha-sig.figma.com/img/a6a6/ca09/2b3e28933ac6350675e1050dcb8f47e8?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XXF3OMlEp-KZevuz3BVdWg1-cOj~LFz5SimFhWPBkPFYome3K70~eBD3apHccjfaC8vNmk6CCslL9sfwkW295PpTDMy6W7HaHfmUNT0L596CrELD5QOKOUJSv0iKmuiWmHG84zoLDQDYfCsrEwh~ffocNks-UcWJE~ET4BQMWcNUNPul4BoK59hNnAIH~itCbbdOqG4Jau0GGjldzGzloINzV-5zYhjZPkF1NWRxA8hd0ZAWnSpVbGikJsvYmq6EJo6Lizn4piLlXk41F23A8culBANhoK553e0QGWa-Otq2uVAHrhc4Py82nPg~gWCNXjrGAD8Rvej5Eq5wk-g3VQ__"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Formula

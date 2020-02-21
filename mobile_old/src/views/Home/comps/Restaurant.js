import React, { useEffect, useState} from 'react'
import { View, Text, Image } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

// import { Container } from './styles';

import camera from '../../../../assets/camera.svg'

export default function Restaurant(props) {
  const [restaurant, setRestaurant] = useState(props.restaurant)
  useState(() => {
    console.log('camera', camera)
  }, [])
  return (
    <View style={{flex: 1, borderWidth: .5, borderStyle: 'solid', borderColor: '#ccc', paddingVertical: 10}}>
      <Image source={camera} resizeMode={'cover'} style={{ width: 200, height: 200, flex: 1, alignSelf: 'center', backgroundColor: '#cecece', borderColor: '#ccc',  }} />
      <View style={{padding: 15}}>
        <Text style={{fontSize: 20, color: '#FFEBD0', fontWeight: '600', paddingLeft: 10}}>{restaurant.name}</Text>
      </View>
      <View style={{padding: 15}}>
        <Text style={{fontSize: 14, color: '#FFEBD0',}}>
          <Icon name={'map-pin'} />
          {restaurant.address.address} - {restaurant.address.city}
        </Text>
      </View>
    </View>
  )
}

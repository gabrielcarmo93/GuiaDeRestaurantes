import React, { useState, useEffect } from 'react';
import api from '../../services/api'

import { SafeAreaConsumer } from 'react-native-safe-area-context'
import { Container, Text } from './styles'
import { View } from 'react-native'
import Restaurant from './comps/Restaurant'
import data from '../../data.json'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [restaurants, setRestaurants] = useState([])

  React.useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    console.log('mudei', restaurants.length, restaurants)
    if (restaurants.length > 0) setIsLoading(false)
  },[restaurants])
  
  const getData = async () => {
    const response = await api.get('/restaurants')
    
    if (response.status !== 200) {
      setTimeout(() => setRestaurants(response.data),3000)
    } else {
      setRestaurants(data)
    }
  }

  return (
    <Container>
      {
        isLoading ? <View style={{display: 'flex', height: '90vh', justifyContent: 'center', alignItems: 'center'}}><Text>Carregando</Text></View> : (
          <>
          {
            restaurants.map(restaurant => (
              <Restaurant
                restaurant={restaurant}
                key={restaurant.id}
              />
            ))
          }
          </>
        )
      }
    </Container>
  )
}

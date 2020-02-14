import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'
import api from '../../services/api'

export default class index extends Component {
  state = {
    restaurants: []
  }

  async componentDidMount() {
    const response = await api.get('/restaurants')

    this.setState({ restaurants: response.data })
  }
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
        <FlatList
          data={this.state.restaurants}
          keyExtractor={restaurant => restaurant.id}
          renderItem={({restaurant}) => {
            <View>
              <Text>Restaurante {restaurant.name}</Text>
            </View>
          }}
        />

      </View>
    )
  }
}

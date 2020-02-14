'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class RestaurantAddress extends Model {
  restaurant () {
    return this.belongsTo('App/Models/Restaurant')
  }
}

module.exports = RestaurantAddress

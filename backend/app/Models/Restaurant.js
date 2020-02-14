'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Restaurant extends Model {
  address () {
    return this.hasOne('App/Models/RestaurantAddress')
  }

  user () {
    return this.belongsTo('App/Models/User')
  }

  menu () {
    return this.hasMany('App/Models/RestaurantMenu')
  }
}

module.exports = Restaurant

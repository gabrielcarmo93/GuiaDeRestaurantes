'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RestaurantMenuSchema extends Schema {
  up () {
    this.create('restaurant_menus', (table) => {
      table.increments()
      table.integer('restaurant_id').notNullable().unsigned().references('id').inTable('restaurants').onUpdate('CASCADE').onDelete('CASCADE')
      table.string('name')
      table.string('regular_price')
      table.string('promotional_price')
      table.string('note')
      table.string('comment')
      table.integer('rate')
      table.timestamps()
    })
  }

  down () {
    this.drop('restaurant_menus')
  }
}

module.exports = RestaurantMenuSchema

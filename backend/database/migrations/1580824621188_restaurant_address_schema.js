'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RestaurantAddressSchema extends Schema {
  up () {
    this.create('restaurant_addresses', (table) => {
      table.increments()
      table.integer('restaurant_id').notNullable().unsigned().references('id').inTable('restaurants').onUpdate('CASCADE').onDelete('CASCADE')
      table.string('address').notNullable()
      table.string('address_details')
      table.string('city').notNullable()
      table.string('state')
      table.string('country')
      table.string('zip_code')
      table.timestamps()
    })
  }

  down () {
    this.drop('restaurant_addresses')
  }
}

module.exports = RestaurantAddressSchema

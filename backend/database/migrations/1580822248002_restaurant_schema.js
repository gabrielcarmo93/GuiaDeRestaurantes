'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RestaurantSchema extends Schema {
  up () {
    this.create('restaurants', (table) => {
      table.increments()
      table.integer('user_id').unsigned().notNullable().references('id').inTable('users').onUpdate('CASCADE').onDelete('CASCADE')
      table.string('name').notNullable()
      table.float('rate')
      table.boolean('tips').default(true)
      table.timestamps()
    })
  }

  down () {
    this.drop('restaurants')
  }
}

module.exports = RestaurantSchema

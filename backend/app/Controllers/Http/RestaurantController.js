'use strict'

const Restaurant = use('App/Models/Restaurant')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with restaurants
 */
class RestaurantController {
  /**
   * Show a list of all restaurants.
   * GET restaurants
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index () {
    const restaurants = await Restaurant.query().with('address').fetch()

    return restaurants
  }


  /**
   * Create/save a new restaurant.
   * POST restaurants
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, auth }) {
    const { name, tips, regularPrice, promotionalPrice } = request.all()

    const restaurant = await Restaurant.create({
      user_id: auth.user.id,
      name,
      tips
    })

    return restaurant
  }

  /**
   * Display a single restaurant.
   * GET restaurants/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params }) {
    const restaurant = await Restaurant.findOrFail(params.id)
    await restaurant.load('address')
    await restaurant.load('menu')

    return restaurant
  }


  /**
   * Update restaurant details.
   * PUT or PATCH restaurants/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const restaurant = await Restaurant.find(params.id)
    const { name, regular_price, promotional_price, tips, opening_hours } = request.all()

    restaurant.name = name
    restaurant.tips = tips

    
    return await restaurant.save()
  }

  /**
   * Delete a restaurant with id.
   * DELETE restaurants/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, auth, response }) {
    const restaurant = await Restaurant.findOrFail(params.id)

    if (restaurant.user_id !== auth.user.id) {
      return response.status(401) 
    }

    return await restaurant.delete()
  }
}

module.exports = RestaurantController

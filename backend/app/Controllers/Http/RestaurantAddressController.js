'use strict'

const RestaurantAddress = use('App/Models/RestaurantAddress')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with restaurantaddresses
 */
class RestaurantAddressController {
  /**
   * Show a list of all restaurantaddresses.
   * GET restaurantaddresses
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const address = await RestaurantAddress.all()

    return address
  }


  /**
   * Create/save a new restaurantaddress.
   * POST restaurantaddresses
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ params, request, response }) {
    // const restaurant_id = params.id
    const { restaurant_id, address, address_details, city, state, country, zip_code } = request.all()

    const restaurantAddress = await RestaurantAddress.create({
      restaurant_id,
      address,
      address_details,
      city,
      state,
      country,
      zip_code
    })

    return restaurantAddress
  }

  /**
   * Display a single restaurantaddress.
   * GET restaurantaddresses/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const id = params.id

    const address = RestaurantAddress.findOrFail(id)

    return address
  }


  /**
   * Update restaurantaddress details.
   * PUT or PATCH restaurantaddresses/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const id = params.id

    const address = await RestaurantAddress.findOrFail(id)

    address.address,
    address.address_details,
    address.city,
    address.state,
    address.country,
    address.zip_code

    return await address.save()
  }

  /**
   * Delete a restaurantaddress with id.
   * DELETE restaurantaddresses/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const restaurant = await RestaurantAddress.findOrFail(params.id)

    return await restaurant.delete()
  }
}

module.exports = RestaurantAddressController

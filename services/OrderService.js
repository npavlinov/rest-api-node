'use strict'

import Order from '../database/models/OrderModel'

export default class OrderService {
  /**
   * This method finds all orders
   */
  static async getAll() {
    return await Order.find()
  }

  /**
   * This method creates an order based on data
   * @param {Object} data
   */
  static async create(data) {
    return await Order.create(data)
  }

  static async updateStatus(id, status) {
    // const allowedStatuses = ['Pending', 'Processing', 'Delivered', 'Canceled']
    // if (!allowedStatuses.includes(status)) {
    //   throw new TypeError('New status is invalid!')
    // }
    return await Order.updateOne(
      { _id: id },
      { status },
      { runValidators: true }
    )
  }
}

'use strict'

import OrderService from '../services/OrderService'

/**
 * This class implements a controller for the Products
 * It will handle all requests made to the routes for
 * managing CRUD operations on Products
 */
export default class OrderController {
  /**
   * This method creates an order
   * @param {Object} req
   * @param {Object} res
   * @param {Object} next
   */
  static async create(req, res, next) {
    try {
      const data = {
        products: req.body.products.split(','),
        status: req.body.status,
      }
      await OrderService.create(data)
      res.status(200).send({ message: 'Order Created!' })
    } catch (err) {
      return next(err)
    }
  }

  /**
   * This method finds all orders
   * @param {Object} req
   * @param {Object} res
   * @param {Object} next
   */
  static async readAll(req, res, next) {
    try {
      const orders = await OrderService.getAll()
      res.status(200).send(orders)
    } catch (err) {
      return next(err)
    }
  }

  /**
   * This method updates an order
   * @param {Object} req
   * @param {Object} res
   * @param {Object} next
   */
  static async update(req, res, next) {
    try {
      await OrderService.updateStatus(req.params.id, req.body.status)
      res.status(200).send({ message: 'Order status updated!' })
    } catch (err) {
      return next(err)
    }
  }
}

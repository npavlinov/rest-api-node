'use strict'

import ProductService from '../services/ProductService'
import calculatePrice from '../utils/calculatePrice'

/**
 * This class implements a controller for the Products
 * It will handle all requests made to the routes for
 * managing CRUD operations on Products
 */
export default class ProductController {
  /**
   * This method creates a product
   * @param {Object} req
   * @param {Object} res
   * @param {Object} next
   */
  static async create(req, res, next) {
    try {
      await ProductService.create(req.body)
      res.status(200).send({ message: 'Product Created!' })
    } catch (err) {
      return next(err)
    }
  }

  /**
   * This method finds all products
   * @param {Object} req
   * @param {Object} res
   * @param {Object} next
   */
  static async readAll(req, res, next) {
    try {
      let products = await ProductService.getAll()
      for (const product of products) {
        product.price = await calculatePrice(req.country, product.price)
      }
      res.status(200).send(products)
    } catch (err) {
      return next(err)
    }
  }

  /**
   * This method finds all products
   * @param {Object} req
   * @param {Object} res
   * @param {Object} next
   */
  static async update(req, res, next) {
    try {
      await ProductService.update(req.params.id, req.body)
      res.status(200).send({ message: 'Product updated!' })
    } catch (err) {
      return next(err)
    }
  }

  /**
   * This method deletes a record from the product collection
   * @param {Object} req
   * @param {Object} res
   * @param {Object} next
   */
  static async destroy(req, res, next) {
    try {
      await ProductService.destroy(req.params.id)
      res.status(200).send({ message: 'Product deleted!' })
    } catch (err) {
      return next(err)
    }
  }
}

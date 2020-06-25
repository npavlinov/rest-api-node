'use strict'

import Product from '../database/models/ProductModel'
import mongoose from 'mongoose'

/**
 * This class implements a service for the Product model
 * to handle all CRUD operations
 */
export default class ProductService {
  /**
   * This method creates a Product instance
   * @param {Object} data
   */
  static async create(data) {
    return await Product.create(data)
  }

  /**
   * This method finds a Product instance by id
   * @param {Number} id
   */
  static async get(id) {
    return await Product.findById(mongoose.Types.ObjectId(id))
  }

  /**
   * This method finds all instances of a Product
   */
  static async getAll() {
    return await Product.find()
  }

  /**
   * This method updates a record
   */
  static async update(id, data) {
    return await Product.updateOne({_id: id}, data)
  }

  /**
   * This method deletes a record
   */
  static async destroy(id) {
    return await Product.deleteOne({_id: id})
  }
}

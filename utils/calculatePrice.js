'use strict'

import axios from 'axios'

/**
 * This file exports a method which requests the public API of Euvatrates
 * and then calculates a price including vat based on the provided country
 * within the parameters
 * @param {String} country
 * @param {Number} price
 */
export default async function (country, price) {
  const VAT_API_URL = 'https://euvatrates.com/rates.json'
  const rates = await axios.get(VAT_API_URL)
  const countryRate = rates.data.rates[country].standard_rate
  return price + (price * countryRate) / 100
}

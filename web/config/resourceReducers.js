/**
 * Reads and exports the reducers as defined by each resource module
 *
 * NOTE: this facilitates adding reducers via the CLI
 */

export { default as user } from '../resources/user/userReducers.js';
export { default as product } from '../resources/product/productReducers.js';

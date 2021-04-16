/**
 * Mocking client-server processing
 */
 const _products = [
    { 'id': 1, 'title': 'iPad 4 Mini', 'price': 500.01, 'inventory': 2 },
    { 'id': 2, 'title': 'H&M T-Shirt White', 'price': 10.99, 'inventory': 10 },
    { 'id': 3, 'title': 'Charli XCX - Sucker CD', 'price': 19.99, 'inventory': 5 },
    { 'id': 4, 'title': 'Generic Comic Book', 'price': 39.99, 'inventory': 7 },
    { 'id': 5, 'title': 'Generic Book', 'price': 60.00, 'inventory': 10 },
    { 'id': 6, 'title': 'Vue.js Course', 'price': 150.00, 'inventory': 30 },
    { 'id': 7, 'title': 'Table', 'price': 19.99, 'inventory': 2 },
    { 'id': 8, 'title': 'Generic Comic Book', 'price': 39.99, 'inventory': 7 },
    { 'id': 9, 'title': 'Generic Book', 'price': 60.00, 'inventory': 10 },
    { 'id': 10, 'title': 'Vue.js Course', 'price': 150.00, 'inventory': 30 },
    { 'id': 11, 'title': 'Table', 'price': 19.99, 'inventory': 2 },
    { 'id': 12, 'title': 'Generic Comic Book', 'price': 39.99, 'inventory': 7 },
    { 'id': 13, 'title': 'Generic Book', 'price': 60.00, 'inventory': 10 },
    { 'id': 14, 'title': 'Vue.js Course', 'price': 150.00, 'inventory': 30 },
    { 'id': 15, 'title': 'Table', 'price': 19.99, 'inventory': 2 },
    { 'id': 16, 'title': 'Vue.js Course', 'price': 150.00, 'inventory': 30 },
    { 'id': 17, 'title': 'Table', 'price': 19.99, 'inventory': 2 },
    { 'id': 18, 'title': 'Generic Comic Book', 'price': 39.99, 'inventory': 7 },
    { 'id': 19, 'title': 'Generic Book', 'price': 60.00, 'inventory': 10 },
    { 'id': 20, 'title': 'Vue.js Course', 'price': 150.00, 'inventory': 30 },
    { 'id': 21, 'title': 'Table', 'price': 19.99, 'inventory': 2 }
  ]
  
  export default {
    getProducts (cb) {
      setTimeout(() => cb(_products), 100)
    },
  
    buyProducts (products, cb, errorCb) {
      setTimeout(() => {
        // simulate random checkout failure.
        (Math.random() > 0.5 || navigator.webdriver)
          ? cb()
          : errorCb()
      }, 100)
    }
  }
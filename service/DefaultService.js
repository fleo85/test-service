'use strict';


/**
 * Crea un nuovo utente
 *
 * body User 
 * returns User
 **/
exports.usersPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "surname" : "surname",
  "currentCart" : {
    "id" : 6,
    "status" : "status",
    "products" : [ {
      "quantity" : 0,
      "productId" : 1
    }, {
      "quantity" : 0,
      "productId" : 1
    } ]
  },
  "name" : "name",
  "id" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Restituisce i dettagli di un carrello inclusi gli item
 *
 * userId String 
 * cartId String 
 * returns Cart
 **/
exports.usersUserIdCartsCartIdGET = function(userId,cartId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : 6,
  "status" : "status",
  "products" : [ {
    "quantity" : 0,
    "productId" : 1
  }, {
    "quantity" : 0,
    "productId" : 1
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Modifica lo stato del carrello portandolo in finalizzato
 *
 * body Cart 
 * userId String 
 * cartId String 
 * returns Cart
 **/
exports.usersUserIdCartsCartIdPUT = function(body,userId,cartId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : 6,
  "status" : "status",
  "products" : [ {
    "quantity" : 0,
    "productId" : 1
  }, {
    "quantity" : 0,
    "productId" : 1
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Aggiunge un prodotto con una quantità al carrello
 *
 * body CartLine 
 * userId String 
 * cartId String 
 * productId String 
 * returns Cart
 **/
exports.usersUserIdCartsCartIdProductsProductIdPUT = function(body,userId,cartId,productId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : 6,
  "status" : "status",
  "products" : [ {
    "quantity" : 0,
    "productId" : 1
  }, {
    "quantity" : 0,
    "productId" : 1
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Ritorna tutti i carrelli dell'utente
 *
 * userId String 
 * returns CartList
 **/
exports.usersUserIdCartsGET = function(userId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "total" : 0,
  "products" : [ {
    "id" : 6,
    "status" : "status",
    "products" : [ {
      "quantity" : 0,
      "productId" : 1
    }, {
      "quantity" : 0,
      "productId" : 1
    } ]
  }, {
    "id" : 6,
    "status" : "status",
    "products" : [ {
      "quantity" : 0,
      "productId" : 1
    }, {
      "quantity" : 0,
      "productId" : 1
    } ]
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Crea un carrello vuoto attivo per l'utente
 *
 * userId String 
 * returns Cart
 **/
exports.usersUserIdCartsPOST = function(userId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : 6,
  "status" : "status",
  "products" : [ {
    "quantity" : 0,
    "productId" : 1
  }, {
    "quantity" : 0,
    "productId" : 1
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Restituisce informazioni su utente ed id del carrello corrente se esiste
 *
 * userId String 
 * returns User
 **/
exports.usersUserIdGET = function(userId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "surname" : "surname",
  "currentCart" : {
    "id" : 6,
    "status" : "status",
    "products" : [ {
      "quantity" : 0,
      "productId" : 1
    }, {
      "quantity" : 0,
      "productId" : 1
    } ]
  },
  "name" : "name",
  "id" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


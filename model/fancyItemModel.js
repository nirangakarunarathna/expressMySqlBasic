"user strict";
const sql = require("../common/db.js");

const data = {};

data.getAllFancyItems = async function () {
  return new Promise((resolve, reject) => {
    sql.query("SELECT * FROM fancyitem;", function (err, res) {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
};

data.addToFavorite = async function (userId, itemId) {
  return new Promise((resolve, reject) => {
    sql.query(
      "INSERT INTO favorite (`userId`, `itemId`) VALUES (?,?);",
      [userId, itemId],
      function (err, res) {
        if (err) {
          reject(err);
        } else {
          resolve("Added");
        }
      }
    );
  });
};

data.getFavoriteItems = async function () {
  return new Promise((resolve, reject) => {
    sql.query("SELECT * FROM favorite;", function (err, res) {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
};

data.getCartItems = async function () {
  return new Promise((resolve, reject) => {
    sql.query("SELECT * FROM cart;", function (err, res) {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
};

data.removeFromFavorite = async function (userId, itemId) {
  return new Promise((resolve, reject) => {
    sql.query(
      "DELETE FROM `favorite` WHERE (`userId` = ? and `itemId` = ?);",
      [userId, itemId],
      function (err, res) {
        if (err) {
          reject(err);
        } else {
          resolve("Deleted");
        }
      }
    );
  });
};

data.addToCart = async function (userId, itemId, quantity) {
  return new Promise((resolve, reject) => {
    sql.query(
      "INSERT INTO cart (`userId`, `itemId`,`quantity`) VALUES (?,?,?);",
      [userId, itemId, quantity],
      function (err, res) {
        if (err) {
          reject(err);
        } else {
          resolve("Added");
        }
      }
    );
  });
};

data.removeFromCart = async function (userId, itemId) {
  return new Promise((resolve, reject) => {
    sql.query(
      "DELETE FROM `cart` WHERE (`userId` = ? and `itemId` = ?);",
      [userId, itemId],
      function (err, res) {
        if (err) {
          reject(err);
        } else {
          resolve("Deleted");
        }
      }
    );
  });
};

module.exports = data;

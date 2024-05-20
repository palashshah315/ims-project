let client = require('../dbConnection');
let collection_ims = client.db('ims').collection('ims'); //TODO can be better
let Collection_addData = client.db('ims').collection('adddata');
let Collection_addStockData = client.db('ims').collection('addstockdata');


// function getTotalSummaryReport(callback) {
//     collection_ims.find().toArray(callback);
// }

function addData(data, callback) {
    Collection_addData.insertOne(data,callback);
}

function getAllOrders(callback) {
    Collection_addData.find().toArray(callback);
}

function addStockData(stockdata, callback){
    Collection_addStockData.insertOne(stockdata,callback);
}

function getAllStockData(callback){
    Collection_addStockData.find().toArray(callback);
}

function deleteOrderDataByItemId(itemId, callback){
    Collection_addData.deleteOne(itemId,callback);
}

function deleteStockDataByItemId(itemId, callback){
    Collection_addStockData.deleteOne(itemId,callback);
}
 function generateSalesReport(category, callback){
     Collection_addData.find(category).toArray(callback);
}

function login(loginData, callback){
    collection_ims.find(loginData).toArray(callback);
    console.log("here")
}
module.exports = { login, generateSalesReport,deleteOrderDataByItemId, deleteStockDataByItemId, addData, getAllOrders, addStockData, getAllStockData}
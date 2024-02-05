const Trades = require("../models/trades")
const {
  method_not_allowed_msg
} = require('../utils/constant')
  class TradesService {
      async CreateTrade(data) {
        return await Trades.create(data);
        }
     async FindAllTrades(conditions){
      return await Trades.findAll({ where: conditions });
     }
     async FindTrade(id){
      return await Trades.findOne({where:{id}});
     }
     async UpdateTrade(id){
      return method_not_allowed_msg;
     }
     async ModifyTrade(id){
      return method_not_allowed_msg;
     }
   
     async DeleteTrade(id){
      return method_not_allowed_msg;
     }
  }
  
  module.exports = TradesService;
  
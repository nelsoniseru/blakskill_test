const {
    STATUS_CODE_CREATED ,
  STATUS_CODE_BAD_REQUEST,
  STATUS_CODE_OK,
  STATUS_CODE_METHOD_NOT_ALLOWED,
  id_not_found_msg,
  STATUS_CODE_NOT_FOUND
} = require('../utils/constant')

class TradesController{
    constructor(tradesService) {
        this.tradesService = tradesService;
      }
    async CreateTrade(req,res){
        try {
          const trade = await this.tradesService.CreateTrade(req.body);
         
            return res
              .status(STATUS_CODE_CREATED).json(trade);
          } catch (error) {
            return res
              .status(STATUS_CODE_BAD_REQUEST)
              .json({ success: false, message: error.message });
          }
        }

    async FindAllTrades(req,res){
        try{
       const trades = await this.tradesService.FindAllTrades();
        return res
          .status(STATUS_CODE_OK).json(trades)
      } catch (error) {
        return res
          .status(STATUS_CODE_BAD_REQUEST)
          .json({ success: false, message: error.message });
      }
    }

    async FindTrade(req,res){
        try{
        const { id } = req.params
       const trade = await this.tradesService.FindTrade(id);
       if(trade) return res.status(STATUS_CODE_OK).json(trade)
       
        return res.status(STATUS_CODE_NOT_FOUND).send(id_not_found_msg)

     } catch (error) {
        return res
          .status(STATUS_CODE_BAD_REQUEST)
          .json({ success: false, message: error.message });
      }
    }

  
async UpdateTrade(req,res){
        try{
       const { id } = req.params
       const text = await this.tradesService.UpdateTrade(id);
        return res.status(STATUS_CODE_METHOD_NOT_ALLOWED).json(text)
      } catch (error) {
        return res
          .status(STATUS_CODE_BAD_REQUEST)
          .json({ success: false, message: error.message });
      }
    }


    async ModifyTrade(req,res){
        try{
        const { id } = req.params
       const text = await this.tradesService.ModifyTrade(id);
        return res.status(STATUS_CODE_METHOD_NOT_ALLOWED).json(text)
      } catch (error) {
        return res
          .status(STATUS_CODE_BAD_REQUEST)
          .json({ success: false, message: error.message });
      }
    }

    async DeleteTrade(req,res){
        try{
        const { id } = req.params
       const text = await this.tradesService.DeleteTrade(id);
        return res.status(STATUS_CODE_METHOD_NOT_ALLOWED).json(text)
      } catch (error) {
        return res
          .status(STATUS_CODE_BAD_REQUEST)
          .json({ success: false, message: error.message });
      }
    }
}
    

module.exports = TradesController
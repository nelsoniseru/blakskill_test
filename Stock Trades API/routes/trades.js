const express = require('express');
const router = express.Router();
const Trades = require('../models/trades');
const TradesService = require("../service/trades.service")
const TradesController = require("../controllers/trades")
const tradesService = new TradesService();
const tradesController = new TradesController(tradesService);
// POST /trades - Create a new trade
router.post('/', (req, res) => tradesController.CreateTrade(req, res));
router.get('/', (req, res) => tradesController.FindAllTrades(req, res));
router.get('/:id', (req, res) => tradesController.FindTrade(req, res));
 router.put('/:id', (req, res) => tradesController.UpdateTrade(req, res))
 router.patch('/:id', (req, res) => tradesController.ModifyTrade(req, res))
 router.delete('/:id', (req, res) => tradesController.DeleteTrade(req, res))




module.exports = router;

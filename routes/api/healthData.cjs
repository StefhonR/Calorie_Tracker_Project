const express = require('express');
const router = express.Router();
const healthDataCtrl = require('../../controllers/api/healthData.cjs')


router.get('/data', healthDataCtrl.data)

router.post('/', healthDataCtrl.create)

module.exports = router;
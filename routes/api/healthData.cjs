const express = require('express');
const router = express.Router();
const healthDataCtrl = require('../../controllers/api/healthData.cjs')

router.post('/', healthDataCtrl.create)

router.get('/data', healthDataCtrl.data)

router.delete('/delete', healthDataCtrl.deleteData)

module.exports = router;
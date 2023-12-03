const express = require('express');
const router = express.Router();
const realEstateController = require('../Controller/realEstateController');

router.get('/', realEstateController.getAllRealEstates);
router.post('/', realEstateController.addRealEstate);
router.delete('/:id', realEstateController.deleteRealEstate);
router.patch('/:id/purchase', realEstateController.purchaseRealEstate);

module.exports = router;

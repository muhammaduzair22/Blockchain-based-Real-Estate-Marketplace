const RealEstate = require('../models/RealEstate');

// Get all real estate listings
exports.getAllRealEstates = async (req, res) => {
  try {
    const realEstates = await RealEstate.find();
    res.json(realEstates);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add a new real estate listing
exports.addRealEstate = async (req, res) => {
  const realEstate = new RealEstate(req.body);
  try {
    const newRealEstate = await realEstate.save();
    res.status(201).json(newRealEstate);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a real estate listing
exports.deleteRealEstate = async (req, res) => {
    try {
      const result = await RealEstate.findByIdAndDelete(req.params.id);
      if (!result) {
        return res.status(404).json({ message: 'Cannot find real estate' });
      }
      res.json({ message: 'Deleted Real Estate' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  
  

// Purchase a real estate listing
exports.purchaseRealEstate = async (req, res) => {
  try {
    const realEstate = await RealEstate.findById(req.params.id);
    if (!realEstate) return res.status(404).json({ message: 'Cannot find real estate' });
    if (realEstate.isPurchased) return res.status(400).json({ message: 'Real Estate already purchased' });

    realEstate.isPurchased = true;
    await realEstate.save();
    res.json({ message: 'Real Estate Purchased' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

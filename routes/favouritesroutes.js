const express = require('express');
const router = express.Router();
const Favourites = require('../controllers/favouritecontrollers');

router.route('/').post(Favourites.addFavourite)
.get(Favourites.getallFavourites);
router.get('/:favouriteID', Favourites.getSingleFavourite );

module.exports = router;


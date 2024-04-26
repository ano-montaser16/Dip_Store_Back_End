const Favourite = require('../models/favsmodel');

const addFavourite = async (req, res) => {


    try {
        const addFav = new Favourite(req.body);
        await addFav.save();
        res.status(200).json(addFav);

    } catch (err) {
        return res.status(400).json({ error: err.message });
    }


};
const getSingleFavourite = async (req, res) => {
    try {
        const id = req.params.favouriteID;
        const singleFavourite = await Favourite.findById(id);
        if (!singleFavourite) {
            return res.status(404).json({ message: "Product is not found in Favourites" });
        }
        res.json(singleFavourite);

    } catch (error) {
        return res.status(404).json({
            message: "ID is not correct"
        });
    }

};

const getallFavourites = async (req, res) => {
    try {
        let favourites = await Favourite.find();
        if (!favourites) {
            return res.json({ Message: "Nothing found" });
        }
        res.json(favourites);
    } catch (err) {
    return res.status(400).json({ error: err.message });
    }
}


module.exports = {
        getSingleFavourite,
        getallFavourites,
        addFavourite,
    }


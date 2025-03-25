import mongoose from "mongoose";
import Restaurant from "../RestaurantSchema";

const getRestaurant = async (req, res)=>{
    try{
        const restaurant= await Restaurant.find();
        res.status(200).json(restaurants);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
}

const postRestaurant =async (req, res)=> {
    const restaurant = req.body;
    const newRestaurant = new Restaurant(restaurant);
    try{
        await newRestaurant.save();
        res.satuts(201).json(newRestaurant);
    }catch (error) {
        res.status(409).json({message: error.message});
    }
}

const deleteRestaurant = async (req, res)=>{
    const id = req.params.id;
    if(!mongoose.Types.ObjectedId.isValid(id)){
        return res.status(404).json({message: "Restaurant not found"});
    }try {
        await Restaurant.findByIdAndDelete(id);
        res.status(200).json({message: "Restaurant deleted successfully"})
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export default getRestaurant;
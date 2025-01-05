import express from "express";
import { fetchWeather } from "../services/weather_service";

const router = express.Router();

router.get("/:city", async (req, res) => {
    const city: string = req.params.city;

    try {
        const weatherData = await fetchWeather(city);
        res.status(200).json(weatherData);
    } catch (error) {
        res.status(500).json({error: "Failed to fetch weather"});
    }
})

export default router;
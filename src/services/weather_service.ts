import axios from "axios";
import { WeatherResponse } from "../types/weather"

const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export const fetchWeather = async (city: string): Promise<WeatherResponse> => {
    const API_KEY = process.env.API_KEY;
    const response = await axios.get(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric&lang=pt_br`);

    return response.data;
}
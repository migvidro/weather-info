interface WeatherData {
    id: number;
    main: string;
    description: string;
}

interface MainWeatherData {
    temp: number;
    pressure: number;
    humidity: number;
}

export interface WeatherResponse {
    coordinates: {lng: number; lat: number};
    weather: WeatherData[];
    main: MainWeatherData;
    name: string;
}
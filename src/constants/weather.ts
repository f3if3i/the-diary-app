import { IconType } from "react-icons/lib"
import { WiDaySunny, WiCloudy, WiNa } from "react-icons/wi"

interface WeatherIcon {
    [weatherName: string]: IconType
}

export const WEATHER_ICON: WeatherIcon =
{
    cloudy: WiCloudy,
    sunny: WiDaySunny,
    na: WiNa,
}

interface Weather {
    [weatherName: string]: string
}

export const WEATHER: Weather = {
    cloudy: "Cloudy",
    sunny: "Sunny"
}



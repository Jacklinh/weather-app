
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { weatherConfig } from '../../data/weatherConfig';
import { WiDayStormShowers } from "react-icons/wi";
import { FiMapPin,FiClock } from "react-icons/fi";
import styles from './CurrentWeather.module.css';
interface hourProps {
    temp_c: number,
    condition: {
        icon: string,
    },
    time: string,
    time_epoch: number
}
interface forecastDayProps {
    hour: hourProps[]
}
interface WeatherProps {
    location: {
        name: string,
        localtime: string
    },
    current: {
        last_updated: string,
        last_updated_epoch: number,
        temp_c: number,
        condition: {
            text: string,
            icon: string
        }
    },
    forecast: {
        forecastday: forecastDayProps[]
    }
}
const fetchCurrentWeather = async () => {
    const response = await axios.get(`https://api.weatherapi.com/v1/${weatherConfig.forecast}.json?key=${weatherConfig.apiKey}&q=${weatherConfig.qname}&aqi=no&lang=${weatherConfig.lang}&days=${weatherConfig.day}`);
    return response.data
}
const CurrentWeathher = () => {
    const { data, isLoading, isError, error } = useQuery<WeatherProps, Error>({
        queryKey: ['currentWeather'],
        queryFn: () => fetchCurrentWeather()
    });
    return (
        <>
            {isError && <p>Error: {error.message}</p>}
            {isLoading && <p className='weather_loading'><WiDayStormShowers />...loading</p>}
            {data &&
                <>
                    <article className={`${styles.widget_weather} flex flex-col gap-y-4 justify-center items-center`}>
                        <h2 className={styles.weather_name}><FiMapPin />{data.location.name}</h2>
                        <p className={styles.weather_icon}><img src={data.current.condition.icon} alt="" /></p>
                        <div className={styles.weather_data}>
                            <p className={styles.weather_temp}>{Math.round(data.current.temp_c)}&deg;C</p>
                            <p className={styles.weather_description}>{data.current.condition.text}</p>
                        </div>
                    </article>
                    <article className={styles.weather_houres}>
                        <p className={styles.title_hourly_forecast}><FiClock />dự báo hàng giờ</p>
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={10}
                            grabCursor={true}
                            className="swipper_hour_forecast"
                        >
                            {data.forecast.forecastday[0].hour.map((item: hourProps) => (
                                item.time_epoch >= data.current.last_updated_epoch && 
                                <SwiperSlide key={`hourforecast_${item.time}`}>
                                    <div className={`${styles.hour_item} flex flex-col justify-center items-center gap-y-1`}>
                                        <p className={styles.hour_time}><FiClock />{item.time.split(' ')[1].split(':')[0]}h</p>
                                        <p className={styles.hour_icon}><img src={item.condition.icon} alt="" /></p>
                                        <p className={styles.hour_temp}>{Math.round(item.temp_c)}&deg;C</p>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </article>
                </>
            }
        </>
    )
}

export default CurrentWeathher
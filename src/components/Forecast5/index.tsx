import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { weatherConfig } from '../../data/weatherConfig';
import { WiDayStormShowers} from "react-icons/wi";
import { BsCalendar3,BsFillCloudCheckFill,BsActivity,BsEye,BsDropletHalf,BsSunrise,BsSunset } from "react-icons/bs";


import styles from './Forecast5.module.css';

const fetchForecast5 = async () => {
    const response = await axios.get(`https://api.weatherapi.com/v1/${weatherConfig.forecast}.json?key=${weatherConfig.apiKey}&q=${weatherConfig.qname}&aqi=no&lang=${weatherConfig.lang}&days=${weatherConfig.day5}`);
    return response.data
}
interface forecastDay5Props {
    date: string,
    day: {
        mintemp_c: number,
        maxtemp_c: number,
        avghumidity: number,
        condition: {
            text: string,
            icon: string
        },
        avgvis_km: number,
        totalprecip_mm: number
    },
    astro: {
        sunrise: string,
        sunset: string
    }
}
interface forecastProps {
    location: {
        name: string
    },
    forecast: {
        forecastday: forecastDay5Props[]
    }
}
const Forecast5 = () => {
    const { data, isLoading, isError, error } = useQuery<forecastProps, Error>({
        queryKey: ['forecast5'],
        queryFn: () => fetchForecast5()
    });
    return (
        <>
            {isError && <p>Error: {error.message}</p>}
            {isLoading && <p className='weather_loading'><WiDayStormShowers />...loading</p>}
            {data &&
            <article className={styles.article_forecast}>
            <h2><BsCalendar3 /> Dự báo 5 ngày {data.location.name}</h2>
            <ul className={styles.forecast_list}>
               {
                data.forecast.forecastday.map((item: forecastDay5Props)=> (
                    <li key={`forecastDay5_${item.date}`}>
                        <div className={styles.forecast_item}>
                            <div className={styles.forecast_date}>
                                <p className={styles.date_year}>
                                    <BsFillCloudCheckFill /> {item.date.split('-')[2]} <span className={styles.line}> / </span>{item.date.split('-')[1]}
                                </p>
                                <p className={styles.date_text}>Hôm nay</p>
                                <p className={styles.forecast_avghumidity}><BsActivity />{Math.round(item.day.avghumidity)} %</p>
                            </div>
                            <div className={styles.forecast_condition}>
                                <p className={styles.forecast_icon}><img src={item.day.condition.icon} alt="" /></p>
                            </div>
                            <div className={styles.forecast_temp}>
                                <p className={styles.min}>{Math.round(item.day.mintemp_c)}<span>&deg;</span>C</p><span className={styles.line}>/</span>
                                <p className={styles.max}>{Math.round(item.day.maxtemp_c)}<span>&deg;</span>C</p>
                            </div>
                        </div>
                        <div className={styles.forecast_detail}>
                            <div className={styles.forecast_sunrise}><p className={styles.ttl}><BsSunrise />mặt trời mọc</p><p className={styles.cnt}>{item.astro.sunrise}</p></div>
                            <div className={styles.sunset_sunrise}><p className={styles.ttl}><BsSunset />mặt trời lặn </p><p className={styles.cnt}>{item.astro.sunset}</p></div>
                            <div className={styles.total_precip}><p className={styles.ttl}><BsDropletHalf />lượng mưa</p><p className={styles.cnt}>{Math.round(item.day.totalprecip_mm)} mm</p></div>
                            <div className={styles.forecast_average}><p className={styles.ttl}><BsEye />Tầm nhìn</p><p className={styles.cnt}>{Math.round(item.day.avghumidity)} Km</p></div> 
                        </div>
                    </li>
                ))
               }
            </ul>
            </article>
            }
        </>
    )
}

export default Forecast5
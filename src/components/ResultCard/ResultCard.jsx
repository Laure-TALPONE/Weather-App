import './ResultCard.scss';
import logo_humidity from '../../assets/img/humidite.png';
import wind from '../../assets/img/wind.png';
import sun from '../../assets/img/soleil.png';
import cloud from '../../assets/img/nuage.png';
import thunderstorm from '../../assets/img/orages.png';
import peu_nuageux from '../../assets/img/partiellement-nuageux.png'
import pluie_légère from '../../assets/img/averses-éparses.png'

const ResultCard = ({ dataWeather }) => {
    let weatherIcone = null;

    switch(dataWeather.weather[0].description) {
        case "ciel dégagé":
            weatherIcone = sun;
            break;
        case "couvert":
            weatherIcone = cloud;
            break;
        case "partiellement nuageux":
            weatherIcone = peu_nuageux;
            break;
        case "brume":
            weatherIcone = cloud;
            break;
        case "nuageux":
            weatherIcone = cloud;
            break;
        case "orage":
            weatherIcone = thunderstorm;
            break;
        case "peu nuageux":
            weatherIcone = peu_nuageux;
            break;
        case "légère pluie":
            weatherIcone = pluie_légère;
            break;
    }

    return (
        <div className='card'>
            <h1 className='city'>{dataWeather.name}</h1>
            <img src={weatherIcone} alt='logo' className='logo' />
            <div className='temp'>
                <h1 id='temp'>{(dataWeather.main.temp).toFixed(0)}°C</h1>
                <h2 id='temp-min-max'>min:{(dataWeather.main.temp_min).toFixed(0)}°C - max:{(dataWeather.main.temp_max).toFixed(0)}°C</h2>
            </div>
            <div className='details'>
                <div className='col'>
                    <img src={logo_humidity} alt='logo-humidity' className='logo-humidity' />
                    <div className='humidity'>
                        <p>{dataWeather.main.humidity}%</p>
                        <p>Humidity</p>
                    </div>
                </div>
                <div className='col'>
                    <img src={wind} alt='logo-wind' className='logo-wind' />
                    <div className='wind'>
                        <p>{dataWeather.wind.speed} km/h</p>
                        <p>Wind Speed</p>
                    </div>
                </div>

            </div>

        </div>
    )
};

export default ResultCard;
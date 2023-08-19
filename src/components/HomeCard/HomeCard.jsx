import Form from '../Form/Form';
import './HomeCard.scss';

const HomeCard = ({fetchWeatherData, changeInputZipcode, value}) => {
    return (
        <div className="card">
            <div className="cloud"></div>
            <Form fetchWeatherData={fetchWeatherData} changeInputZipcode={changeInputZipcode} value={value}/>
            <div className="shadow"></div>
        </div>
    )
}

export default HomeCard;
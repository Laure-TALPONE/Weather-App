import './App.scss'
import HomeCard from '../HomeCard/HomeCard';
import ResultCard from '../ResultCard/ResultCard';
import { useState } from 'react';
import axios from 'axios';
import NotFound from '../NotFound/NotFound';
import Loader from '../Loader/Loader';

function App() {
    const [dataWeather, setDataWeather] = useState([]);
    const apiKey = 'c3c8d194acb22dc8d31728f13369fe7a';
    const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';
    const [valueInput, setValueInput] = useState('');
    const [isValid, setIsValid] = useState(false);
    const [isQueryDone, setIsQueryDone] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const changeInputZipcode = (newValue) => {
        setValueInput(newValue)
    };

    const handleClickBackHome = () => {
        setValueInput('');
        setIsValid(false);
        setIsQueryDone(false);
    };

    const fetchWeatherData = () => {
        setIsLoading(true);
        axios.get(`${baseUrl}${valueInput},fr&APPID=${apiKey}&units=metric&lang=fr`)
            .then((response) => {
                console.log(response.data)
                setDataWeather(response.data);
                setIsValid(true);
            })
            .catch((error) => {
                console.log('Erreur lors de la requête :' + error);
            })
            .finally(() => {
                setIsQueryDone(true);
                setIsLoading(false);
            })
    };

    if(isLoading) {
        return <Loader />
    };

    return (
        <div className='app'>
        {!isQueryDone && <HomeCard fetchWeatherData={fetchWeatherData} changeInputZipcode={changeInputZipcode} value={valueInput}/>}
        {isQueryDone && isValid && <ResultCard dataWeather={dataWeather} />}
        {isQueryDone && !isValid && <NotFound backHome={handleClickBackHome}/>}
        </div>
    )
}

export default App;

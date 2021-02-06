import React, { useEffect,useState } from 'react';
import {Alert} from "react-native";
import Loading from "./Loading";
import Weather from './Weather';
import * as Location from "expo-location";
import { apisAreAvailable } from 'expo';
import axios from 'axios';

const API_KEY = "e58807bd9d82787951a48c580505f37d";

export default function App() {
  let[로딩중, 로딩중변경] = useState(true)
  let[데이터, 데이터변경] = useState([])

  let getWeather = async(latitude, longitude) => {
    const { data } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`);
    로딩중변경(false);
    데이터변경(data);
  };

  let getLocation = async() => {
    try{
      await Location.requestPermissionsAsync();
      const { coords: { latitude, longitude }} = await Location.getCurrentPositionAsync();
      getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert("사용자의 위치를 알 수 없습니다.", "슬프네요")
    }
  };

  useEffect(()=>{
    getLocation();
  }, [] );

  return(
  
    로딩중? <Loading /> : <Weather temp={Math.round(데이터.main.temp)} condition={데이터.weather.main}/>

  )
}
const inputData = document.getElementById('inputText');


const tempShow = document.createElement('H2');
const tempMinMaxShow = document.createElement('H2');
const weatherDescriptionShow = document.createElement('H2');
const dateShow = document.createElement('H2');
const placeShow = document.createElement('H2');
const message = document.createElement('H2');
const timeShow = document.createElement('H2');
const iconShow = document.createElement('img');

inputData.addEventListener('keypress', (e) => {
    if(e.key == 'Enter'){
        console.log("enter Pressed");
        
        console.log(inputData.value);
        
        tempShow.innerText = "";
       
        tempMinMaxShow.innerText = "";
        
        weatherDescriptionShow.innerText = "";
        
        dateShow.innerText = "";
        
        placeShow.innerText = "";

        message.innerText = "";

        getWeather(inputData.value);
    }
})

const getWeather = async(inputData) => {

    const API_key = '033384ba48fcf458d8c30002f0eb8fc7';

    const url = `http://api.openweathermap.org/data/2.5/weather?q=${inputData}&appid=${API_key}&units=metric`;

    const fetchedData = await axios.get(url)
        .then(fetchedData =>{
            console.log(fetchedData.data.weather.main);
    
            showWeather(fetchedData); 
        })
        .catch(err =>{
            showErrorWeather();
        })

}
function showErrorWeather(){
    
    message.innerText = "Wrong Input/ Error!";
    document.body.appendChild(message);

}

function showWeather(fetchedData){


    const temperature = fetchedData.data.main.temp + " °C";
    const weatherDescription = fetchedData.data.weather[0].description;
    const tempMinMax = fetchedData.data.main.temp_min+ " / " + fetchedData.data.main.temp_max+ " °C";
   
    let times = new Date();
    
    // Weather Icon Fetching:
    const iconCode = fetchedData.data.weather[0].icon;
    const iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";
    iconShow.src = iconUrl;
    iconShow.setAttribute('id','icons');
    
    const place = fetchedData.data.name;

    tempShow.innerText = temperature;
    tempShow.setAttribute("id", "temp");
  
    document.body.append(tempShow);

    weatherDescriptionShow.innerText = weatherDescription;
    weatherDescriptionShow.setAttribute("class","show");
    weatherDescriptionShow.append(iconShow);
    document.body.append(weatherDescriptionShow);

    tempMinMaxShow.innerText = tempMinMax;
    tempMinMaxShow.setAttribute('class','show');
    document.body.append(tempMinMaxShow);

    dateShow.innerHTML = times.toDateString();
    dateShow.setAttribute('class', 'bottomShow');
    document.body.append(dateShow);
    timeShow.innerHTML = times.toLocaleTimeString();
    timeShow.setAttribute('class','bottomShow');
    document.body.append(timeShow);

    placeShow.innerText = place;
    placeShow.setAttribute('class','bottomShow');
    document.body.append(placeShow);

    inputData.value = "";
}






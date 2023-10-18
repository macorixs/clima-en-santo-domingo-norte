var fetchdata =  position =>{
    var {latitudes , longitudes}   = position , coords;
if(navigator.geolocation.position){
    navigator.geolocation.getCurrentPosition(position);
    var latitudes = "latitudes";
    var longitudes = "longitudes";
    console.log(position);
}





var api_key = '2b1bbf3596fedcae5e9eea8f74582b54';

   
fetch  ('https://api.openweathermap.org/data/2.5/weather?lat=${latitudes}&lon=${longitudes}units=metric&appid=${API key}') 
 
 .then(Resp => { return Resp.json()})
 .then(data => console.log(data))

 console.log(position);

}



var onload = () =>{
    navigator.geolocation.getCurrentPosition(fetchdata);
}


var btn = document.getElementById("btn");
     
 getCountryInfo = (country) => {
    let url ="https://restcountries.com/v2/name/";
    fetch(url + country)
    .then(response => response.json())
    .then(data => {
      //USE DATA 
      
      
      // GETTING ASSIGNING VALUES TO VARIABLE
      
      const country = data[0];
      const countryName = country.name;
      const capitalCity = country.capital
      const population = country.population;
      const language = country.languages[0].name;
      const code = country.callingCodes[0];
      const continent = country.region;
      const location = country.subregion;
      const timeZone = country.timezones[0];
      const area = country.area;
      const people = country.demonym;
      const currencyName = country.currencies[0].name;
      const currencySymbol = country.currencies[0].symbol;
      const weatherCountry = country.name;
      
      
      const countryFlag = country.flags.svg;
      
      //PRINTING VALUES
      
      document.getElementById('country_name').innerHTML = countryName;
      document.getElementById('capital_city').innerHTML = capitalCity;
      document.getElementById('population').innerHTML = population;
      document.getElementById('language').innerHTML = language;
      document.getElementById('call_code').innerHTML = "+" + code;
      document.getElementById('continent').innerHTML = continent;
      document.getElementById('location').innerHTML = location;
      document.getElementById('time_zone').innerHTML = timeZone;
      document.getElementById('land').innerHTML = area + " km" + "<sup>" + 2 + "</sup>";
      document.getElementById('people').innerHTML = people;
      document.getElementById('currency-name').innerHTML = currencyName;
      document.getElementById('currency-symbol').innerHTML = currencySymbol;
      document.getElementById('weather_country').innerHTML = weatherCountry;
     
      
      const flagImg = document.getElementById("country-flag");
          flagImg.src = countryFlag;
      
      console.log(data);
    })
    .catch(error => {
      //CATCH ANY ERROR THAT MAY OCCUR
      console.log(error);
    })
  
}
      btn.onclick = function() {
getCountryInfo(country.value);
         
         document.getElementById("hide-all").style.display = "block"
      }
      
      
      // DARK MODE 
      
    
      let darkImg = document.getElementById("darkImg");
      
      darkImg.addEventListener("click", function () {
        let body = document.querySelector("body");
        if(body.style.backgroundColor === "black"){
          body.style.backgroundColor = "white";
          darkImg.src = "images/dark.svg";
        }else{
          body.style.backgroundColor = "black";
           darkImg.src = "images/day.svg";
          
        }
      })

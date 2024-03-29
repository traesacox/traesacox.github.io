const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response){
        return response.json();
    })

    .then(function (jsonObject) {
        console.table(jsonObject);
        const towns = jsonObject['towns'];
        for(let i=0; i<towns.length; i++){
            if((towns[i].name =="Preston") || (towns[i].name=="Soda Springs")||(towns[i].name=="Fish Haven")){
            let townInfo = document.createElement('section');
            let h2= document.createElement('h2');
            h2.textContent = towns[i].name ;
            townInfo.setAttribute('id', towns[i].name);
            let motto = document.createElement("h3");
            motto.setAttribute('class', "townMotto")
            motto.textContent= towns[i].motto;
            let yearFounded = document.createElement("p");
            yearFounded.textContent= "Year Founded: " + towns[i].yearFounded;
            let currPopulation = document.createElement("p");
            currPopulation.textContent= "Current Population: " + towns[i].currentPopulation;
            let averageRainfall= document.createElement("p");
            averageRainfall.textContent= "Average Rainfall: "+ towns[i].averageRainfall;
            
            let townPic = document.createElement('img');
            townPic.setAttribute("src", "images/" +towns[i].photo);
            townPic.setAttribute("alt", "Photo of " + towns[i].name);
            let townText = document.createElement('span');

            
            townText.appendChild(h2);
            townText.appendChild(motto);
            townText.appendChild(yearFounded);
            townText.appendChild(currPopulation);
            townText.appendChild(averageRainfall);
            townInfo.appendChild(townText);
            townInfo.appendChild(townPic);
            document.querySelector('div.townInfo').appendChild(townInfo);
            }

        }
    });
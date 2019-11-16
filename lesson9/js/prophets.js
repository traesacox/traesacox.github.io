const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
    .then(function (response){
        return response.json();
    })

    .then(function (jsonObject) {
        console.table(jsonObject);
        const prophets = jsonObject['prophets'];
        for(let i=0; i<prophets.length; i++){
            let card = document.createElement('section');
            let h2= document.createElement('h2');
            h2.textContent = prophets[i].name + " " + prophets[i].lastname;
           // h2.setAttribute('id', prophets[i].name);
            let dateOfBirth = document.createElement("p");
            dateOfBirth.textContent= "Date of Birth: " + prophets[i].birthdate;
            let birthPlace = document.createElement("p");
            birthPlace.textContent= "Place of Birth: " + prophets[i].birthplace;
            let picture = document.createElement("img");
            picture.setAttribute('src', prophets[i].imageurl);
            //picture.setAttribute('id', prophets[i].name);
            picture.setAttribute("alt", "Picture of Prophet");
            card.appendChild(h2);
            card.appendChild(dateOfBirth);
            card.appendChild(birthPlace);
            card.appendChild(picture);
            document.querySelector('div.cards').appendChild(card);

        }
    });

    
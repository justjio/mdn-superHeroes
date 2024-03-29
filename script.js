var header = document.querySelector('header');
var section = document.querySelector('section');

var requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
var request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
var superHeroes = request.response;
populateHeader(superHeroes);
showHeroes(superHeroes);
}

    function populateHeader(jsonReturned) {
        var myH1 = document.createElement('h1');
        myH1.textContent = jsonReturned.squadName;
        header.appendChild(myH1);

        var myPara = document.createElement('p');
        myPara.textContent = 'Hometown: ' + jsonReturned.homeTown + ' //Formed: ' + jsonReturned.formed;
        header.appendChild(myPara);
    }

        function showHeroes(jsonReturned) {
        var heroes = jsonReturned.members;

        for (var k = 0; k < heroes.length; k++) {
            var myArticle = document.createElement('article');
            var myH2 = document.createElement('h2');
            var myPara1 = document.createElement('p');
            var myPara2 = document.createElement('p');
            var myPara3 = document.createElement('p');
            var myList = document.createElement('ul');

            myH2.textContent = heroes[k].name;
            myPara1.textContent = 'Secret identity: ' + heroes[k].secretIdentity;
            myPara2.textContent = 'Age: ' + heroes[k].age;
            myPara3.textContent = 'Superpowers:';

            var superPowers = heroes[k].powers;
            for (var j = 0; j < superPowers.length; j++) {
                var listItem = document.createElement('li');
                listItem.textContent = superPowers[j];
                myList.appendChild(listItem);
            }

            myArticle.appendChild(myH2);
            myArticle.appendChild(myPara1);
            myArticle.appendChild(myPara2);
            myArticle.appendChild(myPara3);
            myArticle.appendChild(myList);

            section.appendChild(myArticle);
        }
    }

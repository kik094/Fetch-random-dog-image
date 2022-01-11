let breedInput = document.getElementById('breeds_select');
let dogImg = document.getElementById('dog_img');
let inputBtn = document.getElementById('input_btn');
let inputChoise;

let xml = new XMLHttpRequest;

xml.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        let breeds = JSON.parse(this.response);
        breeds = Object.keys(breeds.message);

        breeds.forEach(element => {
            let breedOption = document.createElement('option');
            breedOption.innerHTML = element;
            breedOption.value = element;
            breedInput.append(breedOption);
        });

        inputChoise = breedInput.options[0].value
    }
}

xml.open("GET", "https://dog.ceo/api/breeds/list/all");
xml.send();

breedInput.addEventListener('change', handleChange)
inputBtn.addEventListener('click', (e) => {
    e.preventDefault()
    // let inputChoise = e.target.value;
    let imgXML = new XMLHttpRequest;

    imgXML.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            let dogObj = JSON.parse(this.response);
            dogImg.src = dogObj.message;

        }
    }

    imgXML.open("GET", `https://dog.ceo/api/breed/${inputChoise}/images/random`);
    imgXML.send();

})

function handleChange(e) {
    e.preventDefault()
    inputChoise = e.target.value;
    let imgXML = new XMLHttpRequest;

    imgXML.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            let dogObj = JSON.parse(this.response);
            dogImg.src = dogObj.message;

        }
    }

    imgXML.open("GET", `https://dog.ceo/api/breed/${inputChoise}/images/random`);
    imgXML.send();

}





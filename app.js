const api = "https://api.thedogapi.com/v1";
const fetchDogBreeds = async () => {
  const response = await fetch(api + "/breeds");
  const dogBreeds = await response.json();
  populateDogSelect(dogBreeds);
};

const populateDogSelect = (breeds) => {
  const select = document.querySelector(".select-breeds");
  const breedOptions = breeds.map((breed) => {
    const option = document.createElement("option");
    option.text = breed.name;
    option.value = breed.id;
    return option;
  });

  breedOptions.forEach((breedOption) => {
    select.appendChild(breedOption);
  });
};

const fillDogImage = (imageUrl) => {
  document.querySelector("#dog-image").setAttribute("src", imageUrl);
};

const getDogBreed = async (breedId) => {
  const [data] = await fetch(
    api + "/images/search?include_breed=1&breed_id=" + breedId
  ).then((data) => data.json());
  const { url: imageUrl, breeds } = data;
  //   console.log(url);
  fillDogImage(imageUrl);
};

const changeDog = () => {
  getDogBreed(event.target.value);
};

fetchDogBreeds();

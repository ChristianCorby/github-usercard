/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
axios
.get('https://api.github.com/users/ChristianCorby')
.then(response => {
  console.log(response);
  cardPoint.append(userCard(response.data));
})
.catch(error => {
  console.log("the data was not returned", error);
});

function gitCards(data) {
  function checkIfNull(str) {
    if (str) return str;
    return '';
  }
  const newCard = document.createElement('div'),
    newImg = document.createElement('img'),
    newCardInfo = document.createElement('div'),
    name = document.createElement('h3'),
    username = document.createElement('p'),
    location = document.createElement('p'),
    profile = document.createElement('p'),
    profileUrl = document.createElement('a'),
    followers = document.createElement('p'),
    following = document.createElement('p'),
    bio = document.createElement('p');

  //setting content
  newImg.src = data.avatar_url;
  name.textContent = data.name;
  username.textContent = data.login;
  location.textContent = `Location: ${checkIfNull(data.location)}`;
  profile.textContent = `Profile: ${checkIfNull(data.name)}`;
  profileUrl.textContent = `Link: ${data.html_url}`;
  followers.textContent = `Followers: ${checkIfNull(data.followers)}`;
  following.textContent = `Following: ${checkIfNull(data.following)}`;
  bio.textContent = `Bio: ${checkIfNull(data.bio)}`;

  //Create Structure and append to the DOM

  newCard.appendChild(newImg);
  newCard.appendChild(newCardInfo);
  newCardInfo.appendChild(name);
  newCardInfo.appendChild(username);
  newCardInfo.appendChild(location);
  newCardInfo.appendChild(profile);
  newCardInfo.appendChild(followers);
  newCardInfo.appendChild(following);
  newCardInfo.appendChild(bio);
  newCardInfo.appendChild(profileUrl);

  //applying styles and classes

  newCard.classList.add('card');
  newCardInfo.classList.add('card-info');
  name.classList.add('name');
  username.classList.add('username');

  // event handlers

  return newCard;
}
// setup the Array

const entryPoint = document.querySelector('.cards');

// this is my gitCard

const cards = document.querySelector('.cards');

axios.get('https://api.github.com/users/ChristianCorby').then(response => {
  console.log(response.data);
  cards.appendChild(gitCards(response.data));
});

// this is follower git Card they gave us changed with my own followers

const followersArray = [
  "tetondan",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell",
];

followersArray.forEach(follower => {
  axios.get(`https://api.github.com/users/${follower}`)
    .then(response => {
      console.log(response);
      cards.append(gitCards(response.data));
    })
    .catch(error => {
      console.log(error);
    });
});

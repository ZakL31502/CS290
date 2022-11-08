/*
 * Write your client-side JS code in this file.  Don't forget to include your
 * name and @oregonstate.edu email address below.
 *
 * Name: Zakarie Leskowsky
 * Email: leskowsz@oregonstate.edu
 */


//Make a backup copy of our posts for safety
var postsTracker = document.getElementById("posts")
var postsReal = document.getElementsByClassName("post")
var postsBackup = [...postsReal]


//Function will toggle the hide on the modal and it's backdrop
function handleSellButton(event){
    var backDrop = document.getElementById("modal-backdrop")
    var sellSomething = document.getElementById("sell-something-modal")
    backDrop.classList.toggle("hidden")
    sellSomething.classList.toggle("hidden")

    document.getElementById("post-price-input").value = ""
    document.getElementById("post-city-input").value = ""
    document.getElementById("post-text-input").value = ""
    document.getElementById("post-photo-input").value = ""
    document.querySelector("input[name='post-condition']").checked=true
}

//The three buttons that open/close the sell something modal
var sellButton = document.getElementById("sell-something-button")
var closeSell = document.getElementById("modal-close")
var cancelSell = document.getElementById("modal-cancel")

//Events for the modal buttons
sellButton.addEventListener("click", handleSellButton)
closeSell.addEventListener("click", handleSellButton)
cancelSell.addEventListener("click", handleSellButton)

//Function to add an item
function generatePost(newPrice, newCity, newCondition, newPhoto, newDescription){
    if(!newPrice || !newCity || !newPhoto || !newDescription){  //Alert if not filled out
        alert("Please fill out all fields!")
        return
    }

    var newPost = document.createElement("div") //Add the post
    newPost.classList.add("post")

    newPost.dataset.price = newPrice  //Add the filter data
    newPost.dataset.city = newCity
    newPost.dataset.condition = newCondition

    var newContent = document.createElement("div")  //Add the post-contents
    newContent.classList.add("post-contents")
    newPost.appendChild(newContent)

    var newImgContainer = document.createElement("div") //Add the image container
    newImgContainer.classList.add("post-image-container")
    newContent.appendChild(newImgContainer)

    var newImg = document.createElement("img")  //Add the Image
    newImg.src = newPhoto
    newImg.alt = newDescription
    newImgContainer.appendChild(newImg)

    var newInfoContainer = document.createElement("div")    //Add the info container
    newInfoContainer.classList.add("post-info-container")
    newContent.appendChild(newInfoContainer)

    var newInfo = document.createElement("a") //Add the text
    newInfo.classList.add("post-title")
    newInfo.textContent = newDescription
    newInfoContainer.appendChild(newInfo)
    
    var newCost = document.createElement("span")    //add cost
    newCost.classList.add("post-price")
    newCost.textContent = "$" + newPrice
    newInfoContainer.appendChild(newCost)   
    
    var newLocation = document.createElement("span")    //add city
    newLocation.classList.add("post-city")
    newLocation.textContent = "(" + newCity + ")"
    newInfoContainer.appendChild(newLocation)

    //Extra Credit: add new city to applicable lists
    var listOfCities = document.getElementById("filter-city")
    var cityMatch = 0
    for(let i = 0; i < listOfCities.length; i++){
      if(listOfCities[i].text === newCity){
        cityMatch++
      }
    }
    if(!cityMatch){ //No matching cities
      var makeCity = document.createElement("option")
      makeCity.text = newCity.charAt(0).toUpperCase() + newCity.slice(1)    //Line taken from https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript
      listOfCities.appendChild(makeCity)
    }

    return newPost
}


/*
<div class="post" data-price="{{price}}" data-city="{{city}}" data-condition="{{condition}}">
  <div class="post-contents">
    <div class="post-image-container">
      <img src="{{photoURL}}" alt="{{itemDescription}}">
    </div>
    <div class="post-info-container">
      <a href="#" class="post-title">{{itemDescription}}</a> <span class="post-price">${{price}}</span> <span class="post-city">({{city}})</span>
    </div>
  </div>
</div>
*/


//Function to get the quality of the new post (shortcut shown in class)
function getQuality() {
    var selectedQuality = document.querySelector("input[name='post-condition']:checked")
    return selectedQuality.value
  }


  //Function to add new post to 
function handleConfirmSale(event){
    var postQuality = getQuality()
    var postPrice = document.getElementById("post-price-input").value
    var postCity = document.getElementById("post-city-input").value
    var postDescription = document.getElementById("post-text-input").value
    var postPhoto = document.getElementById("post-photo-input").value
    console.log("postPhoto = ", postPhoto)

    
    var createdPost = generatePost(postPrice, postCity, postQuality, postPhoto, postDescription)
    postsTracker.appendChild(createdPost)
    postsReal = document.getElementsByClassName("post")
    postsBackup = [...postsReal];
    handleSellButton()
    
}

var addPost = document.getElementById("modal-accept")
addPost.addEventListener("click", handleConfirmSale)



//Filters
/*
Filter IDs: (overall class: "filter-input")
    -"filter-text", type: input
    -"filter-min-price", type: input
    -"filter-max-price", type: input
    -"filter-city" (children), type: selected value = option
    -document.querySelector("input[name='filter-condition']:checked")
*/


//Function to handle price filtering
function filterByPrice(priceAmount, minOrMax) {
    var eachPost = document.getElementsByClassName("post")
    for(let i = eachPost.length-1; i >= 0; i--){
      if (minOrMax === 0 && parseInt(eachPost[i].dataset.price) < priceAmount){  //LOW = Min
        eachPost[i].remove()
      }
      else if (minOrMax === 1 && parseInt(eachPost[i].dataset.price) > priceAmount){   //HIGH = Max
        eachPost[i].remove()
      }
    }
}

//Function to handle text filtering
function filterByText(enteredText) {
  var eachPost = document.getElementsByClassName("post")
  var eachText = document.getElementsByClassName("post-title")
    for(let i = eachPost.length-1; i >= 0; i--){  //For each post, break down it's text
      var postText = eachText[i].text.replace(/[!"#$%&\\'()\*+,\-\.\/:;<=>?@\[\\\]\^_`{|}~]/g, '').toLowerCase().split(' ');
      console.log(postText)
      var wordMatch = 0
      for(let j = 0; j < postText.length; j++){
        if (enteredText.toLowerCase() === postText[j]){  //If we find a match
          wordMatch++
        }
      }
      if(wordMatch === 0){  //There were no matches
        eachPost[i].remove()
      }
    }
}

//Function to handle city filtering
function filterByCity(checkedCity) {
  if (checkedCity === "Any"){
    return;   //Base case handling
  }

  var eachPost = document.getElementsByClassName("post")
  for(let i = eachPost.length-1; i >= 0; i--){
    if (checkedCity != eachPost[i].dataset.city){
      eachPost[i].remove()
    }
  }
}

function filterByCondition() {
  var eachPost = document.getElementsByClassName("post")
  var conditionBoxes = document.querySelectorAll("input[name='filter-condition']:checked")

  if (conditionBoxes.length === 0){
    return  //When none checked, return
  }
  
  for(let i = eachPost.length-1; i >= 0; i--){
    var conditionMatch = 0
    for (let j = 0; j < conditionBoxes.length; j++){
      if (eachPost[i].dataset.condition === conditionBoxes[j].value){
        conditionMatch++
      }
    }
    if (!conditionMatch){ //If there was no match
      eachPost[i].remove()
    }
  }

}

//Function to handle restoring 
function restorePosts(backup) {
  var eachPost = document.getElementsByClassName("post")
  for(let i = eachPost.length-1; i >= 0; i--) {
      eachPost[i].remove()
  }
  for(let i = 0; i < backup.length; i++) {
    postsTracker.appendChild(backup[i])
  }
}

//Function to handle when filters are applied
function handleFilters(event) {
    restorePosts(postsBackup)

    var filteredText = document.getElementById("filter-text").value
    var filteredMinPrice = document.getElementById("filter-min-price").value
    var filteredMaxPrice = document.getElementById("filter-max-price").value
    var filteredCityOptions = document.getElementById("filter-city")
    var filteredCity = filteredCityOptions.options[filteredCityOptions.selectedIndex].text
    //handle condition in a different way

    if(filteredMinPrice){
      filterByPrice(filteredMinPrice, 0)
    }
    if(filteredMaxPrice){
      filterByPrice(filteredMaxPrice, 1)
    }
    if(filteredText){
      filterByText(filteredText)
    }
    if(filteredCity != "Any"){
      filterByCity(filteredCity)
    }

    filterByCondition()
}


var filterPosts = document.getElementById("filter-update-button")
filterPosts.addEventListener("click", handleFilters)
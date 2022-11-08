/*
 * Write your client-side JS code in this file.  Don't forget to include your
 * name and @oregonstate.edu email address below.
 *
 * Name: Zakarie Leskowsky
 * Email: leskowsz@oregonstate.edu
 */


//Make a backup copy of our posts for safety
var postsBackup = document.getElementById("posts")

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
    console.log(newPost)
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
    postsBackup.appendChild(createdPost)
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
function filterByPrice(shownPosts, priceAmount, minOrMax) {
    for(let i = 0; i < shownPosts.length; i++){
      console.log("shownPosts ", i, ": ", shownPosts[i])
      if (minOrMax === 0){  //LOW = Min

      }
      else{   //HIGH = Max

      }
    }
}

//Function to handle when filters are applied
function handleFilters(event) {
    var shownPosts = postsBackup  //Create a new copy of the posts to preserve them

    var filteredText = document.getElementById("filter-text").value
    var filteredMinPrice = document.getElementById("filter-min-price").value
    var filteredMaxPrice = document.getElementById("filter-max-price").value
    var filteredCity = document.querySelector("input[name='filter-city']:checked")
    console.log("Minprice: ", filteredMinPrice)
    console.log("Maxprice: ", filteredMaxPrice)
    //handle condition in a different way

    if(filteredMinPrice){
        shownPosts = filterByPrice(shownPosts, filteredMinPrice, 0)
    }
    if(filteredMaxPrice){
      shownPosts = filterByPrice(shownPosts, filteredMaxPrice, 1)
    }
    if(filteredText){

    }
    if(filteredCity != "any"){

    }
}


var filterPosts = document.getElementById("filter-update-button")
filterPosts.addEventListener("click", handleFilters)
console.log("== document.body:", document.body)

var body = document.body
console.log("== body.childNodes:", body.childNodes)

var nav = body.childNodes[3]
console.log("== nav.parentNode:", nav.parentNode)

var photoCardContainer = document.getElementById("photo-card-container")
console.log("== photoCardContainer: ", photoCardContainer)

var photoCard = document.getElementsByClassName("photo-card")
console.log("== photoCard: ", photoCard)
for(i=0; i < photoCard.length; i++){
    console.log("== photoCard[" + i + "]: ", photoCard[i] )
}

var images = document.getElementsByTagName("img")
console.log("== images: ", images)

var navRight = document.querySelector(".navitem.right")
console.log("== navRight: ", navRight)

var navItems = document.querySelectorAll("li.navitem")
console.log("== navItems: ", navItems)

var firstPhotoCard = photoCard[0]
console.log("== firstPhotoCard.innerHTML: ", firstPhotoCard.innerHTML)
console.log("== firstPhotoCard.textContent: ", firstPhotoCard.textContent)

console.log("== image[0].src: ", images[0].src)
images[0].src = "https://placekitten.com/480/480"

var firstCaption = firstPhotoCard.getElementsByClassName("caption")
console.log("== firstCaption: ", firstCaption)

var newCaption = "Luke as a kitty"
//var newCaption = "<p>Luke as a kitty</p>"
//var newCaption = "<img src=x onerror='alert(\"You were hacked☠\")'/>"
//firstCaption.innerHTML = newCaption

firstCaption.textContent = newCaption
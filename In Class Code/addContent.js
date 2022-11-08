/*  <section class="photo-card">
        <div class="img-container">
          <img class="person-photo-img" src="{{photourl}}" />
        </div>
        <div class="caption">
            {{caption}}
        </div>
      </section>    */

function addPhotoCard(photourl, caption) {
    var photoCardSection = document.createElement("section")
    console.log("== photoCardSection: ", photoCardSection)
    photoCardSection.classList.add("photo-card")
    
    var imgContainerDiv = document.createElement("div")
    imgContainerDiv.classList.add("image-container")
    photoCardSection.appendChild(imgContainerDiv)
    
    var newImg = document.createElement("img")
    newImg.classList.add("person-photo-img")
    newImg.src = photourl
    imgContainerDiv.appendChild(newImg)

    var captionDiv = document.createElement("div")
    captionDiv.classList.add("caption")
    captionDiv.textContent = caption
    photoCardSection.appendChild(captionDiv)

    
    var photoCardContainer = document.getElementById("photo-card-container")
    photoCardContainer.appendChild(photoCardSection)
}


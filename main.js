const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

let likes = document.querySelectorAll(".like-glyph");
for (let i = 0; i < likes.length; i++) {
  likes[i].addEventListener("click", msc)
}

function msc (e) {
  mimicServerCall()
  .then(() => {
    if(this.innerHTML === EMPTY_HEART){
      this.innerHTML = FULL_HEART;
      this.className = "activated-heart"
      likes = FULL_HEART.activated-heart
    }
    else if(this.innerHTML === FULL_HEART){
      this.innerHTML = EMPTY_HEART;
      this.className = ""
      likes = EMPTY_HEART
    }

  })
  .catch(() => {modal.hidden = false
    setTimeout(() => {modal.hidden = true}, 3000)
  })
}


  //------------------------------------------------------------------------------
  // Don't change the code below: this function mocks the server response
  //------------------------------------------------------------------------------

  function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        let isRandomFailure = Math.random() < 0.2;
        if (isRandomFailure) {
          reject("Random server error. Try again.");
        } else {
          resolve("Pretend remote server notified of action!");
        }
      }, 300);
    });
  }

  document.querySelector(
    "#react-root > section > main > section > div > div:nth-child(2) > div > article:nth-child(1) > div > div.qF0y9.Igw0E.IwRSH.eGOV_._4EzTm > div > div > section.ltpMr.Slqrh > span.fr66n > button > div.QBdPU.rrUvL > span > svg"
  );

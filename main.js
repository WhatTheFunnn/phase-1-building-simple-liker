const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

var likes = document.getElementsByClassName("like-glyph");
for (let i = 0; i < likes.length; i++) {
  likes[i].addEventListener("click", function (mimicServerCall) {
    //alert("Success")
    mimicServerCall = () => {
      const myPromise = new promise((resolve, reject) => {
        myPromise
          .then(handleResolvedA, handleRejectedA)
          .catch(handleRejectedAny);
      });
    };
  });
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

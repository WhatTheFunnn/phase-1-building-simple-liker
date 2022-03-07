const EMPTY_HEART = '♡';
const FULL_HEART = '♥';

var like = document.getElementsByClassName("like", "like-glyph").addEventListener("click", likes);

function likes() {
  like.alert("hello");
}

/*function msc (mimicServerCall) {
  debugger;  
  return mimicServerCall
  .then(() => {})
  .catch(() => {})
}*/


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

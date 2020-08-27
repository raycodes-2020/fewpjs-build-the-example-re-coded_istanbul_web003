// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!


document.querySelector('#modal').classList.add("hidden");
document.querySelectorAll(".like-glyph").forEach(eachlike => {
  let statement;
  eachlike.addEventListener("click", () => {

    mimicServerCall().then(() => {
      if (eachlike.classList.contains("activated-heart")) {
        eachlike.innerHTML = EMPTY_HEART;
        eachlike.classList.remove("activated-heart");
      }
      else {
        eachlike.innerHTML = FULL_HEART;
        eachlike.classList.add("activated-heart");
      }
    }).catch((err) => {
      document.querySelector('#modal').classList.remove("hidden");
      document.querySelector('#modal-message').innerHTML = err;
      setTimeout(() => {
        document.querySelector('#modal').classList.add("hidden");
      }, 5000);
    })


  })
});


//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
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

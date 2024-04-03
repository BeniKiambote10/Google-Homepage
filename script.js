const searchInput = document.querySelector("#search-input");

searchInput.addEventListener("keydown", function(event){
  if(event.code === "Enter"){
   search();
  }
});

function search(){
const input = searchInput.value;

alert(input)

window.location.href = "https://www.google.com/search?q=" + input;
}


const googleButton = document.querySelector("#google-button");

googleButton.addEventListener("click", function() {
  console.log('google button clicked');





  if (searchInput.value){
    
    console.log('search')
    alert("")

    search();
  }
});





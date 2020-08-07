var boardItems = [1,2,3,4,5,6,7,8,9];
var colors = ["#BFBFBF", "#72C3DC", "#333333", " #72C3DC", "#BFBFBF", "#2F454E",'#6F98A8','#2B8EAD', "#2F454E",]
shuffleBoard();
/*Description: this will read items form array and append the div into number screen for each number in list
*/
function screenView(){
    boardItems.forEach((item, index) =>{
          // this will add the items to web screen view
        $("#number-screen").append(`<div class="col-md-4">
        <div class="card screen-card" style="background-color:`+ colors[index]+`">`+ item +`</div>
        </div>`);
        // this will add the items to mobile screen view
        $("#number-screen-mobile").append(`<div class="col-md-4">
        <div class="card board-mobile-card" style="border-left: 10px solid  `+ colors[index]+`">`+ item +`</div>
        </div>`);
    })
}

/*Description: this will shuffle the numbers in 
*/
function shuffleBoard(array) {
    this.clearBoards()
    boardItems.sort(() => Math.random() - 0.5);
    screenView()
}

/*Description: this will sort  the numbers array
*/
function sortNumberBoard(){
   this.clearBoards()
    boardItems.sort();
    screenView()
}

function clearBoards() {
    $("#number-screen").empty();
    $("#number-screen-mobile").empty();
}
document.addEventListener('DOMContentLoaded',()=>{
    //card options
    const cardArray=[
        {
            name: 1,
            img:"./images/1.png"
        },
        {
            name: 1,
            img:"./images/1.png"
        },
        {
            name: 2,
            img:"./images/2.png"
        },
        {
            name: 2,
            img:"./images/2.png "
        },
        {
            name: 3,
            img:"./images/3.png"
        },
        {
            name: 3,
            img:"./images/3.png"
        },
        {
            name: 4,
            img:"./images/4.png"
        },
        {
            name: 4,
            img:"./images/4.png"
        },
        {
            name: 5,
            img:"./images/5.png"
        },
        {
            name: 5,
            img:"./images/5.png"
        },
        {
            name: 6,
            img:"./images/6.png"
        },
        {
            name: 6,
            img:"./images/6.png"
        },
    ]

   cardArray.sort(()=>0.5-Math.random())
//creating board

const grid=document.querySelector(".grid")
const resultDisplay=document.querySelector('#result')
var cardChosen=[]///stores the  name of the card array 
var cardChosenID=[]///stores the click image tag id
var cardswon=[]///

function createBoard(){
    for(let i=0;i<cardArray.length;i++){
        const card=document.createElement("img")
        card.setAttribute("class","cards")
        card.setAttribute('src','./images/tile.png')
        card.setAttribute('data-id',i)
        
        grid.append(card);
        card.addEventListener("click",flipCard)     //on click we will get the data-id of tha card so we can find out
        console.log("working")



    }


}
//check for matches
function checkForMatch(){ 
    var cards=document.querySelectorAll("img")
    const optionOneID=cardChosenID[0]
    const optTwoID=cardChosenID[1]
    if(cardChosen[0]===cardChosen[1]){
        alert("you found a Match")
        cards[optionOneID].setAttribute('src',"./images/white.png")
        cards[optTwoID].setAttribute('src',"./images/white.png")
        
        cardswon.push(cardChosen)
    }else{
        cards[optionOneID].setAttribute("src","./images/tile.png")
        cards[optTwoID].setAttribute("src","./images/tile.png")
        alert("Sorry Try Again")

    }
    cardChosen=[]    //clearing the array for next move
    cardChosenID=[]
    resultDisplay.textContent=cardswon.length;
    if(cardswon.length===cards.length/2){
        resultDisplay.textContent="Congratulations! You found them all"
    }

    
}




//flip your cards

function flipCard(){
    var carID=this.getAttribute('data-id')
    cardChosen.push(cardArray[carID].name)//finds the clicked card and storing the name in the array using event listner and card id from create board
   cardChosenID.push(carID)//getiing the chosen card and storing in the array
   this.setAttribute('src',cardArray[carID].img)//

if(cardChosen.length===2){
    setTimeout(checkForMatch,500);
}
}






createBoard()










})
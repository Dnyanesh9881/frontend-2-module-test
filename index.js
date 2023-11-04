// var menubutton = document.querySelector(".menu-button");
// menubutton.onclick = function() {
//   this.classList.toggle("expanded");
// };
let cardTaker=document.querySelector(".allFoodCards")
let foodArray=[
    {
        "name": "Veggie Delight",
        "imageSrc": "https://source.unsplash.com/random?veggies",
        "time": "30 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Chicken Grill",
        "imageSrc": "https://source.unsplash.com/random?chicken",
        "time": "45 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Cheese Pizza",
        "imageSrc": "https://source.unsplash.com/random?pizza",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.1
    },
    {
        "name": "Steak",
        "imageSrc": "https://source.unsplash.com/random?steak",
        "time": "60 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.7
    },
    {
        "name": "Grilled Salmon",
        "imageSrc": "https://source.unsplash.com/random?salmon",
        "time": "50 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Tomato Pasta",
        "imageSrc": "https://source.unsplash.com/random?pasta",
        "time": "35 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.0
    },
    {
        "name": "Vegan Salad",
        "imageSrc": "https://source.unsplash.com/random?salad",
        "time": "20 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.9
    },
    {
        "name": "Fried Chicken",
        "imageSrc": "https://source.unsplash.com/random?friedChicken",
        "time": "55 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Mushroom Risotto",
        "imageSrc": "https://source.unsplash.com/random?risotto",
        "time": "45 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Burger",
        "imageSrc": "https://source.unsplash.com/random?burger",
        "time": "30 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Paneer Tikka",
        "imageSrc": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&q=80&w=1917&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.4
    },
    {
        "name": "BBQ Ribs",
        "imageSrc": "https://source.unsplash.com/random?ribs",
        "time": "70 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Caesar Salad",
        "imageSrc": "https://source.unsplash.com/random?caesarSalad",
        "time": "25 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.8
    },
    {
        "name": "Fish Tacos",
        "imageSrc": "https://images.unsplash.com/photo-1512838243191-e81e8f66f1fd?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmlzaCUyMHRhY29zfGVufDB8fDB8fHww",
        "time": "35 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Chocolate Cake",
        "imageSrc": "https://source.unsplash.com/random?chocolateCake",
        "time": "90 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.9
    }
]


for(let i=0;i<foodArray.length;i++){
    
    let element=document.createElement("div");
    element.className="card";
    element.innerHTML=` <img src=${foodArray[i].imageSrc}>
    <p class="type">${foodArray[i].type}</p>
    <div class="name-rating">
      <h3 class="name">${foodArray[i].name}</h3>
      <div>
        <img src="./assets/star.svg">
      <Span style="font-size: 12px; color: #ADADAD;" class="rating">${foodArray[i].rating}</Span>
    </div>
    </div>
    <div class="d-flex justify-content-between align-items-center mt-2">
       <h3 class="time">${foodArray[i].time}</h3>
       <P><button class="material-symbols-outlined isLike" onclick="onClickLike(this)">
           favorite
           </button> <span class="material-symbols-outlined chat">
               chat_bubble
               </span></P>
    </div>`

    cardTaker.appendChild(element);


}

let cards=document.querySelectorAll(".card")
let all=document.getElementById("allRecipes");
let veg=document.getElementById("vegButton");
let nonVeg=document.getElementById("nonVegButton");
let radio=document.getElementById("higherRating");
let radio1=document.getElementById("lowerRating");
let isLike=document.querySelectorAll(".isLike");


let searchButton=document.getElementById("searchButton");


all.addEventListener("click" , onClickGiveAll);
veg.addEventListener("click" , onClickGiveVeg);
nonVeg.addEventListener("click" , onClickGiveNonVeg);
searchButton.addEventListener("click", onCliclSeachButton);

radio.addEventListener("click" , onClickRadio);
radio1.addEventListener("click", onClickRadio1);
isLike.addEventListener("click", onClickLike);



function onClickLike(element){
    
    if(element.classList.contains("colorB")){
        element.classList.remove("colorB");
    }else{
        element.classList.add("colorB");
    }
}
function onCliclSeachButton(){
    let search=document.getElementById("search").value; 
    search=search.toLowerCase();
   
    for(let i=0;i<cards.length;i++){
      
        if(search===foodArray[i].name.toLowerCase() || search===foodArray[i].type.toLowerCase()){

           cards[i].classList.remove("hide");
        }else if(search.toUpperCase()===foodArray[i].name || search.toUpperCase()===foodArray[i].type){
            cards[i].classList.remove("hide");
        }else{
            cards[i].classList.add("hide");
        }
    
}
}
 function onClickRadio(){
    for(let i=0;i<cards.length;i++){
        
         if(foodArray[i].rating>=4){
 
            cards[i].classList.remove("hide");
         }else{
             cards[i].classList.add("hide");
         }
           
           }
 }
 function onClickRadio1(){
    for(let i=0;i<cards.length;i++){
       
         if(foodArray[i].rating<4){
 
            cards[i].classList.remove("hide");
         }else{
             cards[i].classList.add("hide");
         }
           
           }
 }

function onClickGiveAll(){

    for(let i=0;i<cards.length;i++){
     cards[i].classList.remove("hide");
    }
}
function onClickGiveVeg(){
    
    for(let i=0;i<cards.length;i++){
       
        if(foodArray[i].type!=="veg"){

           cards[i].classList.add("hide");
        }else{
            cards[i].classList.remove("hide");
        }
          
          }
}
function onClickGiveNonVeg(){
    
    for(let i=0;i<cards.length;i++){
       
     if(foodArray[i].type!=="non-veg"){
        cards[i].classList.add("hide");
     }else{
        cards[i].classList.remove("hide");
    } 
       }
    //    for(let i=0;i<cards.length;i++){
    //     if(cards[i].type==='non-veg'){
    //         cards[i].classList.remove("hide");
    //     }
    //    }
}

 
var colors = document.getElementsByClassName("square");
var colorArray = ["1","2","3","5","6","0"];
var colorPick;
var restButton = document.getElementById("resetButton");
var rgbText = document.getElementById("rgbII");
initialize();

function initialize(){
    fillArray(colorArray);
    fillColor();
    colorPick = pickColor() ;
    rgbText.textContent=colorArray[colorPick];
}

restButton.addEventListener("click",function(){
   initialize();
});

for(var i=0 ; i <colors.length;i++){
    colors[i].addEventListener("click",function(){
        if(this.style.background === rgbText.textContent) {
                    alert("REUSSI");
            }
                else{
                    this.style.background = "black";
                }
    })
}

// array.forEach(element => {
//     if(element === colorPick){
//         alert("REUSSI");
//     }
//     else{
//         alert("ERREUR");
//     }
// });

function fillArray(arr){
for(var i=0 ;i<arr.length;i++){
    arr[i] = randomColor();
}

}

function pickColor(){
    return parseInt(Math.random()*colorArray.length)
}

function fillColor(){
    for(var i=0;i<colors.length;i++){
        colors[i].style.background = colorArray[i];
    }
}

function randomColor(){
var r = parseInt(Math.random()*256);
var g = parseInt(Math.random()*256);
var b = parseInt(Math.random()*256);
return "rgb("+r+", "+g+", "+b+")";
}
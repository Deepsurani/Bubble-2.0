document.getElementById("box1").addEventListener("click", function (event) {
    var l1 = document.getElementById("lbl1");

    
    var xc = event.clientX;
    var yc = event.clientY;
    l1.innerHTML = "X: " + xc + " Y: " + yc;

  
    var b1 = document.createElement("span");
    b1.className = "bubble box";
    b1.innerHTML = "A";


    
   
    

    b1.style.left = (xc - 10) + "px"; 
    b1.style.top = (yc - 10) + "px";
    document.getElementById("box1").appendChild(b1);

    var timer = setInterval(function () {
        var currentTop = parseInt(b1.style.top);
        b1.style.top = (currentTop - 1) + "px";
});
function keyword(){
    b1.innerHTML = keyword.value;
}
});


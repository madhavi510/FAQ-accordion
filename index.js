

function showText(){
   
    let text = document.getElementById("answer");
    if(text.style.display === "none" ){
        text.style.display = "block";
       
        document.getElementById("imagePlus").src="https://res.cloudinary.com/dxisy98pv/image/upload/v1711614384/icon-minus_tpy7nd.svg";
    }
    else{
        text.style.display = "none";
        document.getElementById("imagePlus").src="https://res.cloudinary.com/dxisy98pv/image/upload/v1711614384/icon-plus_spxltw.svg";
    
    }
    
}

function showText1(){
    let secondAnswer = document.getElementById("secondAnswer");

    if(secondAnswer.style.display === "none" ){
       
        secondAnswer.style.display="block";
        document.getElementById("imagePlus1").src="https://res.cloudinary.com/dxisy98pv/image/upload/v1711614384/icon-minus_tpy7nd.svg";
    }
    else{
        secondAnswer.style.display = "none";
        document.getElementById("imagePlus1").src="https://res.cloudinary.com/dxisy98pv/image/upload/v1711614384/icon-plus_spxltw.svg";
    
    }
}
function showText2(){
    let thirdAnswer = document.getElementById("thirdAnswer");
    if(thirdAnswer.style.display === "none" ){
     
        thirdAnswer.style.display="block";
        document.getElementById("imagePlus2").src="https://res.cloudinary.com/dxisy98pv/image/upload/v1711614384/icon-minus_tpy7nd.svg";
    }
    else{
        thirdAnswer.style.display = "none";
        document.getElementById("imagePlus2").src="https://res.cloudinary.com/dxisy98pv/image/upload/v1711614384/icon-plus_spxltw.svg";
    
    }
}
function showText3(){
    let fourthAnswer = document.getElementById("fourthAnswer")
    if(fourthAnswer.style.display === "none" ){
      
        fourthAnswer.style.display="block";
        document.getElementById("imagePlus3").src="https://res.cloudinary.com/dxisy98pv/image/upload/v1711614384/icon-minus_tpy7nd.svg";
    }
    else{
        fourthAnswer.style.display = "none";
        document.getElementById("imagePlus3").src="https://res.cloudinary.com/dxisy98pv/image/upload/v1711614384/icon-plus_spxltw.svg";
    
    }
}

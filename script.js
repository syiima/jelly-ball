var i=0, text, j=0, text3, m=0, text4;
text = "I know you have questions for me. So, go ahead my child. Ask me anything..."
text3 = "You! What have you done??!!"
text4 = "You.... you... you did this..."


function firstText(){
    document.getElementById('first').style.display = "block";
    if(i<text.length){
        document.getElementById("text").innerHTML += text.charAt(i);
        i++;
        setTimeout(firstText,70);
    }
    if(i === text.length){
        document.getElementById('arrow-next').style.display = "block";
    }
}

function goNext(){
    document.getElementById('first').style.display = "hidden";
    document.getElementById('second').style.display = "block";
}

function selectOption(){
    document.getElementById('second').style.display = "hidden";
    thirdText()
}

function thirdText(){
    document.getElementById('third').style.display = "block";
    document.getElementById("orb").classList.add("orb-stopper");
    if(j<text3.length){
        document.getElementById("text3").innerHTML += text3.charAt(j);
        j++;
        setTimeout(thirdText,70);
    }
    if(j === text3.length){
        
        document.getElementById('cracked').style.display = "block";
        setTimeout(beforeFinal(), 1000)
    }
}

function beforeFinal(){
    document.getElementById("body-bod").classList.add("overlay-black");
    finalAct()
}

function finalAct(){
    document.getElementById("final").style.display = "block";
    if(m<text4.length){
        document.getElementById("text4").innerHTML += text4.charAt(m);
        m++;
        setTimeout(finalAct,400);
    }
}

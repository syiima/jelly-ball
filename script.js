var i=0, text, j=0, text3;
text = "I know you have questions for me. So, go ahead my child. Ask me anything..."
text3 = "You! What have you done??!!"

function firstText(){
    document.getElementById('first').style.display = "block";
    if(i<text.length){
        document.getElementById("text").innerHTML += text.charAt(i);
        i++;
        setTimeout(firstText,80);
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
    if(j<text3.length){
        document.getElementById("text3").innerHTML += text3.charAt(j);
        j++;
        setTimeout(thirdText,70);
    }
    if(j === text3.length){
        document.getElementById("orb").classList.add("orb-stopper");
        document.getElementById('cracked').style.display = "block";
    }
        
}

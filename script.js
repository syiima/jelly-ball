var i=0,text;
text = "Hello! I know you got questions for me. So, go ahead my child. Ask me anything..."

function firstText(){
    if(i<text.length){
        document.getElementById("text").innerHTML += text.charAt(i);
        i++;
        setTimeout(firstText, 80);
    }
}

const ans=document.getElementById("answersum");
let answ="";
function numbera(num){
      answ=answ+num;
      ans.value=answ;
}
function cleara(){
    answ="";
    ans.value=answ;
}
function equals(){
    if((ans.value)[0]==0)
        {
            
        } 
    else{
    answ=eval(ans.value);
    ans.value=answ;
    answ=""
    }
}
function backs(){
    a=ans.value;
    ans.value=a.substring(0,a.length - 1)
    answ=ans.value;
}
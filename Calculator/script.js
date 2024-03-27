const inFi=document.getElementById('in-fi');
const answer=document.getElementById('ans');


function getEl(el){
    console.log(el.innerText);
    console.log(el)
    const exp=inFi.value + el.innerText;
    inFi.value=exp;
    answer.value=eval(exp);
}


function reset(){
    inFi.value="";
    answer.value="";
}

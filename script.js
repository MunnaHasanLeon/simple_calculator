let display= document.getElementById('textView');

function debug(x){
    console.log(x);
}
function insert(num){  
    let val= display.value;
   
    let dis=val.charAt(val.length-1);
    // debug(isNaN(dis));
    // debug(isNaN(num));
   if((isNaN(dis) && isNaN(num)) || (val.length===0 && isNaN(num)) )
        debug('expression error');
    else
         display.value+=num; 
}
function rem(){
    display.value='';
}
function equal(){
    display.value=eval(display.value);
}
function popback(){
    let val=display.value;
    display.value=val.substring (0,val.length-1);
}

window.addEventListener("keydown", function(event){
    
    if(event.key==='Enter'){
        event.preventDefault();
        equal();
    }
    else if(event.key==='Backspace'){
        event.preventDefault();
        popback();
    }
});
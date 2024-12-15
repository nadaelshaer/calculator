 const calculatorContainer=document.getElementById('Calculator_container');
 const displayArea=document.getElementById('display_area');


 calculatorContainer.addEventListener('click',(e)=> {
    if(e.target.nodeName ='BUTTON'){
        switch(e.target.textContent){
            case 'C':
                clear();
                break;

            case 'DEL':
                deleteOneValue();
                break;
            case '=':
                evaluate();
                break;
            default:
                addToDisplayArea(e.target.textContent);        
        }
    }
 })

 function clear(){
    displayArea.textContent="";
 }

 function addToDisplayArea(value){
    displayArea.textContent= displayArea.textContent +value;
 }

 function deleteOneValue(){
    let currentContent= displayArea.textContent;
    displayArea.textContent=currentContent.substring(0,currentContent.length-1)
 }


 function evaluate(){
    try{
        let calculation =math.evaluate(displayArea.textContent);
        displayArea.textContent=calculation;
    }
    catch(error){
        displayArea.textContent="Invalid Operation";
        console.error(error);
    }
    
 }
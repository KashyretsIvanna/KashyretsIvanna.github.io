///////////////////////////////////////////
//Підрахунок вартості замовлення



const forms= document.forms[0];
const elements = forms.elements;
var input=0;
var inputNumber=0;
var select=0;
var costs=0;
var addi=[];
var additional=[];
var sum=0;
//Підрахунок ціни додаткових елементів
function calculating(){
    //Для select
    for(let i=0;i<4;i++){
        if(elements.coffe[i].selected){
            select=parseInt(elements.coffe[i].value);
            
            
            
            
            
        }
        
        
        
        
    } 
    //Для додаткових елементів

    for(let i=0;i<3;i++){
        if(forms.add[i].checked){
            addi[i]=forms.add[i].value;
            
            sum+=parseInt(addi[i]);
            
            
            
        }
        
        
        
        
    }
    //Для обсягу замовлення
    
    if(elements.quant.value>=0 && elements.quant.value<11 ){
    inputNumber = elements.quant.value;}

    //Підрахунок
    costs=sum+select*inputNumber;
    //Виведення
    console.log(costs)
    alert(costs)




    const count = document.querySelector("#count")
    count.textContent=" Сплатіть " + costs +" грн";
    sum = 0;
    

    
    







}






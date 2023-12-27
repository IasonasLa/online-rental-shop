var submit=document.getElementById('calculate')
submit.addEventListener('click',total)


function insurance(age,CC){
if(age>=18 && age<22){
finalCost=age*0,00042*CC;
return finalCost;

}else if(age>=22 && age<30){
insuranceCost=0.00036;
finalCost=age*0.00036*CC;
return finalCost;
}
else if(age>30){

finalCost=age*0.00023*CC;
return finalCost;
}
}

function rental(days,CC){
if(days<=5){
    if(CC<=1600){
        dayCost=15.42;
    }else if(CC>=1601&&CC<=2000){
        dayCost=16.82;
    }else{
        dayCost=18.22;
    }
}
else if(days>5&&days<11){
    if(CC<=1600){
        dayCost=14.62;
    }else if(CC>=1601&&CC<=2000){
        dayCost=15.76;
    }else{
        dayCost=17.10;
    }
}
else
{
    if(CC<=1600){
        dayCost=13.15;
    }else if(CC>=1601&&CC<=2000){
        dayCost=14.80;
    }else{
        dayCost=16.20;
    }
}

rentalCost=dayCost*days;

return rentalCost;
}



function total(){
    
    



let car=document.getElementById('car').value;
let days=document.getElementById('days').value;
let age=document.getElementById('age').value;


if( days.lenght==0 || age.lengh ==0 ){
    alert("Συμπληρωστε ολα τα κενα")



}
else{

if(car=='audiA4'){
cc=1700;
}
if(car=='AudiQ3'){
    cc=1500;
}
if(car=='kodiaq'){
    cc=1500;
}
if(car=='octavia'){
    cc=1800;
}
if(car=='aClass'){
    cc=1600;
}
if(car=='gle'){
    cc=3000;
}

if(car=='bmw'){
    cc=1600;
}
if(car=='mazda6'){
    cc=2000;
}
if(car=='ktmsuke'){
    cc=125;
}
if(car=='sym'){
    cc=125;
}
if(car=='honda'){
    cc=1000;
}
if(car=='hayabusa'){
    cc=1300;
}
if(car=='metris'){
    cc=2000;
}
if(car=='fordTransit'){
    cc=2100;
}
if(car=='CrysterPacifika'){
    cc=2300;
}
if(car=='sevrolet'){
    cc=2400;
}

insu=insurance(age,cc);
rent=rental(days,cc);

total2=rent+insu;

document.getElementById('price').innerText=total2.toFixed(2);}


}



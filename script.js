let input = document.querySelector(".input");
let btn = document.querySelector(".btn");
let inputYear = document.querySelector(".input-year");
let inputMonth = document.querySelector(".input-month");
let inputDays = document.querySelector(".input-days");


btn.addEventListener("click" , () =>{
if(input.value ===""){

    inputYear.style.width = "42px";
    inputMonth.style.width = "42px";
    inputDays.style.width = "42px";
    inputYear.style.border = "none";
    inputDays.style.border = "none";
    inputMonth.style.border = "none";
    inputYear.value = "NaN";
    inputDays.value = "NaN";
    inputMonth.value = "NaN";
}else{
    inputYear.style.width = "42px";
    inputMonth.style.width = "42px";
    inputDays.style.width = "42px";
    inputYear.style.border = "none";
    inputDays.style.border = "none";
    inputMonth.style.border = "none";


    
    let dob = new Date(input.value);
    let currentDate = new Date();
    let ageYears = currentDate.getFullYear() - dob.getFullYear();
    let ageMonths = currentDate.getMonth() - dob.getMonth(); 
    let ageDays = currentDate.getDate() - dob.getDate(); 
    if (ageDays < 0) {
        ageMonths--; 
        const lastMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
        ageDays += lastMonth.getDate(); 
    }
    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }
    inputYear.value = ageYears;
    inputMonth.value = ageMonths;
    inputDays.value = ageDays;
}
})
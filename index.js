const toggler = document.getElementById('suv');
const yearlyprice = document.querySelectorAll(".yearly");
const monthlyprice = document.querySelectorAll(".monthly");



toggler.addEventListener("click", (e)=>{
   if(checkbox.checked) {
      yearlyprice.forEach(yearly => yearly.style.display = "block");
      monthlyprice.forEach(monthly => monthly.style.display = "none");
      
   } else {
      yearlyprice.forEach(yearly => yearly.style.display = "none");
      monthlyprice.forEach(monthly => monthly.style.display = "block");
   }
})
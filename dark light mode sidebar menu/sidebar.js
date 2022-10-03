const openMenu = document.querySelector('#toggleBtn')
const closeMenu = document.querySelector('#close')
const sideBarEl = document.querySelector('#sideBar')
const toggleIcon = document.querySelector('.toggleIcon')
const a = document.querySelectorAll('a')
const h1 = document.querySelectorAll('h1')


openMenu.addEventListener('click', () =>{
  sideBarEl.classList.remove("sidebar")
  sideBarEl.classList.add("openSidebar")
});
  

closeMenu.addEventListener('click', () =>{
   sideBarEl.classList.remove("openSidebar")
  sideBarEl.classList.add("sidebar")
 
 
});

let isDarkMode = false;
toggleIcon.addEventListener('click',()=>{
  if(isDarkMode === false){
    isDarkMode = true;
     sideBarEl.style.backgroundColor='black'
    h1.forEach(e =>{
     
      e.style.color = 'white'
    })
    a.forEach(e =>{
     
      e.style.color = 'white'
    })
       
 
    
   toggleIcon.textContent = 'Light Mode'
  }
  else{
    isDarkMode = false;
     sideBarEl.style.backgroundColor='white'
    h1.forEach(e =>{
     
      e.style.color = 'black'
    })
    a.forEach(e =>{
     
      e.style.color = 'black'
    })
   
     

   
   toggleIcon.textContent = 'Dark Mode'
  }
})

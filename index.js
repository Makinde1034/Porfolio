const toggle = document.querySelector('.toggle-box');
const circle = document.querySelector('.circle');



toggle.addEventListener("click",()=>{
    circle.classList.toggle('circle--active');

    if(circle.classList.contains('circle--active')){
       const theme =  document.documentElement.setAttribute('data-theme','dark');
       localStorage.setItem('theme','dark');
        
    }else{
        document.documentElement.setAttribute('data-theme','light');
        localStorage.setItem('theme','light');
    }
    
});

const checkTheme = () =>{
    const localStorageTheme = localStorage.getItem('theme');
    if(localStorageTheme === "dark"){
        document.documentElement.setAttribute('data-theme','dark');
        circle.classList.add('circle--active');
    }
}
window.addEventListener('load',checkTheme());



menuBtn = document.querySelector(".menu-btn"),
menu = document.querySelector(".menu"),
navbar = document.querySelector(".header");


menuBtn.addEventListener("click", ()=>{

    menu.classList.toggle("active")
    
    if(menuBtn.children[0].classList[1] === "fa-bars"){
        
        menuBtn.innerHTML = `<i class="fas fa-times"></i>`
        
    }
    
    else if(menuBtn.children[0].classList[1] == "fa-times"){
        
        menuBtn.innerHTML = `<i class="fas fa-bars"></i>`
        
    }
    
    if(window.scrollY != 0){
    
    if(navbar.classList.contains("sticky")){
    
    navbar.classList.remove("sticky")
    
    }
    
    else{
    
        navbar.classList.add("sticky")
    
    }
    
}
})



window.addEventListener("scroll", ()=>{
    if(window.scrollY > 20){
        navbar.classList.add("sticky");
    }
    
    else{
        navbar.classList.remove("sticky");
    }
    
    // if(window.scrollY > 500){
    //     scrollBtn.classList.add("active");
    // }
    // else{
    //     scrollBtn.classList.remove("active");
    // }
    
})


//Link Sections
let sections = document.querySelectorAll("section"),
    links = document.querySelectorAll(".header ul li");
    
links.forEach(link =>{
    link.addEventListener("click", ()=>{
        document.querySelector(".header ul li.active").classList.remove("active");
        link.classList.add("active");
        menu.classList.remove("active")
        
        if(menuBtn.children[0].classList[1] === "fa-bars"){
        
            menuBtn.innerHTML = `<i class="fas fa-times"></i>`
            
        }
        
        else if(menuBtn.children[0].classList[1] == "fa-times"){
            
            menuBtn.innerHTML = `<i class="fas fa-bars"></i>`
            
        }
        
        let target = link.dataset.filter;
        sections.forEach(section =>{
            if(section.classList.contains(target)){
                section.scrollIntoView({
                    behavior : "smooth"
                })
            }
        })
    })
})


let counter = document.querySelectorAll(".counter");
                
counter.forEach(count =>{
    
    count.addEventListener("click", ()=>{
        count.innerText ++
    })
})
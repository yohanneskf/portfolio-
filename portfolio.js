let btnl = document.getElementById("btnl");
        let btnr = document.getElementById("btnr");
        let contener = document.querySelector(".uppercontener");
        contener.addEventListener("wheel",ev=>{
            ev.preventDefault();
            contener.scrollLeft +=ev.deltaY;
        })
        btnl.addEventListener("click",()=>{
            contener.style.scrollBehavior = "smooth";
            contener.scrollLeft -= 250;
        })
        btnr.addEventListener("click",()=>{
            contener.style.scrollBehavior = "smooth";
            contener.scrollLeft += 250;
        })
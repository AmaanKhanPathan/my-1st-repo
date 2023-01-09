const selectColor = document.getElementById("selectColor");

const all = Array.from(document.querySelectorAll(".all"));
// const orange = Array.from(document.querySelectorAll(".orange"));
// const blueviolet = Array.from(document.querySelectorAll(".blueviolet"));
// const red = Array.from(document.querySelectorAll(".red"))
// const yellowgreen = Array.from(document.querySelectorAll("yellowgreen"));

const onSelectColor = (eve) => {
   

    let getClass = "."+eve.target.value;
    console.log(getClass);
    
    all.forEach(div => div.classList.add('d-none'));

    let getDivs = Array.from(document.querySelectorAll(getClass));
    
    getDivs.forEach(div => div.classList.remove('d-none'));
        
    
        
}

selectColor.addEventListener('change', onSelectColor)


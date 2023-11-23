const toggle = document.getElementById('toggle');

const h2Tags = document.getElementsByTagName('h2');


let elemntClicked = false;

const toggleContent = () => {
    // const toggleContent = (e) => {

    
        // console.log(e)
        // if(e.type == "click" && e.key == "Enter") {
        //     let newToggle = toggleHolder.classList.toggle('active');
        //     toggle.classList.toggle('toggle-active');

            
        //     for(let i = 0;i < h2Tags.length; i++) {
        //         console.log(h2Tags[i])
        //         h2Tags[i].classList.toggle('monthly-usd')
        //     }
                
        // }
    // }
        toggle.classList.toggle('active');

        
        for(let i = 0;i < h2Tags.length; i++) {
            h2Tags[i].classList.toggle('monthly-usd')
        }
        
    
}



// ["click", "keydown"].forEach(ev => {
//     toggle.addEventListener("click", toggleContent);
// });

toggle.addEventListener("click", toggleContent);


// toggle.addEventListener("click", toggleContent);

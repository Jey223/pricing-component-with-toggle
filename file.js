const toggleDiv = document.getElementById('toggle-div');
const toggle = document.getElementById('toggle');


const h2Tags = document.getElementsByTagName('h2');



const toggleContent = () => {
        toggle.classList.toggle('active');

        
        for(let i = 0;i < h2Tags.length; i++) {
            h2Tags[i].classList.toggle('monthly-usd')
        }
}




toggleDiv.addEventListener("click", toggleContent);

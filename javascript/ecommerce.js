document.addEventListener("scroll", ()=> {

    const header = document.querySelector("header");
    if(window.scrollY > 0)
        {
            header.classList.add('scrolled');
            
        }
    else 
    {
         header.classList.remove('scrolled');
    }

    if(window.scrollY > 200)
        {
            closeCart();
            closeLogin();
            showArrow();

        }
        if(window.scrollY < 200)
            {
                
                hideArrow();
    
            }

})
function showArrow(){
    document.querySelector("#arrow").style.opacity = "1";
}
function hideArrow(){
    document.querySelector("#arrow").style.opacity = "0";
}
//program for Cart visibility
function showCart() {
    const cart = document.querySelector(".cart-toggle-menu");
    cart.style.display = "block";  // Display the element first
    setTimeout(() => {
        cart.style.opacity = '1';  // Then change opacity to trigger transition
    }, 10);  // Use a slight delay to ensure display change takes effect
}

function closeCart() {
    const cart = document.querySelector(".cart-toggle-menu");
    cart.style.opacity = '0';  // Change opacity to hide gradually
    setTimeout(() => {
        cart.style.display = "none";  // Hide the element after opacity transition
    }, 400);  // Adjust timing to match your transition duration (0.4s in this case)
}

//function to increase and decrease item quantity    


//function for showing login forms
function showLogin() {
    const login = document.querySelector(".login");
    login.style.display = "block";  // Display the element first
    setTimeout(() => {
        login.style.opacity = '1';  // Then change opacity to trigger transition
    }, 10);  // Use a slight delay to ensure display change takes effect
}

function closeLogin() {
    const login = document.querySelector(".login");
    login.style.opacity = '0';  // Change opacity to hide gradually
    setTimeout(() => {
        login.style.display = "none";  // Hide the element after opacity transition
    }, 500);  // Adjust timing to match your transition duration (0.5s in this case)
}
//function for fap's page

let questionDiv = document.querySelectorAll(".question-item");
    questionDiv.forEach((item) => {
        let questionHeader= item.querySelector(".question-header");
        questionHeader.addEventListener("click", ()=>{
            
            let answer = item.querySelector(".answer");
    
            answer.classList.toggle("open");

            
        } )
    })
 
    // details image gallery

    let det_img = document.querySelectorAll(".norm-img");
    var det_counter = 0;
    let imgInfo = document.querySelector("#det-img-info");
    
    function next()
    {
        
        det_img[det_counter].style.animation = 'next1 0.5s ease-in forwards';
        imgInfo.innerHTML = `Image ${det_counter + 1} of ${det_img.length}`;
        if(det_counter >= det_img.length - 1)
            det_counter = 0;
        else
        {
            det_counter++;
        }
        det_img[det_counter].style.animation = 'next2 0.5s ease-in forwards';
        imgInfo.innerHTML = `Image ${det_counter + 1} of ${det_img.length}`;
    }
    function prev(){
        
        det_img[det_counter].style.animation = 'prev1 0.5s ease-in forwards';
        imgInfo.innerHTML = `Image ${det_counter + 1} of ${det_img.length}`;
        if(det_counter == 0)
            det_counter = det_img.length - 1;
        else
        {
            det_counter--;
        }
        det_img[det_counter].style.animation = 'prev2 0.5s ease-in forwards';
        imgInfo.innerHTML = `Image ${det_counter + 1} of ${det_img.length}`;
    }   
    
    function liked()
    {
        let icon = document.getElementById("liked");
        if (icon.style.color != 'rgb(201, 0, 0)')
        icon.style.color = 'rgb(201, 0, 0)';
    else{
        icon.style.color = 'rgba(78, 78, 78, 0.63)';
    }
    }






// Array of image URLs
const images = [
    'url(images/slide-1.png)',
    'url(images/slide-2.png)',
    'url(images/slide-3.png)'
];

// Current image index
let currentIndex = 0;

// Function to change the background image
function changeBackgroundImage() {
    const slideImg = document.querySelector("#slider-img");
    currentIndex = (currentIndex + 1) % images.length;
    slideImg.style.backgroundImage = images[currentIndex];
}

// Set interval to change the image every 8 seconds
setInterval(changeBackgroundImage, 8000);

console.log("ecommerce.js loaded successfully");


//function to change the text
const texts = [
    { preHeading: '#1 Trending Items', mainHeading: `Original <br> is Never <br> Finished`, explanation: 'Discover timeless originality with our curated collection of unique and enduring products, where creativity knows no bounds.' },
    { preHeading: 'We Offer', mainHeading: `Premium <br> Quality <br> For You`, explanation: '"Discover our commitment to delivering unparalleled excellence in every product and service.' },
    { preHeading: 'Serving You', mainHeading: `Best <br> Since <br> 1947`, explanation: 'Our clothing ensures superior craftsmanship and luxurious comfort, designed to elevate your style.' }
];
let index = 0;
setInterval(() => {
    const pre_heading = document.querySelector("#pre-heading");
    const main_headign = document.querySelector("#main-heading");
    const paragraph = document.querySelector("#explanation");

    index = (index + 1) % texts.length;

    pre_heading.textContent = texts[index].preHeading;
    main_headign.innerHTML =  texts[index].mainHeading;
    paragraph.textContent =   texts[index].explanation;


}, 8000)


// card hover function to show cart
// Select all .card-content elements within .card-container
// Select all .card-content elements within .card-contain



//-------------------------------Nav Bar---------------------------------//
//function to open menu
function openMenu()
{
  let navBar = document.querySelector("#nav-list");
   navBar.style.display = "flex";
   setTimeout(() => {
    navBar.style.left=" -65%";
    navBar.style.top=" 20%";
    navBar.style.transform = "translate(-50%, -40%);"
      // Then change opacity to trigger transition
}, 10);
 
}

function closeMenu()
{   setTimeout(() => {navBar.style.left = " 50% ";
                        navBar.style.top = " 50% "; }, 10);
    let navBar = document.querySelector("#nav-list");
    
    setTimeout(() => {navBar.style.display = "none";}, 400);


}



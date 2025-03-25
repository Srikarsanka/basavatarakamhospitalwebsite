// const welcome = document.getElementById("nam");
// const profile = document.getElementById('pop');

// // Fetch user details from localStorage
// const name = localStorage.getItem('firstName') || 'User';
// const dob = localStorage.getItem('dob') || 'N/A';
// const email = localStorage.getItem('userEmail') || 'N/A';
// const gender = localStorage.getItem('gender') || 'N/A';


// // Function to get the greeting based on the time of day
// function getGreeting() {
//     const hours = new Date().getHours();
//     if (hours < 12) return "Good Morning";
//     if (hours < 18) return "Good Afternoon";
//     return "Good Evening";
// }

// // Display the dynamic greeting
// welcome.innerHTML = `<h1 style="margin-left:-0.5rem;font-weight:300;font-size:3rem">${getGreeting()}, ${name}<br><strong style="margin-top:0.3rem;color:orange;display:inline-block;margin-left:2%;margin-right:2rem;font-size:3.5rem;font-weight:300;font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;">   your health is important to us.<br> Let’s take good care of you together!</strong></h1>`;

// // Function to create and display the profile modal
// profile.addEventListener('click', () => {
//     // Remove existing profile modal if it exists
//     const existingModal = document.getElementById('profileModal');
//     if (existingModal) {
//         existingModal.remove();
//     }

//     // Decide the profile image based on gender
//     let profileImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJd42JdHzWNXP6VQQbiNZ3VrzHtDmvYMYQEVEriEi7kCw5Uz06QQtyfQeNoHItvNO0mKQ&usqp=CAU"; // Default image
//     if (gender.toLowerCase() === 'm') {
//         profileImage = "https://cdn-icons-png.flaticon.com/512/2922/2922506.png"; // Male image
//     } else if (gender.toLowerCase() === 'f') {
//         profileImage = "https://cdn-icons-png.flaticon.com/512/2922/2922561.png"; // Female image
//     }

//     // Create the profile modal
//     const div = document.createElement('div');
//     div.id = 'profileModal';
//     div.style.width = '25%';
//     div.style.height = '100%';
//     div.style.backgroundColor = 'white';
//     div.style.color = '#0f346c';
//     div.style.position = 'fixed';
//     div.style.top = '0px';
//     div.style.overflowY = 'scroll';
//     div.style.right = '0';
//     div.style.zIndex = '100';
//     div.style.border = '1px solid #ddd';
//     div.style.boxShadow = '0px 4px 6px rgba(0, 0, 0, 0.1)';
//     div.style.borderRadius = '8px';
//     div.style.padding = '10px';

//     // Add user information to the modal
//     div.innerHTML = `
//         <h2 style="text-align: center; margin-bottom: 20px;">User Information</h2>
//         <div style="text-align: center; padding: 20px;">
//             <img src="${profileImage}" alt="Profile Image" 
//                  style="width: 150px; height: 150px; border-radius: 50%; object-fit: cover; border: 3px solid #0f346c;">
//         </div>
//         <h2 style='font-size:1.5rem;font-weight:100;margin-left:10%'><strong style='font-weight:800'>Name:</strong> ${name}</h2>
//         <h2 style='font-size:1.5rem;font-weight:100;margin-left:10%'><strong style='font-weight:800'>Date of Birth:</strong> ${dob}</h2>
//         <h2 style='font-size:1.5rem;font-weight:100;margin-left:10%'><strong style='font-weight:800'>Gender:</strong> ${gender}</h2>
//         <h2 style='font-size:1.5rem;font-weight:100;margin-left:10%'><strong style='font-weight:800;font-size:1.7rem'>Email:</strong> ${email}</h2>
//         <button id="closeProfile" style="display: block; margin: 20px auto; padding: 10px 20px; background-color: orange; border: none; color: white; border-radius: 5px; font-size: 1rem; cursor: pointer;">Close</button>
        
//         `;

//     document.body.appendChild(div);

//     // Close the modal on button click
//     const closeProfile = document.getElementById('closeProfile');
//     closeProfile.addEventListener('click', () => {
//         div.remove();
//     });
// });

const name = localStorage.getItem('firstName') || 'User';
const dob = localStorage.getItem('dob') || 'N/A';
const email = localStorage.getItem('userEmail') || 'N/A';
const gender = localStorage.getItem('gender') || 'N/A';

// Check if data is available
console.log("User Profile Data:", { name, dob, email, gender });
const profile = document.getElementById('pop')
// Function to create and display the profile modal
profile.addEventListener('click', () => {
    // Remove existing profile modal if it exists
    const existingModal = document.getElementById('profileModal');
    if (existingModal) {
        existingModal.remove();
    }

    // Decide the profile image based on gender
    let profileImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJd42JdHzWNXP6VQQbiNZ3VrzHtDmvYMYQEVEriEi7kCw5Uz06QQtyfQeNoHItvNO0mKQ&usqp=CAU"; // Default image
    if (gender.toLowerCase() === 'm') {
        profileImage = "https://cdn-icons-png.flaticon.com/512/2922/2922506.png"; // Male image
    } else if (gender.toLowerCase() === 'f') {
        profileImage = "https://cdn-icons-png.flaticon.com/512/2922/2922561.png"; // Female image
    }

    // Create the profile modal
    const div = document.createElement('div');
    div.id = 'profileModal';
    div.style.width = '25%';
    div.style.height = '100%';
    div.style.backgroundColor = 'white';
    div.style.color = '#0f346c';
    div.style.position = 'fixed';
    div.style.top = '0px';
    div.style.overflowY = 'scroll';
    div.style.right = '0';
    div.style.zIndex = '90000';
    div.style.border = '1px solid #ddd';
    div.style.boxShadow = '0px 4px 6px rgba(0, 0, 0, 0.1)';
    div.style.borderRadius = '8px';
    div.style.padding = '10px';

    // Add user information to the modal
    div.innerHTML = `
        <h2 style="text-align: center; margin-bottom: 20px;">User Information</h2>
        <div style="text-align: center; padding: 20px;">
            <img src="${profileImage}" alt="Profile Image" 
                 style="width: 150px; height: 150px; border-radius: 50%; object-fit: cover; border: 3px solid #0f346c;">
        </div>
        <h2 style='font-size:1.5rem;font-weight:100;margin-left:10%'><strong style='font-weight:800'>Name:</strong> ${name}</h2>
        <h2 style='font-size:1.5rem;font-weight:100;margin-left:10%'><strong style='font-weight:800'>Date of Birth:</strong> ${dob}</h2>
        <h2 style='font-size:1.5rem;font-weight:100;margin-left:10%'><strong style='font-weight:800'>Gender:</strong> ${gender}</h2>
        <h2 style='font-size:1.5rem;font-weight:100;margin-left:10%'><strong style='font-weight:800;font-size:1.7rem'>Email:</strong> ${email}</h2>
        <button id="closeProfile" style="display: block; margin: 20px auto; padding: 10px 20px; background-color: orange; border: none; color: white; border-radius: 5px; font-size: 1rem; cursor: pointer;">Close</button>
        
        `;

    document.body.appendChild(div);

    // Close the modal on button click
    const closeProfile = document.getElementById('closeProfile');
    closeProfile.addEventListener('click', () => {
        div.remove();
    });
});
// cart functionality
let count = 0;
let totalprice = 0;
let cartItems = [];

// 🟢 Load cart data from local storage when the page loads
window.onload = function () {
    const savedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    const savedCount = JSON.parse(localStorage.getItem("cartCount")) || 0;
    const savedTotalPrice = JSON.parse(localStorage.getItem("cartTotalPrice")) || 0;

    cartItems = savedCart;
    count = savedCount;
    totalprice = savedTotalPrice;

    document.getElementById("cart-count").innerHTML = count;
};

// 🟢 Function to save cart data in local storage
function saveCartToLocalStorage() {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    localStorage.setItem("cartCount", count);
    localStorage.setItem("cartTotalPrice", totalprice);
}

// 🟢 Add item to cart
function addToCart(button) {
    alert("Added to cart!");

    count++;  
    document.getElementById("cart-count").innerHTML = count;

    let price = parseFloat(button.getAttribute('data-price'));
    let name = button.getAttribute('data-name');
    let image = button.getAttribute('data-image');

    totalprice += price;
    cartItems.push({ name, price, image });

    saveCartToLocalStorage(); // Save updated cart to local storage
    updateCartModal();
}

// 🟢 Show cart modal
const cart = document.querySelector('#cart');
cart.addEventListener('click', showCartModal);

function showCartModal() {
    const existingModal = document.getElementById('cartModal');
    if (existingModal) existingModal.remove();

    let div = document.createElement('div');
    div.id = 'cartModal';
    div.style.width = '25%';
    div.style.height = '100%';
    div.style.overflowY = 'scroll';
    div.style.backgroundColor = 'white';
    div.style.color = '#0f346c';
    div.style.position = 'fixed';
    div.style.top = '1%';
    div.style.right = '5px';
    div.style.padding = '10px';
    div.style.borderRadius = '10px';
    div.style.zIndex = '1000';

    let cartContent = cartItems.length === 0 
        ? "<p>No items added yet.</p>" 
        : cartItems.map((item, index) => `
            <div style="border-bottom: 1px solid #ddd; padding: 10px; display: flex; align-items: center; justify-content: space-between;">
                <div style="display: flex; align-items: center;">
                    <img src="${item.image}" alt="Test Image" style="width: 50px; height: 50px; border-radius: 50%; object-fit: cover; border: 2px solid #0f346c; margin-right: 10px;">
                    <div>
                        <p><b>${item.name}</b></p>
                        <p style="color: orange; font-weight: bold;">Price: ₹${item.price}</p>
                    </div>
                </div>
                <button onclick="removeFromCart(${index})" style="background-color: red; color: white; border: none; padding: 5px 10px; cursor: pointer; border-radius: 5px;">Remove</button>
            </div>
        `).join("");

    div.innerHTML = `
        <span id='close' style="margin-left:20rem;cursor:pointer">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black">
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
            </svg>
        </span>
        <br>
        <div id="cartitems" style="width:100%;height:90%;border:1px solid red;overflow-y:scroll; padding: 10px;">
            ${cartContent}
        </div>
        <div id="total-price" style="color:black; font-size: 16px; font-weight: bold; margin-top: 10px;">
            Total Price To Be Paid: ₹${totalprice}
        </div>
    `;

    document.body.appendChild(div);

    document.getElementById('close').addEventListener('click', () => {
        div.remove();
    });
}

// 🟢 Update cart modal
function updateCartModal() {
    const modal = document.getElementById('cartModal');
    if (modal) {
        let cartContent = cartItems.map((item, index) => `
            <div style="border-bottom: 1px solid #ddd; padding: 10px; display: flex; align-items: center; justify-content: space-between;">
                <div style="display: flex; align-items: center;">
                    <img src="${item.image}" alt="Test Image" style="width: 50px; height: 50px; border-radius: 50%; object-fit: cover; border: 2px solid #0f346c; margin-right: 10px;">
                    <div>
                        <p><b>${item.name}</b></p>
                        <p style="color: orange; font-weight: bold;">Price: ₹${item.price}</p>
                    </div>
                </div>
                <button onclick="removeFromCart(${index})" style="background-color: red; color: white; border: none; padding: 5px 10px; cursor: pointer; border-radius: 5px;">Remove</button>
            </div>
        `).join("");

        document.getElementById('cartitems').innerHTML = cartContent;
        document.getElementById('total-price').innerHTML = `Total Price To Be Paid: ₹${totalprice}`;
    }
}

// 🟢 Remove item from cart
function removeFromCart(index) {
    totalprice -= cartItems[index].price;
    cartItems.splice(index, 1);
    count--;

    document.getElementById("cart-count").innerHTML = count;

    saveCartToLocalStorage(); // Save updated cart to local storage
    updateCartModal();
}

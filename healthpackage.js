// script.js
const packages = [
      {
          id: 1,
          name: "Child Growth Pro Package",
          image: "https://images.unsplash.com/photo-1577897113292-3b95936e5206?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          category: "child",
          audience: "For Children (2-12 years)",
          tests: ["Growth Analysis", "Blood Test", "Vision Test"],
          originalPrice: "Rs. 2499",
          discountPrice: "Rs. 1999",
          recommended: "Highly Recommended by Doctors"
      },
      {
          id: 2,
          name: "Immunity Booster Checkup",
          image: "https://media.istockphoto.com/id/1310328058/vector/female-character-protected-from-bacteria-and-viruses-woman-boosting-immune-system-with-yoga.jpg?s=612x612&w=0&k=20&c=UHFgILYlOGeVgIMc6zKMgbUu54gSIIIHtJOD6qAiAcU=",
        category: "child",
        audience: "For Children (2-12 years)",
        tests: ["Vitamin Levels", "Blood Count", "Allergy Test"],
        originalPrice: "Rs. 2999",
        discountPrice: "Rs. 2499",
        recommended: "Recommended"
    },
{
id: 3,
name: "Full Body Checkup (Men & Women)",
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-Wpqn-ZZwOCiLGQlq659JNKuUU3YZZCMt5SF7CeY6GStyf4-Mv21BvcYN7HdgK_jmuUo&usqp=CAU",
category: "young",
audience: "For Adults (18-60 years)",
tests: ["Blood Test", "ECG", "X-Ray"],
originalPrice: "Rs. 3499",
discountPrice: "Rs. 2999",
recommended: "Recommended"
},
{
id: 4,
name: "Advanced Heart Health Checkup",
image: "https://www.medicoverhospitals.in/images/preventive/heart-checkup-medicover-hospitals.webp",
category: "young",
audience: "For Adults (18-60 years)",
tests: ["ECG", "Cholesterol", "Blood Pressure"],
originalPrice: "Rs. 3999",
discountPrice: "Rs. 3499",
recommended: "Highly Recommended by Doctors"
},
{
id: 5,
name: "Senior Citizen Wellness Checkup",
image: "https://www.medicoverhospitals.in/images/preventive/preconception-health-checkup-package-medicover-hospitals.webp",
category: "old",
audience: "For Seniors (60+ years)",
tests: ["Diabetes", "Heart Health", "Eye Checkup"],
originalPrice: "Rs. 3999",
discountPrice: "Rs. 3499",
recommended: "Highly Recommended by Doctors"
},
{
id: 6,
name: "Bone & Joint Health Checkup",
image: "https://www.medicoverhospitals.in/images/preventive/bone-checkup-medicover-hospitals.webp",
category: "old",
audience: "For Seniors (60+ years)",
tests: ["Bone Density", "Arthritis Test", "Calcium Levels"],
originalPrice: "Rs. 4599",
discountPrice: "Rs. 4099",
recommended: "Recommended"
},
// Additional packages for children
{
id: 7,
name: "Child Health Screening",
image: "https://www.medicoverhospitals.in/images/preventive/child-health-check-medicover-hospitals.webp",
category: "child",
audience: "For Children (2-12 years)",
tests: ["Hearing Test", "Speech Evaluation", "Growth Monitoring"],
originalPrice: "Rs. 1999",
discountPrice: "Rs. 1499",
recommended: "Recommended"
},
{
id: 8,
name: "Child Allergy Test",
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMTVnHh2zp_bTinmF5UyhRopLScn6d2KIvSw&s",
category: "child",
audience: "For Children (2-12 years)",
tests: ["Skin Prick Test", "Blood Test"],
originalPrice: "Rs. 2499",
discountPrice: "Rs. 1999",
recommended: "Highly Recommended"
},
// Additional packages for adults
{
id: 9,
name: "Diabetes Screening",
image: "https://www.medicoverhospitals.in/images/preventive/diabetic-health-check-package-medicover-hospitals.webp",
category: "young",
audience: "For Adults (18-60 years)",
tests: ["Fasting Blood Sugar", "HbA1c Test"],
originalPrice: "Rs. 1999",
recommended: "Recommended",
},
{
id: 10,
name: "Heart Health Package",
image: "https://www.medicoverhospitals.in/images/preventive/essential-heart-checkup-package-medicover-hospitals-new.webp",
category: "young",
audience: "For Adults (18-60 years)",
tests: ["ECG", "Stress Test", "Cholesterol Check"],
originalPrice: "Rs. 4999",
discountPrice: "Rs. 3999",
recommended: "Highly Recommended"
},
// Additional packages for seniors
{
id: 11,
name: "Senior Health Checkup",
image: 'data:image/jpeg;base64,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',
category: "old",
audience: "For Seniors (60+ years)",
tests: ["Complete Blood Count", "Kidney Function Test"],
originalPrice: "Rs. 3999",
discountPrice: "Rs. 3499",
recommended: "Recommended"
},
{
id: 12,
name: "Comprehensive Geriatric Assessment",
image: "https://www.medicoverhospitals.in/images/preventive/liver-health-checkup-package-medicover-hospitals.webp",
category: "old",
audience: "For Seniors (60+ years)",
tests: ["Cognitive Assessment", "Nutritional Evaluation"],
originalPrice: "Rs. 4999",
discountPrice: "Rs. 4499",
recommended: "Highly Recommended"
}
];

function renderPackages() {
packages.forEach(pkg => {
let div = document.createElement("div");
div.classList.add("package-card");
div.innerHTML = `
    <div class="card-image" style="background-image: url('${pkg.image}');object-fit:contain;width:100%;height:350px"></div>
    <div class="card-content">
        <h3>${pkg.name}</h3>
        <p>${pkg.audience}</p>
        <div class="price-section">
            <span class="original-price">${pkg.originalPrice}</span>
            <span class="discount-price">${pkg.discountPrice}</span>
        </div>
        <span class="card-badge">${pkg.recommended}</span>
    </div>
`;
div.onclick = () => showPackageDetails(pkg);
document.getElementById(`${pkg.category}-packages`).appendChild(div);
});
}

function showPackageDetails(pkg) {
document.getElementById("modalImage").style.backgroundImage = `url('${pkg.image}')`;
document.getElementById("packageTitle").innerText = pkg.name;
document.getElementById("packageAudience").innerText = `Audience: ${pkg.audience}`;

// If tests is an array, join it with commas
const testsStr = Array.isArray(pkg.tests) ? pkg.tests.join(", ") : pkg.tests;
document.getElementById("packageTests").innerHTML = `<li>${testsStr}</li>`;

document.getElementById("packageOriginalPrice").innerText = `Original Price: ${pkg.originalPrice}`;
document.getElementById("packageDiscountPrice").innerText = `Discount Price: ${pkg.discountPrice}`;
document.getElementById("packageRecommendation").innerText = `Recommendation: ${pkg.recommended}`;

document.getElementById("modal").style.display = "flex";
}

function closeModal() {
document.getElementById("modal").style.display = "none";
}

// Render packages when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", renderPackages);
// add to cart functionality and profile

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

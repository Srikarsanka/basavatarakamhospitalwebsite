
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

// this is use to create the popup for the booking appointements
const doctors = [
    {
        id: 1.1,
        name: "Dr. Brahmanadam",
        experience: 3,
        languages: ["Telugu", "English"],
        image: "carm1.png",
        dep:"Cardiologist"
    },
    {
        id: 2.1,
        name: "Dr. Aradhya",
        experience: 9,
        languages: ["Tamil", "English"],
        image: "carf1.png",
         dep:"Cardiologist"

    },
    {
        id: 3.1,
        name: "Dr. Domini",
        experience: 4,
        languages: ["Hindi", "English"],
        image: "carf2.png",
         dep:"Cardiologist"
    },
    {
        id: 4.1,
        name: "Dr. Balakrishna",
        experience: 25,
        languages: ["Telugu", "Hindi", "Tamil", "English"],
        image: "carm2.png",
         dep:"Cardiologist",
    },
    {
        id: 5.1,
        name: "Dr. Ishaan",
        experience: 3,
        languages: ["Telugu", "English"],
        dep: "Cardiothoracic",
        image: "cardm1.png"
    },
    {
        id: 6.1,
        name: "Dr. Samantha",
        experience: 5,
        languages: ["Hindi", "English"],
        dep: "Cardiothoracic",
        image: "cardf1.jpg"
    },
    {
        id: 7.1,
        name: "Dr. Riya",
        experience: 10,
        languages: ["Telugu", "English"],
        dep: "Cardiothoracic",
        image: "cardf2.png"
    },
    {
        id: 8.1,
        name: "Dr. Nagaeshvarao",
        experience: 25,
        languages: ["Telugu", "Hindi", "English"],
        dep: "Cardiothoracic",
        image: "cardm2.png"
    },
    {
        id: 9.1,
        name: "Dr. Mukesh",
        experience: 10,
        languages: ["Hindi", "English"],
        image: "dem1.png",
        dep: "Dental",
    },
    {
        id: 10.1,
        name: "Dr. Vaishnavi",
        experience: 9,
        languages: ["Telugu", "English"],
        image: "def1.png",
        dep: "Dental",
    },
    {
        id: 11.1,
        name: "Dr. Anjali",
        experience: 4,
        languages: ["Telugu", "English"],
        image: "def2.png",
        dep: "Dental",
    },
    {
        id: 12.1,
        name: "Dr. Apparao",
        experience: 25,
        languages: ["Telugu", "Hindi", "Tamil", "English"],
        image: "dem2.png",
        dep: "Dental",
    },
    {
        id: 13.1,
        name: "Dr. James",
        dep: "Dermatology",
        experience: 7,
        languages: ["Telugu", "English"],
        image: "dermm1.png"
    },
    {
        id: 14.1,
        name: "Dr. Lakshmi",
        dep: "Dermatology",
        experience: 5,
        languages: ["Telugu", "English"],
        image: "dermf1.png"
    },
    {
        id: 15,
        name: "Dr. Sushmitha",
        dep: "Dermatology",
        experience: 4,
        languages: ["Hindi", "English"],
        image: "dermf2.png"
    },
    {
        id: 16,
        name: "Dr. Subbarao",
        dep: "Dermatology",
        experience: 25,
        languages: ["Telugu", "Hindi", "English"],
        image: "dermm2.png"
    }
       
    ];
    


const docCards = document.querySelectorAll(".d1");

docCards.forEach(card => {
    card.addEventListener("click", function () {
        const btn = this.querySelector("button");
        if (!btn) return;

        const docId = btn.getAttribute("id");
        const selectedDoc = doctors.find(doctor => doctor.id == docId);
        if (!selectedDoc) return;

        // Generate next 4 days
        const dates = [];
        const today = new Date();
        for (let i = 0; i < 4; i++) {
            const date = new Date();
            date.setDate(today.getDate() + i);
            dates.push(date.toDateString());
        }

        // Available time slots
        const timeSlots = [
            "10:00 AM - 11:00 AM",
            "11:00 AM - 12:00 PM",
            "3:00 PM - 4:00 PM",
            "5:00 PM - 6:00 PM"
        ];

        // Create the pop-up container
        const popup = document.createElement("div");
        popup.classList.add("popup");
        popup.style.overflowY = 'auto'; // Allows scrolling if content overflows
        popup.style.overflowY = 'scroll'; // Enable scrolling
        popup.style.scrollbarWidth = 'none'; // Hides scrollbar in Firefox
        popup.style.msOverflowStyle = 'none'; // Hides scrollbar in IE/Edge
        popup.style.WebkitOverflowScrolling = 'touch'; // Enables smooth scrolling in Safari
        popup.innerHTML = `
            <span id='close' class="close-btn">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black">
                    <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
                </svg>
            </span>
            <h3>${selectedDoc.dep}</h3>
            <div style='display: flex; margin-bottom: 10px;'>
           
            <img src='${selectedDoc.image}' alt='Doctor Image' style='width: 260px; height: 260px; border-radius: 50%; object-fit: cover;  margin-right: 10px;position:relative;top:-10px;left:2rem'>
             <div style='width:60%;margin-left:5rem;border:1px solid white;text-align:center;margin-top:20px'>
             <br>
             
              <h2>${selectedDoc.name}</h2>
            <p><strong style="color:orange">Experience:</strong> ${selectedDoc.experience} Years</p>
            
            <p><strong style="color:orange">Languages Known:</strong> ${selectedDoc.languages.join(", ")}</p>
            </div>
            </div>

            <h3>Select a Date:</h3>
            <div id="date-container" class="date-container">
                ${dates.map(date => `<div class="date-box" data-date="${date}">${date}</div>`).join('')}
            </div>

            <h3>Select a Time Slot:</h3>
            <div id="time-container" class="time-container"></div>

            <button id="confirm-btn" class="confirm-btn">Confirm Appointment</button>
        `;

        document.body.appendChild(popup);

        let selectedDate = null;
        let selectedTime = null;

        // Handle date selection
        document.querySelectorAll(".date-box").forEach(dateDiv => {
            dateDiv.addEventListener("click", function () {
                document.querySelectorAll(".date-box").forEach(d => {
                    d.classList.remove("active");
                });
                this.classList.add("active");
                selectedDate = this.getAttribute("data-date");

                // Clear previous time slots and generate new ones
                const timeContainer = document.getElementById("time-container");
                timeContainer.innerHTML = "";
                timeSlots.forEach(slot => {
                    const timeDiv = document.createElement("div");
                    timeDiv.classList.add("time-box");
                    timeDiv.textContent = slot;

                    timeDiv.addEventListener("click", function () {
                        document.querySelectorAll(".time-box").forEach(t => t.classList.remove("active"));
                        this.classList.add("active");
                        selectedTime = this.textContent;
                    });

                    timeContainer.appendChild(timeDiv);
                });
            });
        });

        // Close popup on clicking the close button
        document.getElementById("close").addEventListener("click", function () {
            popup.remove();
        });

        // Confirm appointment
        document.getElementById("confirm-btn").addEventListener("click", function () {
            if (!selectedDate || !selectedTime) {
                alert("Please select a date and time slot!");
                return;
            }
            alert(`Appointment booked for ${selectedDoc.name} on ${selectedDate} at ${selectedTime}`);
            popup.remove();
        });
    });
});
// for the 2nd department cardio

const docCards1 = document.querySelectorAll(".d2");

docCards1.forEach(card => {
    card.addEventListener("click", function () {
        const btn = this.querySelector("button");
        if (!btn) return;

        const docId = btn.getAttribute("id");
        const selectedDoc = doctors.find(doctor => doctor.id == docId);
        if (!selectedDoc) return;

        // Generate next 4 days
        const dates = [];
        const today = new Date();
        for (let i = 0; i < 4; i++) {
            const date = new Date();
            date.setDate(today.getDate() + i);
            dates.push(date.toDateString());
        }

        // Available time slots
        const timeSlots = [
            "10:00 AM - 11:00 AM",
            "11:00 AM - 12:00 PM",
            "3:00 PM - 4:00 PM",
            "5:00 PM - 6:00 PM"
        ];
        const overlay = document.createElement("div");
        overlay.classList.add("popup-overlay");

        // Create the pop-up container
        const popup = document.createElement("div");
        popup.classList.add("popup");
        popup.style.overflowY = 'auto'; // Allows scrolling if content overflows
        popup.style.overflowY = 'scroll'; // Enable scrolling
        popup.style.scrollbarWidth = 'none'; // Hides scrollbar in Firefox
        popup.style.msOverflowStyle = 'none'; // Hides scrollbar in IE/Edge
        popup.style.WebkitOverflowScrolling = 'touch'; // Enables smooth scrolling in Safari
        popup.innerHTML = `
            <span id='close' class="close-btn">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black">
                    <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
                </svg>
            </span>
            <h3>${selectedDoc.dep}</h3>
             
            <div style='display: flex; margin-bottom: 10px;'>
           
            <img src='${selectedDoc.image}' alt='Doctor Image' style='width: 260px; height: 260px; border-radius: 50%; object-fit: cover;  margin-right: 10px;position:relative;top:-10px;left:2rem'>
             <div style='width:60%;margin-left:5rem;border:1px solid white;text-align:center;margin-top:20px'>
             <br>
             
              <h2>${selectedDoc.name}</h2>
            <p><strong style="color:orange">Experience:</strong> ${selectedDoc.experience} Years</p>
            
            <p><strong style="color:orange">Languages Known:</strong> ${selectedDoc.languages.join(", ")}</p>
            </div>
            </div>

            <h3>Select a Date:</h3>
            <div id="date-container" class="date-container">
                ${dates.map(date => `<div class="date-box" data-date="${date}">${date}</div>`).join('')}
            </div>

            <h3>Select a Time Slot:</h3>
            <div id="time-container" class="time-container"></div>

            <button id="confirm-btn" class="confirm-btn">Confirm Appointment</button>
        `;

        document.body.appendChild(popup);

        let selectedDate = null;
        let selectedTime = null;

        // Handle date selection
        document.querySelectorAll(".date-box").forEach(dateDiv => {
            dateDiv.addEventListener("click", function () {
                document.querySelectorAll(".date-box").forEach(d => {
                    d.classList.remove("active");
                });
                this.classList.add("active");
                selectedDate = this.getAttribute("data-date");

                // Clear previous time slots and generate new ones
                const timeContainer = document.getElementById("time-container");
                timeContainer.innerHTML = "";
                timeSlots.forEach(slot => {
                    const timeDiv = document.createElement("div");
                    timeDiv.classList.add("time-box");
                    timeDiv.textContent = slot;

                    timeDiv.addEventListener("click", function () {
                        document.querySelectorAll(".time-box").forEach(t => t.classList.remove("active"));
                        this.classList.add("active");
                        selectedTime = this.textContent;
                    });

                    timeContainer.appendChild(timeDiv);
                });
            });
        });

        // Close popup on clicking the close button
        document.getElementById("close").addEventListener("click", function () {
            popup.remove();
        });

        // Confirm appointment
        document.getElementById("confirm-btn").addEventListener("click", function () {
            if (!selectedDate || !selectedTime) {
                alert("Please select a date and time slot!");
                return;
            }
            alert(`Appointment booked for ${selectedDoc.name} on ${selectedDate} at ${selectedTime}`);
            popup.remove();
        });
    });
});
// it is a function to show the popup for the appointment booking for the 3rd department dental department
const docCards2 = document.querySelectorAll(".d3");

docCards2.forEach(card => {
    card.addEventListener("click", function () {
        const btn2 = card.querySelector("button"); // Get the button inside the clicked card
        if (!btn2) return; // Ensure the button exists

        const docId = btn2.getAttribute("id"); // Get doctor ID from the button
        if (!docId) return; // Exit if no ID is found

        const selectedDoc = doctors.find(doctor => doctor.id == docId);
        if (!selectedDoc) return; // Exit if doctor is not found

        const dates = [];
        const today = new Date();
        for (let i = 0; i < 4; i++) {
            const date = new Date();
            date.setDate(today.getDate() + i);
            dates.push(date.toDateString());
        }

        // Available time slots
        const timeSlots = [
            "10:00 AM - 11:00 AM",
            "11:00 AM - 12:00 PM",
            "3:00 PM - 4:00 PM",
            "5:00 PM - 6:00 PM"
        ];
        const overlay = document.createElement("div");
        overlay.classList.add("popup-overlay");

        const popup = document.createElement("div");
        popup.classList.add("popup");
        popup.style.overflowY = "auto"; 
        popup.style.scrollbarWidth = 'none'; // Hides scrollbar in Firefox
        popup.style.msOverflowStyle = 'none'; // Hides scrollbar in IE/Edge
        popup.style.WebkitOverflowScrolling = 'touch'; // Enables smooth scrolling in Safari
      
        popup.innerHTML = `
            <span id='close' class="close-btn">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black">
                    <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
                </svg>
            </span>
             <h3>${selectedDoc.dep}</h3>
            <div style='display: flex; margin-bottom: 10px;'>
           
            <img src='${selectedDoc.image}' alt='Doctor Image' style='width: 260px; height: 260px; border-radius: 50%; object-fit: cover;  margin-right: 10px;position:relative;top:-10px;left:2rem'>
             <div style='width:60%;margin-left:5rem;border:1px solid white;text-align:center;margin-top:20px'>
             <br>
             
              <h2>${selectedDoc.name}</h2>
            <p><strong style="color:orange">Experience:</strong> ${selectedDoc.experience} Years</p>
            
            <p><strong style="color:orange">Languages Known:</strong> ${selectedDoc.languages.join(", ")}</p>
            </div>
            </div>

            <h3>Select a Date:</h3>
            <div id="date-container" class="date-container">
                ${dates.map(date => `<div class="date-box" data-date="${date}">${date}</div>`).join('')}
            </div>

            <h3>Select a Time Slot:</h3>
            <div id="time-container" class="time-container"></div>

            <button id="confirm-btn" class="confirm-btn">Confirm Appointment</button>
        `;

        document.body.appendChild(popup);

        let selectedDate = null;
        let selectedTime = null;

        // Add event listener to date selection
        document.querySelectorAll(".date-box").forEach(dateDiv => {
            dateDiv.addEventListener("click", function () {
                document.querySelectorAll(".date-box").forEach(d => d.classList.remove("active"));
                this.classList.add("active");
                selectedDate = this.getAttribute("data-date");

                // Clear previous time slots and generate new ones
                const timeContainer = document.getElementById("time-container");
                timeContainer.innerHTML = "";
                timeSlots.forEach(slot => {
                    const timeDiv = document.createElement("div");
                    timeDiv.classList.add("time-box");
                    timeDiv.textContent = slot;

                    timeDiv.addEventListener("click", function () {
                        document.querySelectorAll(".time-box").forEach(t => t.classList.remove("active"));
                        this.classList.add("active");
                        selectedTime = this.textContent;
                    });

                    timeContainer.appendChild(timeDiv);
                });
            });
        });

        // Close popup on clicking the close button
        document.getElementById("close").addEventListener("click", function () {
            popup.remove();
        });

        // Confirm appointment
        document.getElementById("confirm-btn").addEventListener("click", function () {
            if (!selectedDate || !selectedTime) {
                alert("Please select a date and time slot!");
                return;
            }
            alert(`Appointment booked for ${selectedDoc.name} on ${selectedDate} at ${selectedTime}`);
            popup.remove();
        });
    });
});
// the above function is used to create or to generate the pop up for the dermatology department
const docCards3 = document.querySelectorAll(".d4");

docCards3.forEach(card => {
    card.addEventListener('click', () => {
        const btn3 = card.querySelector("button");
        const docId = btn3.getAttribute('id');
        if (!docId) return;

        const selectedDoc = doctors.find(doctor => doctor.id == docId);
        if (!selectedDoc) return; // Exit if doctor is not found

        const dates = [];
        const today = new Date();
        for (let i = 0; i < 4; i++) {
            const date = new Date();
            date.setDate(today.getDate() + i);
            dates.push(date.toDateString());
        }

        const timeSlots = [
            "10:00 AM - 11:00 AM",
            "11:00 AM - 12:00 PM",
            "3:00 PM - 4:00 PM",
            "5:00 PM - 6:00 PM"
        ];

        // Create overlay
        const overlay = document.createElement("div");
        overlay.classList.add("popup-overlay");

        // Create popup
        const popup = document.createElement("div");
        popup.classList.add("popup");
        popup.style.overflowY = "auto"; 

        popup.innerHTML = `
            <span id='close' class="close-btn">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black">
                    <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
                </svg>
            </span>
            <h3>${selectedDoc.dep}</h3>
            <div style='display: flex; margin-bottom: 10px;'>
                <img src='${selectedDoc.image}' alt='Doctor Image' style='width: 260px; height: 260px; border-radius: 50%; object-fit: cover; margin-right: 10px; position:relative; top:-10px; left:2rem'>
                <div style='width:60%; margin-left:5rem; border:1px solid white; text-align:center; margin-top:20px'>
                    <br>
                    <h2>${selectedDoc.name}</h2>
                    <p><strong style="color:orange">Experience:</strong> ${selectedDoc.experience} Years</p>
                    <p><strong style="color:orange">Languages Known:</strong> ${selectedDoc.languages.join(", ")}</p>
                </div>
            </div>

            <h3>Select a Date:</h3>
            <div id="date-container" class="date-container">
                ${dates.map(date => `<div class="date-box" data-date="${date}">${date}</div>`).join('')}
            </div>

            <h3>Select a Time Slot:</h3>
            <div id="time-container" class="time-container"></div>

            <button id="confirm-btn" class="confirm-btn">Confirm Appointment</button>
        `;

        document.body.appendChild(overlay);
        document.body.appendChild(popup);
        document.body.classList.add("no-scroll"); // Disable body interactions

        let selectedDate = null;
        let selectedTime = null;

        document.querySelectorAll(".date-box").forEach(dateDiv => {
            dateDiv.addEventListener("click", function () {
                document.querySelectorAll(".date-box").forEach(d => d.classList.remove("active"));
                this.classList.add("active");
                selectedDate = this.getAttribute("data-date");

                const timeContainer = document.getElementById("time-container");
                timeContainer.innerHTML = "";
                timeSlots.forEach(slot => {
                    const timeDiv = document.createElement("div");
                    timeDiv.classList.add("time-box");
                    timeDiv.textContent = slot;

                    timeDiv.addEventListener("click", function () {
                        document.querySelectorAll(".time-box").forEach(t => t.classList.remove("active"));
                        this.classList.add("active");
                        selectedTime = this.textContent;
                    });

                    timeContainer.appendChild(timeDiv);
                });
            });
        });

        // Close popup function
        document.getElementById("close").addEventListener("click", function () {
            popup.remove();
            overlay.remove(); 
            document.body.classList.remove("no-scroll"); // Enable body interactions
        });
    });
});

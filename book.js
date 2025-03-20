
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
        image: "https://res.cloudinary.com/dnevq4wek/image/upload/v1742364794/carm1_hi5q6l.png",
        dep:"Cardiologist"
    },
    {
        id: 2.1,
        name: "Dr. Aradhya",
        experience: 9,
        languages: ["Tamil", "English"],
        image: "https://res.cloudinary.com/dnevq4wek/image/upload/v1742364793/carf1_bcrod9.png",
         dep:"Cardiologist"

    },
    {
        id: 3.1,
        name: "Dr. Domini",
        experience: 4,
        languages: ["Hindi", "English"],
        image: "https://res.cloudinary.com/dnevq4wek/image/upload/v1742364793/carf2_jfuurh.png",
         dep:"Cardiologist"
    },
    {
        id: 4.1,
        name: "Dr. Balakrishna",
        experience: 25,
        languages: ["Telugu", "Hindi", "Tamil", "English"],
        image: "https://res.cloudinary.com/dnevq4wek/image/upload/v1742364795/carm2_ruc3yx.png",
         dep:"Cardiologist",
    },
    {
        id: 5.1,
        name: "Dr. Ishaan",
        experience: 3,
        languages: ["Telugu", "English"],
        dep: "Cardiothoracic",
        image: "https://res.cloudinary.com/dnevq4wek/image/upload/v1742364793/cardm1_fhopfu.png"
    },
    {
        id: 6.1,
        name: "Dr. Samantha",
        experience: 5,
        languages: ["Hindi", "English"],
        dep: "Cardiothoracic",
        image: "https://res.cloudinary.com/dnevq4wek/image/upload/v1742364790/cardf1_dglvor.jpg"
    },
    {
        id: 7.1,
        name: "Dr. Riya",
        experience: 10,
        languages: ["Telugu", "English"],
        dep: "Cardiothoracic",
        image: "https://res.cloudinary.com/dnevq4wek/image/upload/v1742364791/cardf2_uke1ri.png"
    },
    {
        id: 8.1,
        name: "Dr. Nagaeshvarao",
        experience: 25,
        languages: ["Telugu", "Hindi", "English"],
        dep: "Cardiothoracic",
        image: "https://res.cloudinary.com/dnevq4wek/image/upload/v1742364793/cardm2_lodo6r.png"
    },
    {
        id: 9.1,
        name: "Dr. Mukesh",
        experience: 10,
        languages: ["Hindi", "English"],
        image: "https://res.cloudinary.com/dnevq4wek/image/upload/v1742364802/dem1_i4vxyd.png",
        dep: "Dental",
    },
    {
        id: 10.1,
        name: "Dr. Vaishnavi",
        experience: 9,
        languages: ["Telugu", "English"],
        image: "https://res.cloudinary.com/dnevq4wek/image/upload/v1742364802/def1_x2yxdo.png",
        dep: "Dental",
    },
    {
        id: 11.1,
        name: "Dr. Anjali",
        experience: 4,
        languages: ["Telugu", "English"],
        image: "https://res.cloudinary.com/dnevq4wek/image/upload/v1742364802/def2_zrdbkr.png",
        dep: "Dental",
    },
    {
        id: 12.1,
        name: "Dr. Apparao",
        experience: 25,
        languages: ["Telugu", "Hindi", "Tamil", "English"],
        image: "https://res.cloudinary.com/dnevq4wek/image/upload/v1742364803/dem2_gsagij.png",
        dep: "Dental",
    },
    {
        id: 13.1,
        name: "Dr. James",
        dep: "Dermatology",
        experience: 7,
        languages: ["Telugu", "English"],
        image: "https://res.cloudinary.com/dnevq4wek/image/upload/v1742364806/dermm1_szceb1.png"
    },
    {
        id: 14.1,
        name: "Dr. Lakshmi",
        dep: "Dermatology",
        experience: 5,
        languages: ["Telugu", "English"],
        image: "https://res.cloudinary.com/dnevq4wek/image/upload/v1742364805/dermf1_nekcde.png"
    },
    {
        id: 15,
        name: "Dr. Sushmitha",
        dep: "Dermatology",
        experience: 4,
        languages: ["Hindi", "English"],
        image: "https://res.cloudinary.com/dnevq4wek/image/upload/v1742364805/dermf2_cvk0b4.png"
    },
    {
        id: 16,
        name: "Dr. Subbarao",
        dep: "Dermatology",
        experience: 25,
        languages: ["Telugu", "Hindi", "English"],
        image: "https://res.cloudinary.com/dnevq4wek/image/upload/v1742364806/dermm2_ldbk6v.png"
    },
    
  {
    id: 17,
    "name": "Dr. Rayadu",
    "experience": 6,
    "languages": ["Telugu", "English"],
    "dep": "Gastroenterology",
    "image": "https://res.cloudinary.com/dnevq4wek/image/upload/v1742364831/gasm1_ws1zl0.png"
  },
  {
    "id": 18,
    "name": "Dr. Lalitha",
    "experience": 10,
    "languages": ["Hindi", "English"],
    "dep": "Gastroenterology",
    "image": "https://res.cloudinary.com/dnevq4wek/image/upload/v1742364828/gasf1_bavx7k.png"
  },
  {
    "id": 19,
    "name": "Dr. Sneha",
    "experience": 6,
    "languages": ["Telugu", "English"],
    "dep": "Gastroenterology",
    "image": "https://res.cloudinary.com/dnevq4wek/image/upload/v1742364831/gasf2_v4qabo.png"
  },
  {
    "id": 20,
    "name": "Dr. Ramesh",
    "experience": 21,
    "languages": ["Telugu", "Hindi", "Tamil", "English"],
    "dep": "Gastroenterology",
    "image": "https://res.cloudinary.com/dnevq4wek/image/upload/v1742364831/gasm2_kbt8q8.png"
  },

    {
        id: 21,
        name: "Dr. Sravya",
        experience: 6,
        languages: ["Hindi", "English"],
        image: "https://res.cloudinary.com/dnevq4wek/image/upload/v1742364834/gnycf1_iz52vc.png",
        dep: "Women's Health (Gynecology)"
    },
    {
        id: 22,
        name: "Dr. Rohini",
        experience: 15,
        languages: ["Hindi", "English"],
        image: "https://res.cloudinary.com/dnevq4wek/image/upload/v1742364834/gnycf2_j0psns.jpg",
        dep: "Women's Health (Gynecology)"
    },
    {
        id: 23,
        name: "Dr. Harika",
        experience: 7,
        languages: ["Hindi", "English"],
        image: "https://res.cloudinary.com/dnevq4wek/image/upload/v1742364924/drf10_mwnw21.jpg",
        dep: "Women's Health (Gynecology)"
    },
    {
        id: 24,
        name: "Dr. Nithya",
        experience: 6,
        languages: ["Telugu", "Hindi", "Tamil", "English"],
        image: "dummymasked.svg",
        dep: "Women's Health (Gynecology)"
    },
    {
        id: 25,
        name: "Dr. Christoper",
        experience: 6,
        languages: ["Telugu", "English"],
        image: "https://res.cloudinary.com/dnevq4wek/image/upload/v1742364947/oncm1_p90yna.png",
        dep: "Oncology"
    },
    {
        id: 26,
        name: "Dr. Lakshmi",
        experience: 10,
        languages: ["Hindi", "English"],
        image: "https://res.cloudinary.com/dnevq4wek/image/upload/v1742364946/oncf1_ujlks8.png",
        dep: "Oncology"
    },
    {
        id: 27,
        name: "Dr. Supraja",
        experience: 12,
        languages: ["Telugu", "English"],
        image: "https://res.cloudinary.com/dnevq4wek/image/upload/v1742364946/oncf2_cjpzo3.png",
        dep: "Oncology"
    },
    {
        id: 28,
        name: "Dr. Hamsworth",
        experience: 21,
        languages: ["Telugu", "Hindi", "Tamil", "English"],
        image: "https://res.cloudinary.com/dnevq4wek/image/upload/v1742364948/oncm2_srpxvc.png",
        dep: "Oncology"
    },{
    id: 29,
    name: "Dr. Raghu",
    experience: 9,
    languages: ["Telugu", "English"],
    image: "https://res.cloudinary.com/dnevq4wek/image/upload/v1742364955/orthm1_ywgmsz.png",
    dep: "Orthopedics"
},
{
    id: 30,
    name: "Dr. Urvasi",
    experience: 12,
    languages: ["Hindi", "English"],
    image: "https://res.cloudinary.com/dnevq4wek/image/upload/v1742364950/orthf1_ynfbl6.png",
    dep: "Orthopedics"
},
{
    id: 31,
    name: "Dr. Sandhya",
    experience: 6,
    languages: ["Telugu", "English"],
    image: "https://res.cloudinary.com/dnevq4wek/image/upload/v1742364963/orthf2_qqcazh.png",
    dep: "Orthopedics"
},
{
    id: 32,
    name: "Dr. Manoj",
    experience: 18,
    languages: ["Telugu", "Hindi", "Tamil", "English"],
    image: "https://res.cloudinary.com/dnevq4wek/image/upload/v1742364957/orthm2_upbnsf.png",
    dep: "Orthopedics"
},
{
    id: "33",
    name: "Dr. Vishnu",
    experience: 11,
    languages: ["Telugu", "English"],
    image: "https://res.cloudinary.com/dnevq4wek/image/upload/v1742364968/pumm1_befaix.png",
    dep: "Pulmonology"
},
{
    id: "34",
    name: "Dr. Jenny",
    experience: 8,
    languages: ["Hindi", "English"],
    image: "https://res.cloudinary.com/dnevq4wek/image/upload/v1742364966/pumf1_iewqoz.png",
    dep: "Pulmonology"
},
{
    id: "35",
    name: "Dr. Saraswathi",
    experience: 6,
    languages: ["Telugu", "English"],
    image: "https://res.cloudinary.com/dnevq4wek/image/upload/v1742364970/pumpf2_cacgmf.png",
    dep: "Pulmonology"
},
{
    id: "36",
    name: "Dr. Krishna",
    experience: 19,
    languages: ["Telugu", "Hindi", "Tamil", "English"],
    image: "https://res.cloudinary.com/dnevq4wek/image/upload/v1742364968/pumm2_klndzc.png",
    dep: "Pulmonology"
},
{
    id: "37",
    name: "Dr. Mohan",
    experience: 9,
    languages: ["Telugu", "English"],
    image: "https://res.cloudinary.com/dnevq4wek/image/upload/v1742364961/perm1_a1nat2.png",
    dep: "Predictive Care"
},
{
    id: "38",
    name: "Dr. Parvathi",
    experience: 10,
    languages: ["Hindi", "English"],
    image: "https://res.cloudinary.com/dnevq4wek/image/upload/v1742364960/perf1_qiz6hz.png",
    dep: "Predictive Care"
},
{
    id: "39",
    name: "Dr. Dhanya",
    experience: 8,
    languages: ["Telugu", "English"],
    image: "https://res.cloudinary.com/dnevq4wek/image/upload/v1742364960/perf2_xtchnh.png",
    dep: "Predictive Care"
},
{
    id: "40",
    name: "Dr. Vamsi",
    experience: 19,
    languages: ["Telugu", "Hindi", "Tamil", "English"],
    image: "https://res.cloudinary.com/dnevq4wek/image/upload/v1742364962/perm2_qayqvy.png",
    dep: "Predictive Care"
},
{
    id: "41",
    name: "Dr. Teja",
    experience: 9,
    languages: ["Telugu", "English"],
    image: "https://res.cloudinary.com/dnevq4wek/image/upload/v1742364941/neum1_j1a5pw.png",
    dep: "Neuroscience"
},
{
    id: "42",
    name: "Dr. Harshitha",
    experience: 10,
    languages: ["Hindi", "English"],
    image: "https://res.cloudinary.com/dnevq4wek/image/upload/v1742364939/neuf1_qzr1lk.png",
    dep: "Neuroscience"
},
{
    id: "43",
    name: "Dr. Bhavika",
    experience: 8,
    languages: ["Telugu", "English"],
    image: "https://res.cloudinary.com/dnevq4wek/image/upload/v1742364940/neuf2_vo1uan.png",
    dep: "Neuroscience"
},
{
    id: "44",
    name: "Dr. Srikar",
    experience: 19,
    languages: ["Telugu", "Hindi", "Tamil", "English"],
    image: "https://res.cloudinary.com/dnevq4wek/image/upload/v1742364945/neum2_vbgkgq.png",
    dep: "Neuroscience"
},
{
    id: "45",
    name: "Dr. Chanikya",
    experience: 9,
    languages: ["Telugu", "English"],
    image: "https://res.cloudinary.com/dnevq4wek/image/upload/v1742364939/nepm1_eze78h.png",
    dep: "Neurology"
},
{
    id: "46",
    name: "Dr. Bhavani",
    experience: 10,
    languages: ["Hindi", "English"],
    image: "https://res.cloudinary.com/dnevq4wek/image/upload/v1742364937/nepf1_wyuvdi.png",
    dep: "Neurology"
},
{
    id: "47",
    name: "Dr. Radha",
    experience: 8,
    languages: ["Telugu", "English"],
    image: "https://res.cloudinary.com/dnevq4wek/image/upload/v1742364937/nepf2_ayfrvj.png",
    dep: "Neurology"
},
{
    id: "48",
    name: "Dr. Rahul",
    experience: 19,
    languages: ["Telugu", "Hindi", "Tamil", "English"],
    image: "https://res.cloudinary.com/dnevq4wek/image/upload/v1742364939/nepm2_uwiqpd.png",
    dep: "Neurology"
},
{
    name: "Dr.Aadi",
    experience: 9,
    languages: ["Telugu", "English"],
    image: "https://res.cloudinary.com/dnevq4wek/image/upload/v1742364996/urm1_gck7yb.png",
    id: 49,
    dep: "Urology"
},
{
    name: "Dr.Sumathi",
    experience: 10,
    languages: ["Hindi", "English"],
    image: "https://res.cloudinary.com/dnevq4wek/image/upload/v1742364984/urf1_mor1rh.png",
    id: 50,
    dep: "Urology"
},
{
    name: "Dr.Meghana",
    experience: 8,
    languages: ["Telugu", "English"],
    image: "https://res.cloudinary.com/dnevq4wek/image/upload/v1742364992/urf2_fvxfu4.png",
    id: 51,
    dep: "Urology"
},
{
    name: "Dr.Balaji",
    experience: 19,
    languages: ["Telugu", "Hindi", "Tamil", "English"],
    image: "https://res.cloudinary.com/dnevq4wek/image/upload/v1742365001/urm2_xaw1gj.png",
    id: 52,
    dep: "Urology"
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
    
            // Create overlay
            const overlay = document.createElement("div");
            overlay.classList.add("popup-overlay");
    
            // Create the pop-up container
            const popup = document.createElement("div");
            popup.classList.add("popup");
            popup.style.overflowY = 'auto';
            popup.style.scrollbarWidth = 'none';
            popup.style.msOverflowStyle = 'none';
            popup.style.WebkitOverflowScrolling = 'touch';
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
    
                <button id="confirm-btn" class="confirm-btn" disabled>Confirm Appointment</button>
            `;
    
            document.body.appendChild(overlay);
            document.body.appendChild(popup);
            document.body.classList.add("no-scroll");
    
            let selectedDate = null;
            let selectedTime = null;
    
            function updateTimeSlots() {
                const timeContainer = document.getElementById("time-container");
                timeContainer.innerHTML = "";
                const now = new Date();
                const currentHour = now.getHours();
    
                timeSlots.forEach(slot => {
                    const [startTime] = slot.split(" - ");
                    const [hour, minute] = startTime.split(":");
                    const isPM = startTime.includes("PM");
                    let slotHour = parseInt(hour);
    
                    if (isPM && slotHour !== 12) slotHour += 12;
                    if (!isPM && slotHour === 12) slotHour = 0;
    
                    const isPastSlot = selectedDate === today.toDateString() && slotHour <= currentHour;
    
                    const timeDiv = document.createElement("div");
                    timeDiv.classList.add("time-box");
                    timeDiv.textContent = slot;
                    if (isPastSlot) {
                        timeDiv.classList.add("disabled");
                        timeDiv.style.opacity = "0.5";
                        timeDiv.style.pointerEvents = "none";
                    } else {
                        timeDiv.addEventListener("click", function () {
                            document.querySelectorAll(".time-box").forEach(t => t.classList.remove("active"));
                            this.classList.add("active");
                            selectedTime = this.textContent;
                            document.getElementById("confirm-btn").disabled = false;
                        });
                    }
                    timeContainer.appendChild(timeDiv);
                });
            }
    
            document.querySelectorAll(".date-box").forEach(dateDiv => {
                dateDiv.addEventListener("click", function () {
                    document.querySelectorAll(".date-box").forEach(d => d.classList.remove("active"));
                    this.classList.add("active");
                    selectedDate = this.getAttribute("data-date");
                    updateTimeSlots();
                });
            });
    
            document.getElementById("confirm-btn").addEventListener("click", () => {
                if (!selectedDate || !selectedTime) {
                    alert("Please select both a date and time.");
                    return;
                }
                alert(`Appointment booked with ${selectedDoc.name} on ${selectedDate} at ${selectedTime}`);
                document.body.removeChild(popup);
                document.body.removeChild(overlay);
                document.body.classList.remove("no-scroll");
            });
    
            document.getElementById('close').addEventListener("click", () => {
                document.body.removeChild(popup);
                document.body.removeChild(overlay);
                document.body.classList.remove("no-scroll");
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

        // Create overlay
        const overlay = document.createElement("div");
        overlay.classList.add("popup-overlay");
        document.body.appendChild(overlay);
        document.body.style.overflow = "hidden"; // Prevent scrolling

        // Create the pop-up container
        const popup = document.createElement("div");
        popup.classList.add("popup");
        popup.style.overflowY = "auto"; 
        popup.style.scrollbarWidth = 'none'; // Hides scrollbar in Firefox
        popup.style.msOverflowStyle = 'none'; // Hides scrollbar in IE/Edge
        popup.style.WebkitOverflowScrolling = 'touch'
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

        document.body.appendChild(popup);

        let selectedDate = null;
        let selectedTime = null;

        // Handle date selection
        document.querySelectorAll(".date-box").forEach(dateDiv => {
            dateDiv.addEventListener("click", function () {
                document.querySelectorAll(".date-box").forEach(d => d.classList.remove("active"));
                this.classList.add("active");
                selectedDate = this.getAttribute("data-date");

                // Clear previous time slots and generate new ones
                const timeContainer = document.getElementById("time-container");
                timeContainer.innerHTML = "";

                const isToday = (new Date(selectedDate).toDateString() === today.toDateString());
                const currentHour = today.getHours();

                timeSlots.forEach(slot => {
                    const timeDiv = document.createElement("div");
                    timeDiv.classList.add("time-box");
                    timeDiv.textContent = slot;

                    // Disable past time slots if today is selected
                    const [startHour] = slot.split(":")[0].split(" ");
                    if (isToday && parseInt(startHour) <= currentHour) {
                        timeDiv.classList.add("disabled");
                        timeDiv.style.opacity = "0.5";
                    } else {
                        timeDiv.addEventListener("click", function () {
                            document.querySelectorAll(".time-box").forEach(t => t.classList.remove("active"));
                            this.classList.add("active");
                            selectedTime = this.textContent;
                        });
                    }

                    timeContainer.appendChild(timeDiv);
                });
            });
        });

        // Close popup function
        function closePopup() {
            popup.remove();
            overlay.remove();
            document.body.style.overflow = ""; // Enable scrolling again
        }

        // Close popup on clicking the close button
        document.getElementById("close").addEventListener("click", closePopup);
        overlay.addEventListener("click", closePopup);

        // Confirm appointment
        document.getElementById("confirm-btn").addEventListener("click", function () {
            if (!selectedDate || !selectedTime) {
                alert("Please select a date and time slot!");
                return;
            }
            alert(`Appointment booked for ${selectedDoc.name} on ${selectedDate} at ${selectedTime}`);
            closePopup();
        });
    });
});

// it is a function to show the popup for the appointment booking for the 3rd department dental department
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

            <button id="confirm-btn" class="confirm-btn" disabled>Confirm Appointment</button>
        `;

        document.body.appendChild(overlay);
        document.body.appendChild(popup);
        document.body.classList.add("no-scroll");

        let selectedDate = null;
        let selectedTime = null;

        function updateTimeSlots() {
            const timeContainer = document.getElementById("time-container");
            timeContainer.innerHTML = "";
            const now = new Date();
            const currentHour = now.getHours();

            timeSlots.forEach(slot => {
                const [startTime] = slot.split(" - "); 
                const [hour, minute] = startTime.split(":");
                const isPM = startTime.includes("PM");
                let slotHour = parseInt(hour);

                if (isPM && slotHour !== 12) slotHour += 12;
                if (!isPM && slotHour === 12) slotHour = 0;

                const isPastSlot = selectedDate === today.toDateString() && slotHour <= currentHour;

                const timeDiv = document.createElement("div");
                timeDiv.classList.add("time-box");
                timeDiv.textContent = slot;
                if (isPastSlot) {
                    timeDiv.classList.add("disabled");
                    timeDiv.style.opacity = "0.5";
                    timeDiv.style.pointerEvents = "none";
                } else {
                    timeDiv.addEventListener("click", function () {
                        document.querySelectorAll(".time-box").forEach(t => t.classList.remove("active"));
                        this.classList.add("active");
                        selectedTime = this.textContent;
                        document.getElementById("confirm-btn").disabled = false;
                    });
                }
                timeContainer.appendChild(timeDiv);
            });
        }

        document.querySelectorAll(".date-box").forEach(dateDiv => {
            dateDiv.addEventListener("click", function () {
                document.querySelectorAll(".date-box").forEach(d => d.classList.remove("active"));
                this.classList.add("active");
                selectedDate = this.getAttribute("data-date");

                updateTimeSlots();
            });
        });

        document.getElementById("confirm-btn").addEventListener("click", () => {
            if (!selectedDate || !selectedTime) {
                alert("Please select both a date and time.");
                return;
            }
            alert(`Appointment booked with ${selectedDoc.name} on ${selectedDate} at ${selectedTime}`);
            document.body.removeChild(popup);
            document.body.removeChild(overlay);
            document.body.classList.remove("no-scroll");
        });

        document.getElementById('close').addEventListener("click", () => {
            document.body.removeChild(popup);
            document.body.removeChild(overlay);
            document.body.classList.remove("no-scroll");
        });
    });
});

// the above function is used to create or to generate the pop up for the dermatology department

const docCards3 = document.querySelectorAll('.d4');

docCards3.forEach(card => {
    card.addEventListener("click", () => {
        const btn3 = card.querySelector('button');
        const docId = btn3.getAttribute('id');
        if (!docId) return;

        const selectedDoc = doctors.find(doctor => doctor.id == docId);
        if (!selectedDoc) return;

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
          popup.style.scrollbarWidth = 'none'; // Hides scrollbar in Firefox
        popup.style.msOverflowStyle = 'none'; // Hides scrollbar in IE/Edge
        popup.style.WebkitOverflowScrolling = 'touch';  

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

            <button id="confirm-btn" class="confirm-btn" disabled>Confirm Appointment</button>
        `;

        document.body.appendChild(overlay);
        document.body.appendChild(popup);
        document.body.classList.add("no-scroll");

        let selectedDate = null;
        let selectedTime = null;

        function updateTimeSlots() {
            const timeContainer = document.getElementById("time-container");
            timeContainer.innerHTML = "";
            const now = new Date();
            const currentHour = now.getHours();

            timeSlots.forEach(slot => {
                const [startTime] = slot.split(" - "); 
                const [hour, minute] = startTime.split(":");
                const isPM = startTime.includes("PM");
                let slotHour = parseInt(hour);

                if (isPM && slotHour !== 12) slotHour += 12;
                if (!isPM && slotHour === 12) slotHour = 0;

                const isPastSlot = selectedDate === today.toDateString() && slotHour <= currentHour;

                const timeDiv = document.createElement("div");
                timeDiv.classList.add("time-box");
                timeDiv.textContent = slot;
                if (isPastSlot) {
                    timeDiv.classList.add("disabled");
                    timeDiv.style.opacity = "0.5";
                    timeDiv.style.pointerEvents = "none";
                } else {
                    timeDiv.addEventListener("click", function () {
                        document.querySelectorAll(".time-box").forEach(t => t.classList.remove("active"));
                        this.classList.add("active");
                        selectedTime = this.textContent;
                        document.getElementById("confirm-btn").disabled = false;
                    });
                }
                timeContainer.appendChild(timeDiv);
            });
        }

        document.querySelectorAll(".date-box").forEach(dateDiv => {
            dateDiv.addEventListener("click", function () {
                document.querySelectorAll(".date-box").forEach(d => d.classList.remove("active"));
                this.classList.add("active");
                selectedDate = this.getAttribute("data-date");

                updateTimeSlots();
            });
        });

        document.getElementById("confirm-btn").addEventListener("click", () => {
            if (!selectedDate || !selectedTime) {
                alert("Please select both a date and time.");
                return;
            }
            alert(`Appointment booked with ${selectedDoc.name} on ${selectedDate} at ${selectedTime}`);
            document.body.removeChild(popup);
            document.body.removeChild(overlay);
            document.body.classList.remove("no-scroll");
        });

        document.getElementById('close').addEventListener("click", () => {
            document.body.removeChild(popup);
            document.body.removeChild(overlay);
            document.body.classList.remove("no-scroll");
        });
    });
});

// doctors card for gastrology department

const docCards4 = document.querySelectorAll('.d5');

docCards4.forEach(card => {
    card.addEventListener("click", () => {
        const btn4 = card.querySelector('button');
        const docId = btn4.getAttribute('id');
        if (!docId) return;

        const selectedDoc = doctors.find(doctor => doctor.id == docId);
        if (!selectedDoc) return;

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
          popup.style.scrollbarWidth = 'none'; // Hides scrollbar in Firefox
        popup.style.msOverflowStyle = 'none'; // Hides scrollbar in IE/Edge
        popup.style.WebkitOverflowScrolling = 'touch';  

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

            <button id="confirm-btn" class="confirm-btn" disabled>Confirm Appointment</button>
        `;

        document.body.appendChild(overlay);
        document.body.appendChild(popup);
        document.body.classList.add("no-scroll");

        let selectedDate = null;
        let selectedTime = null;

        function updateTimeSlots() {
            const timeContainer = document.getElementById("time-container");
            timeContainer.innerHTML = "";
            const now = new Date();
            const currentHour = now.getHours();

            timeSlots.forEach(slot => {
                const [startTime] = slot.split(" - "); 
                const [hour, minute] = startTime.split(":");
                const isPM = startTime.includes("PM");
                let slotHour = parseInt(hour);

                if (isPM && slotHour !== 12) slotHour += 12;
                if (!isPM && slotHour === 12) slotHour = 0;

                const isPastSlot = selectedDate === today.toDateString() && slotHour <= currentHour;

                const timeDiv = document.createElement("div");
                timeDiv.classList.add("time-box");
                timeDiv.textContent = slot;
                if (isPastSlot) {
                    timeDiv.classList.add("disabled");
                    timeDiv.style.opacity = "0.5";
                    timeDiv.style.pointerEvents = "none";
                } else {
                    timeDiv.addEventListener("click", function () {
                        document.querySelectorAll(".time-box").forEach(t => t.classList.remove("active"));
                        this.classList.add("active");
                        selectedTime = this.textContent;
                        document.getElementById("confirm-btn").disabled = false;
                    });
                }
                timeContainer.appendChild(timeDiv);
            });
        }

        document.querySelectorAll(".date-box").forEach(dateDiv => {
            dateDiv.addEventListener("click", function () {
                document.querySelectorAll(".date-box").forEach(d => d.classList.remove("active"));
                this.classList.add("active");
                selectedDate = this.getAttribute("data-date");

                updateTimeSlots();
            });
        });

        document.getElementById("confirm-btn").addEventListener("click", () => {
            if (!selectedDate || !selectedTime) {
                alert("Please select both a date and time.");
                return;
            }
            alert(`Appointment booked with ${selectedDoc.name} on ${selectedDate} at ${selectedTime}`);
            document.body.removeChild(popup);
            document.body.removeChild(overlay);
            document.body.classList.remove("no-scroll");
        });

        document.getElementById('close').addEventListener("click", () => {
            document.body.removeChild(popup);
            document.body.removeChild(overlay);
            document.body.classList.remove("no-scroll");
        });
    });
});
// the below code is for the pop and booking appointent funcionlaity for the gynecology department
const docCards5 = document.querySelectorAll('.d6');

docCards5.forEach(card => {
    card.addEventListener("click", () => {
        const btn5 = card.querySelector('button');
        const docId = btn5.getAttribute('id');
        if (!docId) return;

        const selectedDoc = doctors.find(doctor => doctor.id == docId);
        if (!selectedDoc) return;

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
          popup.style.scrollbarWidth = 'none'; // Hides scrollbar in Firefox
        popup.style.msOverflowStyle = 'none'; // Hides scrollbar in IE/Edge
        popup.style.WebkitOverflowScrolling = 'touch';  

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

            <button id="confirm-btn" class="confirm-btn" disabled>Confirm Appointment</button>
        `;

        document.body.appendChild(overlay);
        document.body.appendChild(popup);
        document.body.classList.add("no-scroll");

        let selectedDate = null;
        let selectedTime = null;

        function updateTimeSlots() {
            const timeContainer = document.getElementById("time-container");
            timeContainer.innerHTML = "";
            const now = new Date();
            const currentHour = now.getHours();

            timeSlots.forEach(slot => {
                const [startTime] = slot.split(" - "); 
                const [hour, minute] = startTime.split(":");
                const isPM = startTime.includes("PM");
                let slotHour = parseInt(hour);

                if (isPM && slotHour !== 12) slotHour += 12;
                if (!isPM && slotHour === 12) slotHour = 0;

                const isPastSlot = selectedDate === today.toDateString() && slotHour <= currentHour;

                const timeDiv = document.createElement("div");
                timeDiv.classList.add("time-box");
                timeDiv.textContent = slot;
                if (isPastSlot) {
                    timeDiv.classList.add("disabled");
                    timeDiv.style.opacity = "0.5";
                    timeDiv.style.pointerEvents = "none";
                } else {
                    timeDiv.addEventListener("click", function () {
                        document.querySelectorAll(".time-box").forEach(t => t.classList.remove("active"));
                        this.classList.add("active");
                        selectedTime = this.textContent;
                        document.getElementById("confirm-btn").disabled = false;
                    });
                }
                timeContainer.appendChild(timeDiv);
            });
        }

        document.querySelectorAll(".date-box").forEach(dateDiv => {
            dateDiv.addEventListener("click", function () {
                document.querySelectorAll(".date-box").forEach(d => d.classList.remove("active"));
                this.classList.add("active");
                selectedDate = this.getAttribute("data-date");

                updateTimeSlots();
            });
        });

        document.getElementById("confirm-btn").addEventListener("click", () => {
            if (!selectedDate || !selectedTime) {
                alert("Please select both a date and time.");
                return;
            }
            alert(`Appointment booked with ${selectedDoc.name} on ${selectedDate} at ${selectedTime}`);
            document.body.removeChild(popup);
            document.body.removeChild(overlay);
            document.body.classList.remove("no-scroll");
        });

        document.getElementById('close').addEventListener("click", () => {
            document.body.removeChild(popup);
            document.body.removeChild(overlay);
            document.body.classList.remove("no-scroll");
        });
    });
});
// the beolow code is belongs to oncology department for booking appointment for patient portal
const docCards6 = document.querySelectorAll('.d7');

docCards6.forEach(card => {
    card.addEventListener("click", () => {
        const btn6 = card.querySelector('button');
        const docId = btn6.getAttribute('id');
        if (!docId) return;

        const selectedDoc = doctors.find(doctor => doctor.id == docId);
        if (!selectedDoc) return;

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
          popup.style.scrollbarWidth = 'none'; // Hides scrollbar in Firefox
        popup.style.msOverflowStyle = 'none'; // Hides scrollbar in IE/Edge
        popup.style.WebkitOverflowScrolling = 'touch';  

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

            <button id="confirm-btn" class="confirm-btn" disabled>Confirm Appointment</button>
        `;

        document.body.appendChild(overlay);
        document.body.appendChild(popup);
        document.body.classList.add("no-scroll");

        let selectedDate = null;
        let selectedTime = null;

        function updateTimeSlots() {
            const timeContainer = document.getElementById("time-container");
            timeContainer.innerHTML = "";
            const now = new Date();
            const currentHour = now.getHours();

            timeSlots.forEach(slot => {
                const [startTime] = slot.split(" - "); 
                const [hour, minute] = startTime.split(":");
                const isPM = startTime.includes("PM");
                let slotHour = parseInt(hour);

                if (isPM && slotHour !== 12) slotHour += 12;
                if (!isPM && slotHour === 12) slotHour = 0;

                const isPastSlot = selectedDate === today.toDateString() && slotHour <= currentHour;

                const timeDiv = document.createElement("div");
                timeDiv.classList.add("time-box");
                timeDiv.textContent = slot;
                if (isPastSlot) {
                    timeDiv.classList.add("disabled");
                    timeDiv.style.opacity = "0.5";
                    timeDiv.style.pointerEvents = "none";
                } else {
                    timeDiv.addEventListener("click", function () {
                        document.querySelectorAll(".time-box").forEach(t => t.classList.remove("active"));
                        this.classList.add("active");
                        selectedTime = this.textContent;
                        document.getElementById("confirm-btn").disabled = false;
                    });
                }
                timeContainer.appendChild(timeDiv);
            });
        }

        document.querySelectorAll(".date-box").forEach(dateDiv => {
            dateDiv.addEventListener("click", function () {
                document.querySelectorAll(".date-box").forEach(d => d.classList.remove("active"));
                this.classList.add("active");
                selectedDate = this.getAttribute("data-date");

                updateTimeSlots();
            });
        });

        document.getElementById("confirm-btn").addEventListener("click", () => {
            if (!selectedDate || !selectedTime) {
                alert("Please select both a date and time.");
                return;
            }
            alert(`Appointment booked with ${selectedDoc.name} on ${selectedDate} at ${selectedTime}`);
            document.body.removeChild(popup);
            document.body.removeChild(overlay);
            document.body.classList.remove("no-scroll");
        });

        document.getElementById('close').addEventListener("click", () => {
            document.body.removeChild(popup);
            document.body.removeChild(overlay);
            document.body.classList.remove("no-scroll");
        });
    });
});
// the beolow code is used for the orthopedic department to generate the pop ups and bookng appointement
const docCards7 = document.querySelectorAll('.d8');

docCards7.forEach(card => {
    card.addEventListener("click", () => {
        const btn7 = card.querySelector('button');
        const docId = btn7.getAttribute('id');
        if (!docId) return;

        const selectedDoc = doctors.find(doctor => doctor.id == docId);
        if (!selectedDoc) return;

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
          popup.style.scrollbarWidth = 'none'; // Hides scrollbar in Firefox
        popup.style.msOverflowStyle = 'none'; // Hides scrollbar in IE/Edge
        popup.style.WebkitOverflowScrolling = 'touch';  

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

            <button id="confirm-btn" class="confirm-btn" disabled>Confirm Appointment</button>
        `;

        document.body.appendChild(overlay);
        document.body.appendChild(popup);
        document.body.classList.add("no-scroll");

        let selectedDate = null;
        let selectedTime = null;

        function updateTimeSlots() {
            const timeContainer = document.getElementById("time-container");
            timeContainer.innerHTML = "";
            const now = new Date();
            const currentHour = now.getHours();

            timeSlots.forEach(slot => {
                const [startTime] = slot.split(" - "); 
                const [hour, minute] = startTime.split(":");
                const isPM = startTime.includes("PM");
                let slotHour = parseInt(hour);

                if (isPM && slotHour !== 12) slotHour += 12;
                if (!isPM && slotHour === 12) slotHour = 0;

                const isPastSlot = selectedDate === today.toDateString() && slotHour <= currentHour;

                const timeDiv = document.createElement("div");
                timeDiv.classList.add("time-box");
                timeDiv.textContent = slot;
                if (isPastSlot) {
                    timeDiv.classList.add("disabled");
                    timeDiv.style.opacity = "0.5";
                    timeDiv.style.pointerEvents = "none";
                } else {
                    timeDiv.addEventListener("click", function () {
                        document.querySelectorAll(".time-box").forEach(t => t.classList.remove("active"));
                        this.classList.add("active");
                        selectedTime = this.textContent;
                        document.getElementById("confirm-btn").disabled = false;
                    });
                }
                timeContainer.appendChild(timeDiv);
            });
        }

        document.querySelectorAll(".date-box").forEach(dateDiv => {
            dateDiv.addEventListener("click", function () {
                document.querySelectorAll(".date-box").forEach(d => d.classList.remove("active"));
                this.classList.add("active");
                selectedDate = this.getAttribute("data-date");

                updateTimeSlots();
            });
        });

        document.getElementById("confirm-btn").addEventListener("click", () => {
            if (!selectedDate || !selectedTime) {
                alert("Please select both a date and time.");
                return;
            }
            alert(`Appointment booked with ${selectedDoc.name} on ${selectedDate} at ${selectedTime}`);
            document.body.removeChild(popup);
            document.body.removeChild(overlay);
            document.body.classList.remove("no-scroll");
        });

        document.getElementById('close').addEventListener("click", () => {
            document.body.removeChild(popup);
            document.body.removeChild(overlay);
            document.body.classList.remove("no-scroll");
        });
    });
});
// the below code is for the appointment booking and pop up creation in patient portal for pulmunology care department
const docCards8 = document.querySelectorAll('.d9');

docCards8.forEach(card => {
    card.addEventListener("click", () => {
        const btn8 = card.querySelector('button');
        const docId = btn8.getAttribute('id');
        if (!docId) return;

        const selectedDoc = doctors.find(doctor => doctor.id == docId);
        if (!selectedDoc) return;

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
          popup.style.scrollbarWidth = 'none'; // Hides scrollbar in Firefox
        popup.style.msOverflowStyle = 'none'; // Hides scrollbar in IE/Edge
        popup.style.WebkitOverflowScrolling = 'touch';  

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

            <button id="confirm-btn" class="confirm-btn" disabled>Confirm Appointment</button>
        `;

        document.body.appendChild(overlay);
        document.body.appendChild(popup);
        document.body.classList.add("no-scroll");

        let selectedDate = null;
        let selectedTime = null;

        function updateTimeSlots() {
            const timeContainer = document.getElementById("time-container");
            timeContainer.innerHTML = "";
            const now = new Date();
            const currentHour = now.getHours();

            timeSlots.forEach(slot => {
                const [startTime] = slot.split(" - "); 
                const [hour, minute] = startTime.split(":");
                const isPM = startTime.includes("PM");
                let slotHour = parseInt(hour);

                if (isPM && slotHour !== 12) slotHour += 12;
                if (!isPM && slotHour === 12) slotHour = 0;

                const isPastSlot = selectedDate === today.toDateString() && slotHour <= currentHour;

                const timeDiv = document.createElement("div");
                timeDiv.classList.add("time-box");
                timeDiv.textContent = slot;
                if (isPastSlot) {
                    timeDiv.classList.add("disabled");
                    timeDiv.style.opacity = "0.5";
                    timeDiv.style.pointerEvents = "none";
                } else {
                    timeDiv.addEventListener("click", function () {
                        document.querySelectorAll(".time-box").forEach(t => t.classList.remove("active"));
                        this.classList.add("active");
                        selectedTime = this.textContent;
                        document.getElementById("confirm-btn").disabled = false;
                    });
                }
                timeContainer.appendChild(timeDiv);
            });
        }

        document.querySelectorAll(".date-box").forEach(dateDiv => {
            dateDiv.addEventListener("click", function () {
                document.querySelectorAll(".date-box").forEach(d => d.classList.remove("active"));
                this.classList.add("active");
                selectedDate = this.getAttribute("data-date");

                updateTimeSlots();
            });
        });

        document.getElementById("confirm-btn").addEventListener("click", () => {
            if (!selectedDate || !selectedTime) {
                alert("Please select both a date and time.");
                return;
            }
            alert(`Appointment booked with ${selectedDoc.name} on ${selectedDate} at ${selectedTime}`);
            document.body.removeChild(popup);
            document.body.removeChild(overlay);
            document.body.classList.remove("no-scroll");
        });

        document.getElementById('close').addEventListener("click", () => {
            document.body.removeChild(popup);
            document.body.removeChild(overlay);
            document.body.classList.remove("no-scroll");
        });
    });
});
// the below code is for the appointment booking and pop up creation in patient portal for prediatic care department
const docCards9 = document.querySelectorAll('.d10');

docCards9.forEach(card => {
    card.addEventListener("click", () => {
        const btn8 = card.querySelector('button');
        const docId = btn8.getAttribute('id');
        if (!docId) return;

        const selectedDoc = doctors.find(doctor => doctor.id == docId);
        if (!selectedDoc) return;

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
          popup.style.scrollbarWidth = 'none'; // Hides scrollbar in Firefox
        popup.style.msOverflowStyle = 'none'; // Hides scrollbar in IE/Edge
        popup.style.WebkitOverflowScrolling = 'touch';  

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

            <button id="confirm-btn" class="confirm-btn" disabled>Confirm Appointment</button>
        `;

        document.body.appendChild(overlay);
        document.body.appendChild(popup);
        document.body.classList.add("no-scroll");

        let selectedDate = null;
        let selectedTime = null;

        function updateTimeSlots() {
            const timeContainer = document.getElementById("time-container");
            timeContainer.innerHTML = "";
            const now = new Date();
            const currentHour = now.getHours();

            timeSlots.forEach(slot => {
                const [startTime] = slot.split(" - "); 
                const [hour, minute] = startTime.split(":");
                const isPM = startTime.includes("PM");
                let slotHour = parseInt(hour);

                if (isPM && slotHour !== 12) slotHour += 12;
                if (!isPM && slotHour === 12) slotHour = 0;

                const isPastSlot = selectedDate === today.toDateString() && slotHour <= currentHour;

                const timeDiv = document.createElement("div");
                timeDiv.classList.add("time-box");
                timeDiv.textContent = slot;
                if (isPastSlot) {
                    timeDiv.classList.add("disabled");
                    timeDiv.style.opacity = "0.5";
                    timeDiv.style.pointerEvents = "none";
                } else {
                    timeDiv.addEventListener("click", function () {
                        document.querySelectorAll(".time-box").forEach(t => t.classList.remove("active"));
                        this.classList.add("active");
                        selectedTime = this.textContent;
                        document.getElementById("confirm-btn").disabled = false;
                    });
                }
                timeContainer.appendChild(timeDiv);
            });
        }

        document.querySelectorAll(".date-box").forEach(dateDiv => {
            dateDiv.addEventListener("click", function () {
                document.querySelectorAll(".date-box").forEach(d => d.classList.remove("active"));
                this.classList.add("active");
                selectedDate = this.getAttribute("data-date");

                updateTimeSlots();
            });
        });

        document.getElementById("confirm-btn").addEventListener("click", () => {
            if (!selectedDate || !selectedTime) {
                alert("Please select both a date and time.");
                return;
            }
            alert(`Appointment booked with ${selectedDoc.name} on ${selectedDate} at ${selectedTime}`);
            document.body.removeChild(popup);
            document.body.removeChild(overlay);
            document.body.classList.remove("no-scroll");
        });

        document.getElementById('close').addEventListener("click", () => {
            document.body.removeChild(popup);
            document.body.removeChild(overlay);
            document.body.classList.remove("no-scroll");
        });
    });
});

// the below code is for the appointment booking and pop up creation in patient portal for neuroscience department
const docCards10 = document.querySelectorAll('.d11');

docCards10.forEach(card => {
    card.addEventListener("click", () => {
        const btn9 = card.querySelector('button');
        const docId = btn9.getAttribute('id');
        if (!docId) return;

        const selectedDoc = doctors.find(doctor => doctor.id == docId);
        if (!selectedDoc) return;

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
          popup.style.scrollbarWidth = 'none'; // Hides scrollbar in Firefox
        popup.style.msOverflowStyle = 'none'; // Hides scrollbar in IE/Edge
        popup.style.WebkitOverflowScrolling = 'touch';  

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

            <button id="confirm-btn" class="confirm-btn" disabled>Confirm Appointment</button>
        `;

        document.body.appendChild(overlay);
        document.body.appendChild(popup);
        document.body.classList.add("no-scroll");

        let selectedDate = null;
        let selectedTime = null;

        function updateTimeSlots() {
            const timeContainer = document.getElementById("time-container");
            timeContainer.innerHTML = "";
            const now = new Date();
            const currentHour = now.getHours();

            timeSlots.forEach(slot => {
                const [startTime] = slot.split(" - "); 
                const [hour, minute] = startTime.split(":");
                const isPM = startTime.includes("PM");
                let slotHour = parseInt(hour);

                if (isPM && slotHour !== 12) slotHour += 12;
                if (!isPM && slotHour === 12) slotHour = 0;

                const isPastSlot = selectedDate === today.toDateString() && slotHour <= currentHour;

                const timeDiv = document.createElement("div");
                timeDiv.classList.add("time-box");
                timeDiv.textContent = slot;
                if (isPastSlot) {
                    timeDiv.classList.add("disabled");
                    timeDiv.style.opacity = "0.5";
                    timeDiv.style.pointerEvents = "none";
                } else {
                    timeDiv.addEventListener("click", function () {
                        document.querySelectorAll(".time-box").forEach(t => t.classList.remove("active"));
                        this.classList.add("active");
                        selectedTime = this.textContent;
                        document.getElementById("confirm-btn").disabled = false;
                    });
                }
                timeContainer.appendChild(timeDiv);
            });
        }

        document.querySelectorAll(".date-box").forEach(dateDiv => {
            dateDiv.addEventListener("click", function () {
                document.querySelectorAll(".date-box").forEach(d => d.classList.remove("active"));
                this.classList.add("active");
                selectedDate = this.getAttribute("data-date");

                updateTimeSlots();
            });
        });

        document.getElementById("confirm-btn").addEventListener("click", () => {
            if (!selectedDate || !selectedTime) {
                alert("Please select both a date and time.");
                return;
            }
            alert(`Appointment booked with ${selectedDoc.name} on ${selectedDate} at ${selectedTime}`);
            document.body.removeChild(popup);
            document.body.removeChild(overlay);
            document.body.classList.remove("no-scroll");
        });

        document.getElementById('close').addEventListener("click", () => {
            document.body.removeChild(popup);
            document.body.removeChild(overlay);
            document.body.classList.remove("no-scroll");
        });
    });
});

// the below code is for the appointment booking and pop up creation in patient portal fo rneurology department
const docCards11 = document.querySelectorAll('.d12');

docCards11.forEach(card => {
    card.addEventListener("click", () => {
        const btn10 = card.querySelector('button');
        const docId = btn10.getAttribute('id');
        if (!docId) return;

        const selectedDoc = doctors.find(doctor => doctor.id == docId);
        if (!selectedDoc) return;

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
          popup.style.scrollbarWidth = 'none'; // Hides scrollbar in Firefox
        popup.style.msOverflowStyle = 'none'; // Hides scrollbar in IE/Edge
        popup.style.WebkitOverflowScrolling = 'touch';  

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

            <button id="confirm-btn" class="confirm-btn" disabled>Confirm Appointment</button>
        `;

        document.body.appendChild(overlay);
        document.body.appendChild(popup);
        document.body.classList.add("no-scroll");

        let selectedDate = null;
        let selectedTime = null;

        function updateTimeSlots() {
            const timeContainer = document.getElementById("time-container");
            timeContainer.innerHTML = "";
            const now = new Date();
            const currentHour = now.getHours();

            timeSlots.forEach(slot => {
                const [startTime] = slot.split(" - "); 
                const [hour, minute] = startTime.split(":");
                const isPM = startTime.includes("PM");
                let slotHour = parseInt(hour);

                if (isPM && slotHour !== 12) slotHour += 12;
                if (!isPM && slotHour === 12) slotHour = 0;

                const isPastSlot = selectedDate === today.toDateString() && slotHour <= currentHour;

                const timeDiv = document.createElement("div");
                timeDiv.classList.add("time-box");
                timeDiv.textContent = slot;
                if (isPastSlot) {
                    timeDiv.classList.add("disabled");
                    timeDiv.style.opacity = "0.5";
                    timeDiv.style.pointerEvents = "none";
                } else {
                    timeDiv.addEventListener("click", function () {
                        document.querySelectorAll(".time-box").forEach(t => t.classList.remove("active"));
                        this.classList.add("active");
                        selectedTime = this.textContent;
                        document.getElementById("confirm-btn").disabled = false;
                    });
                }
                timeContainer.appendChild(timeDiv);
            });
        }

        document.querySelectorAll(".date-box").forEach(dateDiv => {
            dateDiv.addEventListener("click", function () {
                document.querySelectorAll(".date-box").forEach(d => d.classList.remove("active"));
                this.classList.add("active");
                selectedDate = this.getAttribute("data-date");

                updateTimeSlots();
            });
        });

        document.getElementById("confirm-btn").addEventListener("click", () => {
            if (!selectedDate || !selectedTime) {
                alert("Please select both a date and time.");
                return;
            }
            alert(`Appointment booked with ${selectedDoc.name} on ${selectedDate} at ${selectedTime}`);
            document.body.removeChild(popup);
            document.body.removeChild(overlay);
            document.body.classList.remove("no-scroll");
        });

        document.getElementById('close').addEventListener("click", () => {
            document.body.removeChild(popup);
            document.body.removeChild(overlay);
            document.body.classList.remove("no-scroll");
        });
    });
});

// the below code is for the appointment booking and pop up creation in patient portal fo rneurology department
const docCards12 = document.querySelectorAll('.d13');

docCards12.forEach(card => {
    card.addEventListener("click", () => {
        const btn11 = card.querySelector('button');
        const docId = btn11.getAttribute('id');
        if (!docId) return;

        const selectedDoc = doctors.find(doctor => doctor.id == docId);
        if (!selectedDoc) return;

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
          popup.style.scrollbarWidth = 'none'; // Hides scrollbar in Firefox
        popup.style.msOverflowStyle = 'none'; // Hides scrollbar in IE/Edge
        popup.style.WebkitOverflowScrolling = 'touch';  

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

            <button id="confirm-btn" class="confirm-btn" disabled>Confirm Appointment</button>
        `;

        document.body.appendChild(overlay);
        document.body.appendChild(popup);
        document.body.classList.add("no-scroll");

        let selectedDate = null;
        let selectedTime = null;

        function updateTimeSlots() {
            const timeContainer = document.getElementById("time-container");
            timeContainer.innerHTML = "";
            const now = new Date();
            const currentHour = now.getHours();

            timeSlots.forEach(slot => {
                const [startTime] = slot.split(" - "); 
                const [hour, minute] = startTime.split(":");
                const isPM = startTime.includes("PM");
                let slotHour = parseInt(hour);

                if (isPM && slotHour !== 12) slotHour += 12;
                if (!isPM && slotHour === 12) slotHour = 0;

                const isPastSlot = selectedDate === today.toDateString() && slotHour <= currentHour;

                const timeDiv = document.createElement("div");
                timeDiv.classList.add("time-box");
                timeDiv.textContent = slot;
                if (isPastSlot) {
                    timeDiv.classList.add("disabled");
                    timeDiv.style.opacity = "0.5";
                    timeDiv.style.pointerEvents = "none";
                } else {
                    timeDiv.addEventListener("click", function () {
                        document.querySelectorAll(".time-box").forEach(t => t.classList.remove("active"));
                        this.classList.add("active");
                        selectedTime = this.textContent;
                        document.getElementById("confirm-btn").disabled = false;
                    });
                }
                timeContainer.appendChild(timeDiv);
            });
        }

        document.querySelectorAll(".date-box").forEach(dateDiv => {
            dateDiv.addEventListener("click", function () {
                document.querySelectorAll(".date-box").forEach(d => d.classList.remove("active"));
                this.classList.add("active");
                selectedDate = this.getAttribute("data-date");

                updateTimeSlots();
            });
        });

        document.getElementById("confirm-btn").addEventListener("click", () => {
            if (!selectedDate || !selectedTime) {
                alert("Please select both a date and time.");
                return;
            }
            alert(`Appointment booked with ${selectedDoc.name} on ${selectedDate} at ${selectedTime}`);
            document.body.removeChild(popup);
            document.body.removeChild(overlay);
            document.body.classList.remove("no-scroll");
        });

        document.getElementById('close').addEventListener("click", () => {
            document.body.removeChild(popup);
            document.body.removeChild(overlay);
            document.body.classList.remove("no-scroll");
        });
    });
});

     

     

     

     

     

     

     

     
     

     

     

     
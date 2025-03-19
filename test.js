const home=document.getElementById("ho1");
home.addEventListener('click',()=>
{
    window.location.href='pmain.html';
});
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

    updateCartUI();
};

// 🟢 Save cart data in local storage
function saveCartToLocalStorage() {
    if (cartItems.length === 0) {
        localStorage.clear();
    } else {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        localStorage.setItem("cartCount", cartItems.length); // 🔹 Save correct count
        localStorage.setItem("cartTotalPrice", totalprice);
    }
}


// 🟢 Update Cart UI (Count & Total Price)
function updateCartUI() {
    document.getElementById("cart-count").innerText = cartItems.length; // 🔹 Use actual length, not a default value
}


// 🟢 Add item to cart
function addToCart(button) {
    alert("Added to cart!");

    let price = parseFloat(button.getAttribute('data-price'));
    let name = button.getAttribute('data-name');
    let image = button.getAttribute('data-image');

    if (!price || !name || !image) {
        console.error("Missing product details for cart.");
        return;
    }

    count++;
    totalprice += price;
    cartItems.push({ name, price, image });

    saveCartToLocalStorage();
    updateCartUI();
    updateCartModal();
}

// 🟢 Remove item from cart
function removeFromCart(index) {
    totalprice -= cartItems[index].price;
    cartItems.splice(index, 1);
    count = Math.max(0, count - 1); // Prevent negative values

    saveCartToLocalStorage();
    updateCartUI();
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
    div.style.cssText = `
        width: 25%;
        height: 100%;
        overflow-y: scroll;
        background-color: white;
        color: #0f346c;
        position: fixed;
        top: 1%;
        right: 5px;
        padding: 10px;
        border-radius: 10px;
        z-index: 1000;
    `;

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
        <span id='close' style="margin-left:20rem;cursor:pointer">✖</span>
        <div id="cartitems" style="width:100%;height:90%;border:1px solid red;overflow-y:scroll; padding: 10px;">
            ${cartContent}
        </div>
        <div id="total-price" style="color:black; font-size: 16px; font-weight: bold; margin-top: 10px;">
            Total Price To Be Paid: ₹${totalprice}
        </div>
    `;

    document.body.appendChild(div);
    document.getElementById('close').addEventListener('click', () => div.remove());
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


const productdetails = [
    {
        id: 1,
        name: 'CBC (Complete Blood Count) Test',
        details: "A CBC test measures key blood components to assess overall health and detect conditions like anemia, infections, and blood disorders Includes .<br>🔴 RBC Tests – Hemoglobin, Hematocrit, RBC Count, MCV, MCH, MCHC, RDW <br> ⚪ WBC Tests – Total WBC, Neutrophils, Lymphocytes, Monocytes, Eosinophils, <br>Basophils.<br> 🩸 Platelet Tests – Platelet Count, MPV, PDW, PCT, IPF.<br> 🔬 Others – nRBC, Immature Granulocytes, Large Unstained Cells.",
        Requirements: "No fasting required. Blood sample is drawn from a vein. Results help diagnose various health conditions.",
        img: "cbc.webp"
    },
    {
        id: 2,
        name: 'HbA1c Test (Hemoglobin A1c)',
        details: "Includes:<br>1️⃣ HbA1c (%) – Average blood sugar control.<br> 2️⃣ Estimated Average Glucose (eAG) – Converts HbA1c to an estimated glucose level.<br> 3️⃣ Blood Glucose Level – Checks current sugar levels.",
        Requirements: "No fasting required. Blood sample is drawn from a vein. Results help diagnose diabetes and monitor blood sugar control.",
        img: "Diabetes.webp"
    },
    {
        id: 3,
        name: 'FBS (Fasting Blood Sugar) Test',
        details: "Includes:<br>1️⃣ Fasting Blood Sugar (FBS) – Blood sugar levels after fasting for 8-12 hours.",
        Requirements: "Fasting for 8-12 hours before the test. Blood sample is drawn from a vein. Results help diagnose diabetes and monitor blood sugar levels.",
        img: "Diabetes (1).webp"
    },
    {
        id: 4,
        name: 'Lipid Profile Test (Heart)',
        details: "Includes:<br>1️⃣ Total Cholesterol – Total cholesterol levels.<br> 2️⃣ HDL Cholesterol – Good cholesterol levels.<br> 3️⃣ LDL Cholesterol – Bad cholesterol levels. <br>4️⃣ Triglycerides – Fatty substances in the blood.",
        Requirements: "Fasting for 9-12 hours before the test. Blood sample is drawn from a vein. Results help diagnose heart diseases and monitor cholesterol levels.",
        img: "Heart.webp"
    },
    {
        id: 5,
        name: 'LFT (Liver Function Test)',
        details: "Includes:<br>1️⃣ Total Protein – Total protein levels.<br> 2️⃣ Albumin – Albumin levels. <br>3️⃣ Globulin – Globulin levels.<br> <br>4️⃣ A/G Ratio – Albumin to Globulin ratio.<br> 5️⃣ Bilirubin – Bilirubin levels.<br> 6️⃣ SGOT (AST) – Liver enzyme levels.<br> 7️⃣ SGPT (ALT) – Liver enzyme levels.<br> 8️⃣ Alkaline Phosphatase – Liver enzyme levels.",
        Requirements: "No fasting required. Blood sample is drawn from a vein. Results help diagnose liver diseases and monitor liver function.",
        img: "Liver.webp"
    },
    {
        id: 6,
        name: 'Lipid Profile Test (Kidney)',
        details: "Includes:<br>1️⃣ Urea – Urea levels.<br> 2️⃣ Creatinine – Creatinine levels.<br> 3️⃣ Uric Acid – Uric acid levels.<br> 4️⃣ BUN – Blood Urea Nitrogen.<br> 5️⃣ eGFR – Estimated Glomerular Filtration Rate.<br> 6️⃣ Sodium – Sodium levels.<br> 7️⃣ Potassium – Potassium levels.<br> 8️⃣ Chloride – Chloride levels.<br> 9️⃣ Calcium – Calcium levels.<br> 1️⃣0️⃣ Phosphorus – Phosphorus levels.<br> 1️⃣1️⃣ Albumin – Albumin levels.<br> 1️⃣2️⃣ Total Protein – Total protein levels.",
        Requirements: "No fasting required. Blood sample is drawn from a vein. Results help diagnose kidney diseases and monitor kidney function.",
        img: "Kidney.webp"
    },
    {
        id: 7,
        name: 'Glucose Fasting & PP Test',
        details: "This test measures blood sugar levels before and after a meal to diagnose diabetes and glucose metabolism disorders. Includes (2 Tests):<br> 1️⃣ Fasting Blood Sugar (FBS) – Measures glucose after 8-12 hours of fasting.<br> 2️⃣ Postprandial Blood Sugar (PPBS) – Measures glucose 2 hours after a meal.",
        Requirements: "Fasting required for FBS. Blood samples are taken twice (before and after a meal).",
        img: "Default.webp"
    },
    {
        id: 8,
        name: 'Thyroid Profile (T3, T4, TSH) Test',
        details: "This test evaluates thyroid function to diagnose conditions like hypothyroidism and hyperthyroidism. Includes (4 Tests):<br> 1️⃣ Total Triiodothyronine (T3) – Measures T3 hormone levels.<br> 2️⃣ Total Thyroxine (T4) – Measures T4 hormone levels. <br>3️⃣ Thyroid-Stimulating Hormone (TSH) – Regulates thyroid activity. <br>4️⃣ Free T4 (FT4) – Measures the active form of Thyroxine.",
        Requirements: "No fasting required. Blood sample is drawn from a vein. Results help diagnose thyroid disorders and monitor thyroid function.",
        img: "Thyroid.webp"
    }
];

// creating a div to print the details of the blood tests.......
document.querySelectorAll(".te").forEach(div => {
    div.addEventListener("click", function () {
        const button = this.querySelector(".te-2 button"); // Get the button inside the clicked div
        if (!button) return;

        const testId = button.getAttribute("data-id");

        // Find the matching product in the existing productdetails array
        const selectedProduct = productdetails.find(product => product.id == testId);

        if (selectedProduct) {
            // Remove any existing popups before creating a new one
            const existingPopup = document.getElementById("popup");
            if (existingPopup) existingPopup.remove();

            // Creating popup div
            const popup = document.createElement("div");
            popup.id = "popup"; // Add an ID to the popup
            popup.style.width = '40%';
            popup.style.height = '50%';
            popup.style.backgroundColor = 'white';
            popup.style.color = '#0f346c';
            popup.style.position = 'fixed';
            popup.style.top = '50%';
            popup.style.left = '50%';
            popup.style.transform = 'translate(-50%, -50%)';
            popup.style.zIndex = '9999';
            popup.style.borderRadius = '10px';
            popup.style.fontFamily = 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif';
            popup.style.padding = '20px';
            popup.style.boxShadow = '0px 4px 10px rgba(0, 0, 0, 0.2)';
            popup.style.overflowY = 'auto'; // Allows scrolling if content overflows
            popup.style.overflowY = 'scroll'; // Enable scrolling
            popup.style.scrollbarWidth = 'none'; // Hides scrollbar in Firefox
            popup.style.msOverflowStyle = 'none'; // Hides scrollbar in IE/Edge
            popup.style.WebkitOverflowScrolling = 'touch'; // Enables smooth scrolling in Safari

            popup.innerHTML = `
                <span id='close' style="float:right; cursor:pointer;">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black">
                        <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
                    </svg>
                </span>
             
                <h3 style="color:orange;font-weight:400;font-size;1rem;display:inline-block;border-bottom:1px solid #0f346c">Test Details</h3>
                   <div style="display:flex;justify-content:center">
                 <img src="${selectedProduct.img}" alt="Test Image" style="width:100px; height:100px; ; border:2px solid #0f346c; border-radius:50%; margin: 10px 0;box-sizzling:border-box;">
                <h3 style="margin-left:2rem;margin-top:3rem;font-size:2rem;font-weight:200;">${selectedProduct.name}</h3>
               </div>
                <p><strong style="color:orange">Details:</strong> ${selectedProduct.details}</p>
                <p style="color:maroon"><strong style='color:orange'>Requirements:</strong> ${selectedProduct.Requirements}</p>
            `;

            document.body.appendChild(popup);

            // Close functionality
            popup.querySelector("#close").addEventListener("click", function () {
                popup.remove();
            });
        } else {
            console.error("Test ID not found in productdetails");
        }
    });
});
// the below object is used to create the pop-up for the antiagent or for antirapid tests like covid 19 or like that
const productdetails1 = [
    {
        id: 9,
        name: 'Dengue Rapid Test',
        details: "The Dengue Rapid Test detects dengue virus antigens in the blood, helping diagnose dengue fever quickly.",
        Requirements: "No fasting required. A blood sample is taken from a vein.",
        img: 'cbc.webp', 
        price: 1280,
        originalPrice: 1728,
        discount: 25
    },
    {
        id: 10,
        name: 'HIV Test',
        details: "The HIV test detects antibodies or antigens in the blood to check for HIV infection.",
        Requirements: "No fasting required. A blood sample is taken from a vein.",
        img: 'cbc.webp', 
        price: 963,
        originalPrice: 1150,
        discount: 25
    },
    {
        id: 11,
        name: 'HBsAg Test (Hepatitis B Surface Antigen)',
        details: "The HBsAg test detects the presence of the hepatitis B virus in the blood, helping diagnose hepatitis B infection.",
        Requirements: "No fasting required. A blood sample is taken from a vein.",
        img: 'cbc.webp', 
        price: 975,
        originalPrice: 1300,
        discount: 25
    },
    {
        id: 12,
        name: 'Widal Test',
        details: "The Widal test is used to diagnose typhoid fever by detecting antibodies against Salmonella bacteria.",
        Requirements: "No fasting required. A blood sample is taken from a vein.",
        img: 'cbc.webp', 
        price: 399,
        originalPrice: 532,
        discount: 25
    }
];
const anti = document.querySelectorAll(".test-3-1-1");

anti.forEach(item => {
    item.addEventListener('click', () => {
        let btn1 = item.querySelector(".test3-2-2 button"); // Correctly selecting the button inside the clicked div
        if (!btn1) return;

        const testId = btn1.getAttribute("data-id");

        // Find the matching product in the existing productdetails array
        const selectedProduct1 = productdetails1.find(product => product.id == testId);

        if (selectedProduct1) {
            // Remove any existing popups before creating a new one
            const existingPopup1 = document.getElementById("popup1");
            if (existingPopup1) existingPopup1.remove();

            // Create a new popup
            const popup1 = document.createElement("div");
            popup1.id = "popup1";
            popup1.style.cssText = `
                width: 40%;
                height: 50%;
                background-color: white;
                color: #0f346c;
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                z-index: 9999;
                border-radius: 10px;
                font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                padding: 20px;
                box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
                overflow-y: auto;
            `;

            popup1.innerHTML = `
                <span id='close' style="float:right; cursor:pointer;">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black">
                        <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
                    </svg>
                </span>
                <h3 style="color:orange; font-weight:400; font-size:1rem; display:inline-block; border-bottom:1px solid #0f346c">Test Details</h3>
                <div style="display:flex;justify-content:center">
                    <img src="${selectedProduct1.img}" alt="Test Image" style="width:100px; height:100px; border:2px solid #0f346c; border-radius:50%; margin: 10px 0;">
                    <h3 style="margin-left:2rem; margin-top:3rem; font-size:2rem; font-weight:200;">${selectedProduct1.name}</h3>
                </div>
                <p><strong style="color:orange">Details:</strong> ${selectedProduct1.details}</p>
                <p style="color:maroon"><strong style='color:orange'>Requirements:</strong> ${selectedProduct1.Requirements}</p>
            `;

            document.body.appendChild(popup1);

            // Close functionality
            popup1.querySelector("#close").addEventListener("click", function () {
                popup1.remove();
            });
        } else {
            console.error("Test ID not found in productdetails");
        }
    });
});

// 🟢 Fix for Antigen-Rapid Tests Not Adding to Cart
document.querySelectorAll(".test3-2-2 button").forEach(button => {
    button.addEventListener("click", function(event) {
        event.stopPropagation();
        addToCart(this);
    });
});

// 🟢 Just a practice script (Not related to cart)

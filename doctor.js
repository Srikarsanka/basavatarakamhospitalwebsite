// Navigation links
const abo = document.getElementById('abo');
abo.addEventListener("click",() => {
  window.location = 'about.html';
});

const ho = document.getElementById('ho');
ho.addEventListener("click",() => {
  window.location = 'main.html';
});

const book = document.getElementById('pat');
book.addEventListener("click",() => {
  window.location = 'resource.html';
});

const eme = document.getElementById('eme');
eme.addEventListener("click",() => {
  window.location = 'eme.html';
});

const con = document.getElementById('con');
con.addEventListener("click",() => {
  window.location = 'contact.html';
});

const hos = document.getElementById('hos');
hos.addEventListener("click",() => {
  window.location = 'hospital.html';
});

const doc = document.getElementById('doc');
doc.addEventListener("click",() => {
  window.location = 'doctor.html';
});

// Doctor specialization animation
function word() {
    const ip = document.querySelector("#docts");
    let a = ['Cardiology', 'Neurosciences', 'ENT'];
    let i = 0;
    let currentWord = a[i];
    let letterindex = 0;
    let displayedWord = '';

    function updatewords() {
        if (letterindex < currentWord.length) {
            displayedWord += currentWord[letterindex];
            ip.innerHTML = `Specialized Departments in Our Hospital: ` + displayedWord;
            letterindex++; 
        } else {
            i = (i + 1) % a.length;
            letterindex = 0;
            currentWord = a[i];
            displayedWord = '';
        }
    }

    setInterval(updatewords, 300);
}
word();

// Click events for departments
const departments = {
    'cardiology': {
        name: "Cardiology",
        description: "The Cardiology department specializes in heart health and cardiovascular diseases.",
        doctors: [
            { name: 'Dr. Priya', experience: '15 years', languages: 'Telugu, English, Hindi', photo: 'doctors.webp' },
            { name: 'Dr. Suresh', experience: '12 years', languages: 'Telugu, English, Hindi', photo: 'doctors.webp' }
        ]
    },
    'cardiothoracic': {
        name: "Cardiothoracic",
        description: "The Cardiothoracic department focuses on surgical treatment of diseases affecting the organs inside the thorax.",
        doctors: [
            { name: 'Dr. Arvind', experience: '10 years', languages: 'English, Tamil', photo: 'doctors.webp' },
            { name: 'Dr. Sneha', experience: '8 years', languages: 'English, Malayalam', photo: 'doctors.webp' }
        ]
    },
    'Neuroscience': {
        name: 'Neuroscience',
        description: "Neuroscience focuses on the nervous system, including the brain, spinal cord, and peripheral nerves.",
        doctors: [
            { name: 'Dr. Satwik', experience: '12 years', languages: 'English, Telugu', photo: 'doctors.webp' },
            { name: 'Dr. Ramesh', experience: '15 years', languages: 'English, Tamil, Telugu', photo: 'doctors.webp' }
        ]
    },
    'nephrology': {
        name: 'Nephrology',
        description: "Nephrology is dedicated to the study and treatment of kidney function and diseases.",
        doctors: [
            { name: 'Dr. Satwik', experience: '12 years', languages: 'English, Telugu', photo: 'doctors.webp' },
            { name: 'Dr. Ramesh', experience: '15 years', languages: 'English, Tamil, Telugu', photo: 'doctors.webp' }
        ]
    },
    'gastroenterology': {
        name: 'Gastroenterology',
        description: "Gastroenterology deals with the digestive system and its disorders.",
        doctors: [
            { name: 'Dr. Arun', experience: '12 years', languages: 'English, Telugu', photo: 'doctors.webp' },
            { name: 'Dr. Satwika', experience: '15 years', languages: 'English, Tamil, Telugu', photo: 'doctors.webp' }
        ]
    },
    'Orthopedics':
    {
      name: 'Orthpedic',
      description: "Gastroenterology deals with the digestive system and its disorders.",
      doctors: [
          { name: 'Dr. Aruna.S', experience: '12 years', languages: 'English, Telugu', photo: 'doctors.webp' },
          { name: 'Dr. Satwika.K', experience: '15 years', languages: 'English, Tamil, Telugu', photo: 'doctors.webp' },
      ],
  },
    'oncology': {
        name: 'Oncology',
        description: "Oncology is the branch of medicine that specializes in the diagnosis and treatment of cancer.",
        doctors: [
            { name: 'Dr. Arun', experience: '10 years', languages: 'English, Telugu', photo: 'doctors.webp' },
            { name: 'Dr. Bramhanadam', experience: '35 years', languages: 'English, Telugu, Hindi', photo: 'doctors.webp' }
        ]
    },
    'organ-transplantation': {
        name: 'Organ Transplantation',
        description: "Organ transplantation is a medical procedure that involves transplanting an organ or tissue from one person to another.",
        doctors: [
            { name: 'Dr. Akara', experience: '10 years', languages: 'English, Telugu', photo: 'doctors.webp' },
            { name: 'Dr. Chirenjevi', experience: '25 years', languages: 'English, Telugu, Hindi', photo: 'doctors.webp' }
        ]
    }
};

const main2 = document.getElementById('main2');

document.querySelectorAll('.m-1').forEach(item => {
    item.addEventListener('click', event => {
        const deptId = event.currentTarget.id;
        const deptInfo = departments[deptId];

        if (deptInfo) {
            main2.innerHTML = `
                <h2>${deptInfo.name} Department</h2>
                <center>
                <p style='font-size:1.5rem;color:orange'>${deptInfo.description}</p></center>
                <h3 style='margin-left:13rem;font-size:1.5rem'>Doctors:</h3>
                <div class="doctor-info">
                    ${deptInfo.doctors.map(doctor => `
                    <div class="doctor">
                        <img src="${doctor.photo}" alt="${doctor.name}">
                        <p><strong>${doctor.name}</strong></p>
                        <p>Experience: ${doctor.experience}</p>
                        <p>Languages: ${doctor.languages}</p>
                    </div>
                    `).join('')}
                </div>
            `;
        }
    });
});
 /*Doctor 1 for cardiology department */
 const docs1 = document.querySelectorAll('.d1b'); // Select all "Book Appointment" buttons

docs1.forEach(doc1 => {
    doc1.addEventListener('click', (event) => {
        // Get the 'dn' attribute value from the parent div (doctor card)
        const doctorName = event.target.closest('.d1').getAttribute('dn');

        // Create a new div element to display the doctor's name
        const div = document.createElement('div');
        div.style.width = '400px';
        div.style.height = '450px';
        div.style.backgroundColor = '#0f346c';
        div.style.color = 'black';
        div.style.position = 'fixed';
        div.style.top = '50%';
        div.style.left = '50%';
        div.style.transform = 'translate(-50%, -50%)';
        div.style.borderRadius = '2rem';
        div.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
        div.style.border = '1px solid white';
        div.style.padding = '20px';
        div.style.zIndex = '1000'; // Ensures the popup is on top of everything
        div.style.pointerEvents = 'auto';

        // Set the content of the div (doctor's name)
        div.innerHTML = `
            <h1 style="font-size:1.5rem;color:white;font-weight:400;font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif">Book an Appointment with <strong style="color:orange"> ${doctorName} – Cardiology Specialist</strong>
            </h1>
            <br>
            <form action='text.text' method='post'>
            <label for='na' style="color:white;font-size:1.5rem;font-weight:200;font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"">Name:</label>
            <br>
            <input type='text' id='na' name='na' required style='width:300px;height:30px;border-radius:2rem;border:1px solid black' >
            <br><br>
            <label for='ph' style="color:white;font-size:1.5rem;font-weight:200;font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"">Contact No:</label>
            <br>
            <input type='tel' id='ph' name='ph' style='width:300px;height:30px;border-radius:2rem;border:1px solid black'>
            <br><br>
            <label for='em' style="color:white;font-size:1.5rem;font-weight:200;font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"">Email-id:</label>
            <br>
            <input type='text' id='em' name='em' style='width:300px;height:30px;border-radius:2rem;border:1px solid black'>
            <input type='submit' value='Submit' id='submit' >
            </form>
        `;

        // Append the div to the body
        document.body.appendChild(div);

        // Add a semi-transparent overlay to disable background interaction
        const overlay = document.createElement('div');
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        overlay.style.zIndex = '999';
        document.body.appendChild(overlay);

        // Add a "Submit" button
        closeButton = document.getElementById('submit');
        closeButton.style.width = '120px';
        closeButton.style.height = '40px';
        closeButton.style.borderRadius = '2rem';
        closeButton.style.backgroundColor = 'white';
        closeButton.style.color = '#0f346c';
        closeButton.style.fontWeight = '200';
        closeButton.style.fontSize = '1rem';
        closeButton.style.border = '1px solid white';
        closeButton.style.position = 'absolute';
        closeButton.style.bottom = '10px';
        closeButton.style.right = '10px';
        closeButton.style.cursor = 'pointer';

        // Add event listener to the "Submit" button
        closeButton.addEventListener('click', () => {
            // Remove the popup and overlay
            div.remove();
            overlay.remove();

            // Display "Thank You" message
            const thankYouDiv = document.createElement('div');
            thankYouDiv.style.width = '400px';
            thankYouDiv.style.height = '200px';
            thankYouDiv.style.backgroundColor = '#0f346c';
            thankYouDiv.style.color = 'white';
            thankYouDiv.style.position = 'fixed';
            thankYouDiv.style.top = '50%';
            thankYouDiv.style.left = '50%';
            thankYouDiv.style.transform = 'translate(-50%, -50%)';
            thankYouDiv.style.borderRadius = '2rem';
            thankYouDiv.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
            thankYouDiv.style.border = '1px solid white';
            thankYouDiv.style.padding = '20px';
            thankYouDiv.style.textAlign = 'center';
            thankYouDiv.style.zIndex = '1000';

            thankYouDiv.innerHTML = `
                <h1 style="font-size:1.5rem; font-family: system-ui;">Thank You!</h1>
                <p style="font-size:1.2rem; margin-top:10px;">Thank you for choosing <strong>Basavatarakam Hospitals</strong>.</p>
            `;

            document.body.appendChild(thankYouDiv);

            // Remove the "Thank You" message after 3 seconds
            setTimeout(() => {
                thankYouDiv.remove();
            }, 3000);
        });

        // Append the "Submit" button to the popup
        div.appendChild(closeButton);

        // Close popup and overlay on outside click
        overlay.addEventListener('click', () => {
            div.remove(); // Remove popup
            overlay.remove(); // Remove overlay
        });
    });
});

 // Doctors for the Cardiothoracic department
 const docs2 = document.querySelectorAll('.d2b'); // Select all "Book Appointment" buttons

docs2.forEach(doc2 => {
    doc2.addEventListener('click', (event) => {
        // Get the 'dn' attribute value from the parent div (doctor card)
        const doctorName = event.target.closest('.d2').getAttribute('dn1');

        // Create a new div element to display the doctor's name
        const div1 = document.createElement('div');
        div1.style.width = '400px';
        div1.style.height = '450px';
        div1.style.backgroundColor = '#0f346c';
        div1.style.color = 'black';
        div1.style.position = 'fixed';
        div1.style.top = '50%';
        div1.style.left = '50%';
        div1.style.transform = 'translate(-50%, -50%)';
        div1.style.borderRadius = '2rem';
        div1.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
        div1.style.border = '1px solid white';
        div1.style.padding = '20px';
        div1.style.zIndex = '1000'; // Ensures the popup is on top of everything
        div1.style.pointerEvents = 'auto';

        // Set the content of the div (doctor's name)
        div1.innerHTML = `
            <h1 style="font-size:1.5rem;color:white;font-weight:400;font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif">Book an Appointment with <strong style="color:orange"> ${doctorName} – Cardiothoracic Specialist</strong>
            </h1>
            <br>
            <label for='na' style="color:white;font-size:1.5rem;font-weight:200;font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"">Name:</label>
            <br>
            <input type='text' id='na' name='na' style='width:300px;height:30px;border-radius:2rem;border:1px solid black'>
            <br><br>
            <label for='ph' style="color:white;font-size:1.5rem;font-weight:200;font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"">Contact No:</label>
            <br>
            <input type='tel' id='ph' name='ph' style='width:300px;height:30px;border-radius:2rem;border:1px solid black'>
            <br><br>
            <label for='em' style="color:white;font-size:1.5rem;font-weight:200;font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"">Email-id:</label>
            <br>
            <input type='text' id='em' name='em' style='width:300px;height:30px;border-radius:2rem;border:1px solid black'>
        `;

        // Append the div to the body
        document.body.appendChild(div1);

        // Add a semi-transparent overlay to disable background interaction
        const overlay = document.createElement('div');
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        overlay.style.zIndex = '999';
        document.body.appendChild(overlay);

        // Add a "Submit" button
        const closeButton = document.createElement('button');
        closeButton.innerHTML = 'Submit';
        closeButton.style.width = '120px';
        closeButton.style.height = '40px';
        closeButton.style.borderRadius = '2rem';
        closeButton.style.backgroundColor = 'white';
        closeButton.style.color = '#0f346c';
        closeButton.style.fontWeight = '200';
        closeButton.style.fontSize = '1rem';
        closeButton.style.border = '1px solid black';
        closeButton.style.position = 'absolute';
        closeButton.style.bottom = '10px';
        closeButton.style.right = '10px';
        closeButton.style.cursor = 'pointer';

        // Add event listener to the "Submit" button
        closeButton.addEventListener('click', () => {
            // Remove the popup and overlay
            div1.remove();
            overlay.remove();

            // Display "Thank You" message
            const thankYouDiv = document.createElement('div');
            thankYouDiv.style.width = '400px';
            thankYouDiv.style.height = '200px';
            thankYouDiv.style.backgroundColor = '#0f346c';
            thankYouDiv.style.color = 'white';
            thankYouDiv.style.position = 'fixed';
            thankYouDiv.style.top = '50%';
            thankYouDiv.style.left = '50%';
            thankYouDiv.style.transform = 'translate(-50%, -50%)';
            thankYouDiv.style.borderRadius = '2rem';
            thankYouDiv.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
            thankYouDiv.style.border = '1px solid white';
            thankYouDiv.style.padding = '20px';
            thankYouDiv.style.textAlign = 'center';
            thankYouDiv.style.zIndex = '1000';

            thankYouDiv.innerHTML = `
                <h1 style="font-size:1.5rem; font-family: system-ui;">Thank You!</h1>
                <p style="font-size:1.2rem; margin-top:10px;">Thank you for choosing <strong>Basavatarakam Hospitals</strong>.</p>
            `;

            document.body.appendChild(thankYouDiv);

            // Remove the "Thank You" message after 3 seconds
            setTimeout(() => {
                thankYouDiv.remove();
            }, 3000);
        });

        // Append the "Submit" button to the popup
        div1.appendChild(closeButton);

        // Close popup and overlay on outside click
        overlay.addEventListener('click', () => {
            div1.remove(); // Remove popup
            overlay.remove(); // Remove overlay
        });
    });
});
// doctors for the Dental Departments
const docs3 = document.querySelectorAll('.d3b'); // Select all "Book Appointment" buttons

docs3.forEach(doc3 => {
    doc3.addEventListener('click', (event) => {
        // Get the 'dn' attribute value from the parent div (doctor card)
        const doctorName = event.target.closest('.d3').getAttribute('dn2');

        // Create a new div element to display the doctor's name
        const div1 = document.createElement('div');
        div1.style.width = '400px';
        div1.style.height = '450px';
        div1.style.backgroundColor = '#0f346c';
        div1.style.color = 'black';
        div1.style.position = 'fixed';
        div1.style.top = '50%';
        div1.style.left = '50%';
        div1.style.transform = 'translate(-50%, -50%)';
        div1.style.borderRadius = '2rem';
        div1.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
        div1.style.border = '1px solid white';
        div1.style.padding = '20px';
        div1.style.zIndex = '1000'; // Ensures the popup is on top of everything
        div1.style.pointerEvents = 'auto';

        // Set the content of the div (doctor's name)
        div1.innerHTML = `
            <h1 style="font-size:1.5rem;color:white;font-weight:400;font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif">Book an Appointment with <strong style="color:orange"> ${doctorName} – Dental Specialist</strong>
            </h1>
            <br>
            <form action='text.text' method='post'>
            <label for='na' style="color:white;font-size:1.5rem;font-weight:200;font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"">Name:</label>
            <br>
            <input type='text' id='na' name='na' style='width:300px;height:30px;border-radius:2rem;border:1px solid black'>
            <br><br>
            <label for='ph' style="color:white;font-size:1.5rem;font-weight:200;font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"">Contact No:</label>
            <br>
            <input type='tel' id='ph' name='ph' style='width:300px;height:30px;border-radius:2rem;border:1px solid black'>
            <br><br>
            <label for='em' style="color:white;font-size:1.5rem;font-weight:200;font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"">Email-id:</label>
            <br>
            <input type='text' id='em' name='em' style='width:300px;height:30px;border-radius:2rem;border:1px solid black'>
            </form>
        `;

        // Append the div to the body
        document.body.appendChild(div1);

        // Add a semi-transparent overlay to disable background interaction
        const overlay = document.createElement('div');
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        overlay.style.zIndex = '999';
        document.body.appendChild(overlay);

        // Add a "Submit" button
        const closeButton = document.createElement('button');
        closeButton.innerHTML = 'Submit';
        closeButton.style.width = '120px';
        closeButton.style.height = '40px';
        closeButton.style.borderRadius = '2rem';
        closeButton.style.backgroundColor = 'white';
        closeButton.style.color = '#0f346c';
        closeButton.style.fontWeight = '200';
        closeButton.style.fontSize = '1rem';
        closeButton.style.border = '1px solid white';
        closeButton.style.position = 'absolute';
        closeButton.style.bottom = '10px';
        closeButton.style.right = '10px';
        closeButton.style.cursor = 'pointer';

        // Add event listener to the "Submit" button
        closeButton.addEventListener('click', () => {
            // Remove the popup and overlay
            div1.remove();
            overlay.remove();

            // Display "Thank You" message
            const thankYouDiv = document.createElement('div');
            thankYouDiv.style.width = '400px';
            thankYouDiv.style.height = '200px';
            thankYouDiv.style.backgroundColor = '#0f346c';
            thankYouDiv.style.color = 'white';
            thankYouDiv.style.position = 'fixed';
            thankYouDiv.style.top = '50%';
            thankYouDiv.style.left = '50%';
            thankYouDiv.style.transform = 'translate(-50%, -50%)';
            thankYouDiv.style.borderRadius = '2rem';
            thankYouDiv.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
            thankYouDiv.style.border = '1px solid black';
            thankYouDiv.style.padding = '20px';
            thankYouDiv.style.textAlign = 'center';
            thankYouDiv.style.zIndex = '1000';

            thankYouDiv.innerHTML = `
                <h1 style="font-size:1.5rem; font-family: system-ui;">Thank You!</h1>
                <p style="font-size:1.2rem; margin-top:10px;">Thank you for choosing <strong>Basavatarakam Hospitals</strong>.</p>
            `;

            document.body.appendChild(thankYouDiv);

            // Remove the "Thank You" message after 3 seconds
            setTimeout(() => {
                thankYouDiv.remove();
            }, 3000);
        });

        // Append the "Submit" button to the popup
        div1.appendChild(closeButton);

        // Close popup and overlay on outside click
        overlay.addEventListener('click', () => {
            div1.remove(); // Remove popup
            overlay.remove(); // Remove overlay
        });
    });
});
// doctors for the Dermatology Departments
const docs4 = document.querySelectorAll('.d4b'); // Select all "Book Appointment" buttons

docs4.forEach(doc4 => {
    doc4.addEventListener('click', (event) => {
        // Get the 'dn' attribute value from the parent div (doctor card)
        const doctorName = event.target.closest('.d4').getAttribute('dn3');

        // Create a new div element to display the doctor's name
        const div1 = document.createElement('div');
        div1.style.width = '400px';
        div1.style.height = '450px';
        div1.style.backgroundColor = '#0f346c';
        div1.style.color = 'black';
        div1.style.position = 'fixed';
        div1.style.top = '50%';
        div1.style.left = '50%';
        div1.style.transform = 'translate(-50%, -50%)';
        div1.style.borderRadius = '2rem';
        div1.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
        div1.style.border = '1px solid white';
        div1.style.padding = '20px';
        div1.style.zIndex = '1000'; // Ensures the popup is on top of everything
        div1.style.pointerEvents = 'auto';

        // Set the content of the div (doctor's name)
        div1.innerHTML = `
            <h1 style="font-size:1.5rem;color:white;font-weight:400;font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif">Book an Appointment with <strong style="color:orange"> ${doctorName} – Dermetology Specialist</strong>
            </h1>
            <br>
            <form action='text.text' method='post'>
            <label for='na' style="color:white;font-size:1.5rem;font-weight:200;font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"">Name:</label>
            <br>
            <input type='text' id='na' name='na' style='width:300px;height:30px;border-radius:2rem;border:1px solid black'>
            <br><br>
            <label for='ph' style="color:white;font-size:1.5rem;font-weight:200;font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"">Contact No:</label>
            <br>
            <input type='tel' id='ph' name='ph' style='width:300px;height:30px;border-radius:2rem;border:1px solid black'>
            <br><br>
            <label for='em' style="color:white;font-size:1.5rem;font-weight:200;font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"">Email-id:</label>
            <br>
            <input type='text' id='em' name='em' style='width:300px;height:30px;border-radius:2rem;border:1px solid black'>
            </form>
        `;

        // Append the div to the body
        document.body.appendChild(div1);

        // Add a semi-transparent overlay to disable background interaction
        const overlay = document.createElement('div');
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        overlay.style.zIndex = '999';
        document.body.appendChild(overlay);

        // Add a "Submit" button
        const closeButton = document.createElement('button');
        closeButton.innerHTML = 'Submit';
        closeButton.style.width = '120px';
        closeButton.style.height = '40px';
        closeButton.style.borderRadius = '2rem';
        closeButton.style.backgroundColor = 'white';
        closeButton.style.color = '#0f346c';
        closeButton.style.fontWeight = '200';
        closeButton.style.fontSize = '1rem';
        closeButton.style.border = '1px solid white';
        closeButton.style.position = 'absolute';
        closeButton.style.bottom = '10px';
        closeButton.style.right = '10px';
        closeButton.style.cursor = 'pointer';

        // Add event listener to the "Submit" button
        closeButton.addEventListener('click', () => {
            // Remove the popup and overlay
            div1.remove();
            overlay.remove();

            // Display "Thank You" message
            const thankYouDiv = document.createElement('div');
            thankYouDiv.style.width = '400px';
            thankYouDiv.style.height = '200px';
            thankYouDiv.style.backgroundColor = '#0f346c';
            thankYouDiv.style.color = 'white';
            thankYouDiv.style.position = 'fixed';
            thankYouDiv.style.top = '50%';
            thankYouDiv.style.left = '50%';
            thankYouDiv.style.transform = 'translate(-50%, -50%)';
            thankYouDiv.style.borderRadius = '2rem';
            thankYouDiv.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
            thankYouDiv.style.border = '1px solid black';
            thankYouDiv.style.padding = '20px';
            thankYouDiv.style.textAlign = 'center';
            thankYouDiv.style.zIndex = '1000';

            thankYouDiv.innerHTML = `
                <h1 style="font-size:1.5rem; font-family: system-ui;">Thank You!</h1>
                <p style="font-size:1.2rem; margin-top:10px;">Thank you for choosing <strong>Basavatarakam Hospitals</strong>.</p>
            `;

            document.body.appendChild(thankYouDiv);

            // Remove the "Thank You" message after 3 seconds
            setTimeout(() => {
                thankYouDiv.remove();
            }, 3000);
        });

        // Append the "Submit" button to the popup
        div1.appendChild(closeButton);

        // Close popup and overlay on outside click
        overlay.addEventListener('click', () => {
            div1.remove(); // Remove popup
            overlay.remove(); // Remove overlay
        });
    });
});
// doctors for the Gastroenterology Departments
const docs5 = document.querySelectorAll('.d5b'); // Select all "Book Appointment" buttons

docs5.forEach(doc5 => {
    doc5.addEventListener('click', (event) => {
        // Get the 'dn' attribute value from the parent div (doctor card)
        const doctorName = event.target.closest('.d5').getAttribute('dn4');

        // Create a new div element to display the doctor's name
        const div1 = document.createElement('div');
        div1.style.width = '400px';
        div1.style.height = '450px';
        div1.style.backgroundColor = '#0f346c';
        div1.style.color = 'black';
        div1.style.position = 'fixed';
        div1.style.top = '50%';
        div1.style.left = '50%';
        div1.style.transform = 'translate(-50%, -50%)';
        div1.style.borderRadius = '2rem';
        div1.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
        div1.style.border = '1px solid white';
        div1.style.padding = '20px';
        div1.style.zIndex = '1000'; // Ensures the popup is on top of everything
        div1.style.pointerEvents = 'auto';

        // Set the content of the div (doctor's name)
        div1.innerHTML = `
            <h1 style="font-size:1.5rem;color:white;font-weight:400;font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif">Book an Appointment with <strong style="color:orange"> ${doctorName} – Gastroenterology Specialist</strong>
            </h1>
            <br>
            <form action='text.text' method='post'>
            <label for='na' style="color:white;font-size:1.5rem;font-weight:200;font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"">Name:</label>
            <br>
            <input type='text' id='na' name='na' style='width:300px;height:30px;border-radius:2rem;border:1px solid black'>
            <br><br>
            <label for='ph' style="color:white;font-size:1.5rem;font-weight:200;font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"">Contact No:</label>
            <br>
            <input type='tel' id='ph' name='ph' style='width:300px;height:30px;border-radius:2rem;border:1px solid black'>
            <br><br>
            <label for='em' style="color:white;font-size:1.5rem;font-weight:200;font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"">Email-id:</label>
            <br>
            <input type='text' id='em' name='em' style='width:300px;height:30px;border-radius:2rem;border:1px solid black'>
            </form>
        `;

        // Append the div to the body
        document.body.appendChild(div1);

        // Add a semi-transparent overlay to disable background interaction
        const overlay = document.createElement('div');
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        overlay.style.zIndex = '999';
        document.body.appendChild(overlay);

        // Add a "Submit" button
        const closeButton = document.createElement('button');
        closeButton.innerHTML = 'Submit';
        closeButton.style.width = '120px';
        closeButton.style.height = '40px';
        closeButton.style.borderRadius = '2rem';
        closeButton.style.backgroundColor = 'white';
        closeButton.style.color = '#0f346c';
        closeButton.style.fontWeight = '200';
        closeButton.style.fontSize = '1rem';
        closeButton.style.border = '1px solid white';
        closeButton.style.position = 'absolute';
        closeButton.style.bottom = '10px';
        closeButton.style.right = '10px';
        closeButton.style.cursor = 'pointer';

        // Add event listener to the "Submit" button
        closeButton.addEventListener('click', () => {
            // Remove the popup and overlay
            div1.remove();
            overlay.remove();

            // Display "Thank You" message
            const thankYouDiv = document.createElement('div');
            thankYouDiv.style.width = '400px';
            thankYouDiv.style.height = '200px';
            thankYouDiv.style.backgroundColor = '#0f346c';
            thankYouDiv.style.color = 'white';
            thankYouDiv.style.position = 'fixed';
            thankYouDiv.style.top = '50%';
            thankYouDiv.style.left = '50%';
            thankYouDiv.style.transform = 'translate(-50%, -50%)';
            thankYouDiv.style.borderRadius = '2rem';
            thankYouDiv.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
            thankYouDiv.style.border = '1px solid black';
            thankYouDiv.style.padding = '20px';
            thankYouDiv.style.textAlign = 'center';
            thankYouDiv.style.zIndex = '1000';

            thankYouDiv.innerHTML = `
                <h1 style="font-size:1.5rem; font-family: system-ui;">Thank You!</h1>
                <p style="font-size:1.2rem; margin-top:10px;">Thank you for choosing <strong>Basavatarakam Hospitals</strong>.</p>
            `;

            document.body.appendChild(thankYouDiv);

            // Remove the "Thank You" message after 3 seconds
            setTimeout(() => {
                thankYouDiv.remove();
            }, 3000);
        });

        // Append the "Submit" button to the popup
        div1.appendChild(closeButton);

        // Close popup and overlay on outside click
        overlay.addEventListener('click', () => {
            div1.remove(); // Remove popup
            overlay.remove(); // Remove overlay
        });
    });
});
// doctors for the Gynecology Departments
const docs6 = document.querySelectorAll('.d6b'); // Select all "Book Appointment" buttons

docs6.forEach(doc6 => {
    doc6.addEventListener('click', (event) => {
        // Get the 'dn' attribute value from the parent div (doctor card)
        const doctorName = event.target.closest('.d6').getAttribute('dn5');

        // Create a new div element to display the doctor's name
        const div1 = document.createElement('div');
        div1.style.width = '400px';
        div1.style.height = '450px';
        div1.style.backgroundColor = '#0f346c';
        div1.style.color = 'black';
        div1.style.position = 'fixed';
        div1.style.top = '50%';
        div1.style.left = '50%';
        div1.style.transform = 'translate(-50%, -50%)';
        div1.style.borderRadius = '2rem';
        div1.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
        div1.style.border = '1px solid white';
        div1.style.padding = '20px';
        div1.style.zIndex = '1000'; // Ensures the popup is on top of everything
        div1.style.pointerEvents = 'auto';

        // Set the content of the div (doctor's name)
        div1.innerHTML = `
            <h1 style="font-size:1.5rem;color:white;font-weight:400;font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif">Book an Appointment with <strong style="color:orange"> ${doctorName} –  Gynecology Specialist</strong>
            </h1>
            <br>
            <form action='text.text' method='post'>
            <label for='na' style="color:white;font-size:1.5rem;font-weight:200;font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"">Name:</label>
            <br>
            <input type='text' id='na' name='na' style='width:300px;height:30px;border-radius:2rem;border:1px solid black'>
            <br><br>
            <label for='ph' style="color:white;font-size:1.5rem;font-weight:200;font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"">Contact No:</label>
            <br>
            <input type='tel' id='ph' name='ph' style='width:300px;height:30px;border-radius:2rem;border:1px solid black'>
            <br><br>
            <label for='em' style="color:white;font-size:1.5rem;font-weight:200;font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"">Email-id:</label>
            <br>
            <input type='text' id='em' name='em' style='width:300px;height:30px;border-radius:2rem;border:1px solid black'>
            </form>
        `;

        // Append the div to the body
        document.body.appendChild(div1);

        // Add a semi-transparent overlay to disable background interaction
        const overlay = document.createElement('div');
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        overlay.style.zIndex = '999';
        document.body.appendChild(overlay);

        // Add a "Submit" button
        const closeButton = document.createElement('button');
        closeButton.innerHTML = 'Submit';
        closeButton.style.width = '120px';
        closeButton.style.height = '40px';
        closeButton.style.borderRadius = '2rem';
        closeButton.style.backgroundColor = 'white';
        closeButton.style.color = '#0f346c';
        closeButton.style.fontWeight = '200';
        closeButton.style.fontSize = '1rem';
        closeButton.style.border = '1px solid white';
        closeButton.style.position = 'absolute';
        closeButton.style.bottom = '10px';
        closeButton.style.right = '10px';
        closeButton.style.cursor = 'pointer';

        // Add event listener to the "Submit" button
        closeButton.addEventListener('click', () => {
            // Remove the popup and overlay
            div1.remove();
            overlay.remove();

            // Display "Thank You" message
            const thankYouDiv = document.createElement('div');
            thankYouDiv.style.width = '400px';
            thankYouDiv.style.height = '200px';
            thankYouDiv.style.backgroundColor = '#0f346c';
            thankYouDiv.style.color = 'white';
            thankYouDiv.style.position = 'fixed';
            thankYouDiv.style.top = '50%';
            thankYouDiv.style.left = '50%';
            thankYouDiv.style.transform = 'translate(-50%, -50%)';
            thankYouDiv.style.borderRadius = '2rem';
            thankYouDiv.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
            thankYouDiv.style.border = '1px solid black';
            thankYouDiv.style.padding = '20px';
            thankYouDiv.style.textAlign = 'center';
            thankYouDiv.style.zIndex = '1000';

            thankYouDiv.innerHTML = `
                <h1 style="font-size:1.5rem; font-family: system-ui;">Thank You!</h1>
                <p style="font-size:1.2rem; margin-top:10px;">Thank you for choosing <strong>Basavatarakam Hospitals</strong>.</p>
            `;

            document.body.appendChild(thankYouDiv);

            // Remove the "Thank You" message after 3 seconds
            setTimeout(() => {
                thankYouDiv.remove();
            }, 3000);
        });

        // Append the "Submit" button to the popup
        div1.appendChild(closeButton);

        // Close popup and overlay on outside click
        overlay.addEventListener('click', () => {
            div1.remove(); // Remove popup
            overlay.remove(); // Remove overlay
        });
    });
});
// doctors for the Oncology Departments
const docs7 = document.querySelectorAll('.d7b'); // Select all "Book Appointment" buttons

docs7.forEach(doc7 => {
    doc7.addEventListener('click', (event) => {
        // Get the 'dn' attribute value from the parent div (doctor card)
        const doctorName = event.target.closest('.d7').getAttribute('dn6');

        // Create a new div element to display the doctor's name
        const div1 = document.createElement('div');
        div1.style.width = '400px';
        div1.style.height = '450px';
        div1.style.backgroundColor = '#0f346c';
        div1.style.color = 'black';
        div1.style.position = 'fixed';
        div1.style.top = '50%';
        div1.style.left = '50%';
        div1.style.transform = 'translate(-50%, -50%)';
        div1.style.borderRadius = '2rem';
        div1.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
        div1.style.border = '1px solid white';
        div1.style.padding = '20px';
        div1.style.zIndex = '1000'; // Ensures the popup is on top of everything
        div1.style.pointerEvents = 'auto';

        // Set the content of the div (doctor's name)
        div1.innerHTML = `
            <h1 style="font-size:1.5rem;color:white;font-weight:400;font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif">Book an Appointment with <strong style="color:orange"> ${doctorName} –  Oncology Specialist</strong>
            </h1>
            <br>
            <form action='text.text' method='post'>
            <label for='na' style="color:white;font-size:1.5rem;font-weight:200;font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"">Name:</label>
            <br>
            <input type='text' id='na' name='na' style='width:300px;height:30px;border-radius:2rem;border:1px solid black'>
            <br><br>
            <label for='ph' style="color:white;font-size:1.5rem;font-weight:200;font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"">Contact No:</label>
            <br>
            <input type='tel' id='ph' name='ph' style='width:300px;height:30px;border-radius:2rem;border:1px solid black'>
            <br><br>
            <label for='em' style="color:white;font-size:1.5rem;font-weight:200;font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"">Email-id:</label>
            <br>
            <input type='text' id='em' name='em' style='width:300px;height:30px;border-radius:2rem;border:1px solid black'>
            </form>
        `;

        // Append the div to the body
        document.body.appendChild(div1);

        // Add a semi-transparent overlay to disable background interaction
        const overlay = document.createElement('div');
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        overlay.style.zIndex = '999';
        document.body.appendChild(overlay);

        // Add a "Submit" button
        const closeButton = document.createElement('button');
        closeButton.innerHTML = 'Submit';
        closeButton.style.width = '120px';
        closeButton.style.height = '40px';
        closeButton.style.borderRadius = '2rem';
        closeButton.style.backgroundColor = 'white';
        closeButton.style.color = '#0f346c';
        closeButton.style.fontWeight = '200';
        closeButton.style.fontSize = '1rem';
        closeButton.style.border = '1px solid white';
        closeButton.style.position = 'absolute';
        closeButton.style.bottom = '10px';
        closeButton.style.right = '10px';
        closeButton.style.cursor = 'pointer';

        // Add event listener to the "Submit" button
        closeButton.addEventListener('click', () => {
            // Remove the popup and overlay
            div1.remove();
            overlay.remove();

            // Display "Thank You" message
            const thankYouDiv = document.createElement('div');
            thankYouDiv.style.width = '400px';
            thankYouDiv.style.height = '200px';
            thankYouDiv.style.backgroundColor = '#0f346c';
            thankYouDiv.style.color = 'white';
            thankYouDiv.style.position = 'fixed';
            thankYouDiv.style.top = '50%';
            thankYouDiv.style.left = '50%';
            thankYouDiv.style.transform = 'translate(-50%, -50%)';
            thankYouDiv.style.borderRadius = '2rem';
            thankYouDiv.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
            thankYouDiv.style.border = '1px solid black';
            thankYouDiv.style.padding = '20px';
            thankYouDiv.style.textAlign = 'center';
            thankYouDiv.style.zIndex = '1000';

            thankYouDiv.innerHTML = `
                <h1 style="font-size:1.5rem; font-family: system-ui;">Thank You!</h1>
                <p style="font-size:1.2rem; margin-top:10px;">Thank you for choosing <strong>Basavatarakam Hospitals</strong>.</p>
            `;

            document.body.appendChild(thankYouDiv);

            // Remove the "Thank You" message after 3 seconds
            setTimeout(() => {
                thankYouDiv.remove();
            }, 3000);
        });

        // Append the "Submit" button to the popup
        div1.appendChild(closeButton);

        // Close popup and overlay on outside click
        overlay.addEventListener('click', () => {
            div1.remove(); // Remove popup
            overlay.remove(); // Remove overlay
        });
    });
});
const wo = document.querySelector('#m-3-1');
const i = document.querySelector("#m-3-3"); 
const fe = document.querySelector("#m-3-2");
function child()
{
  window.location.href='child.html';
}
function women()
{
  window.location.href='gynic.html';
  
}
wo.addEventListener("click", () => {
    wo.style.backgroundColor='orange';
 

  i.innerHTML = `
    <div class="m-3-3" onclick="child()" style="margin-left:3.3rem;" ><img src='https://res.cloudinary.com/dnevq4wek/image/upload/v1742365030/wc-gynecology_nk0x0a.webp' height='40px' width="40px" style="margin-top: 1rem;margin-left:0.5rem;">
    <p style="color:#0F346C;display: inline-block;margin-top:1.5rem;margin-left: 2rem; font-size: large;padding-bottom:40px;">Gynecology</p></div>
    <div class="m-3-3" onclick="child()"><img src='https://res.cloudinary.com/dnevq4wek/image/upload/v1742365037/wc-obstetrics_qitki2.webp' height='40px' width="40px" style="margin-top: 1rem;margin-left:0.5rem;">
    <p style="color:#0F346C;display: inline-block;margin-top:1.5rem;margin-left: 2rem; font-size: large;padding-bottom:40px;">Obstetrics</p></div>
    <div class="m-3-3" onclick="child()" style="margin-left:3.3rem;"><img src='https://res.cloudinary.com/dnevq4wek/image/upload/v1742365044/wc-pregnancy-delivery_ugxfh2.webp' height='40px' width="40px" style="margin-top:0.75rem;margin-left:0.5rem;">
    <p style="color:#0F346C;display: inline-block;margin-top:1rem;margin-left: 2rem; font-size: large;padding-bottom:40px;">Pregnancy Delivery</p></div>
    <div class="m-3-3" onclick="child()"><img src='https://res.cloudinary.com/dnevq4wek/image/upload/v1742365008/wc-child-care_kmr9th.webp' height='40px' width="40px" style="margin-top: 1rem;margin-left:0.5rem;">
    <p style="color:#0F346C;display: inline-block;margin-top:1.5rem;margin-left: 2rem; font-size: large;padding-bottom:40px;">Childcare</p></div>
    <div class="m-3-3" onclick="child()" style="margin-left: 10rem;"><img src='https://res.cloudinary.com/dnevq4wek/image/upload/v1742365036/wc-nicu_v9ktse.webp' height='40px' width="40px" style="margin-top: 1rem;margin-left:0.5rem;">
    <p style="color:#0F346C;display: inline-block;margin-top:1.5rem;margin-left: 2rem; font-size: large;padding-bottom:40px;">NICU</p></div>`;
    wo.style.color = 'white';
    fe.style.backgroundColor='white';
    fe.style.color='#0F346C';
});

fe.addEventListener("click", () => {
  
  i.innerHTML = `
    <div class="m-3-3" onclick="women()" style="margin-left:3.3rem;"><img src='https://res.cloudinary.com/dnevq4wek/image/upload/v1742365024/wc-fertility-ovulation-induction_gzbzag.webp' height='40px' width="40px" style="margin-top: 1rem;margin-left:0.5rem;">
    <p style="color:#0F346C;display: inline-block;margin-top:1rem;margin-left: 2rem; font-size: large;padding-bottom:40px;">Ovulation Induction</p></div>
    <div class="m-3-3" onclick="women()"><img src='https://res.cloudinary.com/dnevq4wek/image/upload/v1742365013/wc-fertility-infertility_ppvjhg.webp' height='40px' width="40px" style="margin-top: 1rem;margin-left:0.5rem;">
    <p style="color:#0F346C;display: inline-block;margin-top:1.5rem;margin-left: 2rem; font-size: large;padding-bottom:40px;">Infertility</p></div>
    <div class="m-3-3" onclick="women()" style="margin-left:3.3rem;"><img src='https://res.cloudinary.com/dnevq4wek/image/upload/v1742364912/iui-treatment_btdzwh.webp' height='40px' width="40px" style="margin-top:0.75rem;margin-left:0.5rem;">
    <p style="color:#0F346C;display: inline-block;margin-top:1.5rem;margin-left: 2rem; font-size: large;padding-bottom:40px;">IUI Treatment</p></div>
    <div class="m-3-3" onclick="women()"><img src='https://res.cloudinary.com/dnevq4wek/image/upload/v1742365027/wc-fertility-ivf-treatment_k5irsz.webp' height='40px' width="40px" style="margin-top: 1rem;margin-left:0.5rem;">
    <p style="color:#0F346C;display: inline-block;margin-top:1.5rem;margin-left:0.5rem; font-size: large;padding-bottom:40px;">IVF Treatment</p></div>
    <div class="m-3-3" onclick="women()" style="margin-left: 10rem;"><img src='https://res.cloudinary.com/dnevq4wek/image/upload/v1742365027/wc-fertility-preservation_gickh6.webp' height='40px' width="40px" style="margin-top: 1rem;margin-left:0.5rem;">
    <p style="color:#0F346C;display: inline-block;margin-top:1rem;margin-left: 2rem; font-size: large;padding-bottom:40px;">Fertility Prevention</p></div>`;
    wo.style.backgroundColor = 'white';
    wo.style.color='#0F346C';
    fe.style.backgroundColor='orange';
    fe.style.color='white';
});
/* link to page of about*/
/* link to page of about*/
const abo = document.getElementById('abo');
abo.addEventListener("click",()=>
{
  window.location='about.html';
});
const ho = document.getElementById('ho');
{
  ho.addEventListener("click",()=>
  {
    window.location='index.html';
  })
};
const book = document.getElementById('pat');
{
  book.addEventListener("click",()=>
  {
    window.location='resource.html';
  })
};
const eme = document.getElementById('eme');
{
  eme.addEventListener("click",()=>
  {
    window.location='eme.html';
  })
};
const con = document.getElementById('con');
{
  con.addEventListener("click",()=>
  {
    window.location='contact.html';
  })
};
const hos = document.getElementById('hos');
{
  hos.addEventListener("click",()=>
  {
    window.location='hospital.html';
  })
};
const doc = document.getElementById('doc');
{
  doc.addEventListener("click",()=>
  {
    window.location='doctor.html';
  })
};
/*windows on load the poster */
var open = true;

/*document.addEventListener("DOMContentLoaded", function() {
  setTimeout(() => {
    const one = document.createElement("div");
    one.style.position = "fixed";
    one.style.width = "75%";
    one.style.height = "300px";
    one.style.borderRadius = "2rem";
    one.style.transform = "translate(-50%,-50%)";
    one.style.left = '50%';
    one.style.top = "50%";
    one.style.zIndex='10000'
    one.style.background = "white";
    one.innerHTML = `
      <button id="btn" style="position: absolute; right: 5px; top: 3rem;">X</button>
      <br><br>
      <center>
        <h1>THANK YOU FOR VISITING THE VIVIRA MALL</h1>
        <br>
        <h3>Please submit your valuable feedback</h3>
        <h3>Your feedback is very useful for us.</h3>
      </center>
    `;

    document.body.appendChild(one);

    const btn = document.getElementById("btn");
    btn.addEventListener("click", () => {
      document.body.removeChild(one);
      open = true;
    });
  }, 60);
});*/
//  NUMBER INCRESSING FUNCTION
document.addEventListener("DOMContentLoaded", function() {
  const ip = document.querySelector("#IP");
  let count = 0;

  function updateip() {
      if (count <= 100) {
          ip.innerHTML = count + '+';
          count++;
          setTimeout(updateip, 250); // Delay of 100 milliseconds
      }
  }

  const op = document.querySelector("#OP");
  let count1 = 0;

  function updateop() {
      if (count1 <= 100) {
          op.innerHTML = `${count1} +`;
          count1++;
          setTimeout(updateop, 250); // Delay of 100 milliseconds
      }
  }

  const cat = document.querySelector("#CAT");
  let count2 = 0;

  function updateacat() {
      if (count2 <= 25) {
          cat.innerHTML = `${count2} +`;
          count2++;
          setTimeout(updateacat, 780); // Delay of 700 milliseconds
      }
  }

  const cona = document.querySelector("#CON");
  let count3 = 0;

  function updateacon() {
      if (count3 <= 500) {
          cona.innerHTML = `${count3} +`;
          count3++;
          setTimeout(updateacon, 50); // Delay of 30 milliseconds
      }
  }
  const surgeries = document.querySelector('#SUG')
  let count4 = 0;

  function updateasug() {
      if (count4 <= 3000) {
          surgeries.innerHTML = `${count4} +`;
          count4++;
          setTimeout(updateasug, 8); // Delay of 30 milliseconds
      }
  }
  const hosbeds = document.querySelector('#HOB')
  let count5 = 0;

  function updatehob() {
      if (count5 <= 500) {
          hosbeds.innerHTML = `${count5} +`;
          count5++;
          setTimeout(updatehob, 50); // Delay of 30 milliseconds
      }
  }

  setTimeout(() => {
      updateip();
      updateop();
      updateacat();
      updateacon();
      updateasug();
      updatehob()
  }, 10000); // Initial delay of 10 seconds before starting updates
});
// this button is useed to reditect the page to the contact html by clicking the international patients.
const btn = document.querySelector("#cont");
btn.addEventListener("click",()=>
{
  window.location.href='contact.html';
})
// the below method is used for used to redirect the page to the doctors.html by clicking the any thing in the center of excelence divs.
const btndoc = document.querySelectorAll(".m-2-1");

btndoc.forEach(element => {
  element.addEventListener("click", () => {
    window.location.href = 'doctor.html';
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide_page8");
  const indicatorImages = document.querySelectorAll(".slider-indicator img");

  indicatorImages.forEach((indicator, index) => {
      indicator.addEventListener("click", () => {
          indicatorImages.forEach(ind => ind.classList.remove("active"));
          indicator.classList.add("active");

          slides.forEach(slide => slide.classList.remove("active"));
          slides[index].classList.add("active");
      });
  });
});
// alert(window.innerWidth);
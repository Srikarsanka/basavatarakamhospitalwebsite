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
/* to handle the form*/ 
document.querySelector('form').addEventListener('submit', function(event) {
  var name = document.getElementById('name').value;
  var telephone = document.getElementById('telephone').value;
  var email = document.getElementById('email').value;
  var message = document.querySelector('textarea').value;

  if (name === '' || telephone === '' || email === '' || message === '') {
      event.preventDefault();
      alert('All fields are required.');
  }
});
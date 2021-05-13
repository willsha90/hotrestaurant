
const waitBtn = document.getElementById('btn-primary');

waitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    let guestName = document.getElementById('name').value.trim();
  let guestPhone = document.getElementById('phone').value.trim();
  let guestEmail = document.getElementById('email').value.trim();
  let guestId = document.getElementById('id').value.trim();

let waitList = {
    name: guestName,
    phone: guestPhone,
    email: guestEmail,
    id: guestId,
  };

fetch('/api/waitlist', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(waitList),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('waitlist.html', data);
      alert(`In Line: ${data.name}`);

      
    })
    .catch((error) => {
      console.error('Error:', error);
    });

    fetch('/api/tables', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(tables),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('tables.html', data);
          alert(`In Line: ${data.name}`);
    
          
        })
        .catch((error) => {
          console.error('Error:', error);
        });

});
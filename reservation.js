const reservBtn = document.getElementById('reserv-btn');

// Question: What is "e" short for?
reservBtn.addEventListener('click', (e) => {
  e.preventDefault();
  
  // Question: What does this code do?
  let charName = document.getElementById('name').value.trim();
  let charPhone = document.getElementById('phone').value.trim();
  let charEmail = document.getElementById('email').value.trim();
  let charId = document.getElementById('id').value.trim();
  
  let newReservation = {
    name: charName,
    phone: charPhone,
    email: charEmail,
    id: charId,
  };

  // Question: What does this code do??
  fetch('/api/reservation', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newReservation),
  })
    .then((response) => response.json())
    .then((data) => {

      const tables = response.json("tables");
      const waitList = response.json("waitList");

      //check if tables are full
      if (tables.length>5) {
        waitList.push(data);
        alert("Sorry you are on the wait list");
      }
      else {
        tables.push(data);
        alert(`Reserved: ${data.name}`);
        console.log('reservation.html', data);
      }
      
      

      
    })
    .catch((error) => {
      console.error('Error:', error);
    });
});
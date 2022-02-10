const btnNew = document.getElementById("btnNew");
btnNew.addEventListener("click",fetchNewPlayers);

async function fetchNewPlayers() {
  const nameField = document.getElementById("txtName").value;
  const ageField = document.getElementById("txtAge").value;
  const surnameField = document.getElementById("txtSurname").value;
  const teamField = document.getElementById("txtTeam").value;

  
  const newPlayer = {name: nameField, age: ageField, surname: surnameField, team: teamField};

  const response = await fetch(
    "https://furboh.herokuapp.com/players",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPlayer)
    }
  )
    .then((res) => res.json())
    .then((data) => {
      const span = document.getElementById('playerSpan');
      let player = data;
      span.innerHTML = `${player._id} ${player.name} ${player.surname} ${player.age} ${player.team}`; 
        
    })
    .catch((error) => console.log(error));
}



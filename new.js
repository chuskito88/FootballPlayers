const btnNew = document.getElementById("btnNew");
btnNew.addEventListener("click",fetchCreateProduct);

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
      
    })
    .catch((error) => console.log(error));
}

var contents2;
var selectTeam= document.getElementById("txtTeam");

let teams = ["REAL MADRID", "FC BARCELONA", "BAYERN MUNICH", "BORUSSIA DORTMUND", "CHELSEA"];

for (let i = 0; i <= 5; i++) {
    contents2 += "<option>" + teams[i] + "</option>";
}
selectTeam.innerHTML = contents2;

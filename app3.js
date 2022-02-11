const btnEdit = document.getElementById("btnEdit");
btnEdit.addEventListener("click",fetchEditPlayer);

const btnDelete = document.getElementById("btnDelete");
btnDelete.addEventListener("click",fetchDeletePlayer);


consoleee();
async function fetchDeletePlayer() {
  const idField = document.getElementById("txtId").value;
	const nameField = document.getElementById("txtName").value;
	const ageField = document.getElementById("txtAge").value;
	const surnameField = document.getElementById("txtSurname").value;
  const teamField = document.getElementById("txtTeam").value;
	
  const newPlayer = {name: nameField, age: ageField, surname: surnameField, team: teamField};
	
    const response = await fetch(
      "https://furboh.herokuapp.com/players/" + idField + "?_method=DELETE",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
		body: JSON.stringify(newPlayer),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        alert("Player Edited");
        window.location.href = "index.html";
      })
      .catch((error) => console.log(error));
  }


async function fetchEditPlayer() {
  const idField = document.getElementById("txtId").value;
	const nameField = document.getElementById("txtName").value;
	const ageField = document.getElementById("txtAge").value;
	const surnameField = document.getElementById("txtSurname").value;
  const teamField = document.getElementById("txtTeam").value;
	
  const newPlayer = {name: nameField, age: ageField, surname: surnameField, team: teamField};
	
    const response = await fetch(
      "https://furboh.herokuapp.com/players/" + idField + "?_method=PUT/edit",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
		body: JSON.stringify(newPlayer),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        alert("Player Edited");
        window.location.href = "index.html";
      })
      .catch((error) => console.log(error));
  }


async function fetchPlayers(id) {
  const response = await fetch(
    "https://furboh.herokuapp.com/players/"+id,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
    }
  )
    .then((res) => res.json())
    .then((data) => {
      //console.log(data);
      let player = data;
      console.log(player);
      
      
    try{
      if (player != null){
        document.getElementById("txtName").value = player.name;
        document.getElementById("txtSurname").value = player.surname;
        document.getElementById("txtAge").value = player.age;
        document.getElementById("txtTeam").value = player.team;
      }
    } catch(e){
      console.log(e);
    } 
      
    })
    .catch((error) => console.log(error));
}



function getParameterByName(name, url = window.location.href) {
  console.log(url);
  
    name = name.replace(/[\[\]]/g, '\\$&');
  
  console.log(name);
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

console.log(getParameterByName('id'));
fetchPlayers(getParameterByName('id'));


var contents2;
var selectTeam= document.getElementById("txtTeam");

let teams = ["REAL MADRID", "FC BARCELONA", "BAYERN MUNICH", "BORUSSIA DORTMUND", "CHELSEA"];

for (let i = 0; i <= 5; i++) {
    contents2 += "<option>" + teams[i] + "</option>";
}
selectTeam.innerHTML = contents2;


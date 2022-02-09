async function fetchEditProduct() {
	const nameField = document.getElementById("txtName").value;
	const ageField = document.getElementById("txtAge").value;
	const surnameField = document.getElementById("txtSurname").value;
  const teamField = document.getElementById("txtTeam").value;
	
  const newPlayer = {name: nameField, age: ageField, surname: surnameField, team: teamField};
	
    const response = await fetch(
      "https://furboh.herokuapp.com/players/" + id + "?_method=PUT",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
		body: JSON.stringify(newProduct)
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("Product Edited");
        
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
      let players = data;
      
      
    try{
      if (product != null){
        document.getElementById("txtName").value = players.name;
        document.getElementById("txtSurname").value = players.surname;
        document.getElementById("txtAge").value = players.age;
        document.getElementById("txtTeam").value = players.team;
      }
    } catch(e){
      console.log(e);
    } 
      
    })
    .catch((error) => console.log(error));
}

fetchPlayers();


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
fetchProduct(getParameterByName('id'));


var contents2;
var selectTeam= document.getElementById("txtTeam");

let teams = ["REAL MADRID", "FC BARCELONA", "BAYERN MUNICH", "BORUSSIA DORTMUND", "CHELSEA"];

for (let i = 0; i <= 5; i++) {
    contents2 += "<option>" + teams[i] + "</option>";
}
selectTeam.innerHTML = contents2;


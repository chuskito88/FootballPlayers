function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

async function fetchPlayers() {
    const response = await fetch(
      "https://pacific-beach-50239.herokuapp.com/players_all",
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
        const ul = document.getElementById('players');
        let players = data;
        //console.log(products);
        
        for(let player of players){
            let li = createNode('li');
            let span = createNode('span');           
            span.innerHTML = `${player.name} ${player.surname} ${player.age} ${player.team}`;            
            append(li, span);
            append(ul, li);
        }
        
      })
      .catch((error) => console.log(error));
  }

  fetchPlayers();
function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

async function fetchPlayers() {
  const response = await fetch(
    "https://furboh.herokuapp.com/players",
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
      
      for(let player of players){
          let li = createNode('li');
          let span = createNode('span'); 
          let a = createNode('a');    
          let button = createNode('button');  
          a.setAttribute('href', "show.html?id=" + player._id);
          a.innerText = player._id;	               
          span.innerHTML = `${player.name} ${player.surname} ${player.age} ${player.team}`;            
          append(li, span, button);
          append(li, a);
          append(ul, li);
      }
      
    })
    .catch((error) => console.log(error));
}

fetchPlayers();


const pokeContainer = document.getElementById("poke-container");
const pokemonCount = 1025;

const colors = {
  fire: "#FDDFDF",
  grass: "#DEFDE0",
  electric: "#FCF7DE",
  water: "#DEF3FD",
  ground: "#f4e7da",
  rock: "#d5d5d4",
  fairy: "#fceaff",
  poison: "#98d7a5",
  bug: "#f8d5a3",
  dragon: "#97b3e6",
  psychic: "#eaeda1",
  flying: "#F5F5F5",
  fighting: "#E6E0D4",
  normal: "#F5F5F5",
};

const main_types = Object.keys(colors);
console.log(main_types);

//arrow syntax
const fetchPokemons = async () => {
  for (let id = 1; id <= pokemonCount; id++) {
    await getPokemon(id);
  }
};

const getPokemon = async (id) => {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const response = await fetch(url);
    const pokemon = await response.json();
    console.log(pokemon);
    createPokenonCard(pokemon);
  } catch (error) {
    console.log(error);
  }
};

const createPokenonCard = (pokemon) => {
  const pokemonEl = document.createElement("div");
  pokemonEl.classList.add("pokemon");

  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);

  const poke_types = pokemon.types.map((type) => type.type.name);
  const type = main_types.find((type) => poke_types.indexOf(type) > -1);
  const color = colors[type];
  console.log(color);

  pokemonEl.style.backgroundColor = color;

  const pokemonInnerHTML = `
  <div class="img-container">
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png"
        alt=""
      />
    </div>
      <div class="info">
        <span class="number">${pokemon.id}</span>
        <h3 class="name">${name}</h3>
        <small class="type"> Type <span>${type}</span></small>
      </div>
    </div>
  `;

  //   const pokemonInnerHTML = `
  //     <div class="img-container">
  //         <img
  //           src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png"
  //           alt=""
  //         />
  //       </div>
  //         <div class="info">
  //           <span class="number">${pokemon.id}</span>
  //           <h3 class="name">${pokemon.name}</h3>
  //           <small class="type"> Type <span>${pokemon.types[0].type.name}</span></small>
  //         </div>
  //       </div>
  //     `;
  pokemonEl.innerHTML = pokemonInnerHTML;
  pokeContainer.appendChild(pokemonEl);
};

fetchPokemons();

// //regular async function
// async function fetchPokemons() {}

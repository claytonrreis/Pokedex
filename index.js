const pokeContainer = document.getElementById("poke-container");
const pokemonCount = 150;

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

  const pokemonInnerHTML = `
    <div class="img-container">
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png"
          alt=""
        />
      </div>
        <div class="info">
          <span class="number">${pokemon.id}</span>
          <h3 class="name">${pokemon.name}</h3>
          <small class="type"> Type <span>${pokemon.types[0].type.name}</span></small>
        </div>
      </div>
    `;
  pokemonEl.innerHTML = pokemonInnerHTML;
  pokeContainer.appendChild(pokemonEl);
};

fetchPokemons();

// //regular async function
// async function fetchPokemons() {}

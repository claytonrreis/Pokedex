**Pokedex**

Description:

This JavaScript code fetches data for the first 1025 Pokémon from the PokéAPI and dynamically creates a card for each Pokémon on an HTML page. Each card displays the Pokémon's image, ID, name, and primary type. The card's background color is set based on the Pokémon's primary type using a predefined color scheme.

Installation:

Create an HTML file with a container element (<div id="poke-container"></div>) where the Pokémon cards will be displayed.
Link this JavaScript code to your HTML file using a <script> tag.
Functionality:

Data Fetching:

The code utilizes async/await syntax for asynchronous data fetching.
It iterates through a loop, fetching data for each Pokémon from ID 1 to 1025 using the PokéAPI endpoint: https://pokeapi.co/api/v2/pokemon/${id}.
Error handling is implemented using a try...catch block to catch potential network errors during the fetch process.
Pokémon Card Creation:

For each fetched Pokémon, the createPokemonCard function constructs the HTML structure of a Pokémon card.
The card's content includes:
An image of the Pokémon (fetched from the PokéAPI's sprite endpoint)
Pokémon ID
Pokémon name (capitalizing the first letter)
Pokémon primary type (using the predefined color scheme for background styling)
Additional Notes:

The code includes commented-out logic that could potentially use the first type listed in the types array instead of finding the primary type. You can uncomment this section if desired.
Consider including a loading indicator while fetching data, especially for a large number of Pokémon like 1025.

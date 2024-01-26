async function fetchData() {
  try {
    const pokeName = document.getElementById('pokemonInput').value.toLowerCase();
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);

    if (!response.ok) {
      throw new Error('Could not fetch');
    } else {
      const data = await response.json();
      const myImg = data.sprites.front_default;
      const imgElement = document.getElementById('pokemonSprite');
      imgElement.src = myImg;
      imgElement.style.display = "block";
    }
  } catch (error) {
    console.log(error);
  }
}

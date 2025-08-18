// remember to give the component the parameters, props
export default function PokemonCard() {
  return (
    <div className="pokemon-card-container">
      <div className="left-section">
        {/* image of pokemon goes here - use className="pokemon-image" for the styling to work */}
      </div>

      <div className="right-section">
        {/* Place pokemon details here- use one h1 for the name, and the rest as h3s */}
      </div>
    </div>
  );
}

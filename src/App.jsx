import "./App.css";

// image imports
import PokemonLogo from "./assets/PokemonLogo.png";

export default function App() {
  return (
    <>
      <div className="App">
        <header className="header">
          <img src={PokemonLogo} alt="logo" />
        </header>
        {/* pokemon page component here*/}
      </div>
    </>
  );
}

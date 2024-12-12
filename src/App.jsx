//importiamo i componenti
import CardComponent from "./components/CardComponent.jsx";

//funzione
function App() {
  //parte logica

  //parte html
  return (
    <>
      <header><h1 className="text-center">il mio blog</h1></header>
      <main>< CardComponent /></main>
      <footer className=" p-3 text-center custom-footer">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt iure aut dicta dolores exercitationem mollitia corporis odio nemo itaque sequi numquam, consectetur, aliquid natus eum commodi magnam quasi necessitatibus officia.</p>
      </footer >
    </>
  )



}

export default App;
import "./App.css";
import logoNetflix from "./images/logo.696c2101.png";
import Section from "./components/Section";
import data from "./data.json";
function App() {
  return (
    <>
      <header>
        <img src={logoNetflix} alt="" />
      </header>
      <main className="body-container">
        {data.map((elem, index) => {
          return (
            <Section
              category={elem.category}
              images={elem.images}
              key={index}
            />
          );
        })}
      </main>
    </>
  );
}

export default App;

import "../../grid.css";
import { Header } from "./components/Header";
import { useLayoutView } from "./hooks/useLayoutMode";

function App() {
  const { layoutView, onLayoutToggle } = useLayoutView();

  const layoutClassName = `grid ${layoutView}`;

  return (
    <main>
      <Header />

      <section>
        <button className="toggle-layout" onClick={onLayoutToggle}>
          Toggle layout
        </button>

        <ul className={layoutClassName}>
          {Array.from({ length: 8 }).map((_, index) => (
            <li key={index} className={`box box--${index + 1}`}>
              <p>Box {index + 1}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default App;

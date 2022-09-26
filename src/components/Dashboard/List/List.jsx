import "./List.css";

function List() {
  return (
    <div className="container navList flex f-column gap-2">
      <p>Resumo financeiro</p>
      <nav className="flex f-justify-center gap-2">
        <button className="btn btn__main" type="button">Todos</button>
        <button className="btn btn__df" type="button">Entradas</button>
        <button className="btn btn__df" type="button">Despesas</button>
      </nav>
    </div>
  );
}

export default List;

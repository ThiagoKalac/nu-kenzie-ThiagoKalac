import "./Card.css";
import { FaTrash } from "react-icons/fa";

function Card({ listTransictions, setListTransictions}) {
  return (
    <>
      {listTransictions.map((elt, i) => {
        const { description, value, type } = elt;
        const treatedNumber = (+value).toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        });

        if (type == "Entrada") {
          return (
            <li
              key={i}
              className="card card--deposit f-justify-center f-column gap-2"
            >
              <div className="flex f-justify-between">
                <p className="text__cardDescription">{description}</p>
                <p className="text__card flex">
                  {treatedNumber}
                        <button onClick={() => {
                          setListTransictions(listTransictions.filter(elt => elt.description !== description))         
                        }}>
                    <FaTrash />
                  </button>
                </p>
              </div>
              <p className="text_card">{type}</p>
            </li>
          );
        }
        if (type == "Saída") {
          return (
            <li
              key={i}
              className="card card--moneyOut f-justify-center f-column gap-2"
            >
              <div className="flex f-justify-between">
                <p className="text__cardDescription">{description}</p>
                <p className="text__card flex">
                  {treatedNumber}
                        <button onClick={() => {
                          setListTransictions(listTransictions.filter(elt => elt.description !== description))         
                        }}>
                    <FaTrash />
                  </button>
                </p>
              </div>
              <p className="text_card">{type}</p>
            </li>
          );
        }
      })}
    </>
  );
}

export default Card;

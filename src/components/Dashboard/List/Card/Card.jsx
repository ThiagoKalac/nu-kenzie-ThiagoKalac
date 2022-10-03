import { FaAcquisitionsIncorporated, FaKickstarterK, FaMandalorian, FaTrash } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import "./Card.css";
import 'react-toastify/dist/ReactToastify.css';

function Card({ listTransictions, setListTransictions,newList}) {
  return (
    <>
      {newList.map((elt, i) => {
        const { description, value, type } = elt;
        const treatedNumber = (+value).toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        });

        if (type === "Entrada") {
          return (
            <li
              key={i}
              className="card card--deposit f-justify-center f-column gap-2"
            >
              <div className="flex f-justify-between">
                <p className="text__cardDescription">{description}</p>
                <p className="text__card flex f-align-center">
                  {treatedNumber}
                        <button onClick={() => {
                    setListTransictions(listTransictions.filter((eltDelete, eltI) => eltDelete.id !== elt.id))  

                        toast.success('Transação deletada com sucesso', {
                            position: "top-center",
                            autoClose: 1000,
                            hideProgressBar: true,
                            closeOnClick: true,
                            pauseOnHover: false,
                            draggable: true,
                            progress: 0,
                            theme: "colored"
                          })
                        }}>
                    <FaTrash />

                  </button>
                </p>
              </div>
              <p className="text_card">{type}</p>
            </li>
          );
        }
        if (type === "Saída") {
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
                    setListTransictions(listTransictions.filter((eltDelete, eltI) => eltDelete.id !== elt.id))   
                    toast.success('Transação deletada com sucesso', {
                      position: "top-center",
                      autoClose: 1000,
                      hideProgressBar: true,
                      closeOnClick: true,
                      pauseOnHover: false,
                      draggable: true,
                      progress: 0,
                      theme: "colored"
                    })
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
      <ToastContainer/> 
    </>
  );
}

export default Card;

import React, { useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

const FullPizza: React.FC = () => {
  const goBack = useNavigate();
  const { id } = useParams();
  const [pizza, setPizza] = React.useState<{
    imageUrl: string;
    title: string;
    price: number;
  }>();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          `https://63237c08bb2321cba91abd69.mockapi.io/items/${id}`
        );
        setPizza(data);
      } catch (e) {
        console.error(e.message);
        navigate("/");
      }
    }
    fetchPizza();
  }, []);

  if (!pizza) {
    return <h2>Загрузка ...</h2>;
  }

  return (
    <>
      <div className="container">
        <img src={pizza.imageUrl} alt="" />
        <h2>{pizza.title}</h2>
        <h2>{pizza.price} руб.</h2>
      </div>
      <Link to="#" onClick={() => goBack(-1)}>
        <button className="button button--outline">Назад</button>
      </Link>
    </>
  );
};

export default FullPizza;

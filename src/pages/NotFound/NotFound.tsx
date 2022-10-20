import React from "react";
import { Link } from "react-router-dom";
import { NotFoundBlock } from "../../components/NotFoundBlock";

const NotFound: React.FC = () => {
  return (
    <>
      <NotFoundBlock />
      <Link to="/pizzas">
        <button className="button">На главную</button>
      </Link>
    </>
  );
};

export default NotFound;

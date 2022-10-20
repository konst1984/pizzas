import React from "react";
import { Categories } from "../../components/Categories";
import { Sort } from "../../components/Sort";
import { Pagination } from "../../components/Pagination";
import { HomeBody } from "../../components/HomeBody";

const Home: React.FC = () => {
  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <HomeBody />
      <Pagination />
    </>
  );
};

export default Home;

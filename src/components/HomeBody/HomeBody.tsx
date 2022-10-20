import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/store";
import { useSelector } from "react-redux";
import { fetchPizzas } from "../../redux/pizza/slice";
import Skeleton from "../PizzaBlock/Skeleton";
import qs from "qs";
import { PizzaBlock } from "../PizzaBlock";
import { selectFilter } from "../../redux/filter/selectors";
import { FilterSliceState } from "../../redux/filter/types";
import { setFilters } from "../../redux/filter/slice";
import { selectorPizza } from "../../redux/pizza/selectors";

const HomeBody: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const isSearch = useRef(false);
  const { categoryId, sort, currentPage, searchValue } =
    useSelector(selectFilter);

  const { items, status } = useSelector(selectorPizza);

  const isMounted = useRef(false);

  const pizzas = items.map((item) => <PizzaBlock key={item.id} {...item} />);

  const skeletons = [...new Array(6)].map((_, index) => (
    <Skeleton key={index} />
  ));

  const getPizzas = async () => {
    const sortCategory = categoryId > 0 ? `&category=${categoryId}` : "";
    const sortOrder = sort.includes("-") ? "desc" : "asc";
    const search = searchValue ? `&search=${searchValue}` : "";
    const sortBy = `&sortBy=${sort.replace("-", "")}&order=${sortOrder}`;

    dispatch(
      fetchPizzas({
        sortCategory,
        sortOrder,
        search,
        sortBy,
        currentPage,
      })
    );
  };
  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortCategory: sort,
        categoryId,
        currentPage,
      });
      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [categoryId, sort, currentPage, navigate]);

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(
        window.location.search.substring(1)
      ) as unknown as FilterSliceState;
      dispatch(setFilters({ ...params }));
      isSearch.current = true;
    }
  }, []);

  useEffect(() => {
    getPizzas();
  }, [categoryId, sort, currentPage, searchValue]);
  return (
    <>
      {status === "error" ? (
        <div className={"content__error-info"}>
          <h2>Произошла ошибка</h2>
          <p>Не удалось получить данные.Повторите попытку позже</p>
        </div>
      ) : (
        <div className="content__items">
          {status === "loading" ? skeletons : pizzas}
        </div>
      )}
    </>
  );
};

export default HomeBody;

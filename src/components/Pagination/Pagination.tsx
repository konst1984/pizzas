import React from "react";
import ReactPaginate from "react-paginate";

import styles from "./Pagination.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { selectPage } from "../../redux/filter/selectors";
import { setCurrentPage } from "../../redux/filter/slice";

const Pagination: React.FC = () => {
  const currentPage = useSelector(selectPage);
  const dispatch = useDispatch();
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      onPageChange={(event) => {
        dispatch(setCurrentPage(event.selected + 1));
      }}
      pageRangeDisplayed={4}
      pageCount={3}
      forcePage={currentPage - 1}
    />
  );
};

export default Pagination;

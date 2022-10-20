import React from "react";
import styles from "./NotFoundBlock.module.scss";
import notfound from "../../assets/img/404.gif";

const NotFoundBlock: React.FC = () => {
  return (
    <div className={styles.root}>
      <h1>К&nbsp;сожалению, страница не найдена.</h1>
      <p className={styles.description}>
        <img src={notfound} alt="Страница не найдена" />
      </p>
    </div>
  );
};

export default NotFoundBlock;

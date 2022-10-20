import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton: React.FC = () => (
  <ContentLoader
    className="pizza-block"
    speed={0}
    width={280}
    height={480}
    viewBox="0 0 280 480"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="316" rx="10" ry="10" width="280" height="80" />
    <rect x="125" y="413" rx="30" ry="30" width="152" height="45" />
    <rect x="0" y="278" rx="10" ry="10" width="280" height="25" />
    <rect x="0" y="423" rx="10" ry="10" width="95" height="30" />
    <circle cx="137" cy="143" r="125" />
  </ContentLoader>
);

export default Skeleton;

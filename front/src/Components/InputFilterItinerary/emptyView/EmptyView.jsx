import React from "react";

import gif from "../../../assets/images/empty.gif";
import "./emptyView.scss";


const EmptyView = () => (
  <div className="emptyView-wrap">
    <img src={gif} alt="" />
  </div>
);

export default EmptyView;

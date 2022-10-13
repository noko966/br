import React from "react";

const ConditionItem = ({ condition, name, suffix }) => {
  // console.log(condition, 'condition');
  return (
    <div className="dg_br_information_item">
      <div className="dg_br_information_item_start">
        <span className="dg_br_information_txt_2">{name}</span>
      </div>
      <div className="dg_br_information_item_end">
        <span className="dg_br_information_txt">{condition}</span>
        {suffix && <span className="dg_br_information_txt_2">{suffix}</span>}
      </div>
    </div>
  );
};

export default ConditionItem;

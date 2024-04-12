import React, { useState } from "react";
import css from "./Filter.module.css";

const Filter = ({ filter, setFilter }) => {
    const handleFilterChange = (evt) => {
        setFilter(evt.target.value);
    };
   
    return (
        <div className={css.primary}>
        <div className={css.container}>
             <label className={css.label}>Find contacts by Name</label>
             <div>
                      <input
                      className={css.input}
        type="text"
        value={filter}
        onChange={handleFilterChange}
      /> 
        </div>
        </div>
</div>
    );
};
export default Filter;
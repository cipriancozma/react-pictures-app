import React, { useState } from "react";

const SearchBar = ({ onSubmit }) => {

    const [term, setTerm] = useState("");

    const handleChangeInput = (event) => {
        setTerm(event.target.value);
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(term);
    }

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={onFormSubmit}>
        <div className="field">
          <label>Search</label>
          <input type="text" onChange={handleChangeInput} value={term} />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;

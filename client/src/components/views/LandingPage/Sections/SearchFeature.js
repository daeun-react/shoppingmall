import Search from "antd/lib/input/Search";
import React, { useState } from "react";

function SearchFeature(props) {
  const [SearchTerms, setSearchTerms] = useState("");

  const onChangeSearch = (e) => {
    setSearchTerms(e.target.value);
    props.refreshFunction(e.target.value);
  };

  return (
    <div>
      <Search
        value={SearchTerms}
        onChange={onChangeSearch}
        placeholder="Seach By Typing..."
      />
    </div>
  );
}

export default SearchFeature;

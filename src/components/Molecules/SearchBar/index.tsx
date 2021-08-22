import React, { useState } from "react";
import { Input } from "./styles";

const SearchBar: React.FC<SearchBarProps> = (props) => {
  return (
    <Input
      value={props.search}
      onChange={(e) => props.onChange(e.target.value || "")}
    />
  );
};

export default SearchBar;

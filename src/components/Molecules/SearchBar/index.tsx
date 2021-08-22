import React, { useState } from "react";
import { Container, Input, Button } from "./styles";

const SearchBar: React.FC<SearchBarProps> = (props) => {
  return (
    <Container>
      <Input
        value={props.search}
        onChange={(e) => props.onChange(e.target.value || "")}
        placeholder={props.placeholder || "Search"}
        onKeyUp={(e) =>
          e.key === "Enter" && props.doSearch && props.doSearch(props.search)
        }
      />
      <Button
        title="Search"
        onClick={() => props.doSearch && props.doSearch(props.search)}
      >
        Search
      </Button>
    </Container>
  );
};

export default SearchBar;

import React, { useState, useEffect } from "react";
import { useNavigate, createSearchParams } from "react-router-dom";
import instance, { callAPI } from "./utils/axios";
import "./styles/Search.css";
import SearchIcon from '@mui/icons-material/Search';


const Search = () => {
  const [suggestions, setSuggestions] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const navigate = useNavigate();

  const onHandleSubmit = (e) => {
    e.preventDefault();
    navigate({
      pathname: "search",
      search: `${createSearchParams({
        category: `${category}`,
        searchTerm: `${searchTerm}`,
      })}`,
    });
    setSearchTerm("");
    setCategory("All");
  };

  const getSuggestions = () => {
    callAPI(`data/suggestions.json`).then((suggestionResults) => {
      setSuggestions(suggestionResults);
    });
  };

  useEffect(() => {
    getSuggestions();
  }, []);

  return React.createElement(
    "div",
    { className: "search-container" },
    React.createElement(
      "div",
      { className: "search-bar" },
      React.createElement(
        "select",
        {
          onChange: (e) => setCategory(e.target.value),
          className: "search-category",
        },
        ["All", "Deals", "Amazon", "Fashion", "Computers", "Home", "Mobiles"].map(
          (option) =>
            React.createElement("option", { key: option, value: option }, option)
        )
      ),
      React.createElement("input", {
        type: "text",
        value: searchTerm,
        onChange: (e) => setSearchTerm(e.target.value),
        className: "search-input",
      }),
      React.createElement(
        "button",
        { onClick: onHandleSubmit, className: "search-button" },
        React.createElement(SearchIcon, { className: "search-icon" }) // Using the MUI SearchIcon here
      )
      
    ),
    suggestions &&
      React.createElement(
        "div",
        { className: "suggestions-list" },
        suggestions
          .filter((suggestion) => {
            const currentSearchTerm = searchTerm.toLowerCase();
            const title = suggestion.title.toLowerCase();
            return (
              currentSearchTerm &&
              title.startsWith(currentSearchTerm) &&
              title !== currentSearchTerm
            );
          })
          .slice(0, 10)
          .map((suggestion) =>
            React.createElement(
              "div",
              {
                key: suggestion.id,
                onClick: () => setSearchTerm(suggestion.title),
                className: "suggestion-item",
              },
              suggestion.title
            )
          )
      )
  );
};

export default Search;

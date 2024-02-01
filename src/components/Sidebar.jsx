import React from "react";
import { Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import { categories } from "../utils/constants";

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  const { isMenuPressed } = useSelector((state) => state.menu);
  
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%"  },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((category) => (
        <button
          className="category-btn"
          onClick={() => setSelectedCategory(category.name)}
          style={{
            background: category.name === selectedCategory && "#333333",
            color: "white",
            fontSize: '12px',
          }}
          key={category.name}
        >
          <span style={{ color: "white" }}>
            {category.icon}
          </span>
          { isMenuPressed && <span style={{ color: "white", marginLeft: "10px" }}>
            {category.name}
          </span>}
        </button>
      ))}
    </Stack>
  );
};

export default Sidebar;

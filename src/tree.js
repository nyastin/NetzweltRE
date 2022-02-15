import React, { useState } from "react";

function Menu({ items }) {
  const [arrangeNode, setNode] = useState({});

  return (
    <ul>
      {items.map((item) => {
        return (
          <li key={item.name}>
            {item.name}{" "}
            {item.children &&
              (item.children.length === 0 ? null : (
                <button
                  onClick={() => {
                    setNode({
                      ...arrangeNode,
                      [item.name]: !arrangeNode[item.name],
                    });
                  }}
                >
                  {arrangeNode[item.name] ? "🡢" : "🡣"}
                </button>
              ))}
            {arrangeNode[item.name] && item.children && (
              <Menu items={item.children} />
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default Menu;

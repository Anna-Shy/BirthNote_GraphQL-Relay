import React from "react";

import "./Pagination.css";

export const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination__center">
      <div className="pagination">
        {pageNumbers.map((number, id) => (
          <a key={id} onClick={() => paginate(number)} href="!#">
            {number}
          </a>
        ))}
      </div>
    </div>
  );
};

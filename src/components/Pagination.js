import React, { Component } from 'react'

export default class Pagination extends Component {
    render() {
        let { pages, selected, changePage } = this.props;
        return (
          <ul className="pagination">
            <li className="page-item">
              <span
                className="page-link pointer"
                onClick={() => changePage(0)}
                aria-label="Previous"
              >
                <span aria-hidden="true">&laquo;</span>
                <span className="sr-only">Previous</span>
              </span>
            </li>
            {pages.map((page, index) => {
              return (
                index >= selected - 2 &&
                index <= selected + 2 && (
                  <li
                    className={`page-item ${
                      index === selected ? "active" : ""
                    }`}
                    key={index}
                    onClick={() => changePage(index)}
                  >
                    <span className="page-link pointer">{page}</span>
                  </li>
                )
              );
            })}

            <li className="page-item">
              <span
                className="page-link pointer"
                onClick={() => changePage(pages.length-1)}
                aria-label="Next"
              >
                <span aria-hidden="true">&raquo;</span>
                <span className="sr-only">Next</span>
              </span>
            </li>
          </ul>
        );
    }
}

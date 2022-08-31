import React, { useEffect } from "react";
import { getBooks } from "../Redux/action";
import { useDispatch, useSelector } from "react-redux/es/exports";
import BookLists from "../Components/BookLists";
import FilterSort from "../Components/FilterSort";
import styled from "styled-components";

const Books = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  useEffect(() => {
    if (books.length === 0) {
      dispatch(getBooks());
    }
  }, []);
  console.log(books);
  return (
    <div>
      <h2>Books</h2>
      <BookPageWrap>
        <FilterSortWrap>
          <FilterSort />
        </FilterSortWrap>
        <BookListWrap>
          <BookLists books={books} />
        </BookListWrap>
      </BookPageWrap>
    </div>
  );
};

export default Books;

const BookPageWrap = styled.div`
  display: flex;
`;

const FilterSortWrap = styled.div`
    width: 300px;
    border: 1px solid black;
`;

const BookListWrap = styled.div`
    width: 100%;
    border: 1px solid black;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(310px, max-content));
    grid-gap: 16px;
    justify-content: center;
    padding: initial;
`;
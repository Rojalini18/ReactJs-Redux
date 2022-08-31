import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import GithubPage from "./GithubPage";
import styles from "./Github.module.css";

const githubUser = (value = "react") => {
  return axios(
    `https://api.github.com/search/repositories?q=${value}&per_page=200`,
    {
      methode: "GET",
      params: {
        value,
      },
    }
  );
};

const Github = () => {
  const [data, setData] = useState([]);
  const [adata, setAData] = useState("react");
  const [text, setText] = useState("react");

  useEffect(() => {
    githubUser(adata)
      .then((res) => {
        setData(res.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [adata]);
  console.log(data);

  const handleClick = (adata) => {
    setAData(adata);
  };

  const [pageNo, setPageNo] = useState(0);
  const UserPerPage = 5;
  const pageVisited = UserPerPage * pageNo;
  const displayUsers = data
    .slice(pageVisited, pageVisited + UserPerPage)
    .map((item) => {
      return <GithubPage key={item.id} {...item} />;
    });

  const pageCount = Math.ceil(data.length / UserPerPage);
  const ChangePage = ({ selected }) => {
    setPageNo(selected);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={text}
          id="search"
          placeholder="Search githubUsers"
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={() => handleClick(text)}>Search</button>
      </div>
      {displayUsers}

      <div>
        <ReactPaginate
          previousLabel={"previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={ChangePage}
          containerClassName={styles.paginationBtns}
          previousLinkClassName={styles.prevBtn}
        />
      </div>
    </div>
  );
};

export default Github;

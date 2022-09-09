import React, { useEffect, useReducer } from "react";
import axios from "axios";
import { GithubCard } from "./GithubCard";

const initialState = {
  load: true,
  err: false,
  data: null,
};
const gitActions = {
  fetch: "fetch",
  success: "success",
  failure: "failure",
};
const gitReducer = (state, action) => {
  switch (action.type) {
    case gitActions.fetch: {
      return {
        ...state,
        load: true,
        err: false,
        data: null,
      };
    }

    case gitActions.success: {
      return {
        ...state,
        load: false,
        err: false,
        data: action.payload,
      };
    }
    case gitActions.failure: {
      return {
        ...state,
        load: false,
        err: true,
      };
    }

    default:
      return state;
  }
};
export const GithubUser = () => {
  const [{ load, err, data }, dispatch] = useReducer(gitReducer, initialState);
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    dispatch({
      type: gitActions.fetch,
    });
    axios({
      url: "https://api.github.com/search/users",
      method: "GET",
      params: {
        q: "rojalini",
      },
    })
      .then((res) => {
        dispatch({
          type: gitActions.success,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: gitActions.failure,
        });
      });
  };
  console.log(data);
  return (
    <div>
      {load && <div>loading...</div>}

      {err && <div>error</div>}

      {data?.items.map((item) => {
        return <GithubCard key={item.id} {...item} />;
      })}
    </div>
  );
};

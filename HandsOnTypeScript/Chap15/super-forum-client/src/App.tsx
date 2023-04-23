import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./App.css";
import Home from "./components/routes/Home";
import Thread from "./components/routes/thread/Thread";
import UserProfile from "./components/routes/userProfile/UserProfile";
import { gql, useQuery } from "@apollo/client";
import { ThreadCategoriesType } from "./store/categories/Reducer";
import useRefreshReduxMe from "./hooks/useRefreshReduxMe";

const GetAllCategories = gql`
  query getAllCategories {
    getAllCategories {
      id
      name
    }
  }
`;

function App() {
  const { data: categoriesData } = useQuery(GetAllCategories);
  const { execMe, updateMe } = useRefreshReduxMe();
  const dispatch = useDispatch();

  useEffect(() => {
    execMe();
  }, [execMe]);

  useEffect(() => {
    updateMe();
  }, [updateMe]);

  useEffect(() => {
    if (categoriesData && categoriesData.getAllCategories) {
      dispatch({
        type: ThreadCategoriesType,
        payload: categoriesData.getAllcategories,
      });
    }
  }, [dispatch, categoriesData]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categorythreads/:categoryId" element={<Home />} />
      <Route path="/thread/:id?" element={<Thread />} />
      <Route path="/userprofile/:id" element={<UserProfile />} />
    </Routes>
  );
}

export default App;

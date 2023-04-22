import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import "./App.css";

import Home from "./components/routes/Home";
import Thread from "./components/routes/thread/Thread";
import UserProfile from "./components/routes/userProfile/UserProfile";
import { UserProfileSetType } from "./store/user/Reducer";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: UserProfileSetType,
      payload: {
        id: 1,
        userName: "testUser",
      },
    });
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categorythreads/:categoryId" element={<Home />} />
      <Route path="/thread/:id" element={<Thread />} />
      <Route path="/userprofile/:id" element={<UserProfile />} />
    </Routes>
  );
}

export default App;

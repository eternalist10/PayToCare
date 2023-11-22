import React from "react";
import { Route, Routes } from "react-router-dom";

import { CampaignDetails, CreateCampaign, Home, Profile } from "./pages";
import { Navbar, Sidebar } from "./components";

const App = () => {
  return (
    <div className="relative sm-8 p-4 bg-[#13131a] min-h-screen flex flex-row">
      <div className="sm:flex hidden mr-10 relative">
        <Sidebar></Sidebar>
      </div>
      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <Navbar></Navbar>
        
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/profile" element={<Profile></Profile>} />
          <Route
            path="/create-campaign"
            element={<CreateCampaign></CreateCampaign>}
          />
          <Route
            path="/campaign-details/:id"
            element={<CampaignDetails></CampaignDetails>}
          />
        </Routes>
      </div>
    </div>
    // <div className="flex-1"
  );
};

export default App;

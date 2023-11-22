import React, { useContext, createContext } from "react";
import {
  useAddress,
  useContract,
  useMetamask,
  useContractWrite,
} from "@thirdweb-dev/react";

import { ethers } from "ethers";
import { createCampaign } from "../assets";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const { contract } = useContract(
    "0xF467980fa4477c72e64D025F5d0066605D224453"
  ); //Context Provider Functionality of React
  const {
    mutate: myFunction,
    isLoading,
    error,
  } = useContractWrite(contract, "createCampaign");

  const address = useAddress(); //Address of smart wallet
  const connect = useMetamask(); //Connecting a smart wallet

  const publishCampaign = async (form) => {
    try {
      const data = await createCampaign([
        address,
        form.title,
        form.description,
        form.target,
        newDate(form.deadline).getTime(),
        form.image,
      ]);

      console.log("Contract Call Success", data);
    } catch (error) {
      console.log("Contract Call Failure", data);
    }
  };
  return (
    <StateContext.Provider
      value={{ address, contract, createCampaign: publishCampaign }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => {
  useContext(StateContext);
};

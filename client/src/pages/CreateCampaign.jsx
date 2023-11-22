import React, { useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import { ethers } from "ethers";
import { money } from "../assets";
import { CustomButton, FormField } from "../components";
import { checkIfImage } from "../utils";

const CreateCampaign = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    title: "",
    description: "",
    target: "",
    deadline: "",
    image: "",
  });

  const handleFormFieldChange = (fieldName, e) => {
    setForm({ ...form, [fieldName]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  }; //prevents refresh of page

  return (
    <div className="bg-[#1c1c24] flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4 border-solid border-2 border-indigo-600">
      {isLoading && "Loader..."}
      <div className="flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#484850] to-90% rounded-[10px]">
        <h1 className="font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] text-white">
          Start a Campaign
        </h1>
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-full mt-[65px] flex flex-col gap-[30px]"
      >
        <div className="flex flex-wrap gap-[40px]">
          <FormField
            labelName="Your Name*"
            placeholder="John Doe"
            inputType="text"
            value={form.name}
            handleChange={(e) => handleFormFieldChange("name", e)}
          ></FormField>
          <FormField
            labelName="Campaign Title*"
            placeholder="Write a title"
            inputType="text"
            value={form.title}
            handleChange={(e) => handleFormFieldChange("title", e)}
          ></FormField>
        </div>
        <FormField
          labelName="Story*"
          placeholder="Write your story"
          isTextArea
          value={form.description}
          handleChange={(e) => handleFormFieldChange("description", e)}
        ></FormField>
        <div className="w-full flex justify-start items-center p-4 bg-gradient-to-r from-indigo-700 via-purple-500 to-pink-500 h-[120px] rounded-[10px]">
          <img
            src={money}
            alt="money"
            className="w-[40px] h-[40px] object-contain"
          ></img>
          <h4 className="font-epilogue font-bold text-[25px] text-white ml-[20px]">
            You will get 100% of the raised amount
          </h4>
        </div>
        <div className="flex flex-wrap gap-[40px]">
          <FormField
            labelName="Goal*"
            placeholder="ETH 0.50"
            inputType="text"
            value={form.target}
            handleChange={(e) => handleFormFieldChange("target", e)}
          ></FormField>
          <FormField
            labelName="End Date*"
            placeholder="End Date"
            inputType="date"
            value={form.deadline}
            handleChange={(e) => handleFormFieldChange("deadline", e)}
          ></FormField>
        </div>
        <FormField
          labelName="Campaign Image*"
          placeholder="Place image URL of your campaign"
          inputType="url"
          value={form.image}
          handleChange={(e) => handleFormFieldChange("image", e)}
        ></FormField>

        <div className="flex justify-center items-center mt-[30px]">
          <CustomButton
            btnType="submit"
            title="Submit New Campaign"
            styles="bg-gradient-to-r from-indigo-500 from-10% to-emerald-500 to-90%"
          ></CustomButton>
        </div>
      </form>
    </div>
  );
};

export default CreateCampaign;

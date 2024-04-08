import React, { useState } from "react";
import axios from "axios";

const CreateTeacher = async () => {
  //   define states to change later on onChange
  let [fullName, setFullName] = useState(""); //name
  let [address, setAddress] = useState(""); //address
  let [email, setEmail] = useState(""); //email
  let [description, setDescription] = useState(""); //description
  let [isMarried, setIsMarried] = useState(false); //isMarried
  let [country, setCountry] = useState("india"); //country
  let [gender, setGender] = useState(""); //gender
  /*   let countries= [
    { label: "Nepal", _id: "1" },
    { label: "India", _id: "2" },
    { label: "China", _id: "3" },
    { label: "Pakistan", _id: "4" },
  ]; */
  let genders = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Other", value: "other" },
  ];
  let handleSubmit = (e) => {
    e.preventDefault();

    let data = {
      fullName: fullName,
      address: address,
      email: email,
      description: description,
      isMarried: isMarried,
      country: country,
      gender: gender,
    };
    console.log("form is submitted", data);
  };

  try {
    let result = await axios({
      url: `http://localhost:8000/teachers`,
      method: "post",
      data: data,
    });
  } catch (error) {
    console.log(error.message);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div class="form-title">Create Teacher</div>
        <div>
          <label htmlFor="fullName">Full Name </label>
          <input
            id="fullName"
            type="text"
            value={fullName} //name
            onChange={(e) => {
              setFullName(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="address">Address </label>
          <input
            id="address"
            type="text"
            value={address} //address
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="email">Email </label>
          <input
            id="email"
            type="email"
            value={email} //email
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="description">Description </label>
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="2"
            type="text"
            value={description} //description
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          ></textarea>
        </div>
        <div>
          <label htmlFor="isMarried">Is Married? </label>
          <div className="checkbox">
            <input
              id="isMarried"
              type="checkbox"
              checked={isMarried} //isMarried
              onChange={(e) => {
                setIsMarried(e.target.checked);
              }}
            />
          </div>
        </div>
        <div>
          <label htmlFor="country">Country </label>
          <select
            name="country"
            id="country"
            value={country}
            onChange={(e) => {
              setCountry(e.target.value);
            }}
          >
            <option value="nepal">Nepal</option>
            <option value="india">India</option>
            <option value="china">China</option>
            <option value="pakistan">Pakistan</option>
          </select>
        </div>
        <div>
          <label htmlFor="male">Gender:</label>
          {genders.map((item, i) => {
            return (
              <span key={i}>
                <label htmlFor={item.value}>{item.label}</label>
                <input
                  type="radio"
                  id={item.value}
                  value={item.value}
                  checked={gender === item.value}
                  onChange={(e) => {
                    setGender(e.target.value);
                  }}
                />
              </span>
            );
          })}
          <br />
          {/* <label htmlFor="male">Male</label>
          <input
            type="radio"
            id="male"
            value="male"
            checked={gender === "male"}
            onChange={(e) => {
              setGender(e.target.value);
            }}
          />
          <label htmlFor="female">Female</label>
          <input
            type="radio"
            id="female"
            value="female"
            checked={gender === "female"}
            onChange={(e) => {
              setGender(e.target.value);
            }}
          />
          <label htmlFor="other">Other</label>
          <input
            type="radio"
            id="other"
            value="other"
            checked={gender === "other"}
            onChange={(e) => {
              setGender(e.target.value);
            }}
          />
         */}
        </div>
        <div>
          <label htmlFor="#">&nbsp;</label>
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
  );
};

export default CreateTeacher;

/* 
  Every input should have a state defined and must be onChange
  The data should be defined in an object to console it in the browser
*/

import React from "react";
import { useState, useEffect } from "react";

const ApiEx = () => {
  const [data, setData] = useState([]);
  const fetchInfo = () => {
    return fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((d) => setData(d.results));
  };
  console.log(data);
  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div>
      <h2>API Example</h2>
      <>
        {data.map((dataObj) => {
          return (
            <div>
              <p>Name: {dataObj.name.first}</p>

              <p>
                Picture: <img src={dataObj.picture.large} alt="profile" />
              </p>
              <p> Email: {dataObj.email}</p>
              <p>Phone: {dataObj.phone}</p>
              <p>Gender:{dataObj.gender}</p>
              <h4> Address</h4>
              <p>
                Street: {dataObj.location.street.number}{" "}
                {dataObj.location.street.name}
              </p>
              <p>City: {dataObj.location.city}</p>
              <p>State: {dataObj.location.state}</p>
              <p>Country: {dataObj.location.country}</p>
              <p>Postal Code: {dataObj.location.postalcode}</p>
            </div>
          );
        })}
        <button onClick={fetchInfo}>Fetch</button>
      </>
    </div>
  );
};

export default ApiEx;

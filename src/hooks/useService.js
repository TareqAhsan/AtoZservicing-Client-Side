import React, { useEffect, useState } from "react";

const useService = () => {
  const [services, setServices] = useState();
  const [softservices, setsoftServices] = useState();
  const [experts, setExperts] = useState();
  useEffect(() => {
    fetch("https://ancient-anchorage-18628.herokuapp.com/experts")
      .then((res) => res.json())
      .then((result) => setExperts(result));
  }, [experts]);

  useEffect(() => {
    fetch("https://ancient-anchorage-18628.herokuapp.com/addservice/it")
      .then((res) => res.json())
      .then((result) => setServices(result));
  }, [services]);

  useEffect(() => {
    fetch("https://ancient-anchorage-18628.herokuapp.com/addservice/soft")
      .then((res) => res.json())
      .then((result) => {
        // console.log(result);
        setsoftServices(result);
      });
  }, [softservices]);

  return {
    services,
    experts,
    softservices,
  };
};

export default useService;

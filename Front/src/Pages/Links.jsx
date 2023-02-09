import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { instance } from "../App";
const Links = () => {
  const params = useParams();
  const getDataById = async () => {
    const res = await instance.get(`/links/${params.shortId}`);
    window.location.replace(res.data.data.link);
    console.log(res);
  };

  useEffect(() => {
    getDataById();
  }, []);

  return <div></div>;
};
export default Links;

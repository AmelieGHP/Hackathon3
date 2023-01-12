import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "@components/context/UserContext";
import axios from "axios";
import HorseCard from "@components/HorseCard";
import Filters from "@components/Filters";
import Header from "@components/Header";

function Home() {
  const { user } = useContext(UserContext);
  const [stage0, setStage0] = useState(false);
  const [stage1, setStage1] = useState(true);
  const [stage2, setStage2] = useState(true);
  const [stage3, setStage3] = useState(true);
  const [stage4, setStage4] = useState(true);
  const [stage0Required, setStage0Required] = useState([]);
  const [stage1Required, setStage1Required] = useState([]);
  const [stage2Required, setStage2Required] = useState([]);
  const [stage3Required, setStage3Required] = useState([]);
  const [stage4Required, setStage4Required] = useState([]);

  const getHorses = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/vehicles`)
      .then((result) => {
        for (let i = 0; i < result.data.length; i += 1) {
          if (result.data[i].type === "Rocking horse") {
            setStage0Required((array) => [...array, result.data[i]]);
          }
          if (
            result.data[i].type === "Shetland" ||
            result.data[i].type === "Pony"
          ) {
            setStage1Required((array) => [...array, result.data[i]]);
          }
          if (
            result.data[i].type === "Horse" ||
            result.data[i].type === "Donkey"
          ) {
            setStage2Required((array) => [...array, result.data[i]]);
          }
          if (result.data[i].type === "Zebra") {
            setStage3Required((array) => [...array, result.data[i]]);
          }
          if (result.data[i].type === "Unicorn") {
            setStage4Required((array) => [...array, result.data[i]]);
          }
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };
  useEffect(() => {
    getHorses();
  }, []);
  console.log(user);
  return (
    <div className="home">
      <div className="filter">
        <Filters
          stage0={stage0}
          setStage0={setStage0}
          stage1={stage1}
          setStage1={setStage1}
          stage2={stage2}
          setStage2={setStage2}
          stage3={stage3}
          setStage3={setStage3}
          stage4={stage4}
          setStage4={setStage4}
        />
      </div>
      <div className="horseList">
        {stage0 &&
          stage0Required.map((horse) => {
            return (
              <Link to={`/info/${horse.id_vehicle}`}>
                <HorseCard
                  model={horse.model}
                  type={horse.type}
                  image={`${import.meta.env.VITE_BACKEND_URL}${horse.image}`}
                />
              </Link>
            );
          })}
        {stage1 &&
          stage1Required.map((horse) => {
            return (
              <Link to={`/info/${horse.id_vehicle}`}>
                <HorseCard
                  model={horse.model}
                  type={horse.type}
                  image={`${import.meta.env.VITE_BACKEND_URL}${horse.image}`}
                />
              </Link>
            );
          })}
        {stage2 &&
          stage2Required.map((horse) => {
            return (
              <Link to={`/info/${horse.id_vehicle}`}>
                <HorseCard
                  model={horse.model}
                  type={horse.type}
                  image={`${import.meta.env.VITE_BACKEND_URL}${horse.image}`}
                />
              </Link>
            );
          })}
        {stage3 &&
          stage3Required.map((horse) => {
            return (
              <Link to={`/info/${horse.id_vehicle}`}>
                <HorseCard
                  model={horse.model}
                  type={horse.type}
                  image={`${import.meta.env.VITE_BACKEND_URL}${horse.image}`}
                />
              </Link>
            );
          })}
        {stage4 &&
          stage4Required.map((horse) => {
            return (
              <Link to={`/info/${horse.id_vehicle}`}>
                <HorseCard
                  model={horse.model}
                  type={horse.type}
                  image={`${import.meta.env.VITE_BACKEND_URL}${horse.image}`}
                />
              </Link>
            );
          })}
      </div>
    </div>
  );
}

export default Home;
import React, { useEffect, useState } from "react";
import "./showtimesPage.scss";
import axios from "axios";
import Select from "react-select";
import Showtimes from "../../components/showtimes/showtimes";

export default function ShowtimesPage() {
  const [showtimes, setShowtimes] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [cityShowTimes, setCityShowTimes] = useState(null);

  const fetchShowtimes = async () => {
    try {
      const { data } = await axios.get(`http://localhost:5050/api/showtimes`);
      setShowtimes(data);
    } catch (error) {
      console.error("Error fetching Showtimes", error);
      return [];
    }
  };

  useEffect(() => {
    fetchShowtimes();
  }, []);

  useEffect(() => {
    if (!showtimes || !selectedOption) {
      return;
    }

    let cityShowtimes = [];

    for (let i = 0; i < showtimes.length; i++) {
      if (showtimes[i].city === selectedOption.value) {
        cityShowtimes.push(showtimes[i]);
      } else {
        console.log("this isnt working");
      }
    }

    setCityShowTimes(cityShowtimes);
  }, [showtimes]);

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    console.log(selectedOption);
    fetchShowtimes();
  };

  const options = [
    { value: "Birmingham", label: "Birmingham" },
    { value: "Cardiff", label: "Cardiff" },
    { value: "Edinburgh", label: "Edinburgh" },
    { value: "London", label: "London" },
    { value: "Glasgow", label: "Glasgow" },
    { value: "Liverpool", label: "Liverpool" },
    { value: "Manchester", label: "Manchester" },
  ];

  return (
    <section className="showtimes">
      <h1 className="showtimes__header">Showtimes</h1>
      <Select
        className="showtimes__dropdown"
        value={selectedOption}
        onChange={handleChange}
        options={options}
        placeholder="Select a city..."
      />

      <div className="showtimes__wrapper">
        {cityShowTimes &&
          cityShowTimes.map((showtime) => (
            <Showtimes
              key={showtime.id}
              city={showtime.city}
              title={showtime.title}
              showtimes={showtime.showtimes}
            />
          ))}
      </div>
    </section>
  );
}

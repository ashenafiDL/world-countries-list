import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import { Banner } from "./banner";
import { CountryList } from "./countryList";
import { Error } from "./error";
import { Loading } from "./loading";

export const HomePage = () => {
  const [allCountries, setAllCountries] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        data.sort((a, b) => {
          return a.name.common > b.name.common;
        });
        setAllCountries(data);
      })
      .catch((err) => {
        console.log("Fetch error", err);
        setError(true);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <Container className="h-screen">
      <Banner />
      {loading ? (
        <Loading />
      ) : error ? (
        <Error />
      ) : (
        <CountryList allCountries={allCountries} />
      )}
    </Container>
  );
};

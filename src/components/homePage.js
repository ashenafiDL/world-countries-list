import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import { Banner } from "./banner";
import { CountryList } from "./countryList";
import { FetchError } from "./fetchError";
import { Loading } from "./loading";
import { Footer } from "./footer";

export const HomePage = () => {
  const [allCountries, setAllCountries] = useState();
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("starting");
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
        // TODO - fix sort error on phone
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

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <Container className="h-screen">
      <Banner
        filter={filter}
        handleSearchChange={handleSearchChange}
        handleFilterChange={handleFilterChange}
      />

      {/* if (loading) {}
          else if (error) {}
          else {} */}
      {loading ? (
        <Loading />
      ) : error ? (
        <FetchError />
      ) : (
        <CountryList
          allCountries={allCountries}
          query={query}
          filter={filter}
        />
      )}

      <Footer />
    </Container>
  );
};

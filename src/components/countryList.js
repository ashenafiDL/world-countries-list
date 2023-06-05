import { Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { CountryCard } from "./countryCard";

export const CountryList = ({ allCountries, query, filter }) => {
  const filteredCountries =
    query === ""
      ? allCountries
      : filter === "starting"
      ? allCountries.filter((item) => {
          query = query.toLowerCase();
          const name = item.name.common.toLowerCase();
          return name.startsWith(query); // when filter === 'starting'
        })
      : allCountries.filter((item) => {
          query = query.toLowerCase();
          const name = item.name.common.toLowerCase();
          return name.includes(query); // when filter === 'any'
        });

  return (
    <Container className="py-4">
      <p>{filteredCountries.length} Results</p>
      <Grid
        className="item-center mx-auto flex flex-wrap justify-center"
        container
        spacing={2}
      >
        {filteredCountries.map((country) => {
          return <CountryCard name={country.name.common} />;
        })}
      </Grid>
    </Container>
  );
};

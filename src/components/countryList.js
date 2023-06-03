import Grid from "@mui/material/Unstable_Grid2";
import { CountryCard } from "./countryCard";

export const CountryList = ({ allCountries }) => {
  return (
    <Grid
      className="item-center mx-auto flex justify-center"
      container
      spacing={8}
    >
      {allCountries.map((country) => {
        return <CountryCard name={country.name.common} />;
      })}
    </Grid>
  );
};

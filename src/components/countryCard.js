import { Card, CardContent, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { useState } from "react";
import CountryDialog from "./countryDialog";

export const CountryCard = ({ country }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    // TODO - add animation elements change during search
    <Grid2>
      <Card
        className="cursor-pointer rounded-xl"
        variant="outlined"
        onClick={handleClick}
      >
        <CardContent>
          <Typography className="text-center text-sm md:text-lg">
            {country.name.common}
          </Typography>
        </CardContent>
      </Card>
      <CountryDialog country={country} open={open} handleClose={handleClose} />
    </Grid2>
  );
};

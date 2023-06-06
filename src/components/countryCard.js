import { Card, CardContent, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

export const CountryCard = ({ country }) => {
  // TODO - handle click event of cards

  return (
    // TODO - add animation elements change during search
    <Grid2>
      <Card
        className="flex cursor-pointer items-center justify-center rounded-xl"
        variant="outlined"
      >
        {/* FIXME - fix flag size */}
        {/* <CardMedia component="img" image={country.flags.png} /> */}
        <CardContent>
          <Typography className="text-center text-sm md:text-lg">
            {country.name.common}
          </Typography>
        </CardContent>
      </Card>
    </Grid2>
  );
};

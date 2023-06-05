import { Card, CardContent, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

export const CountryCard = ({ name }) => {
  // TODO - handle click event of cards

  return (
    // TODO - add animation elements change during search
    <Grid2>
      <Card
        className="flex h-full w-full cursor-pointer items-center 
        justify-center rounded-lg"
      >
        <CardContent>
          <Typography className="text-center text-sm md:text-lg">
            {name}
          </Typography>
        </CardContent>
      </Card>
    </Grid2>
  );
};

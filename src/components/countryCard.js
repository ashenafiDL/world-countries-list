import { Card, CardContent, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

export const CountryCard = ({ name }) => {
  const handleClick = (e) => {
    console.log(e.target);
  };

  return (
    <Grid2>
      <Card
        className="flex h-36 w-36 cursor-pointer items-center justify-center rounded-lg"
        onClick={handleClick}
      >
        <CardContent>
          <Typography className="text-center">{name}</Typography>
        </CardContent>
      </Card>
    </Grid2>
  );
};

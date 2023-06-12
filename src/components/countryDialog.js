import {
  Box,
  Chip,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";

export default function CountryDialog({ country, open, handleClose }) {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>
        <Box className="flex flex-row">
          <Typography variant="h4">{country.name.common}</Typography>
          <Typography variant="label">{country.name.official}</Typography>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Typography variant="label">{country.flag}</Typography>
        <br />
        <Typography variant="body">{country.flags.alt}</Typography>
      </DialogContent>
      <DialogContent>
        <Typography variant="label">Capita City</Typography>
        <Typography variant="h4">{country.capital}</Typography>
      </DialogContent>
      <DialogContent>
        <Typography variant="label">Borders</Typography>
        {country.borders.map((item) => {
          return <Chip>{item}</Chip>;
        })}
      </DialogContent>
    </Dialog>
  );
}

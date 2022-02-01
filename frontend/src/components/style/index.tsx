import { createTheme, styled } from "@mui/material/styles";
import { Box, Typography, Button } from "@mui/material";

export const themes = createTheme({
  typography: {
    fontFamily: ["Open Sans Condensed", "sans-serif"].join(","),
  },
});

export const Background = styled(Box)`
  background-color: rgb(20, 20, 20);
  background-size: cover;
`;

export const BoxRow = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const BoxColumn = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
`;

export const Title = styled(Typography)`
  font-size: 2rem;
  color: white;
  text-align: center;
`;

export const Text = styled(Typography)`
  font-size: 1rem;
  color: white;
`;

export const ButtonStyle = styled(Button)`
  border: 2px solid grey;
  // background-color: rgb(20, 20, 20);
`;

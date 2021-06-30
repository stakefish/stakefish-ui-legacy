import { styled } from "@material-ui/core/styles";
import MuiPaper from "@material-ui/core/Paper";

export const Item = styled(MuiPaper)(({ theme }) => ({
  ...theme.typography.caption,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.gray.bright,
  background: theme.palette.green.light,
  boxShadow: "none",
}));

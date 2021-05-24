import colors from "../theme/colors";

const MuiTableRow = {
  root: {
    "&:nth-child(even)": {
      "& .MuiTableCell-body": {
        backgroundColor: colors.gray.light,
      },
    },
  },
};

export default MuiTableRow;

import colors from "../theme/colors";

const MuiTableRow = {
  root: {
    "&:nth-child(even)": {
      "& .MuiTableCell-body": {
        backgroundColor: colors.gray[200],
      },
    },
  },
};

export default MuiTableRow;

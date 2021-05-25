import { Story, Meta } from "@storybook/react";
import MuiTable from "@material-ui/core/Table";
import MuiTableBody from "@material-ui/core/TableBody";
import MuiTableCell from "@material-ui/core/TableCell";
import MuiTableContainer from "@material-ui/core/TableContainer";
import MuiTableHead from "@material-ui/core/TableHead";
import MuiTableRow from "@material-ui/core/TableRow";
import Table from "../components/Table";

const argTypes = {};

const Template: Story = () => {
  return (
    <MuiTableContainer>
      <MuiTable>
        <MuiTableHead>
          <MuiTableRow>
            <MuiTableCell>Protein&nbsp;(g)</MuiTableCell>
            <MuiTableCell>Protein&nbsp;(g)</MuiTableCell>
          </MuiTableRow>
        </MuiTableHead>
        <MuiTableBody>
          <MuiTableRow>
            <MuiTableCell>Testing</MuiTableCell>
            <MuiTableCell>Testing</MuiTableCell>
          </MuiTableRow>
          <MuiTableRow>
            <MuiTableCell>Testing</MuiTableCell>
            <MuiTableCell>Testing</MuiTableCell>
          </MuiTableRow>
        </MuiTableBody>
      </MuiTable>
    </MuiTableContainer>
  );
};

export const Default = Template.bind({});

export const TableExample = () => {
  const bodyCellsRows = [
    {
      validator: {
        content: 123,
      },
      address: {
        content: "abt",
        props: {
          align: "right",
        },
      },
    },
    {
      validator: {
        content: 243,
      },
      address: {
        content: "cdt",
        props: {
          align: "right",
        },
      },
    },
    {
      validator: {
        content: 563,
      },
      address: {
        content: "bbt",
        props: {
          align: "right",
        },
      },
    },
  ];
  const headCells = [
    {
      id: "validator",
      label: "Validator",
    },
    {
      id: "address",
      label: "Address",
      props: {
        align: "right",
      },
    },
  ];
  return <Table bodyCellsRows={bodyCellsRows} headCells={headCells} />;
};

export default {
  title: "Table/TableCell",
  // component: TableCell,
  // argTypes,
} as Meta;

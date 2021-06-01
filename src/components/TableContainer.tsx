import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import MuiTable from "@material-ui/core/Table";
import MuiTableRow from "@material-ui/core/TableRow";
import MuiTableBody from "@material-ui/core/TableBody";
import MuiTableHead from "@material-ui/core/TableHead";
import MuiTableContainer, { TableContainerProps as MuiTableContainerProps } from "@material-ui/core/TableContainer";
import MuiTableCell, { TableCellProps as MuiTableCellProps } from "@material-ui/core/TableCell";

import { HeadCell } from "./TableHeadSort";

/**
 * Utilities
 */
export function createCellData(dataSets: CellDataContent[], cellDataKeys: (keyof CellData)[]) {
  const cellData: CellData = {};
  cellDataKeys.forEach((key, index) => (cellData[key] = dataSets[index]));
  return cellData;
}
export function formatCellDataRowsIntoArray(data: CellData) {
  const array = [];
  for (const property in data) {
    array.push(data[property]);
  }
  return array;
}

/**
 * Types
 */
export type Order = "asc" | "desc";
export type CellDataKeys = keyof CellData;

export interface CellDataContent {
  /**
   * The actual content to be rendered
   */
  content: string | number | JSX.Element | JSX.Element[] | React.ReactNode;
  /**
   * Additional props to decorate tableCell
   */
  props?: {
    [key in keyof MuiTableCellProps]: any;
  };
}

export interface CellData {
  /**
   * The id of the cell to be synced with HeadCell at the same column
   */
  [cellKey: string]: CellDataContent;
}

export interface TableContainerProps extends MuiTableContainerProps {
  headCells: HeadCell[];
  bodyCellsRows: CellData[];
}

/**
 * Styles
 */
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
    },
    table: {
      minWidth: 750,
    },
  })
);

const TableContainer = ({ headCells, bodyCellsRows }: TableContainerProps) => {
  const classes = useStyles();

  return (
    <MuiTableContainer>
      <MuiTable className={classes.table} aria-labelledby="tableTitle" aria-label="enhanced table">
        <MuiTableHead>
          <MuiTableRow>
            {headCells.map((cell, cellIndex) => (
              <MuiTableCell key={cellIndex} {...cell.props}>
                {cell.label}
              </MuiTableCell>
            ))}
          </MuiTableRow>
        </MuiTableHead>

        <MuiTableBody>
          {bodyCellsRows.map((rowCells, index) => (
            <MuiTableRow key={index}>
              {formatCellDataRowsIntoArray(rowCells).map((cell, cellIndex) => (
                <MuiTableCell key={cellIndex} {...cell.props}>
                  {cell.content}
                </MuiTableCell>
              ))}
            </MuiTableRow>
          ))}
        </MuiTableBody>
      </MuiTable>
    </MuiTableContainer>
  );
};

export default TableContainer;

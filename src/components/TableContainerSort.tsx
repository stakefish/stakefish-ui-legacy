import React from "react";
import MuiTable from "@material-ui/core/Table";
import MuiTableRow from "@material-ui/core/TableRow";
import MuiTableBody from "@material-ui/core/TableBody";
import MuiTableCell from "@material-ui/core/TableCell";
import MuiTableContainer from "@material-ui/core/TableContainer";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import TableHeadSort, { HeadSortCell } from "./TableHeadSort";
import { formatCellDataRowsIntoArray, Order, CellDataKeys, CellDataContent } from "./TableContainer";

/**
 * Sorting Utilities
 */
function getCellDataKey(data: CellDataSort) {
  return Object.keys(data)[0];
}
function getCellComparatorKey(data: CellDataSort, orderBy: CellDataKeys) {
  return data?.[orderBy]?.["key"] ? data[orderBy].key : null;
}

function descendingComparator(a: CellDataSort, b: CellDataSort, orderBy: CellDataKeys) {
  const aComparatorKey = getCellComparatorKey(a, orderBy);
  const bComparatorKey = getCellComparatorKey(b, orderBy);

  if (!aComparatorKey || !bComparatorKey || aComparatorKey === bComparatorKey) return 0;
  return bComparatorKey < aComparatorKey ? -1 : 1;
}
function getComparator(order: Order, orderBy: CellDataKeys): (a: CellDataSort, b: CellDataSort) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}
function stableSort(array: CellDataSort[], comparator: (x: CellDataSort, y: CellDataSort) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as [CellDataSort, number]);

  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    return order !== 0 ? order : a[1] - b[1];
  });

  return stabilizedThis.map((el) => el[0]);
}

/**
 * Utilities
 */
export function createCellSortData(dataSets: CellDataContentSort[], cellDataKeys: (keyof CellDataSort)[]) {
  const cellData: CellDataSort = {};
  cellDataKeys.forEach((key, index) => (cellData[key] = dataSets[index]));
  return cellData;
}

/**
 * Types
 */
interface CellDataContentSort extends CellDataContent {
  /**
   * The data as sorting reference
   */
  key: string;
}
export interface CellDataSort {
  [cellKey: string]: CellDataContentSort;
}
export interface TableContainerSortProps {
  headCells: HeadSortCell[];
  bodyCellsRows: CellDataSort[];
}

/**
 *
 * Styles
 *
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

const TableContainerSort = ({ headCells, bodyCellsRows }: TableContainerSortProps) => {
  const classes = useStyles();

  const [order, setOrder] = React.useState<Order>("asc");
  // set initial orderBy as the key of first cell in first row
  const [orderBy, setOrderBy] = React.useState<CellDataKeys>(getCellDataKey(bodyCellsRows[0]));

  const handleRequestSort = (event: React.MouseEvent<unknown>, property: CellDataKeys) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  return (
    <MuiTableContainer>
      <MuiTable className={classes.table} aria-labelledby="tableTitle" aria-label="enhanced table">
        <TableHeadSort
          headCells={headCells}
          order={order}
          orderBy={orderBy.toString()}
          onRequestSort={handleRequestSort}
        />
        <MuiTableBody>
          {stableSort(bodyCellsRows, getComparator(order, orderBy)).map((rowCells, index) => (
            <MuiTableRow tabIndex={-1} key={index}>
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

export default TableContainerSort;

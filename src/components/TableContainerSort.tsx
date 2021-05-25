import React from "react";
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import TableContainer from "@material-ui/core/TableContainer";
import TableCell, { TableCellProps } from "@material-ui/core/TableCell";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

/**
 *
 * Utilities
 *
 */
function getCellDataKey(data: CellData) {
  return Object.keys(data)[0];
}
function getCellComparatorKey(data: CellData, orderBy: CellDataKeys) {
  return data?.[orderBy]?.["key"] ? data[orderBy].key : null;
}

function descendingComparator(a: CellData, b: CellData, orderBy: CellDataKeys) {
  const aComparatorKey = getCellComparatorKey(a, orderBy);
  const bComparatorKey = getCellComparatorKey(b, orderBy);

  if (!aComparatorKey || !bComparatorKey || aComparatorKey === bComparatorKey) return 0;
  return bComparatorKey < aComparatorKey ? -1 : 1;
}
function getComparator(order: Order, orderBy: CellDataKeys): (a: CellData, b: CellData) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}
function stableSort(array: CellData[], comparator: (x: CellData, y: CellData) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as [CellData, number]);

  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    return order !== 0 ? order : a[1] - b[1];
  });

  return stabilizedThis.map((el) => el[0]);
}
function formatCellDataRowsIntoArray(data: CellData) {
  const array = [];
  for (const property in data) {
    array.push(data[property]);
  }
  return array;
}

/**
 *
 * Types
 *
 */
type Order = "asc" | "desc";
type CellDataKeys = keyof CellData;

interface CellData {
  /**
   * The id of the cell to be synced with HeadCell at the same column
   */
  [cellKey: string]: {
    /**
     * The data as sorting reference
     */
    key: string;
    /**
     * The actual content to be rendered
     */
    content: string | number | JSX.Element | JSX.Element[] | React.ReactNode;
    /**
     * Additional props to decorate tableCell
     */
    props?: {
      [key in keyof TableCellProps]: any;
    };
  };
}

interface HeadCell {
  /**
   * The id that's identical with the cellKey of all CellData in the same column
   */
  id: CellDataKeys;
  /**
   * The actual content to be rendered
   */
  label: string;
  /**
   * Additional props to decorate tableCell
   */
  props?: {
    [key in keyof TableCellProps]: any;
  };
}

interface TableHeadProps {
  headCells: HeadCell[];
  classes: ReturnType<typeof useStyles>;
  order: Order;
  orderBy: string;
  onRequestSort: (event: React.MouseEvent<unknown>, property: CellDataKeys) => void;
}

export interface TableBodyProps {
  headCells: HeadCell[];
  bodyCellsRows: CellData[];
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
    visuallyHidden: {
      border: 0,
      clip: "rect(0 0 0 0)",
      height: 1,
      margin: -1,
      overflow: "hidden",
      padding: 0,
      position: "absolute",
      top: 20,
      width: 1,
    },
  })
);

/**
 *
 * Component - Head
 *
 */
function SortingTableHead({ headCells, classes, order, orderBy, onRequestSort }: TableHeadProps) {
  const createSortHandler = (property: CellDataKeys) => (event: React.MouseEvent<unknown>) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell key={headCell.id} sortDirection={orderBy === headCell.id ? order : false} {...headCell.props}>
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

/**
 *
 * Component - Table
 *
 */
function SortingTable({ headCells, bodyCellsRows }: TableBodyProps) {
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
    <TableContainer>
      <Table className={classes.table} aria-labelledby="tableTitle" aria-label="enhanced table">
        <SortingTableHead
          headCells={headCells}
          classes={classes}
          order={order}
          orderBy={orderBy.toString()}
          onRequestSort={handleRequestSort}
        />
        <TableBody>
          {stableSort(bodyCellsRows, getComparator(order, orderBy)).map((rowCells, index) => (
            <TableRow tabIndex={-1} key={index}>
              {formatCellDataRowsIntoArray(rowCells).map((cell, cellIndex) => (
                <TableCell key={cellIndex} {...cell.props}>
                  {cell.content}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default SortingTable;

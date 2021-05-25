import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell, { TableCellProps } from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";

/**
 * Types
 */
type Order = "asc" | "desc";

interface CellData {
  [key: string]: {
    content: any;
    props?: {
      [key in keyof TableCellProps]: any;
    };
  };
}

type CellDataKeys = keyof CellData;

interface HeadCell {
  id: CellDataKeys;
  label: string;
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

interface TableBodyProps {
  headCells: HeadCell[];
  bodyCellsRows: CellData[];
}

/**
 * Utilities
 */
function getCellDataKey(data: CellData) {
  return Object.keys(data)[0];
}
function descendingComparator(a: CellData, b: CellData, orderBy: CellDataKeys) {
  if (b[orderBy].content < a[orderBy].content) {
    return -1;
  }
  if (b[orderBy].content > a[orderBy].content) {
    return 1;
  }
  return 0;
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
    if (order !== 0) return order;
    return a[1] - b[1];
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
 * Head
 */
function EnhancedTableHead(props: TableHeadProps) {
  const { headCells, classes, order, orderBy, onRequestSort } = props;
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

export default function EnhancedTable(props: TableBodyProps) {
  const { headCells, bodyCellsRows } = props;
  const firstCell = getCellDataKey(bodyCellsRows[0]);
  const classes = useStyles();
  const [order, setOrder] = React.useState<Order>("asc");
  const [orderBy, setOrderBy] = React.useState<CellDataKeys>(firstCell);

  const handleRequestSort = (event: React.MouseEvent<unknown>, property: CellDataKeys) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  return (
    <TableContainer>
      <Table className={classes.table} aria-labelledby="tableTitle" aria-label="enhanced table">
        <EnhancedTableHead
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

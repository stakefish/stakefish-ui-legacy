import React from "react";
import MuiTableRow from "@material-ui/core/TableRow";
import MuiTableHead, { TableHeadProps as MuiTableHeadProps } from "@material-ui/core/TableHead";
import MuiTableCell, { TableCellProps as MuiTableCellProps } from "@material-ui/core/TableCell";

import TableSortLabel from "./TableSortLabel";
import { Order, CellDataKeys } from "./TableContainer";

export interface HeadCell {
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
    [key in keyof MuiTableCellProps]: any;
  };
}
export interface HeadSortCell extends HeadCell {
  /**
   * Enable sorting ability
   */
  sortable?: boolean;
}

export interface TableHeadSortProps extends MuiTableHeadProps {
  headCells: HeadSortCell[];
  order: Order;
  orderBy: string;
  onRequestSort: (event: React.MouseEvent<unknown>, property: CellDataKeys) => void;
}

const TableHeadSort = ({ headCells, order, orderBy, onRequestSort }: TableHeadSortProps) => {
  const createSortHandler = (property: CellDataKeys) => (event: React.MouseEvent<unknown>) => {
    onRequestSort(event, property);
  };

  return (
    <MuiTableHead>
      <MuiTableRow>
        {headCells.map((headCell) => (
          <MuiTableCell key={headCell.id} sortDirection={orderBy === headCell.id ? order : false} {...headCell.props}>
            {headCell.sortable && (
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : "asc"}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
              </TableSortLabel>
            )}
            {!headCell.sortable && headCell.label}
          </MuiTableCell>
        ))}
      </MuiTableRow>
    </MuiTableHead>
  );
};

export default TableHeadSort;

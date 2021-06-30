import React from "react";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import MuiGrid, { GridProps as MuiGridProps } from "@material-ui/core/Grid";

export interface GridContainerProps extends Omit<MuiGridProps, "container"> {}

const GridContainer = ({ children, ...props }: GridContainerProps) => {
  /**
   * TODO:
   * Material UI v5 supports responsive spacing props, but it's still in beta.
   * We should use the dynamic props once v5 is stable, and remove the mediaQuery approach.
   * https://next--material-ui.netlify.app/components/grid/#responsive-values
   */
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <MuiGrid container spacing={isMobile ? 2 : 5} direction={isMobile ? "column" : "row"} {...props}>
      {children}
    </MuiGrid>
  );
};

export default GridContainer;

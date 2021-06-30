import { Story, Meta } from "@storybook/react";

import MuiTable from "@material-ui/core/Table";
import MuiTableRow from "@material-ui/core/TableRow";
import MuiTableBody from "@material-ui/core/TableBody";
import MuiTableCell from "@material-ui/core/TableCell";
import MuiTableHead from "@material-ui/core/TableHead";
import MuiTableContainer from "@material-ui/core/TableContainer";

import ThumbnailInfoBar from "../components/ThumbnailInfoBar";

const Template: Story = () => {
  return (
    <MuiTableContainer>
      <MuiTable>
        <MuiTableHead>
          <MuiTableRow>
            <MuiTableCell>Validator</MuiTableCell>
            <MuiTableCell>Voting Power, ATOM</MuiTableCell>
          </MuiTableRow>
        </MuiTableHead>
        <MuiTableBody>
          <MuiTableRow>
            <MuiTableCell>
              <ThumbnailInfoBar
                thumbnailUrl="https://s3.amazonaws.com/keybase_processed_uploads/a084e1a96ecc3f24bd57dfec517a9205_360_360.jpg"
                thumbnailAlt="Bi23 Labs"
                title="Bi23 Labs"
                subtitle="cosmosvaloper1hctafaqveg7dxad8aedf32aq2j877rrec2f5au"
              />
            </MuiTableCell>
            <MuiTableCell>0.00%</MuiTableCell>
          </MuiTableRow>
          <MuiTableRow>
            <MuiTableCell>
              <ThumbnailInfoBar
                thumbnailUrl="https://s3.amazonaws.com/keybase_processed_uploads/e7aca2c60e1b658db8cc8f175ce9aa05_360_360.jpg"
                thumbnailAlt="Swiss Staking"
                title="Swiss Staking"
                subtitle="cosmosvaloper1y0us8xvsvfvqkk9c6nt5cfyu5au5tww2ztve7q"
              />
            </MuiTableCell>
            <MuiTableCell>0.24%</MuiTableCell>
          </MuiTableRow>
        </MuiTableBody>
      </MuiTable>
    </MuiTableContainer>
  );
};

export const Default = Template.bind({});

export default {
  title: "Table/Basic",
  component: MuiTableContainer,
  subcomponents: {
    MuiTable,
    MuiTableRow,
    MuiTableBody,
    MuiTableCell,
    MuiTableHead,
    ThumbnailInfoBar,
  },
  parameters: {
    docs: {
      description: {
        component: "Use pieces of table components to compose a table.",
      },
      source: {
        type: "code",
      },
    },
  },
} as Meta;

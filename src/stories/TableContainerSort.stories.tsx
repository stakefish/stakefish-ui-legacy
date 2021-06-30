import { Meta } from "@storybook/react";

import Icon from "../components/Icon";
import ThumbnailInfoBar from "../components/ThumbnailInfoBar";
import TableContainerSort, { createCellSortData } from "../components/TableContainerSort";

const WebsiteLinkIcon = ({ url }: { url: string }) => (
  <a href={url}>
    <Icon iconKey="link" color="secondary" size="sm" />
  </a>
);

export const Default = () => {
  return <TableContainerSort bodyCellsRows={bodyCellsRows} headCells={headCells} />;
};

export default {
  title: "Table/TableContainerSort",
  component: TableContainerSort,
  parameters: {
    docs: {
      description: {
        component: "Pre-composed table with sorting ability, taking data as props.",
      },
      source: {
        type: "code",
      },
    },
  },
} as Meta;

/**
 * Data
 */
const cellDataKeys = ["validator", "votingPower", "delegators", "fees", "website"];

const bodyCellsRows = [
  {
    ...createCellSortData(
      [
        {
          key: "Bi23 Labs",
          content: (
            <ThumbnailInfoBar
              thumbnailUrl="https://s3.amazonaws.com/keybase_processed_uploads/a084e1a96ecc3f24bd57dfec517a9205_360_360.jpg"
              thumbnailAlt="Bi23 Labs"
              title="Bi23 Labs"
              subtitle="cosmosvaloper1hctafaqveg7dxad8aedf32aq2j877rrec2f5au"
            />
          ),
        },
        {
          key: "0.00%",
          content: "0.00%",
          props: { align: "right" },
        },
        {
          key: "1",
          content: "1",
          props: { align: "right" },
        },
        {
          key: "0.00%",
          content: "0.00%",
          props: { align: "right" },
        },
        {
          key: "https://bi23.com/",
          content: <WebsiteLinkIcon url="https://bi23.com/" />,
          props: { align: "center" },
        },
      ],
      cellDataKeys
    ),
  },
  {
    ...createCellSortData(
      [
        {
          key: "cosmosave",
          content: (
            <ThumbnailInfoBar
              thumbnailUrl="https://s3.amazonaws.com/keybase_processed_uploads/0896b54e305b3817c20ee844066ae905_360_360.jpg"
              thumbnailAlt="cosmosave"
              title="cosmosave"
              subtitle="cosmosvaloper18fuhq6r933854432m0692m05ddqdvzm2gysypr"
            />
          ),
        },
        {
          key: "0.00%",
          content: "0.00%",
          props: { align: "right" },
        },
        {
          key: "5",
          content: "5",
          props: { align: "right" },
        },
        {
          key: "0.5%",
          content: "0.5%",
          props: { align: "right" },
        },
        {
          key: "https://cosmosave.wixsite.com/atom",
          content: <WebsiteLinkIcon url="https://cosmosave.wixsite.com/atom" />,
          props: { align: "center" },
        },
      ],
      cellDataKeys
    ),
  },
  {
    ...createCellSortData(
      [
        {
          key: "Swiss Staking",
          content: (
            <ThumbnailInfoBar
              thumbnailUrl="https://s3.amazonaws.com/keybase_processed_uploads/e7aca2c60e1b658db8cc8f175ce9aa05_360_360.jpg"
              thumbnailAlt="Swiss Staking"
              title="Swiss Staking"
              subtitle="cosmosvaloper1y0us8xvsvfvqkk9c6nt5cfyu5au5tww2ztve7q"
            />
          ),
        },
        {
          key: "0.24%",
          content: "0.24%",
          props: { align: "right" },
        },
        {
          key: "1,007",
          content: "1,007",
          props: { align: "right" },
        },
        {
          key: "1.00%",
          content: "1.00%",
          props: { align: "right" },
        },
        {
          key: "https://swiss-staking.ch/",
          content: <WebsiteLinkIcon url="https://swiss-staking.ch/" />,
          props: { align: "center" },
        },
      ],
      cellDataKeys
    ),
  },
];

const headCells = [
  {
    id: "validator",
    label: "Validator",
  },
  {
    id: "votingPower",
    label: "Voting Power, ATOM",
    sortable: true,
    props: {
      align: "right",
    },
  },
  {
    id: "delegators",
    label: "Delegators",
    sortable: true,
    props: { align: "right" },
  },
  {
    id: "fees",
    label: "Fees",
    sortable: true,
    props: { align: "right" },
  },
  {
    id: "website",
    label: "Website",
    props: { align: "center" },
  },
];

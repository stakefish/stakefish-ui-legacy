import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { CopyToClipboard } from "react-copy-to-clipboard";

import IconButton from "./IconButton";
import fontFamily from "../theme/fontFamily";
import Typography from "../components/Typography";

export interface ThumbnailInfoBarProps {
  thumbnailUrl: string;
  thumbnailAlt: string;
  thumbnailAnchorLink?: string;
  title: string;
  isTitleCopyable?: boolean;
  subtitle?: string;
  isSubtitleCopyable?: boolean;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    "& p": {
      lineHeight: 1,
    },
    "& span": {
      lineHeight: 1,
      fontFamily: fontFamily.monospace,
    },
  },
  textBox: {
    "& button": {
      display: "inline",
      padding: `0 0 0 ${theme.spacing(0.75)}px`,

      opacity: 0,
      pointerEvents: "none",
      transition: theme.transitions.create(["opacity"]),
    },
    "&:hover button": {
      opacity: 1,
      pointerEvents: "initial",
    },
  },
  subtitleBox: {
    "& span": {
      wordBreak: "break-word",
    },
  },
}));

const CopyIconButton = ({ text }: { text: string }) => (
  <CopyToClipboard text={text}>
    <IconButton iconKey="copy" color="secondary" size="xxs" />
  </CopyToClipboard>
);

const thumbnailLinkWrapper = (children: React.ReactNode, link?: string) => {
  if (!link) return children;

  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};

const ThumbnailInfoBar: React.FC<ThumbnailInfoBarProps> = ({
  thumbnailUrl,
  thumbnailAlt,
  thumbnailAnchorLink,
  title,
  isTitleCopyable = false,
  subtitle,
  isSubtitleCopyable = false,
}) => {
  const classes = useStyles();
  const textBoxProps = (isSubtitle = false) => ({
    display: "flex",
    alignItems: "center",
    className: `${classes.textBox} ${isSubtitle ? classes.subtitleBox : null}`,
  });

  return (
    <Box display="flex" alignItems="center" width="100%" className={classes.root}>
      {thumbnailLinkWrapper(
        <Box width={48} display="flex" alignItems="center" mr={2}>
          <img src={thumbnailUrl} alt={thumbnailAlt} width="100%" />
        </Box>,
        thumbnailAnchorLink
      )}
      <Box>
        {title && (
          <Box {...textBoxProps()}>
            <Typography variant="calloutBold" component="p">
              {title}
            </Typography>
            {isTitleCopyable && <CopyIconButton text={title} />}
          </Box>
        )}
        {subtitle && (
          <Box pt={0.75} {...textBoxProps(true)}>
            <Typography variant="supportingText" component="span" color="secondary">
              {subtitle}
            </Typography>
            {isSubtitleCopyable && <CopyIconButton text={subtitle} />}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default ThumbnailInfoBar;

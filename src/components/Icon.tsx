import React from "react";
import themeColors from "../theme/colors";
import { makeStyles, Theme } from "@material-ui/core";
import { IconKeys, IconSizes, IconColors } from "../../definitions/icon";

import * as I from "../icons";

export const iconList: IconKeys = {
  telegram: <I.Telegram />,
  twitter: <I.Twitter />,
  youtube: <I.Youtube />,
  copy: <I.Copy />,
  "info-circle": <I.InfoCircle />,
  file: <I.File />,
  "file-text": <I.FileText />,
  download: <I.Download />,
  gamepad: <I.Gamepad />,
  check: <I.Check />,
  plus: <I.Plus />,
  github: <I.Github />,
  "angle-left": <I.AngleLeft />,
  "arrow-left": <I.ArrowLeft />,
  "caret-down": <I.CaretDown />,
  "caret-up": <I.CaretUp />,
  clock: <I.Clock />,
  countdown: <I.Countdown />,
  decline: <I.Decline />,
  delete: <I.Delete />,
  discord: <I.Discord />,
  "edit-off": <I.EditOff />,
  edit: <I.Edit />,
  email: <I.Email />,
  "external-link": <I.ExternalLink />,
  "facebook-alt": <I.FacebookAlt />,
  facebook: <I.Facebook />,
  "file-code": <I.FileCode />,
  globe: <I.Globe />,
  "help-alt": <I.HelpAlt />,
  help: <I.Help />,
  instagram: <I.Instagram />,
  lang: <I.Lang />,
  ledger: <I.Ledger />,
  link: <I.Link />,
  linkedin: <I.Linkedin />,
  lock: <I.Lock />,
  medium: <I.Medium />,
  more: <I.More />,
  play: <I.Play />,
  reddit: <I.Reddit />,
  refresh: <I.Refresh />,
  reward: <I.Reward />,
  search: <I.Search />,
  shield: <I.Shield />,
  "sort-down": <I.SortDown />,
  "sort-up": <I.SortUp />,
  sort: <I.Sort />,
  "speed-fast": <I.SpeedFast />,
  "speed-normal": <I.SpeedNormal />,
  stars: <I.Stars />,
  "telegram-circle": <I.TelegramCircle />,
  "tezos-sign": <I.TezosSign />,
  upload: <I.Upload />,
  wechat: <I.Wechat />,
  weibo: <I.Weibo />,
  beaconchain: <I.Beaconchain />,
};

export const iconSizes: IconSizes = {
  xxs: 12,
  xs: 20,
  sm: 22,
  md: 32,
  lg: 60,
};

export const iconColors: IconColors = {
  primary: themeColors.black.dark,
  secondary: themeColors.gray.dark,
  contrastPrimary: themeColors.gray.bright,
  contrastSecondary: themeColors.gray.light,
  transparent: "transparent",
  currentColor: "currentColor",
};

export interface IconProps {
  iconKey: keyof IconKeys;
  className?: string;
  color?: keyof IconColors;
  size?: keyof IconSizes;
  rotate?: number;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: ({ size, color, rotate }: { size?: keyof IconSizes; color?: keyof IconColors; rotate?: number }) => ({
    display: "inline-block",
    verticalAlign: "middle",
    height: iconSizes[size || "md"],
    textAlign: "center",
    color: "inherit",
    fontFamily: "inherit !important",

    "&:before": {
      display: "none !important",
    },

    "& svg": {
      display: "inline-block",
      verticalAlign: "top",
      height: "100%",
      color: "inherit",
      transform: `rotate(${rotate || 0}deg)`,
    },

    "& path": {
      fill: iconColors[color || "currentColor"],
      transition: theme.transitions.create(["fill"]),
    },
  }),
}));

const Icon: React.FC<IconProps> = ({ iconKey, className, size, color, rotate }) => {
  const classes = useStyles({ size, color, rotate });

  return <i className={`icon icon--${iconKey} ${className || ""} ${classes.root}`}>{iconList[iconKey]}</i>;
};

export default Icon;

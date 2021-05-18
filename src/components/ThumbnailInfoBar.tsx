import React from "react";
import Box from "@material-ui/core/Box";

import Typography from "../components/Typography";

export interface ThumbnailInfoBarProps {
  thumbnailUrl: string;
  thumbnailAlt: string;
  title: string;
  subtitle: string;
}

const ThumbnailInfoBar: React.FC<ThumbnailInfoBarProps> = ({ thumbnailUrl, thumbnailAlt, title, subtitle }) => {
  return (
    <Box display="flex" alignItems="center" width="100%">
      {thumbnailUrl && (
        <Box width={48} display="flex" alignItems="center" mr={2}>
          <img src={thumbnailUrl} alt={thumbnailAlt} width="100%" />
        </Box>
      )}
      <Box>
        <Typography variant="caption" component="p">
          {title}
        </Typography>
        <Typography variant="overline" component="p" color="textSecondary">
          {subtitle}
        </Typography>
      </Box>
    </Box>
  );
};

export default ThumbnailInfoBar;

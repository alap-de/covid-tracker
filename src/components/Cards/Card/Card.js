import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import cx from "classnames";

import styles from "./Card.module.css";

export default ({ style, title, caption, lastUpdate, data }) => {
  const countUpStart = 0;
  const countUpDuration = 2.5;
  const countUpSeparator = ",";

  return (
    <Grid
      item
      component={Card}
      xs={12}
      md={3}
      className={cx(styles.card, style)}
    >
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h5">
          <CountUp
            start={countUpStart}
            end={data.value}
            duration={countUpDuration}
            separator={countUpSeparator}
          />
        </Typography>
        <Typography color="textSecondary">
          {lastUpdate.toDateString()}
        </Typography>
        <Typography variant="body2">{caption}</Typography>
      </CardContent>
    </Grid>
  );
};

import React from "react";
import { Grid } from "@material-ui/core";

import styles from "./Cards.module.css";
import Card from "./Card/Card";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) return "Loading...";

  lastUpdate = new Date(lastUpdate);
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Card
          title="Infected"
          caption="Number of active cases of COVID-19"
          data={confirmed}
          lastUpdate={lastUpdate}
          style={styles.infected}
        />

        <Card
          title="Recovered"
          caption="Number of recoveries COVID-19"
          data={recovered}
          lastUpdate={lastUpdate}
          style={styles.recovered}
        />

        <Card
          title="Deaths"
          caption="Number of deaths caused by COVID-19"
          data={deaths}
          lastUpdate={lastUpdate}
          style={styles.deaths}
        />
      </Grid>
    </div>
  );
};

export default Cards;

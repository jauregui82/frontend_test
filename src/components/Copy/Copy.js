import React from "react";
import { Grid } from "@material-ui/core";
import { GeneralButton } from "../Button/Buton";

export const Copy = props => {
  const { dataCounterSelected, copySelected } = props;

  return (
    <div>
      <div className={"content-copy"}>
        <Grid container spacing={2} className={"height-100"}>
          <Grid item xs={8}>
            <Grid
              container
              direction="column"
              justify="space-around"
              alignItems="center"
              className={"height-100"}
            >
              <Grid item>
                <span className={"largeTitle"}>
                  Share {Object.keys(dataCounterSelected).length} counter
                </span>
              </Grid>
              <Grid item>
                <GeneralButton
                  clase={"btnSmallWhite"}
                  action={copySelected}
                  actionName={""}
                >
                  Copy
                </GeneralButton>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4} style={{ position: "relative" }}>
            <div className={"content-copy-selected"}>
              <Grid container className={"height-100"}>
                <Grid item xs={3} className={"copy-selected-border"} />
                <Grid item xs={9} className={"copy-selected-text"}>
                  {dataCounterSelected.map(item => {
                    return (
                      <div key={item.id}>
                        <span className={"smallText"}>
                          {`${item.count} x ${item.title}`}
                        </span>
                        <br />
                      </div>
                    );
                  })}
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
        <div style={{ position: "relative" }}>
          <span />
        </div>
      </div>
    </div>
  );
};

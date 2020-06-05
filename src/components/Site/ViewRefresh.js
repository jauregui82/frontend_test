import React from "react";
import { makeStyles } from "@material-ui/styles";
import { ReactComponent as Icon } from "../../assets/IconRefresh.svg";
import { ReactComponent as IconBlack } from "../../assets/IconRefreshBlack.svg";

const useStyles = makeStyles(theme => ({
  refreshing: {
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 17,
    color: "#FF9500",
    marginRight: 8.4
  },
  contentItemTitle: {
    paddingLeft: "1.5rem",
    paddingTop: 26
  },
  itemsTite: {
    fontWeight: 600,
    fontSize: 17,
    color: "#4A4A4A",
    letterSpacing: "0.02em"
  },
  itemsTiteAll: {
    fontWeight: 500,
    fontSize: 17,
    alignItems: "center",
    letterSpacing: "0.02em",
    color: "#888B90"
  },
  itemSelected: {
    fontWeight: 600,
    fontSize: 17,
    letterSpacing: "0.02em",
    color: "#FF9500"
  },
  IconBlack: {
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#888b9054",
      width: "auto",
      height: "auto",
      borderRadius: 12
    }
  }
}));

export const ViewRefresh = props => {
  const classes = useStyles();
  const {
    valuesDataCounter,
    loaderState,
    dataCounterSelected,
    setDataCounterSelected
  } = props;

  return (
    <>
      <div className={classes.contentItemTitle}>
        {Object.keys(dataCounterSelected).length > 0 ? (
          <>
            <span className={classes.refreshing}>
              {Object.keys(dataCounterSelected).length} Selected
            </span>
            &nbsp;
            <IconBlack
              className={classes.IconBlack}
              onClick={() => setDataCounterSelected([])}
            />
          </>
        ) : (
          <>
            <span className={classes.itemsTite}>
              {valuesDataCounter.titleItems} Items
            </span>
            &nbsp;
            <span className={classes.itemsTiteAll}>
              {valuesDataCounter.countItems} Items
            </span>
            &nbsp; &nbsp;
            {loaderState.loaderRefresh && (
              <>
                <Icon />
                <span className={classes.refreshing}>Refreshing...</span>
              </>
            )}
          </>
        )}
      </div>
    </>
  );
};

import React from "react";
import { Search } from "../Shearch/Search";
import { Grid } from "@material-ui/core";
import { CounterCell } from "../CounterCell/CounterCell";
import Loader from "../Loader/Loader";
import { ViewRefresh } from "./ViewRefresh";

export const ViewStoreContent = props => {
  const {
    searchSelected,
    setSearchSelected,
    handleChangeSearch,
    handleClearSearch,
    valueSearch,
    setValueSearch,
    dataCounter,
    valuesDataCounter,
    loaderState,
    dataCounterSelected,
    setDataCounterSelected,
    verifyFindCounter,
    selectedCell,
    handleCount,
    open
  } = props;

  return (
    <>
      <Grid
        container
        direction="column"
        justify="space-around"
        alignItems="center"
      >
        <Grid item style={{ maxWidth: 379, width: "100%" }}>
          <br />
          <Search
            selected={searchSelected}
            setSelected={setSearchSelected}
            handleChangeSearch={handleChangeSearch}
            handleClearSearch={handleClearSearch}
            value={valueSearch}
            setValue={setValueSearch}
          />
        </Grid>
      </Grid>
      <Grid
        container
        direction="column"
        justify="space-around"
        alignItems="center"
        className={Object.keys(dataCounter).length === 0 ? "height-100" : ""}
      >
        {Object.keys(dataCounter).length > 0 && (
          <Grid
            item
            style={{
              maxWidth: "570px",
              width: "100%"
            }}
          >
            <ViewRefresh
              valuesDataCounter={valuesDataCounter}
              loaderState={loaderState}
              dataCounterSelected={dataCounterSelected}
              setDataCounterSelected={setDataCounterSelected}
            />
          </Grid>
        )}
        <Grid
          item
          style={{
            maxWidth: "570px",
            width: "100%",
            marginBottom: "90px",
            height: "100%",
            paddingBottom: "3.5rem"
          }}
        >
          {!open && loaderState.loader ? (
            <div className={"containerLoader"}>
              <Loader />
            </div>
          ) : (
            <>
              {Object.keys(dataCounter).length === 0 ? (
                <Grid
                  container
                  direction="column"
                  justify="center"
                  alignItems="center"
                  style={{ height: "100%" }}
                >
                  <Grid item>
                    {searchSelected ? (
                      <p className="no-results">No results</p>
                    ) : (
                      <>
                        <p className="largeTitle"> No counters yet</p>
                        <p className="subTitle">
                          <span>
                            “When I started counting my blessings, my whole life
                            life turned around.” <br /> —Willie Nelson
                          </span>
                        </p>
                      </>
                    )}
                  </Grid>
                </Grid>
              ) : (
                <>
                  <br />
                  {dataCounter.map((item, i) => {
                    return (
                      <div key={i} id={"counters"}>
                        <CounterCell
                          clase={verifyFindCounter(item.id)}
                          textCell={item.title}
                          count={item.count}
                          selectedCell={selectedCell}
                          handleCount={handleCount}
                          idCounter={item.id}
                        />
                      </div>
                    );
                  })}
                </>
              )}
            </>
          )}
        </Grid>
      </Grid>
    </>
  );
};

import React, { useState, useEffect } from "react";
// import {ViewStore} from './ViewStore';
import { Layout } from "../base/layout";
import { Search } from "../Shearch/Search";
import { Grid } from "@material-ui/core";
import { CounterCell } from "../CounterCell/CounterCell";
import StoreModels from "../../models/storeModel";
import { useSelector, useDispatch } from "react-redux";
import { ViewStoreAction } from "./ViewStoreAction";
import { Modal } from "../Modal/Modal";
import {
  updateLoader,
  updateLoaderRefresh
} from "../../redux/action/globalsActions";
import Loader from "../Loader/Loader";
import { ViewRefresh } from "./ViewRefresh";

export const Store = props => {
  const loaderState = useSelector(state => state.globals);
  // console.log("loaderState:", loaderState);

  const dispatch = useDispatch();
  const model = new StoreModels(useSelector(state => state.globals));
  const [open, setOpen] = useState(false);
  const [inputCupsSelected, setInputCupsSelected] = useState(false);
  const [exampleSelected, setExampleSelected] = useState(false);
  const [dataCounter, setDataCounter] = useState([]);
  const [dataCounterSelected, setDataCounterSelected] = useState([]);
  const [valueTextModalAdd, setValueTextModalAdd] = useState("");
  const [valuesDataCounter, setValuesDataCounter] = useState({
    titleItems: 0,
    countItems: 0
  });

  useEffect(() => {
    listDataCounter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /*get*/
  const listDataCounter = async (count = false) => {
    dispatch(!loaderState.loaderRefresh && updateLoader(true));
    const data = await model.getData();
    // console.log("data ===>>>", Object.keys(data).length, data);
    if (data) {
      setDataCounter(data);
      // updateDataSlected(data);
      lengthDataCounter(data);
      // setTimeout(() => {
      dispatch(!loaderState.loaderRefresh && updateLoader(false));
      // }, 1000);
    }
  };

  /*get*/

  /*post*/
  const newCounter = async val => {
    if (!val) return;
    dispatch(updateLoader(true));
    const data = { title: val };
    const result = await model.postData(data);
    if (result.status === 200) {
      handleClose();
      setValueTextModalAdd("");
      listDataCounter();
      dispatch(updateLoader(false));
    } else {
      dispatch(updateLoader(false));
      console.log("activar alert fallido", result);
    }
  };
  const handleCount = async (id, action) => {
    dispatch(updateLoaderRefresh(true));
    const data = { id };
    const response = await model.postData(data, action);
    if (response.status === 200) {
      listDataCounter("count");
      dispatch(updateLoaderRefresh(false));
    } else {
      dispatch(updateLoaderRefresh(false));
      console.log("activar alert fallido", response);
    }
  };
  /*post*/
  /*delete*/
  const _delete = async data => {
    const response = await model.deleteData(data);
    if (response) {
      setDataCounterSelected([]);
    }
    listDataCounter();
  };

  const deleteCounter = async () => {
    dataCounterSelected.map(item => {
      const data = { id: item.id };
      return _delete(data);
      // return response;
      // return console.log('preparado para borrar',item.id);
    });
  };
  /*delete*/

  const lengthDataCounter = data => {
    // console.log(data);
    let titleItems = data.length;
    let countItems = 0;
    data.length > 0 &&
      data.map(item => {
        return (countItems += item.count);
      });
    setValuesDataCounter({
      ...valuesDataCounter,
      titleItems,
      countItems
    });
  };

  const selectedCell = async id => {
    const dataFiltred = dataCounter.find(item => {
      return id === item.id;
    });
    setDataCounterSelected(dataCounterSelected => [
      ...dataCounterSelected,
      dataFiltred
    ]);
  };


  const verifyFindCounter = id => {
    const dataSelected = dataCounterSelected.find(item => {
      return item.id === id;
    });
    return dataSelected ? "cellActive" : "cell";
  };

  const openModal = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setExampleSelected(false);
  };
  const actionModalSave = () => {
    console.log("hola");
  };

  return (
    <>
      <Layout>
        <Grid
          container
          direction="column"
          justify="space-around"
          alignItems="center"
        >
          <Grid item style={{ maxWidth: 379, width: "100%" }}>
            <br />
            <Search />
          </Grid>
        </Grid>
        <Grid
          container
          direction="column"
          justify="space-around"
          alignItems="center"
          // style={{ height: "100%" }}
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
                      <p className="largeTitle"> No counters yet</p>
                      <p className="subTitle">
                        <span>
                          “When I started counting my blessings, my whole life
                          turned around.” —Willie Nelson
                        </span>
                      </p>
                    </Grid>
                  </Grid>
                ) : (
                  <>
                    <br />
                    {dataCounter.map((item, i) => {
                      return (
                        <div key={i}>
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
        <ViewStoreAction
          openModal={openModal}
          dataCounterSelected={dataCounterSelected}
          setDataCounterSelected={setDataCounterSelected}
          deleteCounter={deleteCounter}
        />
        <Modal
          handleClose={handleClose}
          open={open}
          actionModalSave={actionModalSave}
          inputCupsSelected={inputCupsSelected}
          setInputCupsSelected={setInputCupsSelected}
          exampleSelected={exampleSelected}
          setExampleSelected={setExampleSelected}
          newCounter={newCounter}
          valueTextModalAdd={valueTextModalAdd}
          setValueTextModalAdd={setValueTextModalAdd}
        />
      </Layout>
    </>
  );
};

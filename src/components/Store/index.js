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
import updateLoader from "../../redux/action/globalsActions";
import Loader from "../Loader/Loader";

export const Store = props => {
  const loaderState = useSelector(state => state.globals.loader);
  console.log("loaderState:", loaderState);

  const dispatch = useDispatch();
  const model = new StoreModels(useSelector(state => state.globals));
  const [open, setOpen] = useState(false);
  const [inputCupsSelected, setInputCupsSelected] = useState(false);
  const [exampleSelected, setExampleSelected] = useState(false);
  const [dataCounter, setDataCounter] = useState([]);
  const [dataCounterSelected, setDataCounterSelected] = useState([]);

  /*get*/
  const listDataCounter = async () => {
    dispatch(updateLoader(true));
    const data = await model.getData();
    console.log("data ===>>>",Object.keys(data).length , data);
    if (data) {
      setTimeout(() => {
        dispatch(updateLoader(false));
      }, 1000);
    }
    setDataCounter(data);
  };

  /*get*/

  /*post*/
  const newCounter = async val => {
    if (!val) return;
    dispatch(updateLoader(true));
    const data = { title: val };
    const result = await model.postData(data);
    if (result.status === 200) {
      // handleClose();
      listDataCounter();
      dispatch(updateLoader(false));
    } else {
      dispatch(updateLoader(false));
      console.log("activar alert fallido", result);
    }
  };
  const handleCount = async (id, action) => {
    const data = { id };
    const response = await model.postData(data, action);
    if (response.status === 200) {
      listDataCounter();
      dispatch(updateLoader(false));
    } else {
      dispatch(updateLoader(false));
      console.log("activar alert fallido", response);
    }
  };
  /*post*/
  useEffect(() => {
    listDataCounter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
  console.log("dataCounterSelected: ", dataCounterSelected);

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
          <Grid
            item
            style={{ maxWidth: "570px", width: "100%", marginBottom: "90px" }}
          >
            {!open && loaderState ? (
              <div className={"containerLoader"}>
                <Loader />
              </div>
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
          </Grid>
        </Grid>
        <ViewStoreAction openModal={openModal} />
        <Modal
          handleClose={handleClose}
          open={open}
          actionModalSave={actionModalSave}
          inputCupsSelected={inputCupsSelected}
          setInputCupsSelected={setInputCupsSelected}
          exampleSelected={exampleSelected}
          setExampleSelected={setExampleSelected}
          newCounter={newCounter}
        />
      </Layout>
    </>
  );
};

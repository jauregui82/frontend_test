import React, { useState, useEffect } from "react";
import { Layout } from "../base/layout";
import StoreModels from "../../models/storeModel";
import { useSelector, useDispatch } from "react-redux";
import { ViewStoreAction } from "./ViewStoreAction";
import { Modal } from "../Modal/Modal";
import {
  updateLoader,
  updateLoaderRefresh,
  modalCopy,
  modalAlertContent,
  modalAlert
} from "../../redux/action/globalsActions";
import { Alert } from "../Alert/Alert";
import { ViewStoreContent } from "./ViewStoreContent";

export const Site = props => {
  const loaderState = useSelector(state => state.globals);
  const model = new StoreModels(useSelector(state => state.globals));
  const dispatch = useDispatch();
  const setOpenCopy = show => dispatch(modalCopy(show));
  const [open, setOpen] = useState(false);
  const [searchSelected, setSearchSelected] = useState(false);
  const [inputCupsSelected, setInputCupsSelected] = useState(false);
  const [exampleSelected, setExampleSelected] = useState(false);
  const [dataCounter, setDataCounter] = useState([]);
  const [dataCounterSearh, setDataCounterSearh] = useState([]);
  const [dataCounterSelected, setDataCounterSelected] = useState([]);
  const [valueTextModalAdd, setValueTextModalAdd] = useState("");
  const [valuesDataCounter, setValuesDataCounter] = useState({
    titleItems: 0,
    countItems: 0
  });
  const [valueSearch, setValueSearch] = useState("");

  useEffect(() => {
    listDataCounter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (searchSelected) {
      setDataCounterSearh(dataCounter);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchSelected]);

  const verifyLoader = val => {
    if (!val) dispatch(updateLoader(true));
  };
  /*get*/
  const listDataCounter = async (count = false) => {
    verifyLoader(count);
    const data = await model.getData();
    if (data) {
      setDataCounter(data);
      lengthDataCounter(data);
      dispatch(!loaderState.loaderRefresh && updateLoader(false));
      setValueSearch("");
      setSearchSelected(false);
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
      listDataCounter();
      dispatch(updateLoader(false));
    } else {
      dispatch(updateLoader(false));
      setOpen(false);
      const title = `Couldn’t create counter`;
      handleAlerErrorAddCountOrDelete("none", title);
    }
  };
  const handleCount = async (id, text, action) => {
    dispatch(updateLoaderRefresh(true));
    const data = { id };
    const response = await model.postData(data, action);
    if (response.status === 200) {
      listDataCounter("count");
      dispatch(updateLoaderRefresh(false));
    } else {
      dispatch(updateLoaderRefresh(false));
      const title = `Couldn’t update ${text} to 1`;
      handleAlerErrorAddCountOrDelete("handleCount", title, id, action, text);
    }
  };
  /*post*/
  /*delete*/
  const _delete = async data => {
    const response = await model.deleteData(data);
    if (response) {
      setDataCounterSelected([]);
      listDataCounter();
    } else {
      const argTitle =
        dataCounterSelected.length === 1
          ? dataCounterSelected[0].title
          : dataCounterSelected.length;
      const title = `Couldn’t delete “${argTitle}” `;
      handleAlerErrorAddCountOrDelete("handleDeleteCounter", title);
    }
  };

  const handleDeleteCounter = async () => {
    dataCounterSelected.map(item => {
      const data = { id: item.id };
      return _delete(data);
    });
  };
  /*delete*/
  const deleteCounter = async () => {
    const argTitle =
      dataCounterSelected.length === 1
        ? dataCounterSelected[0].title
        : dataCounterSelected.length;
    const title =
      argTitle > 1
        ? `Delete ${argTitle} counters?`
        : `Delete the “${argTitle}” counter?`;
    const content = {
      title,
      subTitle: "This cannot be undone.",
      actionAcept: "handleDeleteCounter",
      actionCancel: "",
      actionNameAcept: "",
      actionNameCancel: "",
      claseAcept: "btnAlertDelete",
      claseCancel: "btnAlertCancel",
      textAcept: "Delete",
      textCancel: "Cancel"
    };

    dispatch(modalAlertContent(content));
    dispatch(modalAlert(true));
  };

  const handleAlerErrorAddCountOrDelete = (
    actionCancel,
    title,
    id = 0,
    action = "",
    text = ""
  ) => {
    dispatch(modalAlert(false));
    const content = {
      title,
      subTitle: "The Internet connection appears to be offline.",
      actionAcept: "",
      actionCancel,
      actionNameAcept: "",
      actionNameCancel: `${id}, ${text}, ${action}`,
      claseAcept: "btnAlertErrorCancel",
      claseCancel: "btnAlertDelete",
      textAcept: "Dismiss",
      textCancel: "Retry"
    };

    dispatch(modalAlertContent(content));
    dispatch(modalAlert(true));
  };

  const lengthDataCounter = data => {
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
    let dataFiltred = [];
    if (verifyFindCounterSelected(id)) {
      dataFiltred = dataCounterSelected.filter(item => {
        return id !== item.id;
      });
      setDataCounterSelected(dataFiltred);
    } else {
      dataFiltred = dataCounter.find(item => {
        return id === item.id;
      });
      setDataCounterSelected(dataCounterSelected => [
        ...dataCounterSelected,
        dataFiltred
      ]);
    }
  };

  const verifyFindCounterSelected = id => {
    return dataCounterSelected.find(item => {
      return id === item.id;
    });
  };
  const verifyFindCounter = id => {
    const dataSelected = dataCounterSelected.find(item => {
      return item.id === id;
    });
    return dataSelected ? "cellActive" : "cell";
  };

  const openModal = () => {
    setValueTextModalAdd("");
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setExampleSelected(false);
  };
  const handleDataForCopy = () => {
    const text = dataCounterSelected
      .map(item => `${item.count} X ${item.title}`)
      .join("\n");
    return text;
  };
  const copySelected = () => {
    var aux = document.createElement("input");
    aux.setAttribute("value", handleDataForCopy());
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
    setTimeout(() => {
      setOpenCopy(false);
    }, 500);
  };
  const handleChangeSearch = val => {
    if (val.length === 0) {
      setDataCounter(dataCounterSearh);
      return;
    }
    let datafilter = dataCounter;
    datafilter = datafilter.filter(item => {
      let title = item.title.toLowerCase();
      return title.indexOf(val.toLowerCase()) !== -1;
    });
    setDataCounter(datafilter);
  };
  const handleClearSearch = () => {
    setDataCounter(dataCounterSearh);
  };

  return (
    <>
      <Layout>
        <ViewStoreContent
          dataCounter={dataCounter}
          valuesDataCounter={valuesDataCounter}
          loaderState={loaderState}
          dataCounterSelected={dataCounterSelected}
          searchSelected={searchSelected}
          valueSearch={valueSearch}
          setSearchSelected={setSearchSelected}
          handleChangeSearch={handleChangeSearch}
          handleClearSearch={handleClearSearch}
          setValueSearch={setValueSearch}
          setDataCounterSelected={setDataCounterSelected}
          verifyFindCounter={verifyFindCounter}
          selectedCell={selectedCell}
          handleCount={handleCount}
          open={open}
        />
        <ViewStoreAction
          openModal={openModal}
          dataCounterSelected={dataCounterSelected}
          setDataCounterSelected={setDataCounterSelected}
          deleteCounter={deleteCounter}
          copySelected={copySelected}
        />
        <Modal
          handleClose={handleClose}
          open={open}
          inputCupsSelected={inputCupsSelected}
          setInputCupsSelected={setInputCupsSelected}
          exampleSelected={exampleSelected}
          setExampleSelected={setExampleSelected}
          newCounter={newCounter}
          valueTextModalAdd={valueTextModalAdd}
          setValueTextModalAdd={setValueTextModalAdd}
        />
        <Alert
          handleDeleteCounter={handleDeleteCounter}
          handleCount={handleCount}
        />
      </Layout>
    </>
  );
};

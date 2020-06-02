import React from 'react';
// import {ViewStore} from './ViewStore';
// import Loader from '../Loader/loader';
import { Layout } from '../base/layout';
import { Search } from '../Shearch/Search';
import { Grid } from '@material-ui/core';
import { CounterCell } from '../CounterCell/CounterCell';
import StoreModels from '../../models/storeModel';
// import { useSelector, useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { ViewStoreAction } from './ViewStoreAction';


export const Store = (props) => {
    const loader = useSelector(state => state.globals);
    console.log(props);
    console.log('=======>>>>> *****', loader);
    const model = new StoreModels(useSelector(state => state.globals));
    const selectedCell = async () =>{
        const data = await model.getData('')
        console.log('data===>>>', data);
    }

    // useEffect(()=>{
        
    // })

    return(
        <>
            <Layout >
                <Grid
                    container
                    direction="column"
                    justify="space-around"
                    alignItems="center"
                >
                    <Grid item style={{maxWidth:379, width: '100%'}}>
                        <br />
                        <Search />
                    </Grid>
                    <Grid item style={{maxWidth: '570px', width: '100%'}}>
                        <br />
                            <CounterCell clase={'cell'} textCell={'xxxxxxxxxxxxxxxxx'} selectedCell={selectedCell}/>
                            <CounterCell clase={'cellActive'} textCell={'xxxxxxxxxxxxxxxxx'} selectedCell={selectedCell}/>
                    </Grid>
                </Grid>
                {/* <div className={classes.footerContainer}> */}
                <ViewStoreAction />
                {/* <Loader /> */}
            </Layout>
        </>
    )
} 
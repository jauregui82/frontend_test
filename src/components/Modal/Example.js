import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {  Chip } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  title: {
    flex: 1,
    color: '#000000',
    fontWeight: 'bold',
    marginLeft: 0,
  },
  chip: {
    padding: '8px 18px',
    background: '#ECECEC',
    border: '1px solid #DCDCDF',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: 99,
    margin: '8px 8px 30px 0px',
    cursor: 'pointer',
    height: 40,
    fontSize: 17,
    fontWeight: 'bold',
  },
  textExample: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 15,
    color: '#888B90',
  },
}));

const data= [
    {
        title: 'Drinks',
        products:[ 
            {title: 'Cups of Coffee'},
            {title: 'Glasses of water'},
            {title: 'Martinis'},
            {title: 'Vodka'},
            {title: 'Ron'},
        ],
    },
    {
        title: 'Food',
        products:[ 
            {title: 'Hot-dogs'},
            {title: 'Cupcakes eaten'},
            {title: 'Chicken wings'},
        ],
    },
    {
        title: 'Misc',
        products:[ 
            {title: 'Times sneezed'},
            {title: 'Naps'},
            {title: 'Day dreaming'},
        ],
    },
]


export const Example = () => {
  const classes = useStyles();
//   const title = (key) => {

//   }

  return (
    <div style={{padding: '1rem'}}>
        <span className={classes.textExample}>Select an example to add it to your counters.</span>
        {data.map((item)=>{
            return (
                <div key={item.title} style={{padding: '1.5rem 0 0 0'}}>
                    <span  className={classes.title}>{item.title}</span> 
                    <br/>
                    <div className={'contentChips'}>
                        <div style={{width: 'max-content'}}>
                            {item.products.map((val, index)=>
                                <Chip key={index} label={val.title} className={classes.chip} onClick={()=>console.log(item.title, val.title)} />
                            )}
                        </div>
                    </div>
            </div>)
        })}
    </div>
  );
}

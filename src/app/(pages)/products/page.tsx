import React from 'react';
import classes from "./index.module.scss";
import { Gutter } from '../../_components/Gutter';
import Filters from './Filters';

const Products = () => {
  return (
    <div className={classes.container}>
        <Gutter className={classes.products} >
                <Filters />
        </Gutter>
    </div>
  )
}

export default Products
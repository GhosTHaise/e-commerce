"use client"
import React from 'react';

import classes from "./index.module.scss";
import { useFilter } from '../../../_providers/Filter';
import { Category } from '../../../../payload/payload-types';

const Filters = ({categories} : {categories : Category[]}) => {
  const { categoryFilters,setCategoryFilters,sort,setSort} = useFilter();

  const handleCategories = (categoryId : string) => {

  }

  return (
    <div className={classes.filters }>
      <h6 className={classes.title}>
          Product Categories
      </h6>
      <div className={classes.categories}>
          {
            categories.map((category : Category) => {
              const isSelected = false;
              return <div></div>
            })
          }
      </div>
    </div>
  )
}

export default Filters
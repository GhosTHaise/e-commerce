"use client"
import React from 'react';

import classes from "./index.module.scss";
import { useFilter } from '../../../_providers/Filter';
import { Category } from '../../../../payload/payload-types';
import Checkbox from '../../../_components/Checkbox';
import { HR } from '../../../_components/HR';

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
              const isSelected = categoryFilters.includes(category.id);
              return <Checkbox 
                key={category.id}
                label={category.title}
                value={category.id}
                isSelected={isSelected}
                onClickHandler={handleCategories}
              />
            })
          }
      </div>
      <HR />
      <h6 className={classes.title}>
          Sort by
      </h6>
      <div className={classes.categories}>
          
      </div>
    </div>
  )
}

export default Filters
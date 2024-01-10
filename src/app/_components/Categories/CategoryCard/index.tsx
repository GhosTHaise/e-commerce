"use client"
import React from 'react'
import classes from "./index.module.scss"
import { Category, Media } from '../../../../payload/payload-types'
import Link from 'next/link'
import { useFilter } from '../../../_providers/Filter'

type CategoryCard = {
    category : Category
}
const CategoryCard = ({category} : CategoryCard) => {
    const media = category.media as Media;
    const { setCategoryFilters } = useFilter()
  return (
    <Link 
        className={classes.card} 
        style={{ backgroundImage : `url(${media.url})`}}
        href={"/products"}
        onClick={() => setCategoryFilters([category.id])}    
    >
        <p className={classes.title}>
            {category.title}
        </p>
    </Link>
  )
}

export default CategoryCard
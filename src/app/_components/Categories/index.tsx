import React from 'react'
import { Category } from '../../../payload/payload-types'
import classes from "./index.module.scss"

type CategoriesProps = {
    categories : Category[]
}
const Categories = ({categories} : CategoriesProps) => {
  return (
    <section className={classes.container}>
        <div className={classes.titleWrapper}>
            <h3>
                Shop by Categories
            </h3>
        </div>
    </section>
  )
}

export default Categories
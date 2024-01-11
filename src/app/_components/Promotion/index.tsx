import React from 'react'
import classes from "./index.module.scss"

const Promotion = () => {
  return (
    <section className={classes.promotion}>
        <div className={classes.textBox}>
            <h3>
                Deals of the Month
            </h3>
            <p>
              Get ready for a shopping experience like never before with our Deals of the Month! Every
              purchase comes with exclusive perks and offers, making this month a celebration of savvy
              choices and amazing deals. Don't miss out! 🎁🛒
            </p>
            <ul className={classes.stats}>
                <li className={classes.statBox}>
                    <h4>5</h4>
                    <p>Days</p>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default Promotion
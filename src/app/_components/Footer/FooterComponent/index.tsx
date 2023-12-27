import React from 'react'
import { Footer } from '../../../../payload/payload-types'
import classes from "./index.module.scss"

type FooterComponentProps = {
    footer : Footer
}
const FooterComponent = ({footer} : FooterComponentProps) => {
  return (
    <div>FooterComponent</div>
  )
}

export default FooterComponent
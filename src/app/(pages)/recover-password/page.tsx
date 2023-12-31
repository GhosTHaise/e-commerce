import React from 'react'
import { Metadata } from 'next'

import { mergeOpenGraph } from '../../_utilities/mergeOpenGraph'
import { RecoverPasswordForm } from './RecoverPasswordForm'

import classes from './index.module.scss'
import Image from 'next/image'
import Link from 'next/link'

export default async function RecoverPassword() {
  return (
    <section className={classes.recoverPassword} >
      <div className={classes.heroImg}>
          <Link href="/">
              <Image
                src="/logo-black.svg"
                alt='logo'
                width={250}
                height={23}
                className={classes.logo}
              />
          </Link>
      </div>

      <div className={classes.formWrapper}>
        <div className={classes.formContainer}>

          <div className={classes.formTitle}>
              <h3>
                Welcome
              </h3>
              <Image 
                  src="/assets/icons/hand.png"
                  alt='hand'
                  width={30}
                  height={30}
              />
          </div>

          <p>Please login here</p>

          <RecoverPasswordForm />
        </div>
      </div>
    </section>
  )
}

export const metadata: Metadata = {
  title: 'Recover Password',
  description: 'Enter your email address to recover your password.',
  openGraph: mergeOpenGraph({
    title: 'Recover Password',
    url: '/recover-password',
  }),
}

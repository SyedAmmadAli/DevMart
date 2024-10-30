import React from 'react'
import { AuthLayout } from '../../components/layouts/auth-layout'
import { TextInputs } from '../../components/inputs/text-inputs'
import styles from "./auth.module.scss"
import { Link } from 'react-router-dom'
import { PrimaryButton } from '../../components/buttons/primary-button'

export const Login = () => {

  const onSubmitLogin = (e) => {
    e.preventDefault();
  }

  return (
    <AuthLayout>
      <div>
        <h1 className='auth_heading'>Log into Dev Mart</h1>
        <p className='auth_title mt-3'>Enter your details below</p>
        <form action="">
          <TextInputs styles={{ marginTop: '18px' }} placeholder="Email or Phone Number" type="email" />
          <TextInputs styles={{ marginTop: '18px', marginBottom: '5px' }} placeholder="Password" type="password" />
          <small><Link className={styles.forget_password_link} to='/auth/login'>Forget Password</Link></small>
          <div className={styles.button_wrapper}>
            <PrimaryButton loading={false} disabled={false} onClick={onSubmitLogin}>Log In</PrimaryButton>
          </div>
          <span>Create a new account? <Link className={styles.login_link} to='/auth/signup'>Sign Up</Link></span>
        </form>

      </div>
    </AuthLayout>
  )
}

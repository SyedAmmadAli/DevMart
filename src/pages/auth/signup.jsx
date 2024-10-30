import React from 'react'
import { AuthLayout } from '../../components/layouts/auth-layout'
import { TextInputs } from '../../components/inputs/text-inputs'
import { Link } from 'react-router-dom'
import { PrimaryButton } from '../../components/buttons/primary-button'
import styles from "./auth.module.scss"


export const Signup = () => {

  const onSubmitSignUp= (e)=>{
    e.preventDefault();
  }

  return (
    <>
    <AuthLayout>
      <div>
          <h1 className='auth_heading'>Create an Account</h1>
          <p className='auth_title mt-3'>Enter your details below</p>
        <form action="">
          <TextInputs styles={{ }} placeholder="Name" type="text"/>
          <TextInputs styles={{ marginTop: '18px' }}  placeholder="Email or Phone Number" type="email"/>
          <TextInputs styles={{ marginTop: '18px' }}  placeholder="Password" type="password"/>
          <div className={styles.button_wrapper}>
          <PrimaryButton loading={false} disabled={false} onClick={onSubmitSignUp}>Create Account</PrimaryButton>
          </div>
        </form>

        <span>Already have an account? <Link className={styles.login_link} to='/auth/login'>Login</Link></span>
      </div>
    </AuthLayout>
    </>
  )
}

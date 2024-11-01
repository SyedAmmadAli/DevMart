import React, { useState } from 'react'
import { AuthLayout } from '../../components/layouts/auth-layout'
import { TextInputs } from '../../components/inputs/text-inputs'
import styles from "./auth.module.scss"
import { Link, useNavigate } from 'react-router-dom'
import { PrimaryButton } from '../../components/buttons/primary-button'
import { Helpers } from '../../services/helpers'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addUser } from '../../redux/feature/user-slice'


export const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({ email: "", password: "" })
  const [loader, setLoader] = useState(false);
  const [authError, setAuthError] = useState("")
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const onSubmitLogin = async (e) => {


    e.preventDefault();

    let emailError, passworderror = '';

    if (!Helpers.validateEmail(email)) {
      emailError = 'Invalid Email'
    }
    
    if (!Helpers.validatePassword(password)) {
      passworderror = 'Password must be atleast 8 characters'
    }

    if (emailError || passworderror) {
      setError({ email: emailError, password: passworderror })
    } else {

      setLoader(true);
      try {

        const payload = { email, password }
        const response = await axios.post("https://dev-mart-server.vercel.app/api/user/login", payload)
        console.log(response?.data?.data, ">>> login Response");
        dispatch(addUser(response?.data?.data))
        setError({ email: "", password: "" });
        navigate("/")
        setLoader(false);

      } catch (error) {
        console.log(error);
        console.log(error?.response?.data?.message);
        setAuthError(error?.response?.data?.message)
        setLoader(false);
      }

    }

  }

  return (
    <AuthLayout>
      <div>
        <h1 className='auth_heading'>Log into Dev Mart</h1>
        <p className='auth_title mt-3'>Enter your details below</p>

        <form action="">

          <TextInputs
            styles={{ marginTop: '18px' }}
            placeholder="Email or Phone Number"
            type="email"
            value={email}
            onChange={setEmail}
            required
            err_msg={error.email} />

          <TextInputs styles={{ marginTop: '18px', marginBottom: '5px' }}
            placeholder="Password"
            type="password"
            value={password}
            onChange={setPassword}
            required
            err_msg={error.password} />

          <small><Link className={styles.forget_password_link} to='/auth/login'>Forget Password</Link></small>
          <div className={styles.button_wrapper}>
            {authError && <div className="text-end text-danger"><small>{authError}</small></div>}
            <PrimaryButton loading={loader} disabled={loader} onClick={onSubmitLogin}>Log In</PrimaryButton>
          </div>
          <span>Create a new account? <Link className={styles.login_link} to='/auth/signup'>Sign Up</Link></span>
        </form>

      </div>
    </AuthLayout>
  )
}

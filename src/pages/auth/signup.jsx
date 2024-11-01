import React, { useState } from 'react'
import { AuthLayout } from '../../components/layouts/auth-layout'
import { TextInputs } from '../../components/inputs/text-inputs'
import { Link, useNavigate } from 'react-router-dom'
import { PrimaryButton } from '../../components/buttons/primary-button'
import styles from "./auth.module.scss"
import { Helpers } from '../../services/helpers'
import axios from 'axios'


export const Signup = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setError] = useState({ name: '', email: '', password: '' });
  const [authError, setAuthError] = useState("");
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();




  const onSubmitSignUp = async (e) => {
    e.preventDefault();


    let emailError, passwordError, nameError = '';

    if (!Helpers.validateName(name)) {
      nameError = 'Name must be atleast 3 characters'
    }
    if (!Helpers.validateEmail(email)) {
      emailError = 'Invalid Email'
    }
    if (!Helpers.validatePassword(password)) {
      passwordError = 'Password must be atlease 8 characters'
    }

    if (nameError || emailError || passwordError) {
      setError({ name: nameError, email: emailError, password: passwordError });
    } else {
      setLoader(true);
      try {

        const payload = { name, email, password }
        const response = await axios.post('https://dev-mart-server.vercel.app/api/user/signup', payload);
        console.log(response);
        navigate('/auth/login');
        setLoader(false);

      } catch (error) {
        console.log(error)
        console.log(error?.response?.data?.message);
        setAuthError(error?.response?.data?.message);
        setLoader(false);
      }
    }

  }

  return (
    <>
      <AuthLayout>
        <div>
          <h1 className='auth_heading'>Create an Account</h1>
          <p className='auth_title mt-3'>Enter your details below</p>
          <form action="">

            <TextInputs styles={{}}
              placeholder="Name"
              type="text"
              value={name}
              onChange={setName}
              required
              err_msg={errors.name} />

            <TextInputs styles={{ marginTop: '18px' }}
              placeholder="Email or Phone Number"
              type="email"
              value={email}
              onChange={setEmail}
              required
              err_msg={errors.email}
            />

            <TextInputs styles={{ marginTop: '18px' }}
              placeholder="Password"
              type="password"
              value={password}
              onChange={setPassword}
              required
              err_msg={errors.password}
            />


            <div className={styles.button_wrapper}>
              {authError && <div className="text-end text-danger"><small>{authError}</small></div>}
              <PrimaryButton loading={loader} disabled={loader} onClick={onSubmitSignUp}>Create Account</PrimaryButton>
            </div>
          </form>

          <span>Already have an account? <Link className={styles.login_link} to='/auth/login'>Login</Link></span>
        </div>
      </AuthLayout>
    </>
  )
}

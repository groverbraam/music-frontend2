import axios from 'axios';
import { useRef, useState, useEffect, useContext } from 'react'
import AuthContext from '../contexts/AuthProvider'




const Login = (props) => {


    const { setAuth } = useContext(AuthContext)
    const usesrRef = useRef();
    const errRef = useRef();

    let emptyUser = { username: '', password: ''}
    const [user, setUser] = useState(emptyUser)
    const [errMsg, setErrMsg] = useState('')


    const handleChange = (event) => {
        setUser({...user, [event.target.name]: event.target.value})
    }


    const handleSubmit = async (event) => {
        event.preventDefault()
        console.log(user)
        props.handleLogin(user)
    }

    // const handleLogin = (event) => {
    //     axios
    //         .put('https://glacial-wave-24104.herokuapp.com/api/useraccount/login')
    //         .then((response) => {
    //             console.log(response)
    //         })
    //
    // }

    return (
        <>
        <div className = 'logoName'>
          <img className = 'logo' src = 'https://i.imgur.com/bZRUMGT.png'></img>
          <div className = 'appName'>Music App</div>
        </div>
        <div className = 'loginBody'>
        <section className="login-box">
        <h1>Login</h1>
        <form className = 'loginForm' onSubmit={handleSubmit}>
        <div className = 'loginDiv'>
        <label htmlFor="username">Username:</label>
        <input
        type="text"
        name="username"
        onChange={handleChange}
        value={user.username}
        placeholder = 'Enter your username...'
        className = 'loginInput'
        required
        />
        </div>
        <div className = 'loginDiv'>
        <label htmlFor="password">Password:</label>
        <input
        type="password"
        name="password"
        onChange={handleChange}
        value={user.password}
        placeholder = 'Enter your password...'
        className = 'loginInput'
        required
        />
        </div>
        <button className = 'signinButton'>Sign In</button>
        </form>

        </section>

      </div>
    </>
  )

}

export default Login

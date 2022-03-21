import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import axios from 'axios'
import Add from './components/Add'
import Edit from './components/Edit'

import Register from './components/Register'

import Euphoria from './assets/kalidescope.mp3'
import './App.css';
import ReactPlayer from 'react-player'
import User from './components/User'
import Songs from './components/Songs'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Signup from './components/Signup'
import Account from './components/Account'
import Cart from './components/Cart'
import Show from './components/Show'

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
  useParams
} from "react-router-dom";


const App = () => {

  const [songs, setSongs] = useState([])
  const [users, setUsers] = useState([])
  const [accountInfo, setAccountInfo] = useState([])
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [currentUser, setCurrentUser] = useState({})
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [toggleLogin, setToggleLogin] = useState(true)
  const [toggleError, setToggleError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [toggleLogout, setToggleLogout] = useState(false)


  // const [isPlaying, setIsPlaying] = useState(false);
  // const [url, setUrl] = useState(null)
  // const [controls, setControls] = useState(true)
  // const [volume, setVolume] = useState(0.7)
  // const [muted, setMuted] = useState(false)
  // const [played, setPlayed] = useState(0)
  // const [play, setPlay] = useState(null)
  // const [pause, setPause] = useState(null)
  // const [duration, setDuration] = useState(0)
  // const [loop, setLoop] = useState(false)

  const handleSubmitLogin = async (event) => {
    event.preventDefault()
    try {
      axios
        .put('http://localhost:8000/api/useraccount/login', ({ username, password }))
        .then((response) => {
          console.log(response.data)
          setCurrentUser(response.data)
          setIsAuthenticated(true)
        })
    } catch (err) {
      setErrorMessage(err)
    }
    //console.log(user, password)  
    // handleLogin(event)
  }

  const handleLogout = (event) => {
    setPassword('')
    setUsername('')
    setCurrentUser({})
    setIsAuthenticated(false)
  }

  const getAccountInfo = () => {
    axios
      .get('https://glacial-wave-24104.herokuapp.com/api/accounts')
      .then(
        (response) => setSongs(response.data),
        (err) => console.error(err)
      )
      .catch((error) => console.error(error))
  }

  const getUser = () => {
    axios
      .get('https://glacial-wave-24104.herokuapp.com/api/users')
      .then(
        (response) => setUsers(response.data),
        (err) => console.error(err)
      )
      .catch((error) => console.error(error))
  }

  useEffect(() => {
    getSong()
  }, [])

  const getSong = () => {
    axios
      .get('https://glacial-wave-24104.herokuapp.com/api/songs')
      .then(
        (response) => setSongs(response.data),
        (err) => console.error(err)
      )
      .catch((error) => console.error(error))
  }

  const handleDelete = (event) => {
    axios
      .delete('https://glacial-wave-24104.herokuapp.com/api/songs/' + event.target.value)
      .then((response) => {
        getSong()
      })
  }

  const handleUpdate = (editSong) => {
    console.log(editSong.id)
    axios
      .put('https://glacial-wave-24104.herokuapp.com/api/songs/' + editSong.id, editSong)
      .then((response) => {
        getSong()
      })
  }
  const handleCreateUser = (addUser) => {
    axios
      .post('https://glacial-wave-24104.herokuapp.com/api/users', addUser)
      .then((response) => {
        console.log(response)
        getUser()
      })
  }

  const handleCreateAccount = (addAccountInfo) => {
    axios.post('https://glacial-wave-24104.herokuapp.com/api/accounts', addAccountInfo)
      .then((response) => {
        getAccountInfo()
      })
  }

  const handleCreateSong = (addSong) => {
    axios
      .post('https://glacial-wave-24104.herokuapp.com/api/songs', addSong)
      .then((response) => {
        console.log(response)
        getSong()
      })
  }

  return (
    <>
      <h1>Music App</h1>

      {isAuthenticated ? (
        <>
          <div className='navbarDiv'>
            <h1>insert cool title here</h1>
            <nav className='navBar'>
              <Link className='link' to="/songs">Home</Link>
              <Link className='link' to='/new'>Add Song</Link>
              <Link className='link' to='/account'>Account Details</Link>
              <Link className='link' to='/cart'>Your Cart</Link>
              <button onClick={handleLogout}>Log out</button>
            </nav>
          </div>
          <div className="wrapper">
            <Routes>
              <Route path="/signup" element={<Signup />} />
              <Route path="/songs" element={<Songs />} />
              <Route path="/account" element={<Account handleCreateAccount={handleCreateAccount} />} />
              <Route path="/cart" element={<Cart />} />
              <Route path='/songs/:id' element={<Show songs={songs} handleUpdate={handleUpdate} />} />
              <Route path="/new" element={<Add handleCreateSong={handleCreateSong} />} />

            </Routes>
          </div>
        </>
      ) : (
        <>
          <section className="login-box">
            <h1>Login</h1>
            <form onSubmit={handleSubmitLogin}>
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                required
              />
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
              />
              <button>Sign In</button>
            </form>
            <p>
              Need an account?<br />
              <span className="line">
                <a href="/createaccount">Sign Up</a>
              </span>
            </p>
          </section>
          <div className="wrapper">
            <Routes>
              <Route path="/createaccount" component={<Signup handleCreateUser={handleCreateUser} />} />
            </Routes>
          </div>
        </>
      )}
    </>
  )
}


export default App;
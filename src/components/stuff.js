<section className = 'loginPage'>
<div className = 'logoName'>
<img className = 'logo' src = 'https://i.imgur.com/bZRUMGT.png'></img>
<div className = 'appName'>Music App</div>
</div>

  <section className="login-box">
    <h1>Login</h1>
    <form className = 'loginForm' onSubmit={handleLogin}>
        <label htmlFor="username">Username:</label>
        <input
        placeholder = 'Username...'
           className = 'loginInput'
            type="text"
            id="username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            required
        /><br/>
        <label htmlFor="password">Password:</label>
        <input
           placeholder = 'Password...'
           className = 'loginInput'
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
        /><br/>
        <button className = 'signinButton'>Sign In</button>
    </form>
    <p className = 'needAccount'>
        Need an account?<br />
        <span className="line">
            <a className = 'signupAnchor' href="/createaccount">Sign Up</a>
        </span>
    </p>
    </section>
    <div className="wrapper">
    <Routes>
      <Route path="/createaccount" component={<Signup handleCreateUser={handleCreateUser} />} />
    </Routes>
  </div>
  </section>
 





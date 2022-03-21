import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Account = (props) => {

  let emptyAccount = { owner: props.currentUser, location: '', favoritegenre: '', image: '', }
  const [account, setAccount] = useState(emptyAccount)
  const [toggleUpdate, setToggleUpdate] = useState(false)
  // const [user, setUser] = useState({ props.currentUser })

  const handleChange = (event) => {
    setAccount({ ...account, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.handleCreateAccount(account)
  }

  const toggleUpdateForm = (event) => {
    if (toggleUpdate) {
      setToggleUpdate(false)
    } else {
      setToggleUpdate(true)
    }
  }

    return (
        <div className = 'accountContainer'>
        <div className = 'accountDetails'>
        <h2>Account Details</h2>
        <img src = {account.image}></img>
        <h4>Name: </h4><div className = 'showStuff'>{props.currentUser.name}</div>
        <h4>Location: </h4><div className = 'showStuff'>{account.location}</div>
        <h4>Favorite genre: </h4><div className = 'showStuff'>{account.favoritegenre}</div>
        </div>

        <button className='signinButton' onClick={toggleUpdateForm}>Update Account Info</button>
        {toggleUpdate ? (
        <>
        <form className = 'accountForm' onSubmit={handleSubmit}>

            <div>
            <label htmlFor="location">Location:</label>
            <input className = 'loginInput' type="text" name="location" value={account.location} onChange={handleChange} placeholder = 'Enter your city...'/>
            </div>
            <br />
            <div>
            <label htmlFor = 'favoritegenre'></label>
            <select className = 'genreMenu' name = 'favoritegenre' id = 'favoritegenre' value = {account.favoritegenre} onChange = {handleChange} required>
                <option value='pop' id='pop'>Pop</option>
                <option value='rock' id='rock'>Rock</option>
                <option value='techno' id='techno'>Techno</option>
                <option value='hiphop' id='hiphop'>Hip-hop</option>


            </select>
            </div>
            <br/>
            <div>
            <label htmlFor="image">Image URL: </label>
            <input className = 'loginInput' type="text" name="image" value={account.image} onChange={handleChange} placeholder = 'Enter the image URL...'/>
            </div>


            <input className = 'submitButton' type="submit" />
            </form>
            </>
      ) : (
          null
      )}
            </div>

    )

}
export default Account

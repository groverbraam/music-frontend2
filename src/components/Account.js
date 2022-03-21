import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Account = (props) => {

    let emptyAccount = { user: '', name: '', location: '', favoritegenre: '', image: '', }
    const [account, setAccount] = useState(emptyAccount)

    const handleChange = (event) => {
      setAccount({ ...account, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
      event.preventDefault()
      props.handleCreateAccount(account)
    }

    return (
        <div>
        <h1>Account Details</h1>
        <img src = {props.image}></img>
        <h4>Name: </h4><div className = 'showStuff'>{props.name}</div>
        <h4>Location: </h4><div className = 'showStuff'>{account.location}</div>
        <h4>Favorite genre: </h4><div className = 'showStuff'>{account.favoritegenre}</div>


        <h2>Update Account Info</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name"></label>
            <input className = 'addInput' type="text" name="name" value={account.name} onChange={handleChange} placeholder = 'Name...'/>
            <br />
            <br />
            <label htmlFor="location"></label>
            <input className = 'addInput' type="text" name="location" value={account.location} onChange={handleChange} placeholder = 'Location...'/>
            <br />
            <br />
            <label htmlFor = 'favoritegenre'></label>
            <select name = 'favoritegenre' id = 'favoritegenre' value = {account.favoritegenre} onChange = {handleChange} required>

                <option value='pop' id='pop'>Pop</option>
                <option value='rock' id='rock'>Rock</option>
                <option value='techno' id='techno'>Techno</option>
                <option value='hiphop' id='hiphop'>Hip-hop</option>

            </select><br/><br/>

            <label htmlFor="image"></label>
            <input className = 'addInput' type="text" name="image" value={account.image} onChange={handleChange} placeholder = 'Image URL...'/>
            <br />
            <br />
            <input className = 'submitButton' type="submit" />
            </form>
        </div>
    )

}
export default Account

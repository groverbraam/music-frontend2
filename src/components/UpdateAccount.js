import react, {useState, useEffect} from 'react'



const UpdateAccount = (props) => {

    let accountDetails = {}
    const [currentUser, setCurrentUser] = useState(props.currentUser)
    const [currentAccount, setCurrentAccount] = useState(accountDetails)

    

    return (
        <>
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
        </>
    )
     
}

export default UpdateAccount
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Add from './Add.js'
import Edit from './Edit.js'
import User from './User.js'
import '../App.css';
import {
    BrowserRouter as Router,
    Switch,
    Routes,
    Route,
    Link,
    useNavigate,
    useParams
} from "react-router-dom";
import Show from './Show.js'


const Songs = (props) => {


    let [songs, setSongs] = useState([])
    let [users, setUsers] = useState([])
    const [filter, setFilter] = useState('')
    let navigate = useNavigate()

    const getSong = () => {
        axios
            .get('https://glacial-wave-24104.herokuapp.com/api/songs')
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

    const handleCreate = (addSong) => {
        axios
            .post('https://glacial-wave-24104.herokuapp.com/api/songs', addSong)
            .then((response) => {
                console.log(response)
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


    useEffect(() => {
        getSong()
    }, [])

    return (
        <>


            <div className='searchDiv'>

                <input className='searchInput' type="text" placeholder="search..." value={filter} onChange={(e) => {
                    e.preventDefault(); setFilter(e.target.value);
                }}
                ></input>
                <img className='search-picshow' src='https://www.freeiconspng.com/thumbs/magnifying-glass-icon/magnifying-glass-icon-13.png'></img>

            </div>


            <div className="songContainer">
                {songs.filter((search) =>
                    search.name.toLowerCase().includes(filter.toLowerCase())).map((song, index) => {

                        if (!song.image) {
                            song.image = 'https://i.imgur.com/D3aOVsJ.png'
                        }
                        if (!song.price) {
                            song.price = '1.29'
                        }
                        return (

                            <>
                                <div>
                                    <Routes>
                                        <Route path='/songs/:id' element={<Show songs={songs} song={song} handleUpdate={handleUpdate} handleDelete={handleDelete} />} />
                                    </Routes>
                                </div>
                                <div className="songCard" key={song.id + index}>
                                    <img onClick={() => {
                                        navigate('/songs/' + song.id
                                        )
                                    }} className='songImage' src={song.image}></img>

                                    <h4 className='name'>{song.name}</h4>

                                    <h5>Artist: {song.artist}</h5>
                                    <h5>Genre: {song.genre}</h5>
                                    <h5>Price: ${song.price}</h5>


                                    <button className='deleteButton' onClick={handleDelete} value={song.id}>
                                        Delete
                                    </button>
                                    {/* <Edit /> */}
                                </div>
                            </>

                        )

                    })}
            </div>
        </>
    )
}
export default Songs

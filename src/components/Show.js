import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import axios from 'axios'
import Edit from './Edit.js'

import {
    Link,
} from "react-router-dom";


const Show = (props) => {
    const params = useParams();
    const [songs, setSongs] = useState([])


    const getSong = () => {
      axios
        .get('https://glacial-wave-24104.herokuapp.com/api/songs')
        .then(
          (response) => setSongs(response.data),
          (err) => console.error(err)
        )
        .catch((error) => console.error(error))
    }

    const handleUpdate = (editSong) => {
      console.log(editSong.id)
      axios
        .put('https://glacial-wave-24104.herokuapp.com/api/songs/' + params.id, editSong)
        .then((response) => {
          getSong()
        })
    }

    const handleDelete = (event) => {
      axios
        .delete('https://glacial-wave-24104.herokuapp.com/api/songs/' + event.target.value)
        .then((response) => {
          getSong()
        })
     }

     useEffect(() => {
        axios.get('https://glacial-wave-24104.herokuapp.com/api/songs/' + params.id)
        .then((response) =>
        setSongs(response.data))
      }, []);


    if (!songs.image) {
        songs.image = 'https://i.imgur.com/D3aOVsJ.png'
    }
    if (!songs.price) {
        songs.price = '1.29'
    }
        return (
          <>
          <h1>song details {params.id}</h1>
          <h2>{songs.name}</h2>
          <h2>{songs.artist}</h2>
          <h2>{songs.genre}</h2>
          <img src = {songs.image}></img>


          <Link to = '/songs'><button className = 'deleteButton' onClick={handleDelete} value={songs.id}>
          Delete
          </button></Link>

          <Edit handleUpdate = {handleUpdate} songs = {songs} setSongs = {setSongs} />

        </>
    )
}

export default Show

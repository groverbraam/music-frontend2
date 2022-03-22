import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Edit from './Edit.js'
import ReactPlayer from 'react-player/lazy'


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
    <div className='showContainer'>
      <img src={songs.image}></img>
      <h2 className='showName'>{songs.name}</h2>
      <h3>{songs.artist}</h3>
      <h3>{songs.genre}</h3>
      <div id='player-wrapper'>
        <ReactPlayer
          id='react-player'
          url={songs.audio}
          controls={true}
          width={100}
          height={100}
        />
      </div>
      {console.log(songs.audio)}

      <div className='showButtons'>
        <Link className='linkButton' to='/songs'><button className='deleteButtonShow' onClick={handleDelete} value={songs.id}>
          Delete
        </button></Link>

        <Edit handleUpdate={handleUpdate} songs={songs} setSongs={setSongs} />
      </div>
    </div>
  )
}

export default Show

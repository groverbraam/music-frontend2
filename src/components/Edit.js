import React, { useState, useEffect } from 'react'
import axios from 'axios'

//only need props as a param if we are passing in props to this component (we are going to here).
const Edit = (props) => {

    let emptySong = { id: props.id, name: '', artist: '', genre: '', image: '', audio: '', price: ''}
    const [song, setSong] = useState(emptySong)
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
        .put('https://glacial-wave-24104.herokuapp.com/api/songs/' + editSong.id, editSong)
        .then((response) => {
          getSong()
        })
    }


    const handleChange = (event) => {
      setSong({ ...song, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
      event.preventDefault()
      props.handleUpdate(song)
    }



    if (!song.image) {
        song.image = 'https://i.imgur.com/D3aOVsJ.png'
    }
    if (!song.price) {
        song.price = '1.29'
    }

  return (
    <div className = 'addForm'>
    <h3>Edit Song</h3>
    <form onSubmit={handleSubmit}>
        <label htmlFor="name"></label>
        <input className = 'addInput' type="text" name="name" value={song.name} onChange={handleChange} placeholder = 'Name...'/>
        <br />
        <br />
        <label htmlFor="artist"></label>
        <input className = 'addInput' type="text" name="artist" value={song.artist} onChange={handleChange} placeholder = 'Artist...'/>
        <br />
        <br />

        <label htmlFor = 'genre'></label>
        <select name = 'genre' id = 'genre' value = {song.genre} onChange = {handleChange}>
            <option value='pop' id='pop'>Pop</option>
            <option value='rock' id='rock'>Rock</option>
            <option value='techno' id='techno'>Techno</option>
            <option value='hiphop' id='hiphop'>Hip-hop</option>

        </select>
        <br />
        <br />

        <label htmlFor="image"></label>
        <input className = 'addInput' type="text" name="image" value={song.image} onChange={handleChange} placeholder = 'Image URL...'/>
        <br />
        <br />

        <label htmlFor="audio"></label>
        <input className = 'addInput' type="file" name="audio" value={song.audio} onChange={handleChange} placeholder = 'Audio file...'/>
        <br />
        <br />

        <label htmlFor="price"></label>
        <input className = 'addInput' type="text" name="price" value={song.price} onChange={handleChange} placeholder = 'Price...'/>
        <br />
        <br />

        <input className = 'submitButton' type="submit" />
    </form>
    </div>
  )
}

export default Edit

import React, { useState, useEffect } from 'react'

//only need props as a param if we are passing in props to this component (we are going to here).
const Add = (props) => {

  
  const handleChange = (event) => {
    setSong({ ...song, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.handleCreateSong(song)
  }


  let emptySong = { name: '', artist: '', genre: '', image: '', audio: '' }
  const [song, setSong] = useState(emptySong)

  return (

      <>
      <h3>Add Song</h3>
    <div className='addFormDiv'>

      <form className = 'addForm' onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label><br/>
        <input className='addInput' type="text" name="name" value={song.name} onChange={handleChange} placeholder='Name...' />
        <br />
        <br />
        <label htmlFor="artist">Artist: </label><br/>
        <input className='addInput' type="text" name="artist" value={song.artist} onChange={handleChange} placeholder='Artist...' />
        <br />
        <br />


        <label htmlFor = 'genre'>Genre: </label><br/>
        <select name = 'genre' id = 'genre' value = {song.genre} onChange = {handleChange} required>
            <option value='pop' id='pop'>Pop</option>
            <option value='rock' id='rock'>Rock</option>
            <option value='techno' id='techno'>Techno</option>
            <option value='hiphop' id='hiphop'>Hip-hop</option>
        </select>

        <br />
        <br />


        <label htmlFor="image">Image URL: </label><br/>
        <input className='addInput' type="text" name="image" value={song.image} onChange={handleChange} placeholder='Image URL...' />
        <br />
        <br />
        <label htmlFor="price"></label>
        <input className = 'addInput' type="text" name="price" value={song.price} onChange={handleChange} placeholder = 'Price...'/>
        <label htmlFor="audio">audio</label>
        <input type="file" id="audio" name="audio" accept="audio/*"></input>
        <input className='addInput' type="text" name="audio" value={song.audio} onChange={handleChange} placeholder='Audio file...' />


        <br />
        <br />

        <input className='submitButton' type="submit" />
      </form>
    </div>
    </>
  )
}

export default Add

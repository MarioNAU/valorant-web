import video from '../assets/EP8A2_805_Homescreen.mp4';

function Homepage () {
    return (<div className="main">
    <video src={video} autoPlay loop muted></video>
    <div className='content-main'>
      <div className="menu">
        <ul className='rombo'>
          <li className='option'><a className='none' href='/play'>Play</a></li>
          <li className='option'><a className='none' href='/carrera'>Career</a></li>
          <li className='option'><a className='none' href='/battlepass'>Battlepass</a></li>
          <li className='option'><a className='none' href='/coleccion'>Collection</a></li>
          <li className='option'><a className='none' href='/agents'>Agents</a></li>
          <li className='option'>Store</li>
        </ul>
      </div>
    </div>
</div>
)
    
}

export default Homepage;
import video from '../assets/EP8A2_805_Homescreen.mp4';

function Homepage () {
    return (<div className="main">
    <video src={video} autoPlay loop muted></video>
    <div className='content'>
      <div className="menu">
        <ul className='rombo'>
          <li className='option'><a className='none' href='/play'>Play</a></li>
          <li className='option'>Career</li>
          <li className='option'>Battlepass</li>
          <li className='option'>Collection</li>
          <li className='option'>Agents</li>
          <li className='option'>Store</li>
        </ul>
      </div>
    </div>
</div>
)
    
}

export default Homepage;
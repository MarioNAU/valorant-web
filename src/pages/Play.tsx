import reticula from "../assets/objetivo.png";
import Tabs from '../componentes/Tabs';
import MenuBar from '../componentes/MenuBar';

function Play () {
    return (
        <div className="play-main">
            <MenuBar/>

            <div className='modes-container'>
                <Tabs titles={['NORMAL', 'COMPETITIVO', 'SWIFTPLAY', 'SPIKERUSH', 'DEATHMATCH', 'CARRERA DE ARMAS', 'TEAM DEATHMATCH']}/>
            </div>

            <div className="team">
                <div className="teammate-third">
                    <div className="teammate">

                    </div>
                </div>
                <div className="teammate-second">
                    <div className="teammate">

                    </div>
                    
                </div>
                <div className="teammate-center">
                    <div className="teammate">
                        
                    </div>
                </div>
                <div className="teammate-second">
                    <div className="teammate"></div> 
                </div>
                <div className="teammate-third">
                    <div className="teammate"></div>
                </div>
            </div>

            <span className='body-sml'>Normal: Jugabilidad estandár de VALORANT. Alterna entre atacar y defender sitios. El primero en ganar 13 rondas se llevará la victoria.</span>

            <div className='buttons'>
                <button className='btn-gris'>PRÁCTICA <img className='reticula' src={reticula}/></button>
                <button className='btn-rojo'>INICIAR</button>
                <button className='btn-gris'>ABANDONAR GRUPO</button>
            </div>

        </div>
        
)
    
}

export default Play;
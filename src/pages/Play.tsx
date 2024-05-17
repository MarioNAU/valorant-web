import {IconHome, IconAgents, IconBattleP, Iconbackpack, IconMedal, IconStore} from '../assets/index';
import reticula from "../assets/objetivo.png";
import Tooltip from '../componentes/Tooltips';
import Tabs from '../componentes/Tabs';

function Play () {
    return (
        <div className="play-main">
            <div className="bar-nav">
            <Tooltip texto="HOME">
                <a className='item-nav' href="/"><img src={IconHome} className="icons" /></a>
            </Tooltip>
            <Tooltip texto="BATTLEPASS">    
                <a className='item-nav' href="#"><img src={IconBattleP} className="icons"/></a>
            </Tooltip>
            <Tooltip texto="AGENTS">  
                <a className='item-nav'><img src={IconAgents} className="icons"/></a>
            </Tooltip>
                <a className='item-nav'><div className='big-red'>Jugar</div></a>
            <Tooltip texto="CAREER">  
                <a className='item-nav'><img src={IconMedal} className="icons"/></a>
            </Tooltip>
            <Tooltip texto="COLLECTION">  
                <a className='item-nav'><img src={Iconbackpack} className="icons"/></a>
            </Tooltip>
            <Tooltip texto="STORE">  
                <a className='item-nav'><img src={IconStore} className="icons"/></a>
            </Tooltip>
            </div>

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
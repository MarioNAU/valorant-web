import Tabs from '../componentes/Tabs';
import MenuBar from '../componentes/MenuBar';
import {useEffect, useState}from "react";
import { useAgents } from "../context/Datacontext";
import "../styles/carrera.css"

function Carrera() {

    const {getTieresData, tieres, getAgentsData, agents, getMapsData, maps} = useAgents();
    const [startIndex, setStartIndex] = useState(0);
    const [idTier, setIdTier] = useState<number>(13);
    useEffect(() => {
        getTieresData();
        getAgentsData();
        getMapsData();
    }, [])
    
   
    const tiers = tieres[3]?.tiers;

    const next = () => {
        if(idTier < tiers.length){
            setIdTier(prevIndex => prevIndex + 1)
            if(idTier >= startIndex){
                setStartIndex(prevIndex => prevIndex + 1)
            }
        }
    };

    const Prev = () => {
        if(idTier > 0){
            setIdTier(prevIndex => prevIndex - 1);
            if(idTier <= startIndex){
                setStartIndex(prevIndex => prevIndex - 1);
            }
        }
    }
    const selectOne = tieres[3]?.tiers[idTier];
    return(
        <div className="play-main">
            <MenuBar/>
            <div className="modes-container">
                <Tabs titles={['HISTORIAL DE PARTIDAS', 'RANGO DE ACTO', 'TABLA DE POSICIONES']} />   
            </div>
            <div className="changetier-container">
                <button className="change-tier" onClick={Prev} >&lt;</button>
                    <img className="iconTier" src={selectOne?.largeIcon}/>  
                <button className="change-tier" onClick={next} > &gt; </button>
            </div>
            <h2 className='agent-name2'>{selectOne?.divisionName}</h2>
            <div className='xp-container'>
                <div className="xp">
                    <div className="xp-porcentaje"/>
                </div>
                <div className="contenedor-2clm">
                    <div className='clm'>CLASIFICACIÓN COMPETITIVA</div>
                    <div className='clm'><span className='progreso'>60</span><span>/100</span></div>
                </div>
            </div>
            <div className="historial">
                <div className="dropdown">
                    <button className="dropbtn">TODOS LOS MODOS <i className="bi bi-caret-down-fill"/></button>
                    <div className="dropdown-modes">
                        <a href='#'>NORMAL</a>
                        <a href='#'>COMPETITIVO</a>
                        <a href='#'>SWIFTPLAY</a>
                        <a href='#'>SPIKERUSH</a>
                        <a href='#'>DEATHMATCH</a>
                        <a href='#'>CARRERA DE ARMAS</a>
                        <a href='#'>TEAM DEATHMATCH</a>    
                    </div>
                </div>

                <div className="partidas">
                    <div className="partida-ganada">
                        <div className="personaje"><img className='DisplayIcon' src={agents[4]?.displayIcon}/></div>
                        <div className="tier"><img className='division' src={selectOne?.smallIcon}/><span className='progreso'>+1</span></div>
                        <div className="scores">
                            <div className="kda"><span>KDA</span><span>11/8/4</span></div>
                            <div className="score"><span className='points'>PUNTUACIÓN</span><span className='points-num'>2 833</span></div>
                        </div>
                        <div className="resultado">
                            <h2 className='victoria'>VICTORIA</h2>
                            <span className='marcador'>13 - 9</span>
                        </div>
                        <div className="mapa"><img className="carrera-thumb" src={maps[0]?.splash} /></div>
                        <div className="open"><i className="bi bi-box-arrow-in-up-right" /></div>
                    </div>
                    <div className="partida-perdida"> 
                        <div className="personaje-f"><img className='DisplayIcon' src={agents[2]?.displayIcon}/></div>
                        <div className="tier"><img className='division' src={selectOne?.smallIcon}/><span className='progresof'>-16</span></div>
                        <div className="scores">
                            <div className="kda"><span>KDA</span><span>11/11/4</span></div>
                            <div className="score"><span className='points'>PUNTUACIÓN</span><span className='points-num'>3 752</span></div>
                        </div>
                        <div className="resultado">
                            <h2 className='derrota'>DERROTA</h2>
                            <span className='marcador'>11 - 13</span>
                        </div>
                        <div className="mapa"><img className="carrera-thumb" src={maps[10]?.splash} /></div>
                        <div className="open"><i className="bi bi-box-arrow-in-up-right" /></div>
                    </div>
                    <div className="partida-ganada">
                        <div className="personaje"><img className='DisplayIcon' src={agents[8]?.displayIcon}/></div>
                        <div className="tier"><img className='division' src={selectOne?.smallIcon}/><span className='progreso'>+25</span></div>
                        <div className="scores">
                            <div className="kda"><span>KDA</span><span>18/10/1</span></div>
                            <div className="score"><span className='points'>PUNTUACIÓN</span><span className='points-num'>3 752</span></div>
                        </div>
                        <div className="resultado">
                            <h2 className='victoria'>VICTORIA</h2>
                            <span className='marcador'>13 - 10</span>
                        </div>
                        <div className="mapa"><img className="carrera-thumb" src={maps[10]?.splash} /></div>
                        <div className="open"><i className="bi bi-box-arrow-in-up-right" /></div>
                    </div>
                    <div className="partida-ganada">
                        <div className="personaje"><img className='DisplayIcon' src={agents[12]?.displayIcon}/></div>
                        <div className="tier"><img className='division' src={selectOne?.smallIcon}/><span className='progreso'>+17</span></div>
                        <div className="scores">
                            <div className="kda"><span>KDA</span><span>14/3/8</span></div>
                            <div className="score"><span className='points'>PUNTUACIÓN</span><span className='points-num'>3 207</span></div>
                        </div>
                        <div className="resultado">
                            <h2 className='victoria'>VICTORIA</h2>
                            <span className='marcador'>13 - 2</span>
                        </div>
                        <div className="mapa"><img className="carrera-thumb" src={maps[3]?.splash} /></div>
                        <div className="open"><i className="bi bi-box-arrow-in-up-right" /></div>
                    </div>
                    <div className="partida-perdida"> 
                        <div className="personaje-f"><img className='DisplayIcon' src={agents[21]?.displayIcon}/></div>
                        <div className="tier"><img className='division' src={selectOne?.smallIcon}/><span className='progresof'>-24</span></div>
                        <div className="scores">
                            <div className="kda"><span>KDA</span><span>8/12/1</span></div>
                            <div className="score"><span className='points'>PUNTUACIÓN</span><span className='points-num'>1 130</span></div>
                        </div>
                        <div className="resultado">
                            <h2 className='derrota'>DERROTA</h2>
                            <span className='marcador'>5 - 13</span>
                        </div>
                        <div className="mapa"><img className="carrera-thumb" src={maps[1]?.splash} /></div>
                        <div className="open"><i className="bi bi-box-arrow-in-up-right" /></div>
                    </div>
                    <div className="partida-perdida"> 
                        <div className="personaje-f"><img className='DisplayIcon' src={agents[0]?.displayIcon}/></div>
                        <div className="tier"><img className='division' src={selectOne?.smallIcon}/><span className='progresof'>-20</span></div>
                        <div className="scores">
                            <div className="kda"><span>KDA</span><span>11/8/5</span></div>
                            <div className="score"><span className='points'>PUNTUACIÓN</span><span className='points-num'>2 388</span></div>
                        </div>
                        <div className="resultado">
                            <h2 className='derrota'>DERROTA</h2>
                            <span className='marcador'>9 - 13</span>
                        </div>
                        <div className="mapa"><img className="carrera-thumb" src={maps[2]?.splash} /></div>
                        <div className="open"><i className="bi bi-box-arrow-in-up-right" /></div>
                    </div>
                </div>
            </div>
        </div>
        
    );   
}

export default Carrera;
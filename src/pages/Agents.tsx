import {useEffect, useState}from "react";
import { useAgents } from "../context/Datacontext";
import MenuBar from "../componentes/MenuBar";
import styled from 'styled-components';

interface Props{
    primero: string,
    segundo: string,
    tercero: string,
    cuarto: string
}

function Agents () {
    const visibleIconsMinimum = 12;
    const { getAgentsData, agents } = useAgents();
    const [startIndex, setStartIndex] = useState(0);
    const [idAgent, setIdAgent] = useState(0);
    const [toggleState, setToggleState] = useState(0);

    useEffect(() => {
        getAgentsData()    
    }, [])

    const getStyles = (index: number) => {
        return {
          primero: agents[index]?.backgroundGradientColors[0],
          segundo: agents[index]?.backgroundGradientColors[1],
          tercero: agents[index]?.backgroundGradientColors[2],
          cuarto: agents[index]?.backgroundGradientColors[3]
        };
      };

    const next = () => {
        if(idAgent < agents.length - 1){
            setIdAgent(prevIndex => prevIndex + 1);
            if(idAgent >= startIndex + visibleIconsMinimum -1){
                setStartIndex(prevIndex => prevIndex + 1);
            }
        }
    };

    const Prev = () => {
        if(idAgent > 0){
            setIdAgent(prevIndex => prevIndex - 1);
            if(idAgent <= startIndex){
                setStartIndex(prevIndex => prevIndex - 1);
            }
        }
    }

    const handleThumbnailClick = (index: number) => {
        setIdAgent(index);
    }

    const toggleTab = (index : number) => {
        setToggleState(index);
    }

    const visibleIcons = agents.slice(startIndex, startIndex + visibleIconsMinimum);
    const selectedPhoto = agents[idAgent];

    const styles = getStyles(idAgent);

    const AgentsMain= styled.div<Props>`
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(to right , #${(props) => props.primero} 18%, #${(props) => props.segundo});
        z-index: 0;
        filter: brightness(90%);
            &::after {
                content: "";
                left: 0;
                display: flex;
                width: 100%;
                height: 100%;
                background-image: linear-gradient(to right, #${(props) => props.tercero}, #${(props) => props.cuarto});
                -webkit-mask: linear-gradient(to bottom,#0000, #000);
                        mask: linear-gradient(to bottom,#0000, #000);
                filter: brightness(90%);
              }
    `;
   
    
    return (
        
        
        <AgentsMain primero={styles.primero} segundo={styles.segundo} tercero={styles.tercero} cuarto={styles.cuarto}>
            <MenuBar/>
            <div className="fullPortrait">
            <img className="fullicon" src={selectedPhoto?.fullPortrait} />
                <div className="nameStyle" style={{backgroundImage: `url(${selectedPhoto?.background})`}}/>
            </div>
        

            <div className="roster-container">
                <div className="roster">
                {
                    visibleIcons.map((agent, index)=> (
                        <div className="agentIcon-container" key={agent.uuid}>
                            <img className="agentIcon" src={agent.displayIcon} onClick={()=>handleThumbnailClick(startIndex+index)}/>
                        </div> 
                    ))

                    
                }
                </div>
                <div className="pagination-container">
                    <button className="pagination" onClick={Prev} disabled={idAgent === 0}>&lt;</button>
                    <div className="numeros"> {idAgent} / 24 </div>
                    <button className="pagination" onClick={next} disabled={idAgent === agents.length - 1}> &gt; </button>
                </div>
            </div>
          
            <div className="container-tabs">
                <h3 className="rol">INITIATOR</h3>
                <h1 className="agent-name">GEKKO</h1>

                <div className="bloc-tabs">
                    <div className={toggleState === 0 ? "tab active-habilitie": "tab"} onClick={() => toggleTab(0)}>
                        <div className="habilidades">
                            <div className="habilidad"> INFO </div>
                            <img className="habilitieIcon" src={selectedPhoto?.role.displayIcon}/>
                        </div>
                    </div>

                    <div className="tab" onClick={() => toggleTab(1)}>
                        <div className="habilidades">
                            <div className="habilidad">C</div>
                            <img className="habilitieIcon" src={selectedPhoto?.abilities[0].displayIcon}/>
                        </div>
                    </div>

                    <div className="tab" onClick={() => toggleTab(2)}>
                        <div className="habilidades">
                            <div className="habilidad">Q</div>
                            <img className="habilitieIcon" src={selectedPhoto?.abilities[1].displayIcon}/>
                        </div>
                    </div>

                    <div className="tab" onClick={() => toggleTab(3)}>
                        <div className="habilidades">
                            <div className="habilidad">E</div>
                            <img className="habilitieIcon" src={selectedPhoto?.abilities[2].displayIcon}/>
                        </div>
                    </div>

                    <div className="tab" onClick={() => toggleTab(4)}>
                        <div className="habilidades">
                            <div className="habilidad">X</div>
                             <img className="habilitieIcon" src={selectedPhoto?.abilities[3].displayIcon}/>
                        </div>
                       </div>

                </div>

                <div className="content-data">
                    <div className="content active-content">
                        <p className="agent-background">{selectedPhoto?.description}</p>
                        <h3 className="rol-content">{selectedPhoto?.role.displayName}</h3>
                        <h3>{selectedPhoto?.role.description}</h3>
                    </div>
                    <div className="content">
                        habilidaded Q
                    </div>
                    <div className="content">
                        habilidad 3
                    </div>
                    <div className="content">
                        habilidaded 4
                    </div>
                </div>
            </div>
        </AgentsMain>
    )
}

export default Agents;

/*

const Slider = () => {
    const [data, setData] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('URL_DEL_API');
            const data = await response.json();
            setData(Object.values(data)); // Asumiendo que la data viene en un objeto de objetos
        };

        fetchData();
    }, []);

    const nextItem = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    };

    const prevItem = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
    };

    if (!data.length) return <p>Loading...</p>;

    const { nombre, edad, sexo, clase, icono } = data[currentIndex];

    return (
        <div>
            <button onClick={prevItem}>Anterior</button>
            <div>
                <img src={icono} alt={nombre} />
                <p>Nombre: {nombre}</p>
                <p>Edad: {edad}</p>
                <p>Sexo: {sexo}</p>
                <p>Clase: {clase}</p>
            </div>
            <button onClick={nextItem}>Siguiente</button>
        </div>
    );
};

*/
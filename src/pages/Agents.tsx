import React, { useState } from "react";
import styled from 'styled-components';
import usePagination from "../componentes/Pagination";
import useFetchData from "../componentes/FetchData";
import MenuBar from "../componentes/MenuBar";
import { agentsInterface } from '../types/interfaces'; // Importando la interfaz Agent
import "../styles/agents.css";

interface GradientProps {
    primero: string;
    segundo: string;
    tercero: string;
    cuarto: string;
}

const AgentsMain = styled.div<GradientProps>`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to right, #${props => props.primero} 18%, #${props => props.segundo});
    z-index: 0;
    filter: brightness(90%);
    &::after {
        content: "";
        left: 0;
        display: flex;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(to right, #${props => props.tercero}, #${props => props.cuarto});
        -webkit-mask: linear-gradient(to bottom, #0000, #000);
        mask: linear-gradient(to bottom, #0000, #000);
        filter: brightness(90%);
    }
`;

const AgentTabs: React.FC<{ selectedAgent: agentsInterface, toggleState: number, toggleTab: (index: number) => void }> = ({ selectedAgent, toggleState, toggleTab }) => (
    <div className="container-tabs">
        <h3 className="rol">{selectedAgent.role.displayName}</h3>
        <h1 className="agent-name">{selectedAgent.displayName}</h1>
        <div className="bloc-tabs">
            {selectedAgent.abilities.map((ability, index) => (
                <div className="tab" onClick={() => toggleTab(index)} key={index}>
                    <div className={toggleState === index ? "habilidades active-habilidades" : "habilidades"}>
                        <div className={toggleState === index ? "habilidad active-habilidad" : "habilidad"}>{ability.displayName.charAt(0)}</div>
                        <img className="habilitieIcon" src={ability.displayIcon} />
                    </div>
                </div>
            ))}
        </div>
        <div className="content-data">
            {selectedAgent.abilities.map((ability, index) => (
                <div className={toggleState === index ? "content active-content" : "content"} key={index}>
                    <h3 className="rol-content">{ability.displayName}</h3>
                    <p className="description-habilidad">{ability.description}</p>
                </div>
            ))}
        </div>
    </div>
);

const Agents: React.FC = () => {
    const { agents } = useFetchData();
    const { currentIndex, next, prev, visibleItems } = usePagination<agentsInterface>(agents.length, 12);
    const [toggleState, setToggleState] = useState(0);

    const selectedAgent = agents[currentIndex];
    const visibleIcons = visibleItems(agents);

    const getStyles = (index: number) => ({
        primero: agents[index]?.backgroundGradientColors[0],
        segundo: agents[index]?.backgroundGradientColors[1],
        tercero: agents[index]?.backgroundGradientColors[2],
        cuarto: agents[index]?.backgroundGradientColors[3]
    });

    const styles = getStyles(currentIndex);

    return (
        <AgentsMain primero={styles.primero} segundo={styles.segundo} tercero={styles.tercero} cuarto={styles.cuarto}>
            <MenuBar />
            <div className="fullPortrait">
                <img className="fullicon" src={selectedAgent?.fullPortrait} />
                <div className="nameStyle" style={{ backgroundImage: `url(${selectedAgent?.background})` }} />
            </div>
            <div className="roster-container">
                <div className="roster">
                    {visibleIcons.map((agent, index) => (
                        <div className="agentIcon-container" key={agent.uuid}>
                            <img className="agentIcon" src={agent.displayIcon} onClick={() => setToggleState(index)} />
                        </div>
                    ))}
                </div>
                <div className="pagination-container">
                    <button className="pagination" onClick={prev} disabled={currentIndex === 0}>&lt;</button>
                    <div className="numeros"> {currentIndex + 1} / {agents.length} </div>
                    <button className="pagination" onClick={next} disabled={currentIndex === agents.length - 1}>&gt;</button>
                </div>
            </div>
            {selectedAgent && <AgentTabs selectedAgent={selectedAgent} toggleState={toggleState} toggleTab={setToggleState} />}
        </AgentsMain>
    );
}

export default Agents;



// import {useEffect, useState}from "react";
// import { useAgents } from "../context/Datacontext";
// import MenuBar from "../componentes/MenuBar";
// import styled from 'styled-components';
// import "../styles/agents.css"

// interface Props{
//     primero: string,
//     segundo: string,
//     tercero: string,
//     cuarto: string
// }

// function Agents () {
//     const visibleIconsMinimum = 12;
//     const { getAgentsData, agents } = useAgents();
//     const [startIndex, setStartIndex] = useState(0);
//     const [idAgent, setIdAgent] = useState(0);
//     const [toggleState, setToggleState] = useState(0);

//     useEffect(() => {
//         getAgentsData()    
//     }, [])

//     const getStyles = (index: number) => {
//         return {
//           primero: agents[index]?.backgroundGradientColors[0],
//           segundo: agents[index]?.backgroundGradientColors[1],
//           tercero: agents[index]?.backgroundGradientColors[2],
//           cuarto: agents[index]?.backgroundGradientColors[3]
//         };
//       };

//     const next = () => {
//         if(idAgent < agents.length - 1){
//             setIdAgent(prevIndex => prevIndex + 1);
//             if(idAgent >= startIndex + visibleIconsMinimum -1){
//                 setStartIndex(prevIndex => prevIndex + 1);
//             }
//         }
//     };

//     const Prev = () => {
//         if(idAgent > 0){
//             setIdAgent(prevIndex => prevIndex - 1);
//             if(idAgent <= startIndex){
//                 setStartIndex(prevIndex => prevIndex - 1);
//             }
//         }
//     }

//     const handleThumbnailClick = (index: number) => {
//         setIdAgent(index);
//     }

//     const toggleTab = (index : number) => {
//         setToggleState(index);
//     }

//     const visibleIcons = agents.slice(startIndex, startIndex + visibleIconsMinimum);
//     const selectedPhoto = agents[idAgent];

//     const styles = getStyles(idAgent);

//     const AgentsMain= styled.div<Props>`
//         position: absolute;
//         left: 0;
//         top: 0;
//         width: 100%;
//         height: 100%;
//         background-image: linear-gradient(to right , #${(props) => props.primero} 18%, #${(props) => props.segundo});
//         z-index: 0;
//         filter: brightness(90%);
//             &::after {
//                 content: "";
//                 left: 0;
//                 display: flex;
//                 width: 100%;
//                 height: 100%;
//                 background-image: linear-gradient(to right, #${(props) => props.tercero}, #${(props) => props.cuarto});
//                 -webkit-mask: linear-gradient(to bottom,#0000, #000);
//                         mask: linear-gradient(to bottom,#0000, #000);
//                 filter: brightness(90%);
//               }
//     `;
   
    
//     return (
        
        
//         <AgentsMain primero={styles.primero} segundo={styles.segundo} tercero={styles.tercero} cuarto={styles.cuarto}>
//             <MenuBar/>
//             <div className="fullPortrait">
//                 <img className="fullicon" src={selectedPhoto?.fullPortrait} />
//                 <div className="nameStyle" style={{backgroundImage: `url(${selectedPhoto?.background})`}}/>
//             </div>
        

//             <div className="roster-container">
//                 <div className="roster">
//                 {
//                     visibleIcons.map((agent, index)=> (
//                         <div className="agentIcon-container" key={agent.uuid}>
//                             <img className="agentIcon" src={agent.displayIcon} onClick={()=>handleThumbnailClick(startIndex+index)}/>
//                         </div> 
//                     ))

                    
//                 }
//                 </div>
//                 <div className="pagination-container">
//                     <button className="pagination" onClick={Prev} disabled={idAgent === 0}>&lt;</button>
//                     <div className="numeros"> {idAgent} / 24 </div>
//                     <button className="pagination" onClick={next} disabled={idAgent === agents.length - 1}> &gt; </button>
//                 </div>
//             </div>
          
//             <div className="container-tabs">
//                 <h3 className="rol">{selectedPhoto?.role.displayName}</h3>
//                 <h1 className="agent-name">{selectedPhoto?.displayName}</h1>

//                 <div className="bloc-tabs">

//                     <div className="tab" onClick={() => toggleTab(0)}>
//                         <div className={toggleState === 0 ? "habilidades active-habilidades": "habilidades"}>
//                             <div className={toggleState === 0 ? "habilidad active-habilidad": "habilidad"} style={{fontWeight: 600}}> INFO </div>
//                                 <img className="habilitieIcon" src={selectedPhoto?.role.displayIcon}/>
//                         </div>
//                     </div>

//                     <div className="tab" onClick={() => toggleTab(1)}>
//                         <div className={toggleState === 1 ? "habilidades active-habilidades": "habilidades"}>
//                             <div className={toggleState === 1 ? "habilidad active-habilidad": "habilidad"}>C</div>
//                                 <img className="habilitieIcon" src={selectedPhoto?.abilities[0].displayIcon}/>
//                         </div>
//                     </div>

//                     <div className="tab" onClick={() => toggleTab(2)}>
//                         <div className={toggleState === 2 ? "habilidades active-habilidades": "habilidades"}>
//                             <div className={toggleState === 2 ? "habilidad active-habilidad": "habilidad"}>Q</div>
//                                 <img className="habilitieIcon" src={selectedPhoto?.abilities[1].displayIcon}/>
//                         </div>
//                     </div>

//                     <div className="tab" onClick={() => toggleTab(3)}>
//                         <div className={toggleState === 3 ? "habilidades active-habilidades": "habilidades"}>
//                             <div className={toggleState === 3 ? "habilidad active-habilidad": "habilidad"}>E</div>
//                                 <img className="habilitieIcon" src={selectedPhoto?.abilities[2].displayIcon}/>
//                         </div>
//                     </div>

//                     <div className="tab" onClick={() => toggleTab(4)}>
//                         <div className={toggleState === 4 ? "habilidades active-habilidades": "habilidades"}>
//                             <div className={toggleState === 4 ? "habilidad active-habilidad": "habilidad"}>X</div>
//                              <img className="habilitieIcon" src={selectedPhoto?.abilities[3].displayIcon}/>
//                         </div>
//                        </div>

//                 </div>

//                 <div className="content-data">

//                     <div className={toggleState === 0 ? "content active-content": "content"}>
//                         <p className="agent-background">{selectedPhoto?.description}</p>
//                         <h3 className="rol-content">{selectedPhoto?.role.displayName}</h3>
//                         <p className="description-habilidad">{selectedPhoto?.role.description}</p>
//                     </div>
//                     <div className={toggleState === 1 ? "content active-content": "content"}>
//                         <h3 className="rol-content">{selectedPhoto?.abilities[0].displayName}</h3>
//                         <p className="description-habilidad">{selectedPhoto?.abilities[0].description}</p>
//                     </div>
//                     <div className={toggleState === 2 ? "content active-content": "content"}>
//                         <h3 className="rol-content">{selectedPhoto?.abilities[1].displayName}</h3>
//                         <p className="description-habilidad">{selectedPhoto?.abilities[1].description}</p>
//                     </div>
//                     <div className={toggleState === 3 ? "content active-content": "content"}>
//                         <h3 className="rol-content">{selectedPhoto?.abilities[2].displayName}</h3>
//                         <p className="description-habilidad">{selectedPhoto?.abilities[2].description}</p>
//                     </div>
//                     <div className={toggleState === 4 ? "content active-content": "content"}>
//                         <h3 className="rol-content">{selectedPhoto?.abilities[3].displayName}</h3>
//                         <p className="description-habilidad">{selectedPhoto?.abilities[3].description}</p>
//                     </div>
//                 </div>
//             </div>
//         </AgentsMain>
//     )
// }

// export default Agents;

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
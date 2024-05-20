import {useEffect, useState}from "react";
import { useAgents } from "../context/Datacontext"; "../context/Datacontext";



function Agents () {

    const visibleIconsMinimum = 12;
    const [startIndex, setStartIndex] = useState(0);
    
    const { getAgentsData, agents } = useAgents();
    useEffect(() => {
        getAgentsData()
    }, [])

    const next = () => {
        if(startIndex + visibleIconsMinimum < agents.length){
            setStartIndex((prevIndex) => prevIndex + 1);
        }
    };

    const handlePrev = () => {
        if(startIndex > 0){
            setStartIndex(prevIndex => prevIndex - 1);
        }
    }

    const visibleIcons = agents.slice(startIndex, startIndex + visibleIconsMinimum);

    return (
        <div className="play-main">
            <div className="roster">
            {
                visibleIcons.map((agent)=> (
                    <div className="agentIcon-container" key={agent.uuid}>
                        <img className="agentIcon" src={agent.displayIcon}></img>
                    </div> 
                ))
            }
            </div>
            <div className="pagination-container">
                <div className="pagination"><p> &lt; </p></div>
                <div className="numeros"> {startIndex} / 24 </div>
                <div className="pagination"><p> &gt; </p></div>
            </div>
            

        
        </div>
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
import React from 'react';
import MenuBar from '../componentes/MenuBar';
import useFetchData from '../componentes/FetchData';
import usePagination from '../componentes/Pagination';
import "../styles/maps.css"

interface Map {
    uuid: string;
    splash: string;
    displayName: string;
    coordinates: string;
}


const FullSplash: React.FC<{ selectOne: Map | undefined}> = ({selectOne})=>(
    <div className="fullSplash">
                <img className='fullicon' src={selectOne?.splash} />
                <div className="title-item-container">
                    <h2 className='map-title'> {selectOne?.displayName} </h2>
                    <h3>{selectOne?.coordinates}</h3>
                    <h3>{}</h3>
                </div>
            </div>
)

const RosterContainer: React.FC<{ maps: Map[] }> = ({maps}) => (
    <div className="roster-container">
                <div className="roster">
                    {
                        maps.map((map)=>(
                            <div className="agentIcon-container" key={map.uuid}>
                                <img className='agentIcon' src={map.splash}/>
                            </div>
                        ))
                    }
                </div>
                
            </div>
)

const Pagination: React.FC<{currentIndex: number, totalItems: number, onPrev: () => void, onNext: () => void }> = ({currentIndex, totalItems, onPrev, onNext}) => (
    <div className="pagination-container">
        <button className="pagination" onClick={onPrev} disabled={currentIndex === 0}>&lt;</button>
        <div className="numeros"> {currentIndex} / {totalItems} </div>
        <button className="pagination" onClick={onNext} disabled={currentIndex === totalItems - 1}> &gt; </button>
    </div>
)

function Battlepass() {
    const { maps } = useFetchData();
    const { currentIndex, next, prev, visibleItems } = usePagination<Map>(maps.length, 6);

    const selectOne = maps[currentIndex];
    const visibleIcons = visibleItems(maps);

    return (
        <div className="play-main">
            <MenuBar/>
            <FullSplash selectOne={selectOne}/>            
            <RosterContainer maps={visibleIcons}/>
            <Pagination currentIndex={currentIndex} totalItems={maps.length} onPrev={prev} onNext={next}/>
        </div>
    )
}


export default Battlepass;
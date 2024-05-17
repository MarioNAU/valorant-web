import React, {useState} from "react";
import '../index.css';

    interface TabProps {
        titles: string[];
    }
    


const Tabs: React.FC<TabProps> = ({titles}) => {

    const [changeClass, setChangeClass] = useState<number | null>(null); 

    const handleOnClic = (i: number) => {
        setChangeClass(i);
    };

return (
        <>
            {titles.map((title, i) =>(
                <div key={i} className={changeClass === i ? 'mark active' : 'mode'}>
                    <a href="#" onClick={(e: React.MouseEvent<HTMLAnchorElement>) =>{
                            e.preventDefault();
                            handleOnClic(i);
                        }}
                        className={changeClass === i ? 'mode active' : 'mode'}
                    > 
                        {title} 
                    </a>
                </div>
            ))}
        </>
    );

};

export default Tabs;


/*

const titless = ["NORMAL","COMPETITIVO","SWIFTPLAY","SPIKERUSH","DEATHMATCH","CARRERA DE ARMAS","TEAM DEATHMATCH"];

<div className='mark active'><a className='mode active'>NORMAL</a></div>
<div className='mark'><a className='mode'>COMPETITIVO</a></div>
<div className='mark'><a className='mode'>SWIFTPLAY</a></div>
<div className='mark'><a className='mode'>SPIKERUSH</a></div>
<div className='mark'><a className='mode'>DEATHMATCH</a></div>
<div className='mark'><a className='mode'>CARRERA DE ARMAS</a></div>
<div className='mark'><a className='mode'>TEAM DEATHMATCH</a></div>
*/
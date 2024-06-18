import {ReactNode, createContext, useContext, useState} from 'react'
import { getAgentsRequest, getMapsRequest, getTiersRequest } from "../api/actions";
import {agentsInterface, DataItem, CarreraInterfaces, MapsObject } from '../types/interfaces'

interface DataContextType {
    agents: agentsInterface[];
    maps: MapsObject[];
    tieres: DataItem[];
    getAgentsData: () => Promise<void>;
    getMapsData: () => Promise<void>;
    getTieresData: () => Promise<void>;
}

const Datacontext = createContext<DataContextType | undefined>(undefined);

interface Props {
    children: ReactNode;
}

export const useAgents = () => {
    const context = useContext(Datacontext);
    if (!context) {
        throw new Error("GetAgents se debe usar con DataProvider");
    }
    return  context;
}


export function AgentsProvider({children}: Props) {
    const [agents, setAgents] = useState<any>([]);
    const [maps, setMaps] = useState<any>([]);
    const [tieres, setTieres] = useState<DataItem[]>([]);

    const getMapsData = async () => {
        try {
            const res = await getMapsRequest();
            const mapsData = res.data
            setMaps(mapsData.data);
        } catch (error) {
            console.log(error);
        }
    }

    const getAgentsData = async () => {
        try {
            const res = await getAgentsRequest();
            const agentsData = res.data;
            setAgents(agentsData.data);
        } catch (error) {
            console.log(error);
        }
    }

    const getTieresData = async () => {
        try {
            const res = await getTiersRequest();
            const tiersData = res.data.data;
            
            setTieres(tiersData);
        } catch (error) {
            console.log(error)
        }
    }
    
   return(
        <Datacontext.Provider value={{agents, maps, tieres, getAgentsData, getMapsData, getTieresData}}>
            {children}
        </Datacontext.Provider>
   );
}




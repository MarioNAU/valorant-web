import {ReactNode, createContext, useContext, useState} from 'react'
import { getAgentsRequest } from "../api/actions";

interface DataContextType {
    agents: any[];
    getAgentsData: () => Promise<void>;
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

    const getAgentsData = async () => {
        try {
            const res = await getAgentsRequest();
            const agentsData = res.data;
            console.log(agentsData.data)
            setAgents(agentsData.data);
        } catch (error) {
            console.log(error);
        }
    }
    
   return(
        <Datacontext.Provider value={{agents, getAgentsData}}>
            {children}
        </Datacontext.Provider>
   );
}




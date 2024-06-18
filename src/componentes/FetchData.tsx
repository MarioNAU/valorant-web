import { useEffect } from "react";
import { useAgents } from "../context/Datacontext";

const useFetchData = () => {
    const { maps, getMapsData, agents, getAgentsData } = useAgents();

    useEffect(() => {
        getMapsData();
        getAgentsData();
    }, []);

    return { maps, agents };
}

export default useFetchData;
import axios from "./axios";

export const getAgentsRequest = () => axios.get('./agents');

export const getMapsRequest = () => axios.get('/maps');

export const getTiersRequest = () => axios.get('/competitivetiers');
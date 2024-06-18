interface abilities{
    slot: string;
    displayName: string; 
    description: string;
    displayIcon: string;
}


interface role{
    uuid: string;
    displayName: string;
    description: string;
    displayIcon: string;
}

export interface agentsInterface{
    uuid: string;
    displayName: string;
    description: string;
    displayIcon: string;
    fullPortrait: string;
    background: string;
    backgroundGradientColors: string[];
    role: role;
    abilities: abilities[];
}

/*Tiers competitivos*/

interface Tiers{
    tier: number;
    tierName: string;
    division: string;
    divisionName: string;
    color: string;
    backgroundColor: string;
    smallIcon: string;
    largeIcon: string;
    rankTriangleDownIcon: string;
    rankTriangleUpIcon: string;
}

export interface DataItem{
    uuid: string;
    assetObjectName: string;
    tiers: Tiers[];
    assetPath: string;
  
}


export interface CarreraInterfaces{
    status: number;
    data: DataItem[];
}

export interface MapsInterface{
    status: number;
    data: MapsObject[]
}

export interface MapsObject{
    uuid: string;
    displayName: string;
    narrativeDescription: string;
    tacticalDescription: string;
    coordinates: string;
    displayIcon: string;
    listViewIcon: string;
    listViewIconTall: string;
    splash: string;
    stylizedBackgroundImage: string;
    premierBackgroundImage: string;
    assetPath: string;
    mapUrl: string;
    xMultiplier: number;
    yMultiplier: number;
    xScalarToAdd: number;
    yScalarToAdd: number;
    callouts: Callouts[];
}

export interface Callouts{
    regionName: string;
    superRegionName: string;
    location: Axis[];
    
}

export interface Axis{
    x: number;
    y: number;

}


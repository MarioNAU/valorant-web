export interface CarreraInterfaces{
    data: data[];
}

interface data{
    uuid: string;
    tiers: tiers[];
}

interface tiers{
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

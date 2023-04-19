export interface apiZone {
    success: boolean;
    message: string;
    zones: Zone[];
}

export interface Zone {
    zoneId: string;
    name: string;
    createdBy: any;
    createdOn: any;
    modifiedOn: any;
    modifiedBy: any;
    status: number;
    no: any;
    clientID: string;
}

export interface Campus {
    success: boolean;
    message: string;
    zones: Zone[];
}

export interface Zone {
    campusId: string;
    name: string;
    addressLine1: string;
    addressLine2: any;
    city: string;
    state: any;
    zipCode: string;
    country: string;
    county: any;
    assets: any;
    createdBy: string;
    createdOn: string;
    modifiedOn: string;
    modifiedBy: string;
    status: number;
    no: any;
    territory: string;
    campusImage: any;
    custodialCrewLeader: any;
    campusType: any;
    clientID: string;
}

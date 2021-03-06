import { LowerCasePipe } from "@angular/common";

export class Satellite {
    name: string;
    orbitType: string;
    type: string;
    operational: boolean;
    launchDate: string;

        //Add a constructor to Satellite class.
        //Constructor signature should be:
    constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean){
       this.name =name;
       this.orbitType = orbitType;
       this.type = type;
       this.operational = operational;
       this.launchDate = launchDate;
    }

    shouldShowWarning():boolean {
        if (this.type.toLowerCase() === 'space debris') {
        return true;
        }else{
            return false;
        }
    }

}

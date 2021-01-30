import { User } from './user.model';

// Class which defines the content of a news
export class News{
    title : string;
    description : string;
    type : string;
    user : string;
    date : Date;
    displayDescr : boolean;

    constructor(title : string, description : string, 
        type : string, user : string, date : Date){
        this.title = title;
        this.description = description;
        this.type = type;
        this.user = user;
        this.date = date;
        this.displayDescr = false;
    }
}
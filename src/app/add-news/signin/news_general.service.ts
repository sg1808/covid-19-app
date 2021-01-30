export class NewsGen{
    
    displayName : string;
    email : string;
    title : string;
    body_src : string;
    country : string;
    description : string;

    constructor(
        displayName : string,
        email : string,
        title : string,
        body_src : string,
        country : string,
        description : string,){

            this.displayName = displayName;
            this.body_src = body_src;
            this.country = country;
            this.description = description;
            this.email = email;
            this.title = title; 
        }
};
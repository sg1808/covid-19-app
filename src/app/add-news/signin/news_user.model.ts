export class News{
    
    author : string;
    email : string;
    title : string;
    image_src : string;
    body_src : string;
    country : string;
    description : string;

    constructor(
        author : string,
        email : string,
        title : string,
        image_src : string,
        body_src : string,
        country : string,
        description : string,){

            this.author = author;
            this.body_src = body_src;
            this.country = country;
            this.description = description;
            this.email = email;
            this.image_src = image_src;
            this.title = title; 
        }
};
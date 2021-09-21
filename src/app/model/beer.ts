export class Beer {
    id = -1;
    name = '';
    tagline = '';
    abv = 0;
    description = '';
    imageUrl = '';

    constructor(json?: any){
        if(json !== undefined){
            this.id = json.id;
            this.name = json.name;
            this.tagline = json.tagline;
            this.abv = json.abv;
            this.description = json.description;
            this.imageUrl = json.image_url;
        }
    }
}
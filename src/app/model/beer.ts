export class Beer {
    id = -1;
    name = '';
    tagline = '';
    abv = '';
    description = '';
    imageUrl = '';

    constructor(json: any) {
        this.id = json.id;
        this.name = json.name;
        this.tagline = json.tagline;
        this.abv = json.abv;
        this.description = json.description;
        this.imageUrl = json.image_url;
    }
}
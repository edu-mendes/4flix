
export class FilmsAndSeries {
    constructor(
        private id: string,
        private title: string,
        private sinopse: string,
        private image: string
        ){ }
        
        public getId(): string {
            return this.id;
        }
        
        public setId(id: string): void {
            this.id = id;
        }
        
        public getTitle(): string {
            return this.title;
        }
        
        public setTitle(title: string): void {
            this.title = title;
        }
   
        public getSinopse(): string {
            return this.sinopse;
        }
        
        public setSinopse(sinopse: string): void {
            this.sinopse = sinopse;
        }
        
        public getImage(): string {
            return this.image;
        }
        
        public setImage(image: string): void {
            this.image = image;
        }
    }


 

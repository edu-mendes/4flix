
export class Episodes {
    constructor(
        private id: string,
        private title: string,
        private length: number,
        private link: string,
        private sinopse: string,
        private picture: string
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

        public getLength(): number {
            return this.length;
        }
        
        public setLength(length: number): void {
            this.length = length;
        }

        public getLink(): string {
            return this.link;
        }
        
        public setLink(link: string): void {
            this.link = link;
        }
        
        public getSinopse(): string {
            return this.sinopse;
        }
        
        public setSinopse(sinopse: string): void {
            this.sinopse = sinopse;
        }
        
        public getPicture(): string {
            return this.picture;
        }
        
        public setPicture(picture: string): void {
            this.picture = picture;
        }
    }
export class ProductItem {
    public code: string;
    public name: string;
    public description: string;

    public constructor(code: string, name: string, description: string) {
        this.code = code;
        this.name = name;
        this.description = description;
    }
}

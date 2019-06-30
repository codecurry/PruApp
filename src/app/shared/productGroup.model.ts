import { ProductItem } from './productItem.model';

export class ProductGroup {
    public name: string;
    public products: ProductItem[];
    public channels: string[];
    public lbu: string[];

    public constructor(
            name: string,
            products: ProductItem[],
            channels: string[],
            lbu: string[]) {
        this.name = name;
        this.channels = channels;
        this.products = products;
        this.lbu = lbu;
    }
}

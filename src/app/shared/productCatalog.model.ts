import { ProductGroup } from './productGroup.model';
export class ProductCatalog {
    public groups: ProductGroup[];

    public constructor(groups1: ProductGroup[]) {
        this.groups = groups1;
    }
}

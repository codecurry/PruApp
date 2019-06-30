import { EventEmitter } from '@angular/core';

import { ProductCatalog } from '../shared/productCatalog.model';
import { ProductGroup } from '../shared/productGroup.model';
import { ProductItem } from '../shared/productItem.model';

export class ProductCatalogService {
    private catalog: ProductCatalog = new ProductCatalog([
        new ProductGroup('Health Insurance', [
            new ProductItem('S00306', 'PruHealthy', 'Pru Healthy Mum'),
            new ProductItem('S00315', 'PruWorryFreeMum', 'Pru Worry Free Mum'),
            new ProductItem('S00316', 'PruEasyCare', 'Pru Healthy Mum'),
        ], [ 'Embassy' ], [ 'TH' ]),
        new ProductGroup('Zika - Mosquito Protection', [
            new ProductItem('S00300', 'Mosbite', 'Mosbite Covers Zika'),
        ], [ 'DIGITAL' ], [ 'ML' ]),
        new ProductGroup('Credit Protection', [
            new ProductItem('S021', 'Group Credit Life', 'Group Credit Life'),
        ], [ 'UOB', 'OVO' ], [ 'TH', 'ID'])
    ]);

    getCatalog() {
        console.log(this.catalog);
        return new ProductCatalog(this.catalog.groups.slice());
    }
}

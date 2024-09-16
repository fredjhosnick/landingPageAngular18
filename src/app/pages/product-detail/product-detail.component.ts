import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { IProducto } from '../../models/product.model';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent  implements OnInit{

  loading: boolean = true;
  private _routerActive = inject(ActivatedRoute);
  private _apiService = inject(ApiService);
  public product?: IProducto;

  ngOnInit(): void {
    this._routerActive.params.subscribe((params: Params) => {
      this._apiService.getProduct(params['id']).subscribe((data: IProducto) => {
       this.product = data;
        this.loading = false;
      });
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { Product } from '../../types/product.modal';
import { ProductService } from '../../service/product.service';
import { error } from 'console';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit {
  products: Product[] = []
  isLoading: boolean = false
  constructor(private productService: ProductService){

  }

  ngOnInit(): void {
    this.fetchListProducts()
  }

  fetchListProducts() {
    this.isLoading = true;
    this.productService.getProducts().subscribe(
      data =>{
        console.log(this.products = data)
        this.products = data;
        this.isLoading = false
      },
      error => {
        console.log(error)
      }
    )
  }
}

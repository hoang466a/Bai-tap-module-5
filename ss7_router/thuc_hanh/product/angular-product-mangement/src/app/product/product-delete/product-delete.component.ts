import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {ProductService} from "../../service/product.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  //@ts-ignore
  productForm: FormGroup;
  //@ts-ignore
  public id:number;
  constructor(private activatedRoute: ActivatedRoute,
              private productService: ProductService,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap:ParamMap)=>{
      // @ts-ignore
      this.id= +paramMap.get('id');
      const product= this.getProduct(this.id);
      this.productForm=new FormGroup({
        // @ts-ignore
        id: new FormControl(product.id),
        // @ts-ignore
        name: new FormControl(product.name),
        // @ts-ignore
        price: new FormControl(product.price),
        // @ts-ignore
        description: new FormControl(product.description)
      });
    });


  }

  ngOnInit(): void {
  }

  private getProduct(id: number) {
      return this.productService.findById(id);
  }

  deleteProduct(id:number){
    this.productService.deleteById(id);
    this.router.navigate(['/product/list'])
  }
}

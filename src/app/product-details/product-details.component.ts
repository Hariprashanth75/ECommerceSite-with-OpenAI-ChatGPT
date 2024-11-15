import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { GetDataService } from '../service/get-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DataStorageService } from '../service/data-storage.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [NavbarComponent, CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {

  constructor(private route:ActivatedRoute, private getData:GetDataService, 
    private dataStorage:DataStorageService, private router: Router){}

  getParamValue:any;
  getProductDetail:any;
  getProductDetails:any;
  storeCartData:any=[];
  inCart:boolean=false;


  ngOnInit(): void {
   
    this.getParamValue = this.route.snapshot.paramMap.get('id');
    var getVal = this.dataStorage.getCartData()
    this.storeCartData = getVal ? getVal : [];

    this.getData.productData.filter((ele:any)=>{
      if(ele.pdId == this.getParamValue)
      {
          this.getProductDetails = ele;
      }
    });

    this.storeCartData.filter((ele:any)=>{
      if(ele.pdId == this.getParamValue)
      {
          this.inCart=true;
      }
  });
    
  }

  addCart(data:any)
  {
    data['plusMinusCounter']=1;
    this.storeCartData.push(data);
    this.dataStorage.storeCartData(this.storeCartData);
    this.router.navigate(['/cart']);
       
  }

  copyInputMessage(inputElement: HTMLInputElement) {
    inputElement.select();
    document.execCommand('copy');
    inputElement.setSelectionRange(0, 0);
}

}

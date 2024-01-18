import { Component } from '@angular/core';

@Component({
  selector: 'app-add-bill',
  templateUrl: './add-bill.component.html',
  styleUrls: ['./add-bill.component.css']
})
export class AddBillComponent {
  isVisible = false;
  isConfirmLoading = false;
  amount = '';
  price = '';

  constructor() {}

  ngOnInit() {
    const addBillElement = document.getElementById('add-bill');
    if (addBillElement) {
      addBillElement.style.backgroundColor='red';  
    }
    addBillElement?.addEventListener('click',() =>{
        const ammountElement = document.getElementById('Amount');

        if(!ammountElement) {
          console.log('amount element is null');
        } else {
          console.log('amount element is not null');
        }

        ammountElement?.addEventListener('mouseover',()=>{ 
          if (ammountElement) {
            ammountElement.style.backgroundColor='yellow'
          }
        })  
        ammountElement?.addEventListener('mouseout',()=>{ 
          if (ammountElement) {
            ammountElement.style.backgroundColor='white'
          }
        })
        
        const priceElement = document.getElementById('Price');
        priceElement?.addEventListener('mouseover',()=>{ 
          if (priceElement) {
            priceElement.style.backgroundColor='yellow'
          }
        })
        priceElement?.addEventListener('mouseout',()=>{ 
          if (priceElement) {
            priceElement.style.backgroundColor='white'
          }
        })

        let parent = document.getElementById('input');
        let child = document.createElement('p');
        child.id = 'p-id';
        child.innerHTML = '<strong>created paragraf</strong>';
        let textNode1 = document.createTextNode(' text node1 ');
        let textNode2 = document.createTextNode(' text node2 ');
        child.appendChild(textNode1);
        child.appendChild(textNode2);
        parent?.appendChild(child);
    });
    
  }

  showModal(): void {
    this.isVisible = true;
  }

  getAmount(event:Event, value: string) {
    console.log((event as KeyboardEvent).ctrlKey);
    console.log((event as KeyboardEvent).key);
    console.log(value);
    this.price = value

    //const ammountElement = document.getElementById('Amount');
    //this.price = +(ammountElement as HTMLInputElement).value;
    
    console.log(this.price);

  }

  handleOk(): void {
    console.log(this.price, this.amount);
    this.isConfirmLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isConfirmLoading = false;
    }, 1000);
  }

  handleCancel(): void {
    this.isVisible = false;
  }
}
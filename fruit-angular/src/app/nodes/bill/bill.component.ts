import { Component } from '@angular/core';

interface ItemData {
  id: string;
  name: string;
  amount: number;
  price: number;
  discount: number;
  total: number;
}

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent {
  editCache: { [key: string]: { edit: boolean; data: ItemData } } = {'0': {edit:false,data:{id:'1', name:'zhang 1', amount:100, price:2,discount:0,total:200}}};
  listOfData: ItemData[] = [{id:'1', name:'zhang 1', amount:100, price:2,discount:0,total:200}];

  //constructor( public radom: BillComponent) { }

  startEdit(id: string): void {
    this.editCache[id].edit = true;
  }

  cancelEdit(id: string): void {
    const index = this.listOfData.findIndex(item => item.id === id);
    this.editCache[id] = {
      data: { ...this.listOfData[index] },
      edit: false
    };
  }

  saveEdit(id: string): void {
    const index = this.listOfData.findIndex(item => item.id === id);
    Object.assign(this.listOfData[index], this.editCache[id].data);
    this.editCache[id].edit = false;
  }

  updateEditCache(): void {
    this.listOfData.forEach(item => {
      this.editCache[item.id] = {
        edit: false,
        data: { ...item }
      };
    });
  }

  ngOnInit(): void {
    const data = [];
    let name = `Zhang san`;
    let amount = 32;
    let price = 0;
    let discount = 0;

    for (let i = 0; i < 100; i++) {
      name = `Zhang ${i}`;
      amount = 32;
      price = i;
      discount = 0;

      data.push({
        id: `${i}`,
        name: name,
        amount,
        price,
        discount,
        total: amount * price - discount,
      });
    }
    this.listOfData = data;
    this.updateEditCache();
  }
}

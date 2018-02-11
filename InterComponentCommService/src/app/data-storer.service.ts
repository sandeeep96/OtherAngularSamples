import { Injectable } from '@angular/core';

@Injectable()
export class DataStorerService {

  constructor() { }

  MyData:Array<string>=[
    "sai","sandeep","naga"
  ]

  count=this.MyData.length;
  
  getAllNames():Array<string>{
    console.log("in service get all",this.MyData.length)
    return this.MyData;
  }

  getLengthOfArray():number{
    console.log("in service get length",this.MyData.length)
    return this.count;
  }

  addData(newData : string){
    console.log("in service add data",this.MyData.length)
    this.MyData.unshift(newData);
  }
}

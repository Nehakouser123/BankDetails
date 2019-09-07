import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pune',
  templateUrl: './pune.component.html',
  styleUrls: ['./pune.component.css']
})
export class PuneComponent implements OnInit {

  name = 'myapp';
  BankName="";
  aa:boolean=false;
  
  constructor(public router: Router) { }

  ngOnInit() {
  }
 
  users=[{
    BankName:'THE ROYAL BANK OF SCOTLAND N V',
    IFSC:'ABNA0100312',
    BankID:'110',
    Branch:'HANSALAYA  NEW DELHI'
  },{
    BankName:'THE ROYAL BANK OF SCOTLAND N V',
    IFSC:'ABNA0100329',
    BankID:'110',
    Branch:'RAJOURI GARDEN  NEW DELHI'
  },{
    BankName:'THE ROYAL BANK OF SCOTLAND N V',
    IFSC:'ABNA0100162',
    BankID:'110',
    Branch:'KAROL BAGH'
  },{
    BankName:'THE ROYAL BANK OF SCOTLAND N V',
    IFSC:'ABHY0065330',
    BankID:'60',
    Branch:'GHATKOPAR'
  },{
    BankName:'THE ROYAL BANK OF SCOTLAND N V',
    IFSC:'ABNA0100312',
    BankID:'110',
    Branch:'HANSALAYA  NEW DELHI'
  },
  {
    BankName:'THE ROYAL BANK OF SCOTLAND N V',
    IFSC:'ABNA0100312',
    BankID:'110',
    Branch:'HANSALAYA  NEW DELHI'
},
{
  BankName:'THE ROYAL BANK OF SCOTLAND N V',
    IFSC:'ABNA0100312',
    BankID:'110',
    Branch:'HANSALAYA  NEW DELHI'
},{
  BankName:'THE ROYAL BANK OF SCOTLAND N V',
    IFSC:'ABNA0100312',
    BankID:'110',
    Branch:'HANSALAYA  NEW DELHI'
},{
  BankName:'THE ROYAL BANK OF SCOTLAND N V',
    IFSC:'ABNA0100312',
    BankID:'110',
    Branch:'HANSALAYA  NEW DELHI'
}

]

  setIndex(ii){
    this.aa=ii;
    console.log
  }
}


import { Component, OnInit, Input } from '@angular/core';

// import { FORFAITS } from '../mock-forfaits';
import { Forfait } from '../forfait';
import { ForfaitService } from '../forfait.service';
import { Formulaire } from '../formulaire';


@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent implements OnInit {

  forfaits: Forfait[] ;
  @Input() forfait: Forfait;
  @Input() formulaire: Formulaire;

  columnsToDisplay = ['destination', 'villeDepart', 'prix', 'vedette', 'rabais', 'editer'];
  mesForfaits: Forfait[];
  selectedForfait: Forfait;


  constructor(private forfaitService: ForfaitService) { }
  ngOnInit(): void {
    this.getForfaits();

  }

  onSelect(forfait: Forfait): void {
    this.selectedForfait = forfait;
  }


  getForfaits(): void {
    this.forfaitService.getForfaits()
      .subscribe(resultat => {
        this.mesForfaits = resultat;
        console.log(this.mesForfaits);
      });
  }

  onDelete(forfait: Forfait): void {
    this.forfaitService.deleteForfaits(forfait._id)
      .subscribe(result => this.mesForfaits = this.mesForfaits.filter(h => h !== forfait));
  }


}

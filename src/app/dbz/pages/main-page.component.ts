import { DbzService } from './../services/dbz.service';
import { Character } from './../interfaces/character.interface';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

constructor( private dbzservice:DbzService ){}

get characters() : Character[]{
  return [...this.dbzservice.characters];

}

onDeleteCharacter(id: string):void
{
  this.dbzservice.deleteCharacterByID (id);
}

onNewCharacter (character:Character){
this.dbzservice.addCharacter(character)
}


}


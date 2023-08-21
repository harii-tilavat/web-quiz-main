import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { TeamsModel } from 'src/app/_model';

@Injectable({
  providedIn: 'root'
})
export class MeetTheTeamService {

  public itemChange = new Subject<TeamsModel[]>();
  public startEdit = new Subject<number | null>();
  public itemList: TeamsModel[] = [];
  constructor() { }
  getItems(): TeamsModel[] {
    return this.itemList.slice();
  }
  getItem(id: number):TeamsModel {
    let team:TeamsModel = this.itemList.find(i => i.id === id)!;
    return team;
  }
  addItem(item: TeamsModel): void {
    let maxId = 0;
    if (this.itemList.length !== 0) {
      maxId = Math.max(...this.itemList.map(i => i.id));
    }
    maxId++;
    this.itemList.push({ ...item, id: maxId });
    this.itemChange.next(this.itemList.slice());
  }
  updateItem(id:number, newTeam:TeamsModel){
    this.itemList=this.itemList.map((item:TeamsModel)=>{
      if(item.id===id){
        return { ...item, ...newTeam};
      }
      return item;
    });
   this.itemChange.next(this.itemList.slice());
  }
  deleteItem(id:number){
    this.itemList=this.itemList.filter(i=>i.id!==id);
    this.itemChange.next(this.itemList.slice());
  }
}

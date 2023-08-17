import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { TeamsModel } from 'src/app/_model';

@Injectable({
  providedIn: 'root'
})
export class TestimonyService {

  public teamChange = new Subject<TeamsModel[]>();
  public startEdit = new Subject<number | null>();
  public testimonyList: TeamsModel[] = [
    // {
    //   id: 1,
    //   title: 'Testimony',
    //   subTitle:'AAA',
    //   desc: 'Hello Word',
    //   image: '/assets/images/p1.svg'
    // }
  ];
  constructor() { }
  getTestimonyList(): TeamsModel[] {
    return this.testimonyList.slice();
  }
  getTestimony(id: number):TeamsModel {
    let team:TeamsModel = this.testimonyList.find(i => i.id === id)!;
    return team;
  }
  addTestimony(team: TeamsModel): void {
    let maxId = 0;
    if (this.testimonyList.length !== 0) {
      maxId = Math.max(...this.testimonyList.map(i => i.id));
    }
    maxId++;
    this.testimonyList.push({ ...team, id: maxId });
    this.teamChange.next(this.testimonyList.slice());
  }
  updateTestimony(id:number, newTeam:TeamsModel){
    this.testimonyList=this.testimonyList.map((item:TeamsModel)=>{
      if(item.id===id){
        return { ...item, ...newTeam};
      }
      return item;
    });
   this.teamChange.next(this.testimonyList.slice());
  }
  deleteTestimony(id:number){
    this.testimonyList=this.testimonyList.filter(i=>i.id!==id);
    this.teamChange.next(this.testimonyList.slice());
  }
}

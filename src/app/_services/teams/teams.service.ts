import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { TeamsModel } from 'src/app/_model';

@Injectable({ providedIn: 'root' })
export class TeamsService {
  public teamChange = new Subject<TeamsModel[]>();
  public startEdit = new Subject<number | null>();
  public teamsList: TeamsModel[] = [
    {
      id: 1,
      title: 'hello',
      desc: 'Hello Word',
      image: '/assets/images/p1.svg'
    }
  ];
  constructor() { }
  getTeams(): TeamsModel[] {
    return this.teamsList.slice();
  }
  getTeam(id: number):TeamsModel {
    let team:TeamsModel = this.teamsList.find(i => i.id === id)!;
    return team;
  }
  addTeam(team: TeamsModel): void {
    let maxId = 0;
    if (this.teamsList.length !== 0) {
      maxId = Math.max(...this.teamsList.map(i => i.id));
    }
    maxId++;
    this.teamsList.push({ ...team, id: maxId });
    this.teamChange.next(this.teamsList.slice());
  }
  updateTeam(id:number, newTeam:TeamsModel){
    this.teamsList=this.teamsList.map((item:TeamsModel)=>{
      if(item.id===id){
        return { ...item, ...newTeam};
      }
      return item;
    });
   this.teamChange.next(this.teamsList.slice());
  }
  deleteTeam(id:number){
    this.teamsList=this.teamsList.filter(i=>i.id!==id);
    this.teamChange.next(this.teamsList.slice());
  }
}

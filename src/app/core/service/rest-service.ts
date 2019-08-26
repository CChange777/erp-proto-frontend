import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Stakeholder} from "../model/domain.model";
import {catchError, map} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class RestService {
  constructor(private http: HttpClient) {}

  public loadStakeHolders(): Observable<Stakeholder[]> {
    return  this.http.get("http://localhost:8080/bootapi/stakeholder").pipe(
      map((r:any) => r._embedded.stakeholder as Stakeholder[]),
    ).pipe(
      catchError(e=>{
        console.log(e);
        return [];
      })
    )
  }

  public postStakeholder(stakeholder: Stakeholder): Observable<Stakeholder> {
    return  this.http.post("http://localhost:8080/bootapi/stakeholder", stakeholder).pipe(
      map((r:any) => r._embedded.stakeholder as Stakeholder[]),
    ).pipe(
      catchError(e=>{
        console.log(e);
        return [];
      })
    )
  }
}

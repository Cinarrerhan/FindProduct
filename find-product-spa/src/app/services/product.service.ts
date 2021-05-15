import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";


@Injectable()
export class ProductService {

    apiUrl: string = `${environment.baseUrl}`;

    constructor(private http: HttpClient) { }

    getAll(search) {
        return this.http.post<any>(this.apiUrl + 'Product/'+search.payload,{});
    }
}
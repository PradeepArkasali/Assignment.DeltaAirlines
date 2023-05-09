import { Component, OnInit, ViewChild } from '@angular/core';
import { DataBindingDirective } from '@progress/kendo-angular-grid';
import { process } from '@progress/kendo-data-query';
import { HttpClient } from '@angular/common/http';
//import { employees } from './employees';
//import { images } from './images';

@Component({
    selector: 'app-root',
    template: `
        <kendo-grid
            [kendoGridBinding]="gridView"
            kendoGridSelectBy="id"
            [(selectedKeys)]="mySelection"
            [pageSize]="20"
            [pageable]="true"
            [sortable]="true"
            [groupable]="false"
            [reorderable]="true"
            [resizable]="true"
            [height]="500"
            [columnMenu]="{ filter: true }"
        >                        
            <kendo-grid-column-group title="Student" [columnMenu]="false">                
                <kendo-grid-column field="name" title="Name" [width]="220">
                </kendo-grid-column>
                <kendo-grid-column field="age" title="Age" [width]="100" [class]="{'text-center': true}" [resizable]="false">                   
                </kendo-grid-column>
                <kendo-grid-column field="hobbies" title="Hobbies" [width]="100" [class]="{'text-center': true}" [resizable]="false" filter="boolean">                    
                </kendo-grid-column>
            </kendo-grid-column-group>           
            
        </kendo-grid>
    `,
    styles: [`
        .customer-photo {
            display: inline-block;
            width: 32px;
            height: 32px;
            border-radius: 50%;
            background-size: 32px 35px;
            background-position: center center;
            vertical-align: middle;
            line-height: 32px;
            box-shadow: inset 0 0 1px #999, inset 0 0 10px rgba(0,0,0,.2);
            margin-left: 5px;
        }

        .customer-name {
            display: inline-block;
            vertical-align: middle;
            line-height: 32px;
            padding-left: 10px;
        }

        .red {
            color: #d9534f;
        }

        .text-bold {
            font-weight: 600;
        }
  `]
})
export class AppComponent implements OnInit {
  
    constructor(private http: HttpClient) { }    
    public gridData: unknown[] = [];
    public gridView: unknown[] = [];

    public mySelection: string[] = [];

    public ngOnInit(): void {
      this.http.get<any>('https://localhost:7125/api/students').subscribe(data => {
        this.gridData = data;
        this.gridView = this.gridData;
      })  
        
    }

    public onFilter(input: Event): void {
        const inputValue = (input.target as HTMLInputElement).value;

        this.gridView = process(this.gridData, {
            filter: {
                logic: "or",
                filters: [
                    {
                        field: 'full_name',
                        operator: 'contains',
                        value: inputValue
                    },
                    {
                        field: 'job_title',
                        operator: 'contains',
                        value: inputValue
                    },
                    {
                        field: 'budget',
                        operator: 'contains',
                        value: inputValue
                    }
                ]
            }
        }).data;

    }

    
}
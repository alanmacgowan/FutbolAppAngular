import { ModuleWithProviders } from '@angular/core';

export interface ITeam {
    _id?: string;
    id: number;
    name: string;
    description: string;
    shirtColor: string;
    city: string;
}

export interface IRouting {
    routes: ModuleWithProviders,
    components: any[]
}

export interface IPagedResults<T> {
    totalRecords: number;
    results: T;
}
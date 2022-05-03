import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface ExampleItem{
  id: string;
  type: string;
  links: {
    self: string;
  };
  attributes: {
    urn: string;
    created_at: string;
    updated_at: string;
    content: string;
    properties: null;
    display_properties: {
      type: string;
      image: string;
    };
  };
  relationships: {
    authors: {
      links: {
        self: string;
        related: string;
      };
    };
    publishers: {
      links: {
        self: string;
        related: string;
      };
    };
  };
}
interface Example {
  data: ExampleItem[];
}

@Injectable({
  providedIn: 'root',
})
export class GetExampleService {
  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get<Example>('/assets/example.json');
  }
}

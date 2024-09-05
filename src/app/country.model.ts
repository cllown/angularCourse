export interface Country {
  commonName: 'string';
  officialName: 'string';
  countryCode: 'string';
  region: 'string';
}
export interface Countries {
  countryCode: 'string';
  name: 'string';
}
export enum HolidayTypes {
  Public,
  Bank,
  School,
  Authorities,
  Optional,
  Observance,
}
export interface Holiday{
  "date": "2024-09-05",
  "localName": "string",
  "name": "string",
  "countryCode": "string",
  "global": true,
  "counties": [
    "string"
  ],
  "launchYear": 0,
  "types": [
    "Public"
  ]
}

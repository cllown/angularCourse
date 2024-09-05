export interface CountryInfo {
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
  date: "string",
  localName: "string",
  name: "string",
  countryCode: "string",
  global: "boolean",
  counties: ["string"],
  launchYear: "integer",
  types: ["string"]
}

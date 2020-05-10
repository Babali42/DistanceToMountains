export class Place {
    _id?: string;
    name: string;
    altitude: number;
    lat: number;
    long: number;
    range: string;
    country: string;
    description: string;
    verified: boolean;

    public constructor(init?:Partial<Place>) {
      Object.assign(this, init);
    }
}
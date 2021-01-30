// Class which stores a country summary data
export class countryData {
    
    countryName : string;
    newConfirmed: number;
    totalConfirmed: number;
    newDeaths: number;
    totalDeaths: number;
    newRecovered: number;
    totalRecovered: number;
    date: Date;

    constructor(countryName : string, newConfirmed: number, totalConfirmed: number, newDeaths: number, totalDeaths: number,
        newRecovered: number, totalRecovered: number, date : Date){
        this.countryName = countryName;
        this.newConfirmed = newConfirmed;
        this.totalConfirmed = totalConfirmed;
        this.totalRecovered = totalRecovered;
        this.newDeaths = newDeaths;
        this.totalDeaths = totalDeaths;
        this.newRecovered = newRecovered;
        this.date = date;
    }
  
}
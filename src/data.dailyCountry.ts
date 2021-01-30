// Class which will store the minimum needed daily data in order to display charts
export class dailyCountryData {
    
    totalConfirmed: number;
    activeCases: number;
    totalDeaths: number;
    totalRecovered: number;
    date : Date;

    constructor(){

        this.totalConfirmed = 0;
        this.totalRecovered = 0;
        this.activeCases = 0;
        this.totalDeaths = 0;
        this.date = new Date();
    
    }

    add(totalConfirmed: number, totalDeaths: number, activeCases : number, totalRecovered: number,date : Date){
        this.totalConfirmed = this.totalConfirmed + totalConfirmed;
        this.totalRecovered = this.totalRecovered + totalRecovered;
        this.activeCases = this.activeCases + activeCases;
        this.totalDeaths = this.totalDeaths + totalDeaths;
        this.date = date;
    }
  }
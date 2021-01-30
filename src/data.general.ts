// World Summary Dashboard
export class generalData {
    
    newConfirmed: number;
    totalConfirmed: number;
    activeCases: number;
   
    newDeaths: number;
    totalDeaths: number;
    mortalityRate: number;
    
    newRecovered: number;
    totalRecovered: number;
    recoveryRate: number;
    
    date : Date;

    

    constructor(newConfirmed: number, totalConfirmed: number, newDeaths: number, totalDeaths: number,
        newRecovered: number, totalRecovered: number,date : Date){
        this.newRecovered = newRecovered;
        this.newConfirmed = newConfirmed;
        this.totalConfirmed = totalConfirmed;
        this.totalRecovered = totalRecovered;
        this.newDeaths = newDeaths;

        this.activeCases = this.totalConfirmed - this.totalRecovered;
        this.recoveryRate = this.Fixed(this.totalRecovered, this.totalConfirmed);

        this.totalDeaths = totalDeaths;
        this.mortalityRate =  this.Fixed(this.totalDeaths, this.totalConfirmed);
        
        this.date = date;
    }

    Fixed(num :number,num2 :number){
        return Number.parseFloat(((num / num2)*100).toFixed(2));
    }

    porpotion(num: number){
        var x = num*100;
        var t = x.toString();
        var result = t.substr(0, 5)+"%";
        return result
      }
  }
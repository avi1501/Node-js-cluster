class Fibonacci {
    constructor(){

    }

    getFibonacciSeries(number){
        if(number == 0 || number == 1){
            return number;
        }
        return this.getFibonacciSeries(number-1) + this.getFibonacciSeries(number-2)
    }

}

module.exports = new Fibonacci()
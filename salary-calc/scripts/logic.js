const salaryOperations = {
    //hra: function(){}
    basicSalary:0,
    takeBasicSalary(basicSalary){
        this.basicSalary = basicSalary;
    },
    hra(){
        return this.basicSalary * 0.50;
    },
    da(){
        return this.basicSalary * 0.20;
    },
    ta(){
        return this.basicSalary * 0.40;
    },
    pf(){
        return this.basicSalary * 0.05;
    },
    ma(){
        return this.basicSalary * 0.20;
    },
    gs(){
        return this.basicSalary + this.hra() + this.da() + this.ta() + this.ma();
    },
    ns(){
        let gross = this.gs();
        return gross - (gross * this.tax()) - this.pf();
    },
    tax(){
        let annualSalary = this.gs() * 12;
        if(annualSalary>=500000 && annualSalary<700000){
            return 0.10;
        }
        else if(annualSalary>=700000 && annualSalary<900000){
            return 0.20;
        }
        else if(annualSalary>=900000){
            return 0.30;
        }
        return 0.0;
    },
}
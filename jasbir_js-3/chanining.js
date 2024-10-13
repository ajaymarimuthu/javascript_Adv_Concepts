
let ladder ={
    step:0,
    up(){
        
        this.step++;
        return this;
    },
    down(){
       this.step--;
        return this;
    },
    showStep:function(){
        console.log('Steppp',this.step);
        return this;
    }
};

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep();


// ### instead of calling like above how i can chain the above function calls. 

// Answer: return this  from every function 

ladder.up().up().up().down().showStep();


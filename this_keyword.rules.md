


#### REPO OF jASBIR : github.com/Jasbir96/Full_stack_Oct
## RULES


* this is determined on run time
* this is always determined when the E.C is created.



* this is determined in different scenarios

### non-strict mode
  * this =>> in GEC is alwasy window
  * E.C is created using method call then this points to `calling object`.
  * E.C is created using function call then this points to `window object`
  * Arrow function doesn't have its own 'this' so it take's  'this' `from outer scope`
   


### strict mode
  * this =>> in GEC is alwasy window
  * E.C is created using method call then this points to `calling object`.
  * E.C is created using function call then this points to - `undefined`
  * Arrow function doesn't have its own 'this' so it take's  'this' `from outer scope`



        #### This Behaviour ####

                          non-strict          strict
    

    GEC   ----------       window            window



    Fn. Call -------       window            Undefined



    Method Call ----       Current Obj       Current Obj



    Arrow Funciton--       `this` from outerscope    `this` from outerscope
   
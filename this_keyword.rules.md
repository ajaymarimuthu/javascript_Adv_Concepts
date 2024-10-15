


#### REPO OF jASBIR : github.com/Jasbir96/Full_stack_Oct
## RULES


### EXECUTION CONTEXT":
### Every E.c contains  variable + this+ outer scrope + global E.c



### HOISTING

whenever E>C created Hoisitng happens.
Two phase 
1.) memory allocation  phase .. duign this phase when varibles accessed then undefined / REference error for let variables (Let & const  variables are in temporal dead zone)
2.) code execution phase


Var declarations are hoisted and initialized as undefined.
Let and const declarations are hoisted but not initialized, leading to a temporal dead zone (TDZ).
Function declarations are fully hoisted, but function expressions are hoisted as variables



***********************************************************************************

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
   
var obj={
    A:10,
    b:20,
    c:{
        p:30,
        q:{
            L:70
        },
        o:[1,2]
    }
}


// console.log(obj);


 

function flatteningAnObject(object,parent){

    const flatObj={};

    function flattening(obj,parent){

        for(let key in obj){

            const value=obj[key];
            const newParent=parent?parent+"."+key : key;


            if(typeof value === 'object'){
                flattening(value,newParent);
            }
            else{
                flatObj[newParent]=value;
            }

        }

    }

    flattening(object,parent)

    return flatObj;
     
}
 


const res=flatteningAnObject(obj,"");

console.log(res);
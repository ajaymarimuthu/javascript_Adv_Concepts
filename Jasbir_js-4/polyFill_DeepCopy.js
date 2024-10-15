let person ={
    fname:'Ajay',
    lname: 'Marimuthu',
    adress:{
        street:'Chennai',
        state:'TN',
        Country:'India'
    }
}


function deepCopy(source){

    let deepCopyObject={};

    for (let key in source) {
        if(typeof source[key] === 'object'){
             let copiedData=deepCopy(source[key])
             deepCopyObject[key]=copiedData;
        }
        else{
            deepCopyObject[key]=source[key];

        }
    }

    return deepCopyObject;

}

deepCopy(person);

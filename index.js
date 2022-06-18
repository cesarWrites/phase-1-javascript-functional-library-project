const itemCollection = function(collection){
    if (collection instanceof Array) 
    return collection.slice() 
    else{
        return Object.values(collection);
    }
}

function myEach(collection, alert){
    const newCollection = itemCollection(collection);
    for(let i = 0; i < newCollection.length; i++){
        alert(newCollection[i]);
    }
    return collection;
}

function myMap(collection, callback){
    const newCollection = itemCollection(collection);
    const arr = [];

    for(let i = 0; i < newCollection.length; i++){
        arr.push(callback(newCollection[i]));
    }
    return arr;
}

function myReduce(collection, callback, acc){
    let newCollection = itemCollection(collection);

    if(!acc){
        acc = newCollection[0]
        newCollection = newCollection.slice(1);
    }

    const len = newCollection.length;
    for (let i=0; i < len; i++){
    acc = callback(acc, newCollection[i], newCollection);
    }
    return acc;
}

function myFind(collection, predicate){
    const newCollection =  itemCollection(collection);
    for(let i = 0; i < newCollection.length; i++){
        if(predicate(newCollection[i]))
        return newCollection[i];
    }
    return undefined;
}

function myFilter(collection, predicate){
    const newCollection = itemCollection(collection);

    const arr = [];
    for(let i = 0; i < newCollection.length; i++){
        if(predicate(newCollection[i]))
        arr.push(newCollection[i])
    }
    return arr;
}

function mySize(collection){
    const newCollection = itemCollection(collection);
    return newCollection.length;
}

function myFirst(arr, stop=false){
    if(stop){
        return arr.slice(0, stop)
    }else{
       return arr[0]
    }
}

function myLast(arr, start=false){
    if(start){
        return arr.slice(arr.length-start, arr.length)
    }else{
        return arr[arr.length - 1];
    }
}

function myKeys(object){
    const keysArr = [];
    for (let key in object){
        keysArr.push(key);
    }
    return keysArr;
}

function myValues(object){
    const valuesArr = [];
    for(let key in object){
        valuesArr.push(object[key]);
    }
    return valuesArr;
}

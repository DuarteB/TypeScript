class GenericPrint<Type> {
    someValue: Type;
    print: ( otherValue: Type ) => void;
}

let myGenericValue = new GenericPrint<String>();
myGenericValue.someValue = '1234';
myGenericValue.print = function( otherValue ) {
    console.log( otherValue )
}

myGenericValue.print(myGenericValue.someValue);
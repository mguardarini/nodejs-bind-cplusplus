import ffi from 'ffi';
import ref from 'ref';

export class Calculator {
  
    constructor(){        

        const int = ref.types.int;
        let platform = process.platform;
        let mathlib = null;

        if (platform === 'win32'){
            mathlib = './build/Release/math.dll';
        }else if(platform === 'linux'){
            mathlib = './build/Release/math.so';
        }else if(platform === 'darwin'){
            mathlib = './build/Release/math.dylib'
        }else{
            throw new Error('Unsupported plateform for mathlib')
        }
           
        this.math = ffi.Library(mathlib, {
            "add": [int, [int, int]],
            "minus": [int, [int, int]],
            "multiply": [int, [int, int]]
        });

    }

    Math(value1,value2,operation){

        let result = null;
        try{
            if(operation === "add") {
                return result = this.math.add(value1,value2);
            }
            if(operation == "minus") {
                return result = this.math.minus(value1,value2);
            }
            if(operation == "multiply") {
                return result = this.math.multiply(value1,value2);
            }    
        }catch(Exception){
            console.log("Fail")
        }
        
    }
}

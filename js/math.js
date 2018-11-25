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

    Add(){
        let result = this.math.add(1,2);
        console.log(result);
    }

    Minus(){
    
        let result = this.math.minus(1,2);
        console.log(result);

    }

    Multiply(){
        let result = this.math.multiply(1,2);
        console.log(result);  
    }
    
}

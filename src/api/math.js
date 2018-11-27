import resource from 'resource-router-middleware';
import {Calculator} from "../bind/math";

let result = new Calculator(); 

export default () => resource({

	/** Property name to store preloaded entity on `request`. */
	id : 'Math',


	/** POST / - Create a new entity */
	create({ body }, res) {
		
		let data = {
			value1: body.value1,
			value2: body.value2,
			operation: body.operation
		};
	
		if(body.operation == "add"){

			data.result =  body.value1 + " + " + body.value2 + " = " + result.Math(body.value1,body.value2,"add");
			res.json(data);
		}
		if(body.operation == "minus"){

			data.result =  body.value1 + " - " + body.value2 + " = " + result.Math(body.value1,body.value2,"minus");
			res.json(data);
		}
		if(body.operation == "multiply"){

			data.result =  body.value1 + " x " + body.value2 + " = " + result.Math(body.value1,body.value2,"multiply");
			res.json(data);
		}
	},

});

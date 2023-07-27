export default function guardrail(mathFunction) {
<<<<<<< HEAD
  const queue = [];
  let value;

  try {
    value = mathFunction();
  } catch (err) {
    value = err.toString();
  }

  queue.push(value);
  queue.push('Guardrail was processed');

  return queue;
=======
	  const queue = [];
	  let value;

	  try {
		      value = mathFunction();
		    } catch (err) {
			        value = err.toString();
			      }

	  queue.push(value);
	  queue.push('Guardrail was processed');

	  return queue;
>>>>>>> d0024126c61cb4169c3122d57399f62968df6c27
}

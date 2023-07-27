export default function handleResponseFromAPI(promise) {
<<<<<<< HEAD
  const body = { status: 200, body: 'success' };

  return promise
    .then(() => body)
    .catch(() => new Error())
    .finally(() => {
      console.log('Got a response from the API');
    });
=======
	  const body = { status: 200, body: 'success' };

	  return promise
	    .then(() => body)
	    .catch(() => new Error())
	    .finally(() => {
		          console.log('Got a response from the API');
		        });
>>>>>>> d0024126c61cb4169c3122d57399f62968df6c27
}

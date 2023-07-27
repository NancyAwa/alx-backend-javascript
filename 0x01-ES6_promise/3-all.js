import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
<<<<<<< HEAD
  return Promise
    .all([uploadPhoto(), createUser()])
    .then((res) => {
      console.log(`${res[0].body} ${res[1].firstName} ${res[1].lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
=======
	  return Promise
	    .all([uploadPhoto(), createUser()])
	    .then((res) => {
		          console.log(`${res[0].body} ${res[1].firstName} ${res[1].lastName}`);
		        })
	    .catch(() => console.log('Signup system offline'));
>>>>>>> d0024126c61cb4169c3122d57399f62968df6c27
}

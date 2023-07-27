import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
<<<<<<< HEAD
  try {
    return {
      photo: await uploadPhoto(),
      user: await createUser(),
    };
  } catch (err) {
    return {
      photo: null,
      user: null,
    };
  }
=======
	  try {
		      return {
			            photo: await uploadPhoto(),
			            user: await createUser(),
			          };
		    } catch (err) {
			        return {
					      photo: null,
					      user: null,
					    };
			      }
>>>>>>> d0024126c61cb4169c3122d57399f62968df6c27
}

<<<<<<< HEAD
=======

>>>>>>> d0024126c61cb4169c3122d57399f62968df6c27
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(
<<<<<<< HEAD
  firstName,
  lastName,
  fileName,
) {
  const res = [];
  try {
    const user = await signUpUser(firstName, lastName);
    res.push({ status: 'fulfilled', value: user });
  } catch (err) {
    res.push({
      status: 'rejected',
      value: err.toString(),
    });
  }

  try {
    const upload = await uploadPhoto(fileName);
    res.push({ status: 'fulfilled', value: upload });
  } catch (err) {
    res.push({
      status: 'rejected',
      value: err.toString(),
    });
  }

  return res;
=======
	  firstName,
	  lastName,
	  fileName,
) {
	  const res = [];
	  try {
		      const user = await signUpUser(firstName, lastName);
		      res.push({ status: 'fulfilled', value: user });
		    } catch (err) {
			        res.push({
					      status: 'rejected',
					      value: err.toString(),
					    });
			      }

	  try {
		      const upload = await uploadPhoto(fileName);
		      res.push({ status: 'fulfilled', value: upload });
		    } catch (err) {
			        res.push({
					      status: 'rejected',
					      value: err.toString(),
					    });
			      }

	  return res;
>>>>>>> d0024126c61cb4169c3122d57399f62968df6c27
}

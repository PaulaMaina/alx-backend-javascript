import { resolve } from 'path';
import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise
    .all([uploadPhoto(), createUser()])
    .then((response) => {
        console.log(`${response[0].body} ${response[1].firstName} ${response[1].lastName}`);
    })
    .catch(() => console.log('Signpup system offline'));
}
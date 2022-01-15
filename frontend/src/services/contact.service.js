import {firebase_app} from '../data/config';
import user from '../assets/images/user/user.png';

const db = firebase_app.firestore();

export const createUser = (value, avatar) => {
    db.collection('contactApp').add({
        avatar: avatar ? avatar : user,
        name: value.name,
        surname: value.surname,
        mobile: value.mobile,
        age: value.age,
        nameToSearch: value.name.toLowerCase()
    })
}

export const deletedUser = (userId) => {
    return firebase_app.firestore().collection('contactApp').doc(userId).delete();
}

export const editUser = (value, url, userId) => {
    db.collection('contactApp').doc(userId).set({
        avatar: url ? url : null,
        name: value.name,
        surname: value.surname,
        mobile: value.mobile,
        age: value.age,
        nameToSearch: value.name.toLowerCase()
    })
}

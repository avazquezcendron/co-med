import {firebase_app} from '../data/config';
import { getDatabase, ref, set, remove, update } from 'firebase/database';

export const creatTodoList = (value) => {
    const database = getDatabase(firebase_app);
    set(ref(database, `notas/${value.id}`), {
        task: value.task,
        completed: false,
    });
}

export const deleteList = (taskId) => {
    const database = getDatabase(firebase_app);
    const notesRef = ref(
      database,
      `notas/${taskId}`
    );
    remove(notesRef);
}

export const updateTask = (value) => {
    const database = getDatabase(firebase_app);
    const notesRef = ref(
      database,
      `notas/${value.id}`
    );
    update(notesRef, {
        completed: value.completed,
    });
}

export const markAllTask = (action) => {
    const database = getDatabase(firebase_app);
    const notesRef = ref(
      database,
      `notas`
    );
    // db.collection('todo')
    //     .get()
    //     .then(snapshot => {
    //         snapshot
    //             .docs
    //             .forEach(doc => {
    //                 db.collection('todo').doc(doc.id).set({ task: doc.data().task, completed: action });
    //             });
    //     });
}

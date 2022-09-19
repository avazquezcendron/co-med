import { firebase_app } from '../data/config';
import { getDatabase, ref, set, remove, update } from 'firebase/database';

export const creatTodoList = (note, user) => {
  const database = getDatabase(firebase_app);
  let dbRef = `notas/${user.username}`;
  if (note.assignedTo) {
    dbRef = `notas/${note.assignedTo.username}/`;
  }
  set(ref(database, `${dbRef}/${note.id}`), {
    task: note.task,
    completed: false,
    assignedTo: note.assignedTo?.username || null,
    assignedBy: `${user.firstName} ${user.lastName}`,
    createdDate: new Date().toLocaleDateString('es'),
  });
};

export const deleteList = (taskId, username) => {
  const database = getDatabase(firebase_app);
  const notesRef = ref(database, `notas/${username}/${taskId}`);
  remove(notesRef);
};

export const updateTask = (value, username) => {
  const database = getDatabase(firebase_app);
  const notesRef = ref(database, `notas/${username}/${value.id}`);
  update(notesRef, {
    completed: value.completed,
  });
};

import {ADD_NEW_PROJECT} from '../../redux/actionTypes';


export const addNewProject = (data) => {
    return{
        type:ADD_NEW_PROJECT,
        payload: {data}
    }
}
    
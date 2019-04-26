import { GET_COMPETITION_BY_ID } from './types';

export const getCompetitionByID = (id) => dispatch => {
    dispatch({
        type: GET_COMPETITION_BY_ID,
        payload: {id}
    })
}

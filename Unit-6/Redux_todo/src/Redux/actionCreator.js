import {Types} from "./actionType"

export const ActionCreators = {
    addProfile : (user) => ({type:Types.ADD_USER, payload : {user}}),
    updateProfileImage : (image) => ({type:Types.UPDATE_PROFILE_PICTURE, payload :{image}}),
    updatePrifile : (user) => ({type:Types.UPDATE_USER, payload :{user}}),
    login : (user) => ({type:Types.LOGIN, payload :{user}}),
    formSubmission : (status) => ({type:Types.FORM_SUBMISSION_STATUS, payload :{status}})
}
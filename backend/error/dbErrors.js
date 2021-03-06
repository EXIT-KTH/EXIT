//These messages are only used for debugging.
errorCodes = {
    CONNECTION_ERROR: {
        code: 'CONNECTION_ERROR',
        message: 'The connection the to database could not be made.'
    },
    UNKNOWN_ERROR: {
        code: 'UNKNOWN_ERROR',
        message: 'Some internal error occured'
    },
    INSERTING_USER_ERROR: {
        code: 'INSERTING_USER_ERROR',
        message: 'Problem when the user was to be insterted to the database.'
    },
    USER_ERROR: {
        code: 'USER_ERROR',
        message: 'A problem occured when the user was supposed to be set.'
    },
    UPDATE_USER_ERROR: {
        code: 'UPDATE_USER_ERROR',
        message: 'A problem when tring to update the user.'
    },
    LOGIN_ERROR: {
        code: 'LOGIN_ERROR',
        message: 'The password or username was not correct!'
    },
    TOKEN_ERROR: {
        code: 'TOKEN_ERROR',
        message: 'Token could not be set.'
    },
    GET_USER_ERROR: {
        code: 'GET_USER_ERROR',
        message: 'The request for the user was not correct.'
    },
    NO_USER_ERROR: {
        code: 'NO_USER_ERROR',
        message: 'The user could not be found.'
    },
    NO_ACCESS_ERROR: {
        code: 'NO_ACCESS_ERROR',
        message: 'The the client does not have the access rights to this function.'
    },
    APPLICATION_ERROR: {
        code: 'APPLICATION_ERROR',
        message: 'Error while trying to fetch a application.'
    },
    CREATE_APPLICATION_ERROR: {
        code: 'CREATE_APPLICATION_ERROR',
        message: 'Error while making an application in one of the three queries.'
    },
    UPDATE_APPLCIATION_ERROR: {
        code: 'UPDATE_APPLCIATION_ERROR',
        message: 'The application status could not be set.'
    },
    GET_COMPETENCE_ERROR: {
        code: 'GET_COMPETENCE_ERROR',
        message: 'Error while getting the competences.'
    },
    WRONG_REGISTER_INPUT_ERROR: {
        code: 'WRONG_REGISTER_INPUT_ERROR',
        message: 'The input from the user is incorrect'
    },
    DUPLICATE_USER_ERROR: {
        code: 'DUPLICATE_USER_ERROR',
        message: 'The user already exists try another username'
    },
    DUPLICATE_APPLICATION_ERROR: {
        code: 'DUPLICATE_APPLICATION_ERROR',
        message: 'The user already as an application'
    },
    NO_APPLICATION_ERROR: {
        code: 'NO_APPLICATION_ERROR',
        message: 'Could not find application'
    },
    NO_TOKEN_ERROR: {
        code: 'NO_TOKEN_ERROR',
        message: 'Could not find token'
    },
    APPLICATION_EDITED_ERROR: {
        code: 'APPLICATION_EDITED_ERROR',
        message: 'The application was updated after the user checked the status'
    },
    BAD_REQUEST_ERROR: {
        code: 'BAD_REQUEST_ERROR',
        message: 'There are errors in the sent data'
    },
    DUPLICATE_BUDGET_YEAR_ERROR: {
        code: 'DUPLICATE_BUDGET_YEAR_ERROR',
        message: 'This budget year already exists'
    },
    DELETE_ERROR: {
        code: 'DELETE_ERROR',
        message: 'Probem with deleting'
    },
    INVALID_SESSION: {
        code: 'INVALID_SESSION',
        message: 'The session is no longer valid'
    },
    NO_TIME_AVAILABLE_ERROR: {
        code: 'NO_TIME_AVAILABLE_ERROR',
        message: 'The teacher does not have enough time left in the budget'
    },
    NO_CREDITS_ERROR: {
        code: 'NO_CREDITS_ERROR',
        message: 'Credits missing from project'
    },
    CREATE_PROJECT_ERROR: {
        code: 'CREATE_PROJECT_ERROR',
        message: 'There was an error whlie creating the project'
    },
    LOGOUT_ERROR: {
        code: 'LOGOUT_ERROR',
        message: 'There was an error whlie logging out'
    }


}
/**
 * Takes the error and send the right error message to the client.
 *
 * @param {String} error - Error message.
 * @param {Object} res - Response to the client.
 */
function respondError(error, res) {
    console.error(error)
    switch (error) {
        case errorCodes.BAD_REQUEST_ERROR.code:
            res.status(403);
            res.send(errorCodes.BAD_REQUEST_ERROR.code);
            break;
        case errorCodes.CREATE_PROJECT_ERROR.code:
            res.status(500);
            res.send(errorCodes.CREATE_PROJECT_ERROR.code);
            break;
        case errorCodes.NO_CREDITS_ERROR.code:
            res.status(403);
            res.send(errorCodes.NO_CREDITS_ERROR.code);
            break;
        case errorCodes.DUPLICATE_BUDGET_YEAR_ERROR.code:
            res.status(400);
            res.send(errorCodes.DUPLICATE_BUDGET_YEAR_ERROR.code);
            break;
        case errorCodes.NO_TIME_AVAILABLE_ERROR.code:
            res.status(403);
            res.send(errorCodes.NO_TIME_AVAILABLE_ERROR.code);
            break;
        case errorCodes.CONNECTION_ERROR.code:
            res.status(503);
            res.send(errorCodes.CONNECTION_ERROR.code);
            break;
        case errorCodes.INSERTING_USER_ERROR.code:
            res.status(503);
            res.send(errorCodes.INSERTING_USER_ERROR.code);
            break;
        case errorCodes.UNKNOWN_ERROR.code:
            res.status(500);
            res.send(errorCodes.UNKNOWN_ERROR.code);
            break;
        case errorCodes.USER_ERROR.code:
            res.status(503);
            res.send(errorCodes.USER_ERROR.code);
            break;
        case errorCodes.UPDATE_USER_ERROR.code:
            res.status(503);
            res.send(errorCodes.UPDATE_USER_ERROR.code);
            break;
        case errorCodes.LOGIN_ERROR.code:
            res.status(401);
            res.send(errorCodes.LOGIN_ERROR.code);
            break;
        case errorCodes.GET_USER_ERROR.code:
            res.status(400);
            res.send(errorCodes.GET_USER_ERROR.code);
            break;
        case errorCodes.NO_USER_ERROR.code:
            res.status(400);
            res.send(errorCodes.NO_USER_ERROR.code);
            break;
        case errorCodes.NO_ACCESS_ERROR.code:
            res.status(403);
            res.send(errorCodes.NO_ACCESS_ERROR.code);
            break;
        case errorCodes.APPLICATION_ERROR.code:
            res.status(500);
            res.send(errorCodes.APPLICATION_ERROR.code);
            break;
        case errorCodes.UPDATE_APPLCIATION_ERROR.code:
            res.status(500);
            res.send(errorCodes.UPDATE_APPLCIATION_ERROR.code);
            break;
        case errorCodes.GET_COMPETENCE_ERROR.code:
            res.status(500);
            res.send(errorCodes.GET_COMPETENCE_ERROR.code);
            break;
        case errorCodes.WRONG_REGISTER_INPUT_ERROR.code:
            res.status(400);
            res.send(errorCodes.WRONG_REGISTER_INPUT_ERROR.code);
            break;
        case errorCodes.DUPLICATE_USER_ERROR.code:
            res.status(400);
            res.send(errorCodes.DUPLICATE_USER_ERROR.code);
            break;
        case errorCodes.DUPLICATE_APPLICATION_ERROR.code:
            res.status(400);
            res.send(errorCodes.DUPLICATE_APPLICATION_ERROR.code);
            break;
        case errorCodes.NO_APPLICATION_ERROR.code:
            res.status(400);
            res.send(errorCodes.NO_APPLICATION_ERROR.code);
            break;
        case errorCodes.NO_TOKEN_ERROR.code:
            res.status(400);
            res.send(errorCodes.NO_TOKEN_ERROR.code);
            break;
        case errorCodes.APPLICATION_EDITED_ERROR.code:
            res.status(400);
            res.send(errorCodes.APPLICATION_EDITED_ERROR.code);
            break;
        case errorCodes.CREATE_APPLICATION_ERROR.code:
            res.status(400);
            res.send(errorCodes.CREATE_APPLICATION_ERROR.code);
            break;
        case errorCodes.DELETE_ERROR.code:
            res.status(400);
            res.send(errorCodes.DELETE_ERROR.code);
            break;
        case errorCodes.INVALID_SESSION.code:
            res.status(401);
            res.send(errorCodes.INVALID_SESSION.code);
            break;
        case errorCodes.LOGOUT_ERROR.code:
            res.status(400);
            res.send(errorCodes.LOGOUT_ERROR.code);
            break;
            
        default:
            res.status(500);
            res.send('Something went wrong on the server');
    }
}
module.exports = {
    errorCodes,
    respondError
}
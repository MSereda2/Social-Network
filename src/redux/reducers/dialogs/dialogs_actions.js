import DialogsTypes from './dialogs_types';

export const sendMessageAC = (message) => ({
    type: DialogsTypes.SEND_MESSAGE,
    message
}
);

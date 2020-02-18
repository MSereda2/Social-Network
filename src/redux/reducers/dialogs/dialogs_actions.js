import DialogsTypes from './dialogs_types';

export const sendMessageActionCreate = () => (
    {type: DialogsTypes.SEND_MESSAGE }
);

export const updateMessageInputActionCreate = (text) => (
    {type: DialogsTypes.UPDATE_MESSAGE, message: text}
 )
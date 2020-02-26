import DialogsTypes from './dialogs_types';

export const sendMessageAC = () => (
    {type: DialogsTypes.SEND_MESSAGE }
);

export const updateMessageInputAC = (text) => (
    {type: DialogsTypes.UPDATE_MESSAGE, message: text}
 )
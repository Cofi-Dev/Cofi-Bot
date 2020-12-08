import 'mocha';
import { expect } from 'chai';
import { checkUserPermission } from '../../src/Utils/Services/checkUserPermission';

describe('CheckUserPermission Service', () => {
    const permissions = [
        'CREATE_INSTANT_INVITE',
        'ADD_REACTIONS',
        'STREAM',
        'VIEW_CHANNEL',
        'SEND_MESSAGES',
        'EMBED_LINKS',
        'ATTACH_FILES',
        'READ_MESSAGE_HISTORY',
        'MENTION_EVERYONE',
        'USE_EXTERNAL_EMOJIS',
        'CONNECT',
        'SPEAK',
        'USE_VAD',
        'CHANGE_NICKNAME'
    ];

    it("With an array of permissions", () => { 
        const result = checkUserPermission(permissions);
        expect(result).to.be.a('string'); 
    });
});
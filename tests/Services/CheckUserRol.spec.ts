import 'mocha';
import { expect } from 'chai';
import { checkUserRol } from '../../src/Utils/Services/CheckUserRol';

describe('CheckUserRol Service', 
  () => { 
    var guildRoles:Array<String | Object> = [
        [   
            '764487801533366302',
            {
                id: '764487801533366302',
                name: 'test-role',
                color: 15844367,
                hoist: false,
                rawPosition: 1,
                managed: false,
                mentionable: false,
                deleted: false
            }
        ],
        [   
            '092384209472394739',
            {
                id: '092384209472394739',
                name: 'test-role-2',
                color: 15844367,
                hoist: false,
                rawPosition: 1,
                managed: false,
                mentionable: false,
                deleted: false
            }
        ]
    ]


    it("With a unique ID as a parameter", () => { 
        const result = checkUserRol(guildRoles, ['764487801533366302']);
        expect(result).to.be.a('string'); 
    });

    it("With 2 IDs as parameters", () => { 
        const result = checkUserRol(guildRoles, ['764487801533366231', '092384209472394739']);
        expect(result).to.be.a('string'); 
    });

    it("With a fake ID", () => { 
        const result = checkUserRol(guildRoles, ['764487801533366300']);
        expect(result).to.be.a('string'); 
    });

    it("With 2 fake IDs", () => { 
        const result = checkUserRol(guildRoles, ['764487801533366300', '123801533366300']);
        expect(result).to.be.a('string'); 
    });

    it("With an empty ID array", () => { 
        const result = checkUserRol(guildRoles, []);
        expect(result).to.be.a('string')
        .equal('This user does not have any role assigned'); 
    });
});
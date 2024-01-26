import { ContactEntity } from '../entities/contac.entity';

interface ContactServiceInterface {
}


export class ContactService{
    constructor() {
        
    }
    
    public createContact(contact: ContactEntity): ContactEntity {
        return contact;
    }
    

}
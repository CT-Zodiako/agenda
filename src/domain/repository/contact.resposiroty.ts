import { Contact } from "../entities/contac.entity";

export abstract class ContactRepository {
    abstract saveContact(contact: Contact):void;
}
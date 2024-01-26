import { Contact } from "../entities/contac.entity";

export abstract class ContactDatasource {
    abstract saveontact(contact: Contact):void;
}
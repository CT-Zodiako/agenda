import { ContactDatasource } from "../../domain/datasources/contac.datasource";
import { Contact } from "../../domain/entities/contac.entity";

export class fileTodos implements ContactDatasource {
  saveontact(contact: Contact): void {
    console.log(contact);
  }
}

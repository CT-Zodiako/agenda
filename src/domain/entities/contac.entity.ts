export interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string;
  createdAt: Date;
}

export class ContactEntity{
    protected readonly id: number;
    public name: string;
    public email: string;
    public phone: string;
    protected readonly createdAt: Date;

    constructor(contact: Contact) {
        const { id = Math.random(), name, email, phone, createdAt = new Date() } = contact;
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.createdAt = createdAt;
    }
    
}

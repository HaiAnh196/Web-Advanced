export class CreateCustomerDto {
  CustomerId: string;
  Name: string;
  Email: string;
  Phone: string;
  Address: string;
}

export class UpdateCustomerDto {
  Name: string;
  Email: string;
  Phone: string;
  Address: string;
}

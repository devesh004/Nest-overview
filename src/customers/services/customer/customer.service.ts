import { Injectable, ParseIntPipe } from '@nestjs/common';
import { CreateCustomerDto } from 'src/customers/dtos/CreateCustomer.dto';
import { customers } from 'src/customers/types/customer';

@Injectable()
export class CustomerService {
  private customers: customers[] = [
    {
      id: 1,
      email: 'defrf@gmail.com',
      name: 'Devesh Shakya',
    },
    {
      id: 2,
      email: 'defrf@gmail.com',
      name: 'Devesh Shakya',
    },
    {
      id: 3,
      email: 'defrf@gmail.com',
      name: 'Devesh Shakya',
    },
    {
      id: 4,
      email: 'defrf@gmail.com',
      name: 'Devesh Shakya',
    },
  ];
  findCustomerById(Id: Number) {
    return this.customers.find((user) => user.id === Id);
  }
  createCustomer(customerDto: CreateCustomerDto) {
    this.customers.push(customerDto);
  }
  getCustomers() {
    return this.customers;
  }
}

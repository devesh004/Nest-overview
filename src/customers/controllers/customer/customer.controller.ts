import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  ParseIntPipe,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Body, Param, Post, Req, Res } from '@nestjs/common/decorators';
// import { Request, Response } from 'express';
import { CreateCustomerDto } from 'src/customers/dtos/CreateCustomer.dto';
import { CustomerService } from 'src/customers/services/customer/customer.service';

@Controller('customer')
export class CustomerController {
  constructor(private customerService: CustomerService) {}

  //Express way
  // @Get(':id')
  // getCustomer(
  //   @Param('id', ParseIntPipe) id,
  //   @Req() req: Request,
  //   @Res() res: Response,
  // ) {
  //   const customer = this.customerService.findCustomerById(id);
  //   if (customer) {
  //     res.send(customer);
  //   } else {
  //     res.status(400).send({ msg: 'No customer with this id' });
  //   }
  // }

  //nest way
  @Get('search/:id')
  getCustomerById(@Param('id', ParseIntPipe) id: Number) {
    const customer = this.customerService.findCustomerById(id);
    if (customer) {
      return customer;
    } else
      throw new HttpException(
        'Customer with this id not found',
        HttpStatus.BAD_REQUEST,
      );
  }

  @Get('')
  getAllCustomers() {
    return this.customerService.getCustomers();
  }

  @Post('create')
  @UsePipes(ValidationPipe)
  createCustomer(@Body() createCustomer: CreateCustomerDto) {
    this.customerService.createCustomer(createCustomer);
  }
}

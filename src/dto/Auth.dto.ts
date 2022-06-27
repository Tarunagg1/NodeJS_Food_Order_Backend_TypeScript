import { VendorPayload } from './Vendor.dto';
import { CustomerPayload } from './Customer.dtos';

export type AuthPayload = VendorPayload | CustomerPayload;

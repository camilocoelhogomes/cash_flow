import {
  PricingRepository,
  pricingRepository,
} from '../../Model/Repositories/PricingRepository';
import {IPricing} from '../../utils/Common/Interfaces/IPricing';

export class PricingController {
  constructor(
    private readonly pricingRepo: PricingRepository = pricingRepository
  ) {}

  create(pricing: IPricing): Promise<IPricing> {
    return this.pricingRepo.create(pricing);
  }
}

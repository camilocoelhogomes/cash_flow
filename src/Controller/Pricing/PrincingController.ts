import {PricingRepository} from '../../Model/Repositories/PricingRepository';
import {IPricing} from '../../utils/Common/Interfaces/IPricing';

export class PricingController {
  constructor(private readonly pricingRepo: PricingRepository) {}

  upInsert(pricing: IPricing): Promise<IPricing> {
    return this.pricingRepo.upInsert(pricing);
  }
}

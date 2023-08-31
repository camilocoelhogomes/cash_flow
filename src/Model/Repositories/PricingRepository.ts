import {DataSource} from 'typeorm';
import {Pricing} from '../Entitys/Pricing';
import {IPricing} from '../../utils/Common/Interfaces/IPricing';

export class PricingRepository {
  private readonly repository;

  constructor(dataSource: DataSource) {
    this.repository = dataSource.getRepository(Pricing);
  }

  upInsert(pricing: IPricing): Promise<IPricing> {
    const newPricing = this.repository.create();
    newPricing.fee = pricing.fee;
    newPricing.feeIndex = pricing.feeIndex;
    newPricing.feeModel = pricing.feeModel;
    newPricing.installments = pricing.installments;
    newPricing.scenarioId = pricing.scenarioId;
    newPricing.squareAmount = pricing.squareAmount;
    newPricing.startAmount = pricing.startAmount;
    const result = this.repository.save(newPricing);
    return result;
  }

  async getById(id: number) {
    const result = await this.repository.findOne({
      where: {
        scenarioId: id,
      },
    });
    return result;
  }
}

import React, { FormEventHandler } from 'react'
import { DialogFactory } from '../../components/DialogFactory'
import Button from '../../components/ButtonFactory/Button'
import { Forms } from '../../components/FormFactory'
import { Fields } from '../../components/FieldsFactory'
import { CreateState } from '../../App/state'
import { sleep } from '../../../utils/Functions'
import { IGetPricing, IGetScenario } from '../../../utils/Common/tempInterfaces'

type Props = { open: boolean, setOpen(value: boolean): void, pricing: IGetPricing }

export default function UpdatePricing({ open, setOpen, pricing }: Props) {
  const [currentPricing, setPricing] = React.useState(pricing)

  const [state, setState] = React.useState<CreateState>('initial')

  function onInputChange<K extends keyof IGetPricing>(key: K, value: IGetPricing[K]) {
    const current = { ...currentPricing }; current[key] = value;
    setPricing(current);
  };

  const onSubmit: FormEventHandler = async e => {
    setState('submiting')
    e.preventDefault();
    await sleep(2000);
    setState('success');
    setOpen(false);
  };


  function cancel() { setOpen(false); setPricing(pricing) }

  return <DialogFactory.Root open={open}>
    <DialogFactory.Content style={{ minWidth: '10%', minHeight: '50%' }}>
      <div className='h-[5vh]'>
        <DialogFactory.Title>
          Editar Precificação Base
        </DialogFactory.Title>
      </div>
      <div className='h-[50vh'>

        <Forms.Root className="space-y-4" onSubmit={onSubmit}>

          <Forms.Field name="">
            <Forms.Label>Valor de Entrada (R$)</Forms.Label>
            <Forms.Message match={'valueMissing'}></Forms.Message>
            <Forms.Control asChild>
              <Fields.Input
                defaultValue={pricing?.startAmount}
                required type="number"
                onChange={e => onInputChange('startAmount', Number(e.target.value))}
              />
            </Forms.Control>
          </Forms.Field>

          <Forms.Field name="">
            <Forms.Label>Valor do m² (R$)</Forms.Label>
            <Forms.Message match={'valueMissing'}></Forms.Message>
            <Forms.Control asChild>
              <Fields.Input
                defaultValue={pricing?.squareAmount}
                required type="number"
                onChange={e => onInputChange('squareAmount', Number(e.target.value))}
              />
            </Forms.Control>
          </Forms.Field>

          <Forms.Field name="">
            <Forms.Label>Taxa de juros (%)</Forms.Label>
            <Forms.Message match={'valueMissing'}></Forms.Message>
            <Forms.Control asChild>
              <Fields.Input
                defaultValue={pricing?.fee}
                required
                type="number"
                onChange={e => onInputChange('fee', Number(e.target.value))}
              />
            </Forms.Control>
          </Forms.Field>

          <Forms.Field name="">
            <Forms.Label>Indexador</Forms.Label>
            <Forms.Message match={'valueMissing'}></Forms.Message>
            <Forms.Control asChild>
              <Fields.Input
                defaultValue={pricing?.feeIndex}
                required type="number"
                onChange={e => onInputChange('feeIndex', e.target.value)}
              />
            </Forms.Control>
          </Forms.Field>
          <Forms.Field name="">
            <Forms.Label>Modelo de Juros</Forms.Label>
            <Forms.Message match={'valueMissing'}></Forms.Message>
            <Forms.Control asChild>
              <Fields.Input
                defaultValue={pricing?.feeModel}
                required type="number"
                onChange={e => onInputChange('feeModel', e.target.value)}
              />
            </Forms.Control>
          </Forms.Field>
          <Forms.Field name="">
            <Forms.Label>Parcelamento</Forms.Label>
            <Forms.Message match={'valueMissing'}></Forms.Message>
            <Forms.Control asChild>
              <Fields.Input
                defaultValue={pricing?.installments}
                required
                type="number"
                onChange={e => onInputChange('installments', Number(e.target.value))}
              />
            </Forms.Control>
          </Forms.Field>


          <div className='flex space-x-2'>
            {state === 'initial' && <Button color='soft' onClick={cancel}>Cancel</Button>}
            <Forms.Submit state={state} />
          </div>

        </Forms.Root>

      </div>
    </DialogFactory.Content>
  </DialogFactory.Root>
}
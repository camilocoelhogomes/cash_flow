import React, { FormEventHandler } from 'react'
import { DialogFactory } from '../../components/DialogFactory'
import Button from '../../components/ButtonFactory/Button'
import { Forms } from '../../components/FormFactory'
import { Fields } from '../../components/FieldsFactory'
import { CreateState } from '../../App/state'
import { Scenario } from '../../../Model/Entitys/Scenario'
import { sleep } from '../../../utils/Functions'
import { IGetScenario } from '../../../utils/Common/tempInterfaces'

type Props = { open: boolean, setOpen(value: boolean): void, scenario: IGetScenario }

export default function UpdateAreas({ open, setOpen, scenario }: Props) {
  const [currentScenario, setScenario] = React.useState(scenario)

  const [state, setState] = React.useState<CreateState>('initial')

  function onInputChange<K extends keyof IGetScenario>(key: K, value: IGetScenario[K]) {
    const current = { ...currentScenario }; current[key] = value;
    setScenario(current);
  };

  const onSubmit: FormEventHandler = async e => {
    setState('submiting')
    e.preventDefault();
    await sleep(2000);
    setState('success');
    setOpen(false);
  };


  function cancel() { setOpen(false); setScenario(scenario) }

  return <DialogFactory.Root open={open}>
    <DialogFactory.Content style={{ minWidth: '10%', minHeight: '50%' }}>
      <div className='h-[5vh]'>
        <DialogFactory.Title>
          Editar Areas
        </DialogFactory.Title>
      </div>
      <div className='h-[50vh'>

        <Forms.Root className="space-y-4" onSubmit={onSubmit}>

          <Forms.Field name="">
            <Forms.Label>Área Total</Forms.Label>
            <Forms.Message match={'valueMissing'}></Forms.Message>
            <Forms.Control asChild>
              <Fields.Input
                defaultValue={scenario.totalArea}
                required
                type="number"
                onChange={e => onInputChange('totalArea', Number(e.target.value))}
              />
            </Forms.Control>
          </Forms.Field>

          <Forms.Field name="">
            <Forms.Label>Área Verde (Decoração)</Forms.Label>
            <Forms.Message match={'valueMissing'}></Forms.Message>
            <Forms.Control asChild>
              <Fields.Input
                defaultValue={scenario.decorationArea}
                required type="number"
                onChange={e => onInputChange('decorationArea', Number(e.target.value))}
              />
            </Forms.Control>
          </Forms.Field>
          <Forms.Field name="">
            <Forms.Label>Área de preservação permanente</Forms.Label>
            <Forms.Message match={'valueMissing'}></Forms.Message>
            <Forms.Control asChild>
              <Fields.Input
                defaultValue={scenario.protectedArea}
                required type="number"
                onChange={e => onInputChange('protectedArea', Number(e.target.value))}
              />
            </Forms.Control>
          </Forms.Field>
          <Forms.Field name="">
            <Forms.Label>Área de Vias</Forms.Label>
            <Forms.Message match={'valueMissing'}></Forms.Message>
            <Forms.Control asChild>
              <Fields.Input
                defaultValue={scenario.streetArea}
                required
                type="number"
                onChange={e => onInputChange('streetArea', Number(e.target.value))}
              />
            </Forms.Control>
          </Forms.Field>
          <Forms.Field name="">
            <Forms.Label>Nº de Lotes</Forms.Label>
            <Forms.Message match={'valueMissing'}></Forms.Message>
            <Forms.Control asChild>
              <Fields.Input
                defaultValue={scenario.totalSlots}
                required type="number"
                onChange={e => onInputChange('totalSlots', Number(e.target.value))}
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
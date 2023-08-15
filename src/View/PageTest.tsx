import { Forms } from "./components/FormFactory"
import { Fields } from "./components/InputFactory"

type Props = {}

export default function PageTest({ }: Props) {
  return <>
    <Forms.Root >

      <Forms.Field name=''>
        <Forms.Label>Título</Forms.Label>
        <Forms.Message match={'valueMissing'}></Forms.Message>
        <Forms.Control asChild>
          <Fields.Input />
        </Forms.Control >
      </Forms.Field>
      <Forms.Submit state="initial" />

    </Forms.Root>
  </>
}
import CurrencyInput, {CurrencyInputProps} from 'react-currency-input-field';

export type FormInputTextProps = CurrencyInputProps;

export function Currency({...rest}: FormInputTextProps) {
  return (
    <CurrencyInput
      {...rest}
      className="border border-slate-300 rounded-sm py-1 px-2"
      intlConfig={{locale: 'pt-BR', currency: 'BRL'}}
    />
  );
}

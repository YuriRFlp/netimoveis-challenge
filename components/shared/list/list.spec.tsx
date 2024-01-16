import { render } from '@testing-library/react';
import List from './list';

const data = {
  title:"Recursos",
  items: [
    'Comprar',
    'Alugar',
    'Lançamentos',
    'Anunciar Imóvel',
    'Simular Financiamento',
    'Imobiliárias',
    'Blog',
  ],
  textCustom: "cursor-pointer"
};

test('it should list the options', () => {
  const { container, getByText } = render(
    <List
    title={data.title}
    items={data.items}
    textCustom={data.textCustom}
    />
  )

  const options = container.getElementsByClassName("cursor-pointer");

  expect(options.length == 7).toBeTruthy();
  expect(getByText('Recursos')).toBeTruthy();
  expect(getByText('Blog')).toBeTruthy();
})
import { render } from '@testing-library/react';
import Menu from './menu';

const data = {
  options: [
    { label: 'Tipos de Propriedades', active: true },
    { label: 'Populares para Venda', active: false },
    { label: 'Populares para Locação', active: false },
  ],
  handler: () => {},
};

test('it should render the options', () => {
  const { container, getByText } = render(
    <Menu
      options={data.options}
      optionsHandler={data.handler}
    />
  )
  const options = container.getElementsByClassName("cursor-pointer");

  expect(options.length == 3).toBeTruthy();
  expect(getByText('Tipos de Propriedades')).toBeTruthy();
  expect(getByText('Populares para Venda')).toBeTruthy();
  expect(getByText('Populares para Locação')).toBeTruthy();
})
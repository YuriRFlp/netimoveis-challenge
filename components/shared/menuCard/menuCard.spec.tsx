import { render } from '@testing-library/react';
import MenuCard from './menuCard';

const data = {
  title: "Sol que ilumina as suas manhãs",
  description: "Busque imóveis que pegam Sol durante a manhã para que você fique com a vitamina D em dia ;)",
  textButton: "Buscar Imóveis",
  links: [
    "Simule seu Financiamento"
  ],
  businessTypes: [
    { label: 'Alugar Imóvel', active: true },
  ],
  handler: () => {},
  classCustom: ""
};

test('it should display content', () => {
  const { getByText } = render(
    <MenuCard
      title={data.title}
      description={data.description}
      textButton={data.textButton}
      links={data.links}
      menuOptions={data.businessTypes}
      optionsHandler={data.handler}
      classCustom={data.classCustom}
    />
  )

  expect(getByText(data.title)).toBeTruthy();
  expect(getByText(data.description)).toBeTruthy();
  expect(getByText(data.textButton)).toBeTruthy();
  expect(getByText(data.businessTypes[0].label)).toBeTruthy();
  expect(getByText(data.links[0])).toBeTruthy();
})
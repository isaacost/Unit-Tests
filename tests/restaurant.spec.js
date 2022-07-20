const createMenu = require('../src/restaurant');

/*
  Você é responsável por escrever o código do sistema de pedidos de um restaurante através do qual será possível
  cadastrar um menu. Dado que um menu foi cadastrado, o sistema deve disponibilizar um objeto que permite:

  - Ler o menu cadastrado;
  - Fazer pedidos;
  - Verificar o que foi pedido;
  - Somar o valor da conta.

  A estrutura deste código e deste objeto já está definida e você precisa implementá-la.
  Abaixo você verá uma série de testes e passos que irão guiar você e, que devem NECESSARIAMENTE ser realizados em ordem para o bom desenvolvimento do sistema.

  Desenvolvimento:
  - Uma função: 
    createMenu()
  - Recebe um parâmetro que é um objeto, o menu:
    Exemplo: { food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }.

  A função createMenu() então, retornará um novo objeto. Este novo objeto contém algumas chaves e ao acessar cada uma delas temos os seguintes retornos:

  - Uma chave `fetchMenu` retornando o menu, que nada mais é que o objeto passado como parâmetro para createMenu()

    Exemplo:
    const meuRestaurante = createMenu({
      food: {'coxinha': 3.90, 'sanduiche', 9.90},
      drinks: {'agua': 3.90, 'cerveja': 6.90}
    });

    meuRestaurante.fetchMenu() // Retorno: Menu acima

  - Uma chave `consumption` armazenando um array de strings. Cada string é a chave de um pedido.
    Exemplo: ['coxinha', 'cerveja']

  - Uma chave `order` armazenando uma função. Essa função recebe uma string como parâmetro e essa string deve ser adicionada à lista armazenada em `consumption`.

  - Uma chave `pay` que, quando chamada, invoca uma função. Essa função faz a soma do preço de todos os pedidos, retornando essa soma de preços com acréscimo de 10%.

  Comportamento:
    const meuRestaurante = createMenu({ food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} })

    meuRestaurante.fetchMenu() // Retorno: { food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }

    meuRestaurante.order('coxinha') // Retorno: undefined

    meuRestaurante.consumption // Retorno: ['coxinha']

    meuRestaurante.pay() // Retorno: 4.29

  IMPORTANTE: FAÇA OS TESTES E PASSOS DE ACORDO COM A SEQUÊNCIA INDICADA NO README DO PROJETO!

*/

describe('10 - Implemente os casos de teste e a função `createMenu`', () => {
  //Testes de acordo com o README
  const menu = { food: { coxinha: 3.9, sopa: 9.9 }, drink: { agua: 3.9, cerveja: 6.9 } };
  const restaurante = createMenu(menu);
  //questão 1:
  it('Verifica se createMenu retorna um objeto com uma chave fetchMenu que deve ser uma função:', () => {
    expect(typeof createMenu()).toBe('object');
    expect(Object.keys(createMenu())).toContainEqual('fetchMenu');
    expect(typeof createMenu().fetchMenu).toBe('function');
  });
  //questão 2:
  it('Verifica se createMenu.fetchMenu() retorna um objeto cujar chaves são food e drink:', () => {
    expect(Object.keys(restaurante.fetchMenu())).toEqual(['food', 'drink']);
  });
  //questão 3:
  it('Verifica se o menu passado pra função createMenu é igual ao menu recuperado pela função createMenu.fetchMenu()', () => {
    expect(restaurante.fetchMenu()).toEqual(menu);
  });
  //questão 5:
  it('Verifica se após a criação o createMenu.consumption retorna um arrat vazio', () => {
    expect(restaurante.consumption).toEqual([]);
  });
  //questão 7:
  it('Verifica se ao chamar a função associada a chave order no objeto retornado, passando um string como parâmetro, tal string é adicionada no array retornado em consumption', () => {
    restaurante.order('coxinha');
    expect(restaurante.consumption).toEqual(['coxinha']);
  });
  //questão 9:
  it('Verifica se ao adicionar três pedidos, dentre bebidas e comidas, o arrat consumption contém os itens pedidos', () => {
    restaurante.order('cerveja');
    restaurante.order('sopa');
    restaurante.order('agua');
    expect(restaurante.consumption).toEqual(['coxinha', 'cerveja', 'sopa', 'agua']);
  });
  //questão 10:
  it('Verifica se a função order aceita que pedidos repetidos sejam acrescidos a consumption', () => {
    restaurante.order('coxinha');
    expect(restaurante.consumption).toEqual(['coxinha', 'cerveja', 'sopa', 'agua', 'coxinha']);
  });
  //questão 11:
  it('Verifica se ao chamar createMenu.pay() retorna a soma dos preços de tudo que foi pedido, conforme registrado em consumption mais 10%', () => {
    expect(restaurante.pay()).toBe(31.35)
  });
});
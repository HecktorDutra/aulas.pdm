import DespesaSaida from '../components/despesa/DespesaSaida';

// Dados fictícios para demonstração
const DUMMY_DESPESAS = [
  {
    id: '1',
    descricao: 'Conta de luz',
    valor: 100.99,
    data: new Date(2025, 2, 11),
  },
  {
    id: '2',
    descricao: 'Conta de Agua',
    valor: 40.99,
    data: new Date(2025, 4, 10),
  },
  {
    id: '3',
    descricao: 'Internet',
    valor: 89.90,
    data: new Date(2025, 3, 5),
  },
  {
    id: '4',
    descricao: 'Mercado',
    valor: 350.00,
    data: new Date(2025, 3, 20),
  },
  {
    id: '5',
    descricao: 'Combustível',
    valor: 180.00,
    data: new Date(2025, 4, 1),
  },
];

function TodasDespesas() {
  return (
    <DespesaSaida despesas={DUMMY_DESPESAS} periodo={'Total'} />
  );
}

export default TodasDespesas;

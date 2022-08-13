import BasicTable from '../BasicTable'

const MetabolizableEnergyTable = ({ metabolizableEnergy }) => {
  const { proteinProportion, fatProportion, carbsProportion } = metabolizableEnergy

  const tableHeaders = [
    'Metabolizable Energy, ME (代謝能熱量比)',
    'Protein (蛋白質) %',
    'Fat (脂肪) %',
    'Carbs (碳水化合物) %',
  ]

  const tableBodies = [
    {
      type: 'Recommendation (建議比例)',
      protein: '45 ~ 60',
      fat: '30 ~ 50',
      carbs: ' ~ 10',
    },
    {
      type: 'Result (計算結果)',
      protein: proteinProportion,
      fat: fatProportion,
      carbs: carbsProportion,
    },
  ]

  return <BasicTable tableHeaders={tableHeaders} tableBodies={tableBodies} />
}

export default MetabolizableEnergyTable

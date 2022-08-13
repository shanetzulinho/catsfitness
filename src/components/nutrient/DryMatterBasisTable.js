import BasicTable from '../BasicTable'

const DryMatterBasisTable = ({ dryMatterBasis }) => {
  const { dryProteinProportion, dryFatProportion, dryCarbsProportion } = dryMatterBasis

  const tableHeaders = [
    'Dry Matter Basis (乾物質比)%',
    'Protein (蛋白質) %',
    'Fat (脂肪) %',
    'Carbs (碳水化合物) %',
  ]

  const tableBodies = [
    {
      type: 'Recommendation (建議比例)',
      protein: '45 ~ ',
      fat: '25 ~ 45',
      carbs: ' ~ 10',
    },
    {
      type: 'Result (計算結果)',
      protein: dryProteinProportion,
      fat: dryFatProportion,
      carbs: dryCarbsProportion,
    },
  ]

  return <BasicTable tableHeaders={tableHeaders} tableBodies={tableBodies} />
}

export default DryMatterBasisTable

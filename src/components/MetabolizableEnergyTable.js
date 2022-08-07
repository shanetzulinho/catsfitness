import BasicTable from '../components/BasicTable'

const MetabolizableEnergyTable = ({
  proteinProportion,
  fatProportion,
  carbsProportion,
}) => {
  const tableHeaders = ['', 'Protein%', 'Fat%', 'Carbs%']

  const tableBodies = [
    {
      type: 'Metabolizable Energy, ME (代謝能熱量比)%',
      protein: proteinProportion,
      fat: fatProportion,
      carbs: carbsProportion,
    },
  ]

  return <BasicTable tableHeaders={tableHeaders} tableBodies={tableBodies} />
}

export default MetabolizableEnergyTable

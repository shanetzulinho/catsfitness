import BasicTable from '../components/BasicTable'

const DryMatterBasisTable = ({ proteinProportion, fatProportion, carbsProportion }) => {
  const tableHeaders = ['', 'Protein%', 'Fat%', 'Carbs%']

  const tableBodies = [
    {
      type: 'Dry Matter Basis (乾物質比)%',
      protein: proteinProportion,
      fat: fatProportion,
      carbs: carbsProportion,
    },
  ]

  return <BasicTable tableHeaders={tableHeaders} tableBodies={tableBodies} />
}

export default DryMatterBasisTable

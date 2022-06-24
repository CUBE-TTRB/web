import EditResource from "../../../components/elements/editResource/editResource"
import Layout from '../../../components/layout/layout'
import NavigationLayout from '../../../components/layout/navigationLayout'


export default function EditId() {
  return (
    <div>
        <EditResource />
    </div>
  )
}

EditId.getLayout = function getLayout(page) {
    return (
      <Layout>
        <NavigationLayout>{page}</NavigationLayout>
  
      </Layout>
    )
  }
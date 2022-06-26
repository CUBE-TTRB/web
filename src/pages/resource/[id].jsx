
import Resource from "../../components/elements/resource/resource"
import Layout from "../../components/layout/layout"
import NavigationLayout from "../../components/layout/navigationLayout"
export default function resourceId() {
  return (
    <>
      <Resource />
    </>
  )
}


resourceId.getLayout = function getLayout(page) {
  return (
    <Layout>
      <NavigationLayout>{page}</NavigationLayout>

    </Layout>
  )
}
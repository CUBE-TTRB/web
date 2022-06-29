
import Resource from "../../components/elements/resource/resource"
import Layout from "../../components/layout/layout"
import NavigationLayout from "../../components/layout/navigationLayout"
import ResourceService from "../../service/resource.service"


export default function resourceId() {
  return (
    <>
      <Resource />
    </>
  )
}

export async function getServerSideProps({params}) {
 
  let post = await ResourceService.getRessource(true);

  return {
    props: {
        post
    }, // will be passed to the page component as props
  }
}

resourceId.getLayout = function getLayout(page) {
  return (
    <Layout>
      <NavigationLayout>{page}</NavigationLayout>

    </Layout>
  )
}
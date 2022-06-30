
import Resource from "../../components/elements/resource/resource"
import Layout from "../../components/layout/layout"
import NavigationLayout from "../../components/layout/navigationLayout"
import ResourceService from "../../service/resource.service"
import UserService from "../../service/user.service"


export default function resourceId({post,user,commentUser}) {
  return (
    <>
      <Resource post={post} user={user} commentUser={commentUser}/>
    </>
  )
}

export async function getServerSideProps({params}) {
  let post = await ResourceService.getSpecificRessource(params.id);
  let user = await UserService.getUser(post.userId);
  let commentUser = await UserService.getUsers();

  return {
    props: {
        post,
        user,
        commentUser
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
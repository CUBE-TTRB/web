import EditResource from "../../../components/elements/editResource/editResource"
import Layout from '../../../components/layout/layout'
import NavigationLayout from '../../../components/layout/navigationLayout'
import { AppContext } from "../../../context/state";
import { useContext, useEffect } from "react";
import { useRouter } from 'next/router'
import { useAuth } from "../../../context/auth";

export default function EditId() {
  const { isAuthenticated, user, login, loading, logout, type, AUTHTOKEN} = useAuth();
  console.log(useAuth())
  console.log("ABC")
  return (
    <div>
      <EditResource />
    </div>)

  console.log(isAuthenticated)
  const router = useRouter();
  useEffect(() => {
    if(isAuthenticated == false)router.push("/");
  }, [])
  if(isAuthenticated){
    return (
    <div>
      <EditResource />
    </div>)
  }else {
    return null
  }
}

EditId.getLayout = function getLayout(page) {
    return (
      <Layout>
        <NavigationLayout>{page}</NavigationLayout>
  
      </Layout>
    )
  }

/*
  export async function getServerSideProps({params}) {
    // let post = await ResourceService.getSpecificRessource(params.id);
    // let user = await UserService.getUser(post.userId);
    // let commentUser = await UserService.getUsers();
  
    return {
      props: {
          post,
          user,
          commentUser
      }, // will be passed to the page component as props
    }
  }*/
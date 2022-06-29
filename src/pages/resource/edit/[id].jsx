import EditResource from "../../../components/elements/editResource/editResource"
import Layout from '../../../components/layout/layout'
import NavigationLayout from '../../../components/layout/navigationLayout'
import { AppContext } from "../../../context/state";
import { useContext, useEffect } from "react";
import { useRouter } from 'next/router'
import { useAuth } from "../../../context/auth";

export default function EditId() {
  const { isAuthenticated, user, loading } = useAuth();
  const router = useRouter();
  useEffect(() => {
    if(!(isAuthenticated))router.push("/");
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
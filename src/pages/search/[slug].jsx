import react from 'react'
import { useRouter } from 'next/router'
import Layout from '../../components/layout/layout'
import NavigationLayout from '../../components/layout/navigationLayout'
import Card from '../../components/elements/card/card'
import Resources from '../../components/elements/resources/resources'
import { AppContext } from '../../context/state';
import { useContext } from 'react'
import NoResult from '../../components/elements/noResult/noResult'
import ResourceService from '../../service/resource.service'
import Axios from 'axios'
import AppService from '../../service/app.service'
import UserService from '../../service/user.service'
import { useAuth } from '../../context/auth'

export default function searchSlug ({post}) {/*
    const router = useRouter()
    const { pid } = router.query*/
  // https://via.placeholder.com/1920x1080/999999/FFFFFF/?text=IMAGE
  const tagsList = [
    { name:"Famille",id:1},
    { name:"Amis",id:2},
    { name:"Conjoints",id:3},
    { name:"Professionel",id:4},
    { name:"Inconnus",id:5}
]
  const { isAuthenticated, user, loading, type } = useAuth();


  // console.log(post)
    if(!post || post.length <= 0){
      return (
        <Resources>
          <NoResult />
        </Resources>
        
      )
    }
    return (

    <>
    <Resources>
            {post.map(el => 
        <Card key={el.id} 
          title={el.title}
          icon={type[el.type]}
          image={el.thumbnail}
          description="" 
          like="" 
          user={el.userId}
          comment="" 
          tags={tagsList}
          link={el.id}
        />  
        
      )}
    </Resources>

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
  
searchSlug.getLayout = function getLayout(page) {
    return (
      <Layout>
        <NavigationLayout>{page}</NavigationLayout>
      </Layout>
    )
  }
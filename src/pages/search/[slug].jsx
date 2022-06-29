import react from 'react'
import { useRouter } from 'next/router'
import Layout from '../../components/layout/layout'
import NavigationLayout from '../../components/layout/navigationLayout'
import Card from '../../components/elements/card/card'
import Resources from '../../components/elements/resources/resources'
import { AppContext } from '../../context/state';
import { useContext } from 'react'
import NoResult from '../../components/elements/noResult/noResult'
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
const test2 = useContext(AppContext);
console.log(test2)


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
          title="titleArticle" 
          icon="" 
          image="https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
          description="        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate voluptatibus voluptatum cum reiciendis eveniet, rerum obcaecati necessitatibus aperiam neque maiores quasi ipsum mollitia. Animi nisi, consequatur sit asperna          " 
          user={{"porfilePiture":"https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"}}
          like="" 
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
    const post = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${params.slug}`).then(r => r.json())
    console.log(`https://jsonplaceholder.typicode.com/posts?_limit=${params.slug}`)
    console.log(post);
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
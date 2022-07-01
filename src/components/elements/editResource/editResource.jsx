import { useQuill } from 'react-quilljs';
import styles from './editResource.module.scss'
import Card from '../card/card';
import { useEffect,useState,useRef } from 'react';
import QuillEditor from '../quillEditor/quillEditor';
import ResourceService from '../../../service/resource.service';
import { useAuth } from '../../../context/auth';
export default function editResource() {

  const { isAuthenticated, user, login, loading, logout, type, AUTHTOKEN} = useAuth();
  console.log(useAuth(), "e",AUTHTOKEN)


  const { quill, quillRef } = useQuill({
    modules: {
      toolbar: {
        container: '#toolbar2'
      }
    }
  });
/*

*/
    //const { quillResource, quillResourceRef } = useQuill()

    const tagsList = [
        { name:"Famille",id:1},
        { name:"Amis",id:2},
        { name:"Conjoints",id:3},
        { name:"Professionel",id:4},
        { name:"Inconnus",id:5}
    ]

    const categList = [
        { name:"Article",id:1},
        { name:"Course",id:2},
        { name:"Video",id:3},
        { name:"Exercise",id:4},
        { name:"Reading_sheet",id:5},
        { name:"Game",id:6},
        { name:"Activity",id:7} 
    ]

    const [ title, setTitle] = useState("Title");
    const [ resourceType, setResourceType] = useState(categList[0])
    const [ image, setImage] = useState("/images/catalog-default-img.png");
    const [ description, setDescription] = useState("Lorem Ipsum DOlor");
    const [ tags, setTags] = useState(tagsList);
    const [ body, setBody] = useState(null);
    const [ visibility, setVisibility ] = useState(true);
    
    useEffect(() => {
        if (quill) {
          quill.on('text-change', (delta, oldDelta, source) => {
            let content = quill.getContents();

            // console.log(content.ops.length); 
            setImage(content.ops[(content.ops.length -2)].insert.image)
          });
        }
      }, [quill]);
    
    let fileRef = useRef();
    function triggerClick() {
        fileRef.current.click();
    }


    let titleRef = useRef() , titleUpdate = () => {setTitle(titleRef.current.value)};
    let categRef = useRef(), categUpdate = () => {setResourceType(type[categRef.current.value])};
    let descRef = useRef(), descUpdate = () => {setDescription(descRef.current.value)};
    let tagsRef = useRef() , tagsUpdate = () => { 
      setTags(
        ([...tagsRef.current.childNodes].slice(1).map(el => {if (el.children.tags.checked){return tagsList.find(tag => tag.id == el.children.tags.id)}})).filter(n => n)
      )
    };

    async function handlerSubmit(e){
      e.preventDefault();
      if(title?.length >0 && description?.length >0 && tags?.length >0 && body?.length > 0){
        console.log(body)
        console.log(JSON.stringify(body))

        const res = await ResourceService.createRessource(type, visibility, title, body, 1, AUTHTOKEN);
        alert(res)
      }else {
        alert("vide")
      }
    }


  return (
    <div className={styles.page}>
      <Card key={1}
        title={title}
        icon={resourceType.name}
        image={image}
        description={description}
        user={null}
        like={0}
        comment={0}
        tags={tags}
        className={styles.resourceCard}
      />

      <div className={[ "card" , styles.cardEditor ].join(" ")}>
        
        <label htmlFor="title">Titre :</label>
        <input maxLength="20" onChange={titleUpdate} ref={titleRef} defaultValue={title} placeholder='Titre' id="title" name="title" type="text" required />
        
        <label htmlFor="categ">Catégorie :</label>
        <select onChange={categUpdate} ref={categRef} placeholder='Catégorie' id="categ" name="categ" required>
          { Object.keys(type).map(el => {
            return (
              <option onChange={()=>{}} key={el} value={el} readOnly>{type[el].name}</option>
            )
          })}
        </select>
        
        <button onClick={triggerClick}>Changer miniature</button>
        
        <label htmlFor="desc">Description :</label>
        <input onChange={descUpdate} ref={descRef} defaultValue={description} placeholder='Description' id="desc" name="desc" type="text" required />
          
          <fieldset onChange={tagsUpdate} ref={tagsRef}>
            <legend>Tags:</legend>
            {
              tagsList.map(el => {
                return (
                  <div key={el.id+el.name+"parent"}>
                  <input key={el.id+el.name+"desc"} defaultChecked id={el.id} name="tags" type="checkbox"/>
                  <label key={el.id+el.name+"label"} htmlFor={el.id}>{el.name}</label>
                  </div>
                )
              })
            }
          </fieldset>
          <div><label className={styles.visibility} htmlFor="visibility">Ressource Privée <input onClick={()=>setVisibility(!visibility)} defaultValue={visibility} id="visibility" name="visibility" type="checkbox" /></label></div>
      </div>

      


    
        <QuillEditor setter={setBody} className={[ "card" , styles.quillResource ].join(" ")}/>

      


      


      <div className={styles.editor}> { /*  Invisible Quil Component  */}
        <div>
          <div ref={quillRef} /> { /* Thumbnail*/}
          <div id="toolbar2">
            <button className="ql-image" ref={fileRef} />
          </div>
        </div>
      </div>
            
            <button onClick={handlerSubmit}>Créer la ressource</button>
    </div>
  )
}

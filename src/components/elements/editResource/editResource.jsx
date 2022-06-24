import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';
import styles from './editResource.module.scss'
import Card from '../card/card';
import { useEffect,useState,useRef } from 'react';

export default function editResource() {
    const modules = {
        toolbar: ['image']
      };
    const { quill, quillRef } = useQuill({
        modules: {
          toolbar: '#toolbar'
        }
      });

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
    const [ resourceType, setResourceType] = useState("video")
    const [ image, setImage] = useState("https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80");
    const [ description, setDescription] = useState("Lorem Ipsum DOlor");
    const [ tags, setTags] = useState(tagsList[0]);
    
    useEffect(() => {
        if (quill) {
          quill.on('text-change', (delta, oldDelta, source) => {
            console.log('Text change!');
            console.log(quill.getText()); // Get text only
            console.log(quill.getContents()); // Get delta contents
            console.log(quill.root.innerHTML); // Get innerHTML using quill
            console.log(quillRef.current.firstChild.innerHTML); // Get innerHTML using quillRef
          });
        }
      }, [quill]);
    

    //console.log(quill);    // undefined > Quill Object
    //console.log(quillRef); // { current: undefined } > { current: Quill Editor Reference }
    let fileRef = useRef();
    function triggerClick() {
        console.log("test")
        fileRef.current.click();
    }
  return (
    <div className={styles.page}>
      <Card key={1} 
          title={title} 
          icon={resourceType} 
          image={image} 
          description={description} 
          user={{"porfilePiture":"https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"}}
          like={0} 
          comment={0} 
          tags={tags}
        />
    <div className={styles.editor}>


    <div style={{ width: 0, height: 0 }}>
      <div ref={quillRef} />

      <div id="toolbar">
        <button className="ql-image" ref={fileRef}/>
      </div>
      <div id="editor" />
    </div>

    </div>
        <button onClick={triggerClick}>LE TEST</button>
    </div>
  )
}

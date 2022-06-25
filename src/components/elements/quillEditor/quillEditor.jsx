import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';
import styles from './quillEditor.module.scss'
export default function quillEditor(className) {
    console.log(className)
    const { quill, quillRef } = useQuill({
        modules: {
          toolbar: {
            container: '#toolbar'
          }
        }
      });
  return (
    <div className={className.className}>
          <div id="toolbar" className={styles.toolbar}>
            <select class="ql-size">
                <option value="small"></option>
                <option selected></option>
                <option value="large"></option>
                <option value="huge"></option>
            </select>
            <select class="ql-header">
                <option value="1"></option>
                <option value="2"></option>
                <option value="3"></option>
                <option value="4"></option>
                <option value="5"></option>
                <option value="6"></option>
                <option selected></option>
            </select>
            <button class="ql-bold"></button>
            <button class="ql-italic"></button>
            <button class="ql-underline"></button>
            <button class="ql-strike"></button>
            <button class="ql-list" value="bullet"></button>
            <button class="ql-list" value="ordered"></button>
            <select class="ql-align ql-picker ql-icon-picker"></select>
            <button class="ql-link"></button>
            <button class="ql-image"></button>
            <button class="ql-video"></button>
          </div>
          <div ref={quillRef} className={styles.editor}/> { /* Thumbnail*/}
    </div>
  )
}

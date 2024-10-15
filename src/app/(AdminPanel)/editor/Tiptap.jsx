'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { generateHTML } from '@tiptap/react'
import { useEffect } from 'react'
import { MenuBar } from './MenuBar'
import Link from '@tiptap/extension-link'


const Tiptap = () => {
  const editor = useEditor({
extensions: [StarterKit
,
    Link.configure({
        openOnClick: false,
        autolink: true,
        defaultProtocol: 'https',
      }),

]    ,
    content: '<p>Hello World! 🌎️</p>',
    immediatelyRender: false,
    editorProps: {
        attributes: {
          class: 'prose prose-sm sm:prose-base lg:prose-lg xl:prose-2xl  focus:outline-none outline-none border border-blue-600 bg-white text-black min-h-[250px]',
        },}

  })


  if (!editor) {
    return <p>Loading editor...</p>; // You can show a loading state while the editor is initializing
  }



  const handleSubmit = async () => {
    if (editor) {
      // const content = editor.getHTML(); // Get the HTML content from the editor
      const content = editor.getJSON(); // Get content in JSON format

      console.log('Editor content:', content);

      try {
        const response = await fetch('http://localhost:4000/admin/blog/add-blog', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            
            
            content }), // Send the content in the body
        });

        const result = await response.json();
        console.log('Response from backend:', result);
      } catch (error) {
        console.error('Error sending content to backend:', error);
      }
    }
  }
  const savedContent = editor.getJSON();
  const htmlContent = generateHTML(savedContent, [StarterKit]);
  return (
  
<div className='h-[500px] p-4 border border-yellow-100'>  

    <MenuBar editor={editor}/>
    <EditorContent  editor={editor} />
    <button onClick={handleSubmit} className="mt-4 p-2 bg-blue-600 text-white rounded">Save Content</button>

{htmlContent &&
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />}
  </div>

)
}

export default Tiptap

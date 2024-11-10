'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { generateHTML } from '@tiptap/react'
import { useEffect } from 'react'
import { MenuBar } from './MenuBar'
import Link from '@tiptap/extension-link'


const Tiptap = ({setContent}) => {
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
    return <p>Loading editor...</p>; 
  }

  const content2 = editor.getHTML(); 


  const handleSubmit = async (event) => {
    event.preventDefault();
    event.stopPropagation();
    const content = editor.getJSON(); 
      setContent(content)
  }
  return (
  
<div className=' p-4 border border-yellow-100'>  

    <MenuBar editor={editor}/>
    <EditorContent  editor={editor} />

    <button onClick={handleSubmit} className="mt-4 px-4 py-2 bg-blue hover:bg-zinc-500 text-white rounded">Done</button>

  </div>

)
}

export default Tiptap

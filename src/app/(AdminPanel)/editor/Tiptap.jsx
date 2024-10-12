'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
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

  console.log('Editor:', editor); // Check if the editor instance is initialized

  useEffect(() => {
    console.log('Editor:', editor); // Check if the editor instance is initialized
  }, []);

  if (!editor) {
    return <p>Loading editor...</p>; // You can show a loading state while the editor is initializing
  }


  return (
  
<div className='h-[500px] p-4 border border-yellow-100'>  

    <MenuBar editor={editor}/>
    <EditorContent  editor={editor} />
  </div>

)
}

export default Tiptap

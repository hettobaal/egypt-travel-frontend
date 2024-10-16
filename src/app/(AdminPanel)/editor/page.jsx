// "use client"
import CreateBlog from './CreateBlog'
import './styles.scss'
import Tiptap from './Tiptap'
import Heading from '@/components/reuseable/Heading'

export default function Home() {
  return <div className='mt-200'>
    
    <Heading>
                Create Blog
            </Heading>
            <CreateBlog/>
    
  
  
  </div>
}

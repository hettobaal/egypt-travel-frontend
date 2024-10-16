import { useCallback } from "react"

export const MenuBar = ({ editor }) => {
  const setLink = useCallback(() => {
    const previousUrl = editor.getAttributes('link').href
    const url = window.prompt('URL', previousUrl)

    if (url === null) {
      return
    }

    if (url === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink().run()
      return
    }

    editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run()
  }, [editor])

  if (!editor) {
    return null
  }

  return (
    <div className="control-group">
      <div className="flex gap-4 flex-wrap">
        <button
          type="button" // Add type="button" to prevent form submission
          onClick={setLink}
          className={editor.isActive('link') ? 'is-active' : ''}
        >
          Set link
        </button>
        <button
          type="button" // Add type="button"
          onClick={() => editor.chain().focus().unsetLink().run()}
          disabled={!editor.isActive('link')}
        >
          Unset link
        </button>

        <button
          type="button" // Add type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={
            !editor.can().chain().focus().toggleBold().run()
          }
          className={editor.isActive('bold') ? 'is-active' : ''}
        >
          Bold
        </button>

        <button
          type="button" // Add type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={
            !editor.can().chain().focus().toggleItalic().run()
          }
          className={editor.isActive('italic') ? 'is-active' : ''}
        >
          Italic
        </button>

        {/* Add type="button" for all other buttons as well */}
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={
            !editor.can().chain().focus().toggleStrike().run()
          }
          className={editor.isActive('strike') ? 'is-active' : ''}
        >
          Strike
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={editor.isActive('paragraph') ? 'is-active' : ''}
        >
          Paragraph
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
        >
          H1
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
        >
          H2
        </button>

        <button type="button" onClick={() => editor.chain().focus().setHardBreak().run()}>
          Hard break
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().undo().run()}
          disabled={
            !editor.can().chain().focus().undo().run()
          }
        >
          Undo
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().redo().run()}
          disabled={
            !editor.can().chain().focus().redo().run()
          }
        >
          Redo
        </button>
      </div>
    </div>
  )
}

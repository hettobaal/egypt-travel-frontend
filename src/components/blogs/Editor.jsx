import React, { useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Heading from "@tiptap/extension-heading";
import Link from "@tiptap/extension-link";
import Italic from "@tiptap/extension-italic";
import Strike from "@tiptap/extension-strike";
import OrderedList from "@tiptap/extension-ordered-list";
import BulletList from "@tiptap/extension-bullet-list";
import Image from "@tiptap/extension-image";
import ImageResize from "tiptap-extension-resize-image";
import FontSize from "./FontSize";
// import "./editor.css";
import { FaBold } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import { FaLinkSlash } from "react-icons/fa6";
import { FaItalic } from "react-icons/fa";
import { RxStrikethrough } from "react-icons/rx";
import { HardDriveDownload, ListOrdered } from "lucide-react";
// import { Tooltip } from "@heroui/react";
import { LuHeading1 } from "react-icons/lu";
import { LuHeading2 } from "react-icons/lu";
import { LuHeading3 } from "react-icons/lu";
import { LuHeading4 } from "react-icons/lu";
import { LuHeading5 } from "react-icons/lu";
import { LuHeading6 } from "react-icons/lu";
import { FcRemoveImage } from "react-icons/fc";
import { RxListBullet } from "react-icons/rx";
import { IoIosRedo } from "react-icons/io";
import { IoArrowUndo } from "react-icons/io5";
import { FcAddImage } from "react-icons/fc";
import { Tooltip } from "@nextui-org/react";
import toast from "react-hot-toast";
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectLabel,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

function Editor({ handleEditorChange, data }) {
  //   const [data, setData] = useState("");
  const fontSizes = [
    "12px",
    "14px",
    "16px",
    "18px",
    "20px",
    "24px",
    "32px",
    "36px",
  ];

  const editor = useEditor({
    extensions: [
      StarterKit,
      Italic,
      Strike,
      ImageResize,
      BulletList,
      FontSize,
      Heading.configure({
        levels: [1, 2, 3, 4, 5, 6],
      }),
      OrderedList,
      Image.configure({
        inline: false,
        draggable: true,
        allowBase64: true,
        attributes: {
          fileId: "empty",
        },
      }),
      Link.configure({
        openOnClick: true,
      }),
    ],
    editorProps: {
      attributes: {
        class:
          "w-full max-w-full p-4 bg-[#f0f0f0] dark:bg-darkModeSecondary  prose prose-sm sm:prose-sm lg:prose-lg xl:prose-xl  focus:outline-none outline-none border border-blue-600 bg-white   min-h-[350px] max-h-[350px] overflow-y-auto text-black dark:text-white rounded-lg ",
      },
    },
    content: data,
    onUpdate: ({ editor }) => {
      const content = editor.getHTML();
      handleEditorChange(content);

    },
    immediatelyRender: false,
  });

  const addLink = () => {
    const url = prompt("Enter the URL");
    if (url) {
      editor
        .chain()
        .focus()
        .extendMarkRange("link")
        .setLink({ href: url })
        .run();
    }
  };

  const handleFileChange = async (event) => {
    event.preventDefault();
    const file = event.target.files[0];


    if (file && file.type.startsWith("image/")) {
      try {
        const reader = new FileReader();
        reader.onload = () => {
          const base64Data = reader.result;
          editor
            .chain()
            .focus()
            .setImage({ src: base64Data })
            .run();
          editor.chain().focus().updateAttributes("image", { style: "opacity: 0.3" }).run();

        };
        reader.readAsDataURL(file);

        const formData = new FormData();
        formData.append("blogInternalImage", file);
        const response = await fetch(
          // "http://localhost:3000/api/blog/upload-blog-image",
          // "http://localhost:4000/admin/internalImage/upload-blog-image",
          "https://aegyptenmalanders.de/admin/internalImage/upload-blog-image",
          {
            method: "POST",
            body: formData,
          }
        );

        const data = await response.json();;

        if (!response.ok) {
          editor.chain().focus().deleteSelection().run();

          throw new Error("Failed to upload image");
        }
        toast?.success(data?.message)
        editor.chain().focus().updateAttributes("image", { name: data.fileId, style: "opacity: 1" }).run();
      } catch (error) {
        console.error("Error uploading image:", error);
        toast?.error(data?.message)
      }
    } else {
      console.error("Please upload a valid image file");
    }
  };

  const openFileDialog = () => {
    document.getElementById("fileInput").click();
  };

  const changeFontSize = (size) => {
    if (editor) {
      editor.chain().focus().setFontSize(size).run();
    }
  };

  const removeImage = async () => {
    if (editor) {
      const isImageSelected = editor.isActive("image");
      console.log("isImageSelected", isImageSelected);

      if (isImageSelected) {
        const imageAttributes = editor.getAttributes("image");
        const imageId = imageAttributes?.name;
        console.log("imageId", imageId);

        if (imageId) {
          const response = await fetch(
            "https://aegyptenmalanders.de/admin/internalImage/delete-blog-image",
            // "http://localhost:4000/admin/internalImage/delete-blog-image",
            {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json", // Ensure JSON format
              },
              body: JSON.stringify({ imageId: imageId }),
            }


          );
          const res = await response?.json()

          if (response.ok) {
            editor.chain().focus().deleteSelection().run();
            toast?.success(res?.message)
          } else {
            alert("Failed to delete image");
          }
        }
      } else {
        alert("No image selected!");
      }
    }
  };

  return (
    <div className="w-full mt-5">
      {/* {loading && <div className="  flex justify-center  "><span className=" rounded-xl py-2 px-4 bg-white text-black text-lg font-bold">Uploading image...</span></div>} */}
      <div className="flex flex-wrap gap-x-3 gap-y-3 py-2 my-4 px-4 rounded-lg  bg-[#f0f0f0] dark:bg-darkModeSecondary ">
        <Tooltip content="Bold" showArrow={true}>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={`p-2 rounded-md ${editor?.isActive("bold")
              ? "   bg-[#6a00f5] text-white "
              : "bg-[#d1d5db] dark:bg-darkMode"
              }`}
          >
            <FaBold />
          </button>
        </Tooltip>
        <Tooltip content="Italic" showArrow={true}>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={`p-2   rounded-md ${editor?.isActive("italic")
              ? "   bg-[#6a00f5] text-white "
              : "bg-[#d1d5db] dark:bg-darkMode"
              }`}
          >
            <FaItalic />
          </button>
        </Tooltip>
        <Tooltip content="Strike" showArrow={true}>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleStrike().run()}
            className={`p-2   rounded-md ${editor?.isActive("strike")
              ? "   bg-[#6a00f5] text-white "
              : "bg-[#d1d5db] dark:bg-darkMode"
              }`}
          >
            <RxStrikethrough />
          </button>
        </Tooltip>
        <Tooltip content="Add Link" showArrow={true}>
          <button
            type="button"
            onClick={addLink}
            className={`p-2   rounded-md ${editor?.isActive("link")
              ? "   bg-[#6a00f5] text-white "
              : "bg-[#d1d5db] dark:bg-darkMode"
              }`}
          >
            <FaLink />
          </button>
        </Tooltip>
        <Tooltip content="Un Link" showArrow={true}>
          <button
            type="button"
            onClick={() => editor.chain().focus().unsetLink().run()}
            className="p-2 bg-[#d1d5db] dark:bg-darkMode  rounded-md"
          >
            <FaLinkSlash />
          </button>
        </Tooltip>
        <Tooltip content="Order List" showArrow={true}>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={`p-2   rounded-md ${editor?.isActive("orderedList")
              ? "   bg-[#6a00f5] text-white "
              : "bg-[#d1d5db] dark:bg-darkMode"
              }`}
          >
            <ListOrdered size={20} />
          </button>
        </Tooltip>
        <Tooltip content="Bullet List" showArrow={true}>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={`p-2   rounded-md ${editor?.isActive("bulletList")
              ? "   bg-[#6a00f5] text-white "
              : "bg-[#d1d5db] dark:bg-darkMode"
              }`}
          >
            <RxListBullet size={20} />
          </button>
        </Tooltip>
        <Tooltip content="Break" showArrow={true}>
          <button
            type="button"
            onClick={() => editor.chain().focus().setHardBreak().run()}
            className={`p-2   rounded-md bg-[#d1d5db] dark:bg-darkMode`}
          >
            <HardDriveDownload size={20} />
          </button>
        </Tooltip>
        <Tooltip content="Heading One" showArrow={true}>
          <button
            type="button"
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 1 }).run()
            }
            className={`p-2   rounded-md ${editor?.isActive("heading", { level: 1 })
              ? "   bg-[#6a00f5] text-white "
              : "bg-[#d1d5db] dark:bg-darkMode"
              }`}
          >
            <LuHeading1 />
          </button>
        </Tooltip>
        <Tooltip content="Heading Two" showArrow={true}>
          <button
            type="button"
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 2 }).run()
            }
            className={`p-2   rounded-md ${editor?.isActive("heading", { level: 2 })
              ? "   bg-[#6a00f5] text-white "
              : "bg-[#d1d5db] dark:bg-darkMode"
              }`}
          >
            <LuHeading2 />
          </button>
        </Tooltip>
        <Tooltip content="Heading Three" showArrow={true}>
          <button
            type="button"
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 3 }).run()
            }
            className={`p-2   rounded-md ${editor?.isActive("heading", { level: 3 })
              ? "   bg-[#6a00f5] text-white "
              : "bg-[#d1d5db] dark:bg-darkMode"
              }`}
          >
            <LuHeading3 />
          </button>
        </Tooltip>
        <Tooltip content="Heading Four" showArrow={true}>
          <button
            type="button"
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 4 }).run()
            }
            className={`p-2   rounded-md ${editor?.isActive("heading", { level: 4 })
              ? "   bg-[#6a00f5] text-white "
              : "bg-[#d1d5db] dark:bg-darkMode"
              }`}
          >
            <LuHeading4 />
          </button>
        </Tooltip>
        <Tooltip content="Heading Five" showArrow={true}>
          <button
            type="button"
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 5 }).run()
            }
            className={`p-2   rounded-md ${editor?.isActive("heading", { level: 5 })
              ? "   bg-[#6a00f5] text-white "
              : "bg-[#d1d5db] dark:bg-darkMode"
              }`}
          >
            <LuHeading5 />
          </button>
        </Tooltip>
        <Tooltip content="Heading Six" showArrow={true}>
          <button
            type="button"
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 6 }).run()
            }
            className={`p-2   rounded-md ${editor?.isActive("heading", { level: 6 })
              ? "   bg-[#6a00f5] text-white "
              : "bg-[#d1d5db] dark:bg-darkMode"
              }`}
          >
            <LuHeading6 />
          </button>
        </Tooltip>
        <Tooltip content="Add Image" showArrow={true}>
          <button
            type="button"
            onClick={openFileDialog}
            className="p-2 rounded-md bg-[#d1d5db] dark:bg-darkMode dark:text-white text-black"
          >
            <FcAddImage />
          </button>
        </Tooltip>
        <input
          type="file"
          id="fileInput"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
        <Tooltip content="Remove Image" showArrow={true}>
          <button
            onClick={removeImage}
            type="button"
            className={`p-2   rounded-md ${editor?.isActive("removeimage")
              ? "   bg-[#6a00f5] text-white "
              : "bg-[#d1d5db] dark:bg-darkMode"
              }`}
          >
            <FcRemoveImage />
          </button>
        </Tooltip>
        <Tooltip content="Undo" showArrow={true}>
          <button
            onClick={() => editor.chain().focus().undo().run()}
            className={`p-2 rounded-md bg-[#d1d5db] dark:bg-darkMode dark:text-white text-black`}
          >
            <IoArrowUndo />
          </button>
        </Tooltip>
        <Tooltip content="Redo" showArrow={true}>
          <button
            type="button"
            onClick={() => editor.chain().focus().redo().run()}
            className={`p-2 rounded-md bg-[#d1d5db] dark:bg-darkMode dark:text-white text-black`}
          >
            <IoIosRedo />
          </button>
        </Tooltip>
        {/* <Select
          onValueChange={(value) => {
            changeFontSize(value);
          }}
        >
          <SelectTrigger className=" flex h-10 items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:ring-ring focus:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 focus:outline-none focus:ring-0focus:ring-offset-0 focus:ring-0 w-[150px] bg-[#d1d5db] dark:bg-darkMode">
            <SelectValue placeholder="Select Font" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Select Font</SelectLabel>
              {fontSizes.map((size) => (
                <SelectItem key={size} value={size}>
                  {size}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select> */}
      </div>
      <EditorContent
        // onDrop={handleFileDrop}
        // onDragOver={handleDragOver}
        editor={editor}
      />
      <div>
        {/* <div
          dangerouslySetInnerHTML={{ __html: data }}
          className="prose prose-sm sm:prose-base lg:prose-lg"
        /> */}
      </div>
    </div>
  );
}

export default Editor;

// try {
//     const formData = new FormData();
//     formData.append("file", file);
//     const res = await fetch("/api/upload", {
//         method: "POST",
//         body: formData,
//     })
//     if (!res.ok) {
//         console.error(`Failed to upload: ${res}`);
//         setLoading(false)
//         return;
//     }

//     const result = await res.json();
//
//     const url = `https://${process.env.NEXT_PUBLIC_AWS_CLOUDFRONT_DISTRIBUTION_DOMAIN}.cloudfront.net/${result.imageURL}`
//
//     editor.chain().focus().setImage({ src: url }).run();
//     setLoading(false)
//     // setTempImages((prev) => [...prev, s3ImageUrl]);

// } catch (error) {
//
//     setLoading(false)
// }

"use client"

import { createReactEditorJS } from "react-editor-js"
// @ts-ignore
import Header from "@editorjs/header"
// @ts-ignore
import CheckList from "@editorjs/checklist"
// @ts-ignore
import List from "@editorjs/list"
// @ts-ignore
import Paragraph from "@editorjs/paragraph"
// @ts-ignore
import Image from "@editorjs/image"

export default function(): JSX.Element {
  const ReactEditorJS = createReactEditorJS()

  return (
    <ReactEditorJS
      tools={{
        header: Header,
        checklist: CheckList,
        list: List,
        paragraph: Paragraph,
        image: Image
      }}
    />
  )
}

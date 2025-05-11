import { registerBlockType } from '@wordpress/blocks'
import { useRef } from "@wordpress/element"

import {
    InnerBlocks,
    useBlockProps,
} from "@wordpress/block-editor"

// Icons
import { ContainerIcon } from "./block-icons"

type ContainerAttributes = {
    blockId: string
}

export const meta = {
    name: "test/container",
    title: "Container",
    icon: ContainerIcon,
    apiVersion: 3,
    supports: {},
    category: "layout",
}

const edit: any = ({ attributes }: any) => {
    const {
        blockId,
    } = attributes

    const containerRef = useRef<HTMLElement>(null)
    const blockProps = useBlockProps({
        ref: containerRef,
        className: `lyn-id-${ blockId }`,
    })

    return (
        <>
            <div { ...blockProps }>
                <InnerBlocks />
            </div>
        </>
    )
}

const save: React.FC<BlockSaveProps<ContainerAttributes>> = ({ attributes }) => {
    const {
        blockId,
    } = attributes

    const blockProps = useBlockProps.save({
        className: `lyn-id-${ blockId }`,
    })

    return (
        <>
            <div { ...blockProps }>
                <InnerBlocks.Content />
            </div>
        </>
    )
}
registerBlockType(meta.name, {
    title: meta.title,
    icon: meta.icon,
    category: meta.category,
    attributes: {
        blockId: { type: "string", default: "" },
    },
    edit,
    save,
})

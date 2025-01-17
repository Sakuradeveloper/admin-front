'use client'

import { FC, useState } from 'react'
import styled from 'styled-components'
import IconAdd from '@/components/icons/IconAdd'
import NGWordModal from '@/components/ng-word/NGWordModal'
import { toRem } from '@/libs/fontSize'

const AddNGBtnAndModal: FC = () => {
    const [isShowModal, setShowModal] = useState(false)
    return (
        <>
            <AddNGButton onClick={() => setShowModal(true)}>
                <IconAdd />
                <span>禁止ワード追加</span>
            </AddNGButton>
            <NGWordModal
                title='禁止ワード追加'
                isShow={isShowModal} 
                onClose={() => setShowModal(false)}
            />
        </>
    )
}

const AddNGButton = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
    color: #2B64D3;
    font-size: ${toRem(16)};
    cursor: pointer;
`

export default AddNGBtnAndModal
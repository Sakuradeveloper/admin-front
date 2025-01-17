import { FC, useEffect, useState } from 'react'
import Modal from '@/components/basic/Modal'
import Input from '@/components/basic/Input'

type NGModalProps = {
    isShow: boolean,
    onClose: () => void,
    title?: string,
    ngword?: string,
}

const NGWordModal: FC<NGModalProps> = ({
    ...props
  }) => {
    const [ngword, setNgword] = useState<string>(props.ngword || '')
    
    useEffect(() => {
        setNgword(props.ngword || '')
    }, [props.ngword])
    
    return(
        <>
            <Modal
                title={props.title}
                isShow={props.isShow}
                onClose={props.onClose}
                primaryButtonText='追加'
                secondaryButtonText='表示テスト'
            >
                <Input label='NGワード' value={ngword} onChange={(e) => setNgword(e.target.value)} required />
            </Modal>
        </>
    )
}

export default NGWordModal
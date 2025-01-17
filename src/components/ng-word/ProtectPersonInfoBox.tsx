import styled from 'styled-components'
import React, { useState } from 'react'
import { toRem } from '@/libs/fontSize'
import Modal from '@/components/basic/Modal'

const ProtectPersonInfoBox = () => {
  const [isShowModal, setShowModal] = useState(false)
  const [isChecked, setChecked] = useState(true)

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isCurrentlyChecked = event.target.checked
    setChecked(isCurrentlyChecked)

    if (!isCurrentlyChecked) {
      setShowModal(true)
    }
  }

  return (
    <>
      <PanelContainer>
        <Title>個人情報の保護</Title>
        <Content>
          <CheckboxContainer>
            <input
              type="checkbox"
              id="privacy-checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="privacy-checkbox">
              個人情報の保護のため、メールアドレス・電話番号・クレジットカード番号の送信をブロックする
            </label>
          </CheckboxContainer>
        </Content>
      </PanelContainer>
      <Modal
        title="個人情報の保護について"
        isShow={isShowModal}
        onClose={() => setShowModal(false)}
        primaryButtonText="保護を解除"
        secondaryButtonText="キャンセル"
      >
        <ProtectRemoveText>
          個人情報の保護を解除すると、メールアドレス・電話番号・クレジットカード番号が送信できるようになり、それらのデータを学習される場合がございます。
        </ProtectRemoveText>
      </Modal>
    </>
  )
}

const PanelContainer = styled.div`
  padding: 20px 24px;
  background-color: #ffffff;
  border: 1px solid #e6e6e6;
  border-radius: 10px;
`

const Title = styled.p`
  font-size: ${toRem(16)};
  color: #222222;
`

const Content = styled.div`
  display: flex;
  align-items: flex-start;
`

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: ${toRem(13)};
  color: #222222;

  input {
    margin-right: 8px;
  }

  label {
    font-size: 14px;
    color: #333;
  }
`

const ProtectRemoveText = styled.p`
  font-size: ${toRem(16)};
  line-height: 150%;
`

export default ProtectPersonInfoBox

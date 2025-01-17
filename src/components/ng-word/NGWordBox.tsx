import styled from 'styled-components'
import { useState } from 'react'
import { toRem } from '@/libs/fontSize'
import SelectBox from '@/components/basic/SelectBox'
import Pagination from '@/components/basic/Pagination'
import Dropdown, { DropdownItem } from '@/components/basic/Dropdown'
import IconEdit from '@/components/icons/IconEdit'
import IconDelete from '@/components/icons/IconDelete'
import NGWordModal from '@/components/ng-word/NGWordModal'
import Modal from '@/components/basic/Modal'

const OrderOptions = [
  { value: '', label: '登録が新しい順' },
]
const NGWordList = ['aaa', 'ここにNGワードが入ります。', 'ほげほげ', 'NGワード', 'NG word', 'NGNG', 'えぬじー', 'エヌジー']

const ITEMS_PER_PAGE = 5

const NGWordBox = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [isShowEditModal, setShowEditModal] = useState(false)
  const [isShowDeleteModal, setShowDeleteModal] = useState(false)
  const [selectedNG, setSelectedNG] = useState<string>('')

  const toggleDropdown = (word: string) => {
    setSelectedNG(word)
    setDropdownOpen(!isDropdownOpen)
  }

  const paginatedWords = NGWordList.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  )

  const handleEditModal = () => {
    setShowEditModal(true)
  }

  const handleDeleteModal = () => {
    setShowDeleteModal(true)
  }

  return (
    <>
      {NGWordList.length > 0 ? (
        <ListContainer>
          <TopControls>
            <SelectBox options={OrderOptions} />
          </TopControls>
          <Title>NGワード</Title>
          <WordList>
            {paginatedWords.map((word, index) => (
              <WordItem key={index}>
                <WordText>{word}</WordText>
                <MoreOptions onClick={() => toggleDropdown(word)}>⋮</MoreOptions>
                <Dropdown isOpen={isDropdownOpen && selectedNG === word} onClose={() => setDropdownOpen(false)}>
                  <DropdownItem className='primary' onClick={handleEditModal}>
                    <IconWrapper>
                        <IconEdit />
                        <IconText>編集</IconText>
                    </IconWrapper>
                  </DropdownItem>
                  <DropdownItem className="danger" onClick={handleDeleteModal}>
                    <IconWrapper>
                        <IconDelete />
                        <IconText>削除</IconText>
                    </IconWrapper>
                  </DropdownItem>
                </Dropdown>
              </WordItem>
            ))}
          </WordList>
          <Pagination
            totalItems={NGWordList.length}
            itemsPerPage={ITEMS_PER_PAGE}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        </ListContainer>
      ) : (
        <EmptyBox>
          <PlaceholderText>未登録</PlaceholderText>
        </EmptyBox>
      )}
      <NGWordModal
            title='禁止ワード編集'
            ngword={selectedNG}
            isShow={isShowEditModal} 
            onClose={() => setShowEditModal(false)}
        />
      <Modal
          title='禁止ワード削除'
          isShow={isShowDeleteModal}
          onClose={() => setShowDeleteModal(false)}
          primaryButtonText='削除'
          secondaryButtonText='キャンセル'
      >
        <DeleteNGContent>「{selectedNG}」を禁止ワードから削除しますか？</DeleteNGContent>
      </Modal>
    </>
  )
}

const ListContainer = styled.div`
  background-color: #f9f9f9;
  border-radius: 10px;
  padding: 16px;
`

const TopControls = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`

const Title = styled.p`
    font-size: ${toRem(13)};
    color: #777777;
    padding-left: 16px;

`

const WordList = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ddd;
  border-radius: 10px;
  background-color: #fff;

  > div:first-child {
    background-color: #E6E6E6;
  }
`

const WordItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  border-bottom: 1px solid #E6E6E6;
  position: relative;

  &:first-child {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  
  &:last-child {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    border-bottom: none;
  }
`

const WordText = styled.span`
  font-size: ${toRem(16)};
  color: #333;
`

const MoreOptions = styled.button`
  background: none;
  border: none;
  font-size: ${toRem(18)};
  cursor: pointer;
  color: #777;
  position: relative;
`

const EmptyBox = styled.div`
  display: flex;
  align-items: center;
  padding: 0 24px;
  width: 100%;
  height: 64px;
  background-color: #e6e6e6;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-sizing: border-box;
`

const PlaceholderText = styled.span`
  font-size: ${toRem(16)};
  color: #777777;
  margin-left: 24px;
`

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

const IconText = styled.span`
  font-size: ${toRem(13)};
`

const DeleteNGContent = styled.div`
  font-size: ${toRem(16)};
`

export default NGWordBox

import React, { useState } from 'react'
import { Modal, useMantineTheme } from '@mantine/core'

// eslint-disable-next-line react/prop-types
const SearchModal = ({ searchModal, setSearchModal, searchData,searchWord }) => {

  const theme = useMantineTheme()

  return (
    <Modal
      overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayOpacity={0.55}
      overlayBlur={3}
      size='45%'
      // opened is a property of modal. Here when our state modalOpen is true this modal will open.
      opened={searchModal}
      onClose={() => setSearchModal(false)}
    >
      <form className="" >
        
        <div>
          <input type="text" className="" name='searchdata' placeholder=''  />
        </div>


      </form>
    </Modal>
  )
}

export default SearchModal


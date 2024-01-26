/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC, useEffect} from 'react'
// import {useQueryClient} from 'react-query'
import {MenuComponent} from '../../../../../../../_metronic/assets/ts/components'
import {ID} from '../../../../../../../_metronic/helpers'
import {useListView} from '../../core/ListViewProvider'
// import {useQueryResponse} from '../../core/QueryResponseProvider'
// import {deleteUser} from '../../core/_requests'

type Props = {
  id: ID
}

const UserActionsCell: FC<Props> = ({id}) => {
  const {setItemIdForUpdate} = useListView()
  // const {query} = useQueryResponse()
  // const queryClient = useQueryClient()

  useEffect(() => {
    MenuComponent.reinitialization()
  }, [])

  const openEditModal = () => {
    setItemIdForUpdate(id)
  }

  return (
    <>
      <a
        href='#'
        className='btn btn-light btn-active-light-primary btn-sm'
        data-kt-menu-trigger='click'
        data-kt-menu-placement='bottom-end' onClick={openEditModal}
      >
        Actions
      </a>
      {/* end::Menu */}
    </>
  )
}

export {UserActionsCell}

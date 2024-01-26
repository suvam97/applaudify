/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx'
import {FC} from 'react'
// import {KTIcon} from '../../../helpers'
import {useLayout} from '../../core'
import {DefaultTitle} from '../header/page-title/DefaultTitle'

const Toolbar2: FC = () => {
  const {classes, config} = useLayout()
  //const today = new Date()
  return (
    <div className='toolbar py-2' id='kt_toolbar'>
      {/* begin::Container */}
      <div
        id='kt_toolbar_container'
        className={clsx(classes.toolbarContainer.join(' '), 'd-flex align-items-center')}
      >
        {config.pageTitle?.display && <DefaultTitle />}

        <div className='flex-grow-1 flex-shrink-0 me-5'></div>

        {/* begin::Actions */}
        <div
          className={
            config.pageTitle?.display
              ? 'd-flex align-items-center flex-wrap'
              : 'd-flex flex-stack flex-grow-1 flex-wrap'
          }
        >
          {/* begin::Wrapper */}
          <div className='flex-shrink-0 me-2'>
            <ul className='nav'>
              <li className='nav-item'>
                <a
                  className='nav-link btn btn-sm btn-color-muted btn-active-color-primary btn-active-light active fw-bold fs-7 px-4 me-1'
                  data-bs-toggle='tab'
                  href='#'
                >
                  Sub Menu 1
                </a>
              </li>
            </ul>
          </div>
          {/* end::Wrapper */}
        </div>
        {/* end::Actions */}
      </div>
      {/* end::Container */}
    </div>
  )
}

export {Toolbar2}

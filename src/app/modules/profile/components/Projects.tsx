/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
// import {Card2} from '../../../../_metronic/partials/content/cards/Card2'
//import {IconUserModel} from '../ProfileModels'
import {
  StatisticsWidget2
} from '../../../../_metronic/partials/widgets'

export function Projects() {
  return (
    <>
      <div className='d-flex flex-wrap flex-stack mb-6'>
        <h3 className='fw-bolder my-2'>
          Jury Members
          <span className='fs-6 text-gray-400 fw-bold ms-1'>&nbsp; GDT Active</span>
        </h3>
      </div>

      <div className='row g-5 g-xl-8'>
        <div className='col-xl-4'>
          <StatisticsWidget2
            className='card-xl-stretch mb-xl-8'
            avatar='/media/svg/avatars/029-boy-11.svg'
            title='Arthur Goldstain'
            description='System & Software Architect'
          />
        </div>

        <div className='col-xl-4'>
          <StatisticsWidget2
            className='card-xl-stretch mb-xl-8'
            avatar='/media/svg/avatars/014-girl-7.svg'
            title='Lisa Bold'
            description='Marketing & Fanance Manager'
          />
        </div>

        <div className='col-xl-4'>
          <StatisticsWidget2
            className='card-xl-stretch mb-5 mb-xl-8'
            avatar='/media/svg/avatars/004-boy-1.svg'
            title='Nick Stone'
            description='Customer Support Manager'
          />
        </div>
      </div>

      {/* <div className='d-flex flex-stack flex-wrap pt-10'>
        <div className='fs-6 fw-bold text-gray-700'>Showing 1 to 10 of 50 entries</div>

        <ul className='pagination'>
          <li className='page-item previous'>
            <a href='#' className='page-link'>
              <i className='previous'></i>
            </a>
          </li>

          <li className='page-item active'>
            <a href='#' className='page-link'>
              1
            </a>
          </li>

          <li className='page-item'>
            <a href='#' className='page-link'>
              2
            </a>
          </li>

          <li className='page-item'>
            <a href='#' className='page-link'>
              3
            </a>
          </li>

          <li className='page-item'>
            <a href='#' className='page-link'>
              4
            </a>
          </li>

          <li className='page-item'>
            <a href='#' className='page-link'>
              5
            </a>
          </li>

          <li className='page-item'>
            <a href='#' className='page-link'>
              6
            </a>
          </li>

          <li className='page-item next'>
            <a href='#' className='page-link'>
              <i className='next'></i>
            </a>
          </li>
        </ul>
      </div> */}
    </>
  )
}

// const users1: Array<IconUserModel> = [
//   {name: 'Emma Smith', avatar: '/media/avatars/300-6.jpg'},
//   {name: 'Rudy Stone', avatar: '/media/avatars/300-1.jpg'},
//   {name: 'Susan Redwood', initials: 'S', color: 'primary'},
// ]

// const users2 = [
//   {name: 'Alan Warden', initials: 'A', color: 'warning'},
//   {name: 'Brian Cox', avatar: '/media/avatars/300-5.jpg'},
// ]

// const users3 = [
//   {name: 'Mad Masy', avatar: '/media/avatars/300-6.jpg'},
//   {name: 'Cris Willson', avatar: '/media/avatars/300-1.jpg'},
//   {name: 'Mike Garcie', initials: 'M', color: 'info'},
// ]

// const users4 = [
//   {name: 'Nich Warden', initials: 'N', color: 'warning'},
//   {name: 'Rob Otto', initials: 'R', color: 'success'},
// ]

// const users5 = [
//   {name: 'Francis Mitcham', avatar: '/media/avatars/300-20.jpg'},
//   {name: 'Michelle Swanston', avatar: '/media/avatars/300-7.jpg'},
//   {name: 'Susan Redwood', initials: 'S', color: 'primary'},
// ]

// const users6 = [
//   {name: 'Emma Smith', avatar: '/media/avatars/300-6.jpg'},
//   {name: 'Rudy Stone', avatar: '/media/avatars/300-1.jpg'},
//   {name: 'Susan Redwood', initials: 'S', color: 'primary'},
// ]

// const users7 = [
//   {name: 'Meloday Macy', avatar: '/media/avatars/300-2.jpg'},
//   {name: 'Rabbin Watterman', initials: 'S', color: 'success'},
// ]

// const users8 = [
//   {name: 'Emma Smith', avatar: '/media/avatars/300-6.jpg'},
//   {name: 'Rudy Stone', avatar: '/media/avatars/300-1.jpg'},
//   {name: 'Susan Redwood', initials: 'S', color: 'primary'},
// ]

// const users9 = [
//   {name: 'Meloday Macy', avatar: '/media/avatars/300-2.jpg'},
//   {name: 'Rabbin Watterman', initials: 'S', color: 'danger'},
// ]

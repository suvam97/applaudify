/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {toAbsoluteUrl} from '../../../helpers'
// import {Dropdown1} from '../../content/dropdown/Dropdown1'

type Props = {
  className: string
}

const FeedsWidget2: React.FC<Props> = ({className}) => {
  return (
    <div className={`card card-flush ${className}`}>
      {/* begin::Body */}
      <div className='card-body pb-0'>
        {/* begin::Header */}
        <div className='d-flex align-items-center mb-5'>
          {/* begin::User */}
          <div className='d-flex align-items-center flex-grow-1'>
            {/* begin::Avatar */}
            <div className='me-7 mb-4'>
            <div className='shadow symbol symbol-100px symbol-lg-160px symbol-fixed position-relative'>
              <img src={toAbsoluteUrl('/media/illustrations/sigma-1/4.png')} alt='About' />
            </div>
          </div>
            {/* end::Avatar */}

            {/* begin::Info */}
            <div className='d-flex flex-column'>
              <a href='#' className='text-gray-800 text-hover-primary fs-6 fw-bold'>
                Applaudify
              </a>

              <span className='text-gray-400 fw-semibold'>Awards & Appreciation</span>
            </div>
            {/* end::Info */}
          </div>
          {/* end::User */}
        </div>
        {/* end::Header */}

        {/* begin::Post */}
        <div className='mb-5'>
          {/* begin::Text */}
          <p className='text-gray-800 fw-normal mb-5'>
            Content to be changed <br/> Outlines keep you honest. They stop you from indulging in poorly thought-out metaphors
            about driving and keep you focused on the overall structure of your post. <br/>
            Outlines keep you honest. They stop you from indulging in poorly thought-out metaphors
            about driving and keep you focused on the overall structure of your post <br/>
            Outlines keep you honest. They stop you from indulging in poorly thought-out metaphors
            about driving and keep you focused on the overall structure of your post
          </p>
          {/* end::Text */}
        </div>
        {/* end::Post */}

        {/* begin::Separator */}
        {/* <div className='separator mb-4'></div> */}
        {/* end::Separator */}

        {/* begin::Reply input */}
        {/* <form className='position-relative mb-6'>
          <textarea
            className='form-control border-0 p-0 pe-10 resize-none min-h-25px'
            rows={1}
            placeholder='Reply..'
          ></textarea>

          <div className='position-absolute top-0 end-0 me-n5'>
            <span className='btn btn-icon btn-sm btn-active-color-primary pe-0 me-2'>
              <KTIcon iconName='paper-clip' className='fs-3 mb-3' />
            </span>

            <span className='btn btn-icon btn-sm btn-active-color-primary ps-0'>
              <KTIcon iconName='geolocation' className='fs-2 mb-3' />
            </span>
          </div>
        </form> */}
        {/* edit::Reply input */}
      </div>
      {/* end::Body */}
    </div>
  )
}

export {FeedsWidget2}

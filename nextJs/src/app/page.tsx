"use client"
import Tag from '@/components/tag'
import { NextPage } from 'next'
import { skeletons, scriptTag_300X50, scriptTag_300X50_DOCId, scriptTag_300X600, scriptTag_300X600_DOCId, scriptTag_728X90, scriptTag_728X90_DOCId } from '@/constants/constant'
import LayoutWrapper from '@/components/layoutWrapper'
import SkeletonCard from '@/components/skeletonCards'
import styles from './home.module.css'

const Home: NextPage = () => {

  return (
    <LayoutWrapper>
      <div className='grid p-2 pt-4 w100'>
        <div className='col-12 md:col-6 md:col-offset-3'>
          <div className={`${styles.storeDownloadBanner} flex flex-wrap align-items-center justify-content-center`}>
            <div className='flex align-items-center justify-content-center'>
              <span className='mt-10 mr-4 float-left fs14'>Sample Web App</span>
            </div>
            <div className='flex align-items-center justify-content-center'>
              <div style={{ minWidth: '300px', minHeight: '50px' }}>
                <Tag docId={scriptTag_300X50_DOCId} script={scriptTag_300X50} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid">
        <div className='col-12 md:col-3' >
          <div style={{ minWidth: '300px', minHeight: '600px' }}>
            <Tag docId={scriptTag_300X600_DOCId} script={scriptTag_300X600} />
          </div>
        </div>
        <div className={`${styles.newsContainer} scrollbar col-12 md:col-6`} >
          {skeletons.map((d: number) => {
            return <div key={d} className='mb-4'>
              <SkeletonCard />
            </div>
          })}
        </div>
      </div>
      <div className="grid">
        <div className='col-12 md:col-6 md:col-offset-3'>
          <div style={{ minWidth: '728px', minHeight: '90px' }}>
            <Tag docId={scriptTag_728X90_DOCId} script={scriptTag_728X90} />
          </div>
        </div>
      </div>
    </LayoutWrapper>
  )
}
export default Home
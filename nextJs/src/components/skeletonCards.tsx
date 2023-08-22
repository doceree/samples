import { Card } from 'primereact/card';
import { Skeleton } from 'primereact/skeleton';
const SkeletonCard = () => {
    return <Card title="">
            <div className='grid'>
                <div className='col-12 md:col-5 p-2'>
                    <Skeleton width="100%" height="250px"></Skeleton>
                </div>
                <div className='col-12 md:col-7 p-2'>
                    <Skeleton height="1.5rem" className="mb-2"></Skeleton>
                    <Skeleton height="1.5rem" width='6rem' className="mb-2"></Skeleton>
                    <div className='mt-20'></div>
                    <Skeleton height="0.5rem" width='10rem' className="mb-2"></Skeleton>
                    <div className='mt-20'></div>
                    <Skeleton className="mb-2"></Skeleton>
                    <Skeleton className="mb-2"></Skeleton>
                    <Skeleton width='25rem' className="mb-2"></Skeleton>
                    <div className='mt-30'></div>
                    <Skeleton height="1.5rem" width='6rem' className="mb-2"></Skeleton>
                </div>
            </div>
        </Card>;
};

export default SkeletonCard
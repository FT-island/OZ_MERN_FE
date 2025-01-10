'use client';

import { useGetTravelRouteInfoQuery } from '@/api/reviewApi';
import BackNavigation from '@/components/common/backNavigation/BackNavigation';
import ApiErrorMessage from '@/components/common/errorMessage/ApiErrorMessage';
import LoadingSpinner from '@/components/common/loadingSpinner/LoadingSpinner';
import ReviewForm from '@/components/travel-reviews/reviewForm/ReviewForm';
import { useParams } from 'next/navigation';

const Page = () => {
  const { routeId } = useParams();
  const {
    data: travelRouteInfo,
    isLoading,
    error,
  } = useGetTravelRouteInfoQuery({ travel_route_id: Number(routeId) }, { skip: !routeId });
  if (isLoading) <LoadingSpinner />;

  return (
    <div className="flex flex-col items-center w-full">
      <BackNavigation to="reviewList" />

      {error && <ApiErrorMessage />}

      {!error && (
        <>
          <h3 className="block py-12 text-darkerGray text-3xl">후기 작성</h3>
          {travelRouteInfo && <ReviewForm mode="create" travelRouteInfo={travelRouteInfo} />}
        </>
      )}
    </div>
  );
};

export default Page;

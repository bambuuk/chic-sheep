import { useMediaQuery as useQuery } from 'react-responsive';

export const useMediaQuery = () => {
  const isTablet = useQuery({ query: '(max-width: 991px)' });
  const isSmallMobile = useQuery({ query: '(max-width: 400px)' });
  return {
    isTablet,
    isSmallMobile,
  };
};

export default useMediaQuery;
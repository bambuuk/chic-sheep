import { useMediaQuery as useQuery } from 'react-responsive';

export const useMediaQuery = () => {
  const isTablet = useQuery({ query: '(max-width: 991px)' });
  return {
    isTablet,
  };
};

export default useMediaQuery;
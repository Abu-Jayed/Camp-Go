import { useEffect } from 'react';

const useTitle = (newTitle) => {
  useEffect(() => {
    document.title = newTitle; // Set the new title

    return () => {
      document.title = 'Default Website Title'; // Reset the title when the component unmounts
    };
  }, [newTitle]);
};

export default useTitle;

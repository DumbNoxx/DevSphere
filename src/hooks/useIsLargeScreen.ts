import { useEffect, useState } from "react";

/**
 * Custom hook for detecting if the screen size is large.
 *
 * @returns {boolean} A boolean indicating whether the screen size is large.
 */
export const useIsLargeScreenHook = (): boolean => {
  // State for tracking whether the screen size is large.
  const [isLargeScreen, setIsLargeScreen] = useState<boolean>(
    window.innerWidth >= 1024
  );

  /**
   * Updates the state based on the current screen size.
   */
  const handleResize = (): void => {
    setIsLargeScreen(window.innerWidth >= 1024);
  };

  useEffect(() => {
    // Add event listener for window resize.
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount.
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isLargeScreen;
};

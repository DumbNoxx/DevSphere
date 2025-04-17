import { useEffect, useState } from "react";

/**
 * Custom React hook to determine if the screen size is considered "large".
 *
 * A "large" screen is defined as having a width of 1024 pixels or more.
 * This hook listens for window resize events and updates the state accordingly.
 *
 * @returns {boolean} - Returns `true` if the screen width is 1024 pixels or more, otherwise `false`.
 */
export const useIsLargeScreenHook = (): boolean => {
  /**
   * State variable to track whether the screen size is large.
   *
   * @type {boolean}
   */
  const [isLargeScreen, setIsLargeScreen] = useState<boolean>(
    window.innerWidth >= 1024
  );

  /**
   * Event handler to update the `isLargeScreen` state based on the current window width.
   */
  const handleResize = (): void => {
    setIsLargeScreen(window.innerWidth >= 1024);
  };

  useEffect(() => {
    /**
     * Adds a "resize" event listener to the window object when the component mounts.
     * Cleans up the event listener when the component unmounts.
     */
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isLargeScreen;
};

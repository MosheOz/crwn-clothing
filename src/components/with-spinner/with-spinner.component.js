import React from "react";

import { SpinnerOverlay, SpinnerContainer } from "./with-spinner.styles.js";

const WithSpinner =
  (WrappedComponnet) =>
  ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponnet {...otherProps} />
    );
  };

export default WithSpinner;

import React, { forwardRef } from "react";
import { Button } from "react-bootstrap";

const forwardButtonRef = forwardRef<HTMLButtonElement>((_props, ref) => (
  <Button ref={ref} variant="primary" size="lg">
    Submit worker supply check
  </Button>
));

forwardButtonRef.displayName = "SubmitButton";

export default forwardButtonRef;

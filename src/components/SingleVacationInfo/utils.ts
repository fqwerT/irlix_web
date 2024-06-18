export const handleRejectStatus = (
  request_number: string | undefined,
  initiate: (payload: { status: string; id: string | null }) => void,
  status: string
): void => {
  if (status === "pending_approval") {
    return;
  } else {
    let payload = {
      status: "rejected",
      id: request_number as string,
    };
    initiate(payload);
    window.location.reload();
  }
};

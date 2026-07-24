export const isUnauthorized = (status: number | string) => {
  if (typeof status === "string") {
    const statusNum = +status;
    return statusNum == 401;
  }

  return status == 401;
};

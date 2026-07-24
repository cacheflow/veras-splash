export const isSuccessfulStatus = (status: number | string) => {
  const withinSuccessRange = (status: number) => status >= 200 && status <= 300;

  if (typeof status === "string") {
    const statusNum = +status;
    return withinSuccessRange(statusNum);
  }

  return withinSuccessRange(status);
};

/**---------------------------------type assertion----------------------------- */

const KgToGm = (value: string | number): number | string | undefined => {
  if (typeof value === "string") {
    const convertedValue = parseFloat(value) * 1000;
    return `The convertedvalue is :${convertedValue}`;
  }
  if (typeof value === "number") {
    return value * 1000;
  }

  const result1 = KgToGm(10000) as number; //type assertion;
  console.log(result1);

  const result2 = KgToGm("10000") as string; //type assertion;
  console.log(result2);
};

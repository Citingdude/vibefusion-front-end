import qs from "qs";

export default () => {
  const caseQuery = qs.stringify(
    {
      populate: "*",
    },
    {
      encodeValuesOnly: true,
    }
  );

  return caseQuery;
};

const compareAge = (maleAge: number, femaleAge: number) => {
  if (!maleAge || !femaleAge) return 0;

  return maleAge >= femaleAge
    ? Math.round((femaleAge / maleAge) * 100)
    : Math.round((maleAge / femaleAge) * 100);
};

export default compareAge;

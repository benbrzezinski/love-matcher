declare module "dob-to-age" {
  /**
   * Converts a date of birth (DOB) to age.
   * @param dob The date of birth in the format "YYYY-MM-DD".
   * @returns The age calculated from the date of birth.
   */

  function dobToAge(dob: string): number;

  export = dobToAge;
}

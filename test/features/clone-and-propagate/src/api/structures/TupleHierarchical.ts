export type TupleHierarchical = [
  boolean,
  null,
  number,
  [boolean, null, [number, [boolean, string]]],
  [
    number,
    Array<[string, boolean, Array<[number, number, [boolean, string]]>]>,
  ],
];

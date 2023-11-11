export enum StarAgeDifferenceEnum {
  MuchOlder = "MuchOlder",
  Older = "Older",
  Younger = "Younger",
  MuchYounger = "MuchYounger",
}
export type StarAgeDifference = keyof typeof StarAgeDifferenceEnum | keyof StarAgeDifferenceEnum;

const buttonTypes = ["primary", "default", "danger"] as const;

type ButtonTypes = (typeof buttonTypes)[number];

interface ButtonProps {
  type: ButtonTypes;
  onClick: (e: MouseEvent) => void;
}

const submitKey = "111-submit";
const resetKey = "222-reset";
const buttonKey = "333-button";

type ButtonPureTypeKey = typeof submitKey | typeof resetKey | typeof buttonKey;

type ButtonPureKey<T> = T extends `${string}-${infer K}` ? K : never;

type ButtonPureType = ButtonPureKey<ButtonPureTypeKey>;

interface ButtonState {
  pureType: ButtonPureType;
}

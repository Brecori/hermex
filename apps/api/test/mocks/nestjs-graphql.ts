export function Resolver(): ClassDecorator {
  return () => undefined;
}

export function Query(): MethodDecorator {
  return () => undefined;
}

export function ObjectType(): ClassDecorator {
  return () => undefined;
}

export function InputType(): ClassDecorator {
  return () => undefined;
}

export function Field(): PropertyDecorator {
  return () => undefined;
}

export function Args(): ParameterDecorator {
  return () => undefined;
}

export function registerEnumType(): void {
  return undefined;
}

export const ID = String;
export const Int = Number;
export const Float = Number;

export function Injectable(): ClassDecorator {
  return () => undefined;
}

export function Global(): ClassDecorator {
  return () => undefined;
}

export function Module(): ClassDecorator {
  return () => undefined;
}

export interface OnModuleInit {
  onModuleInit(): unknown;
}

export interface OnModuleDestroy {
  onModuleDestroy(): unknown;
}

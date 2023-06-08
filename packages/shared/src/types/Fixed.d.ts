export type Fixed<T> = {
  readonly [K in keyof T]: T[K] extends (infer R)[]
    ? DeepReadonlyArray<R>
    : T[K] extends Function
    ? T[K]
    : T[K] extends object
    ? DeepReadonly<T[K]>
    : T[K]
}

interface DeepReadonlyArray<T> extends ReadonlyArray<DeepReadonly<T>> {}

import type { Linter } from "eslint";

export type TInfiniteArray<T> = T | Array<TInfiniteArray<T>>;

export type TConfig = Linter.Config;

export interface TConfigWithExtends extends Linter.Config {
  extends?: TConfigWithExtendsArray[];
}

export type TConfigWithExtendsArray = TInfiniteArray<TConfigWithExtends>;

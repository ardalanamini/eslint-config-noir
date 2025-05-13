export function canUseDependency(dependency: string): boolean {
  try {
    require.resolve(dependency);

    return true;
  } catch {
    return false;
  }
}

export const canUsePerfectionistPlugin = canUseDependency("eslint-plugin-perfectionist");

export const canUseImportPlugin = canUseDependency("eslint-plugin-import");

export const canUseStylisticPlugin = canUseDependency("@stylistic/eslint-plugin");

export const canUseTypescriptPlugin = canUseDependency("typescript-eslint");

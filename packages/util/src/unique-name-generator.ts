/**
 * Holds state on already used names and provides new names if there are naming conflicts.
 */
export class UniqueNameGenerator {
  private static readonly MAXIMUM_NUMBER_OF_SUFFIX = 1000;

  private static getNameForComparison(
    name: string,
    caseSensitive: boolean
  ): string {
    return caseSensitive ? name : name.toLowerCase();
  }

  private usedNames: string[] = [];

  /**
   * Creates an instance of UniqueNameGenerator.
   * @param indexSeparator The separator to be used when adding an index.
   * @param usedNames Sets the already used names considered in the finding process.
   */
  public constructor(
    private indexSeparator = '_',
    usedNames: readonly string[] = []
  ) {
    this.addToUsedNames(...usedNames);
  }

  /**
   * Adds the name(s) to the already used names.
   * @param names Names to be added
   */
  public addToUsedNames(...names: string[]): void {
    this.usedNames.push(...names);
  }

  /**
   * Generate a unique name by appending an index seperated by the indexSeparator if necessary, e. g. if `MyName` is already taken `MyName_1` will be found by default.
   * If the name is already unique nothing is appended.
   * @param name The name to get a unique name from.
   * @param caseSensitive Whether to check the already used names in a case sensitive manner.
   * @returns A unique name
   */
  public generateUniqueName(name: string, caseSensitive = true): string {
    return this.generateUniqueNamesWithSuffixes(name, [], caseSensitive)[0];
  }

  /**
   * Generate a unique name by appending an index seperated by the indexSeparator if necessary, e. g. if `MyName` is already taken `MyName_1` will be found by default.
   * The generated name is added to the used names.
   * If the name is already unique nothing is appended.
   * @param name The name to get a unique name from.
   * @param caseSensitive Whether to check the already used names in a case sensitive manner.
   * @returns A unique name
   */
  public generateAndSaveUniqueName(name: string, caseSensitive = true): string {
    const uniqueName = this.generateUniqueName(name, caseSensitive);
    this.addToUsedNames(uniqueName);
    return uniqueName;
  }

  /**
   * Generate unique names by appending an index seperated by the indexSeparator if necessary, while respecting the given suffixes.
   * If the name is already unique nothing is appended.
   * Each given suffix is appended to the unique name in the result.
   * The resulting names are also checked for uniqueness.
   * All names in the result have the same number suffix.
   * Example: if `MyName` and `MyName_1MySuffix` is already taken, `[MyName_2, MyName_2MySuffix]` will be generated by default.
   *
   * @param name The name to get a unique name from
   * @param suffixes Additional name of suffixes to be considered for the finding process, as well as the output.
   * @param caseSensitive Whether to check the already used names in a case sensitive manner.
   * @returns A list of unique names. The length of this array is one plus the number of suffixes provided. The first entry corresponds to the given name.
   */
  public generateUniqueNamesWithSuffixes(
    name: string,
    suffixes: string[],
    caseSensitive = true
  ): string[] {
    // Filter names to those that might be relevant for performance reasons
    const relevantUsedNames = this.getUsedNamesStartingWith(
      name,
      caseSensitive
    );

    const namesWithSuffixes = this.generateNamesWithSuffixes(name, suffixes);

    // Names do not need index
    if (
      !this.areNamesUsed(namesWithSuffixes, relevantUsedNames, caseSensitive)
    ) {
      return [name, ...namesWithSuffixes];
    }

    // Names do need index
    const index = this.getUniqueIndex(
      name,
      relevantUsedNames,
      suffixes,
      caseSensitive
    );
    return this.generateNamesWithIndexAndSuffixes(name, index, suffixes);
  }

  /**
   * Generate unique names by appending an index seperated by the indexSeparator if necessary, while respecting the given suffixes.
   * If the name is already unique nothing is appended.
   * The generated names are added to the used names.
   * Each given suffix is appended to the unique name in the result.
   * The resulting names are also checked for uniqueness.
   * All names in the result have the same number suffix.
   * Example: if `MyName` and `MyName_1MySuffix` is already taken, `[MyName_2, MyName_2MySuffix]` will be generated by default.
   *
   * @param name The name to get a unique name from
   * @param suffixes Additional name of suffixes to be considered for the finding process, as well as the output.
   * @param caseSensitive Whether to check the already used names in a case sensitive manner.
   * @returns A list of unique names. The length of this array is one plus the number of suffixes provided. The first entry corresponds to the given name.
   */
  public generateAndSaveUniqueNamesWithSuffixes(
    name: string,
    suffixes: string[],
    caseSensitive = true
  ): string[] {
    const uniqueNames = this.generateUniqueNamesWithSuffixes(
      name,
      suffixes,
      caseSensitive
    );
    this.addToUsedNames(...uniqueNames);

    return uniqueNames;
  }

  private getUsedNamesForComparison(caseSensitive: boolean): string[] {
    return this.usedNames.map(name =>
      UniqueNameGenerator.getNameForComparison(name, caseSensitive)
    );
  }

  private areNamesUsed(
    names: string[],
    usedNames: string[],
    caseSensitive: boolean
  ): boolean {
    return names.some(name =>
      usedNames
        .map(usedName =>
          UniqueNameGenerator.getNameForComparison(usedName, caseSensitive)
        )
        .includes(UniqueNameGenerator.getNameForComparison(name, caseSensitive))
    );
  }

  private generateNamesWithIndexAndSuffixes(
    name: string,
    index: number,
    suffixes: string[]
  ): string[] {
    const nameWithoutIndex = this.getNameWithoutIndex(name);
    return this.generateNamesWithSuffixes(
      `${nameWithoutIndex}${this.indexSeparator}${index}`,
      suffixes
    );
  }

  private generateNamesWithSuffixes(
    name: string,
    suffixes: string[]
  ): string[] {
    return [name, ...suffixes.map(nameSuffix => `${name}${nameSuffix}`)];
  }

  private getUsedNamesStartingWith(
    name: string,
    caseSensitive: boolean
  ): string[] {
    const modifiedName = this.getNameWithoutIndex(name);
    return this.getUsedNamesForComparison(caseSensitive).filter(used =>
      used.startsWith(
        UniqueNameGenerator.getNameForComparison(modifiedName, caseSensitive)
      )
    );
  }

  private getUniqueIndex(
    name: string,
    usedNames: string[],
    suffixes: string[],
    caseSensitive: boolean
  ): number {
    let index = 1;

    // This algorithm has order N**2 for N identical names. With a sort you could get it down to N*log(N)
    // However with the related items in mind this is much easier and N should be small anyway.
    while (index < UniqueNameGenerator.MAXIMUM_NUMBER_OF_SUFFIX) {
      const newNames = this.generateNamesWithIndexAndSuffixes(
        name,
        index,
        suffixes
      );

      if (!this.areNamesUsed(newNames, usedNames, caseSensitive)) {
        return index;
      }
      index++;
    }
    throw new Error(
      `Unable to find a unique name for ${name} within the range of ${UniqueNameGenerator.MAXIMUM_NUMBER_OF_SUFFIX} suffixes.`
    );
  }

  private getNameWithoutIndex(name: string): string {
    return name.replace(new RegExp(`${this.indexSeparator}\\d+$`), '');
  }
}

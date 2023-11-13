
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model fruitClass
 * 
 */
export type fruitClass = $Result.DefaultSelection<Prisma.$fruitClassPayload>
/**
 * Model fruitTraining
 * 
 */
export type fruitTraining = $Result.DefaultSelection<Prisma.$fruitTrainingPayload>
/**
 * Model fruitName
 * 
 */
export type fruitName = $Result.DefaultSelection<Prisma.$fruitNamePayload>
/**
 * Model fruitValue
 * 
 */
export type fruitValue = $Result.DefaultSelection<Prisma.$fruitValuePayload>
/**
 * Model fruitHistory
 * 
 */
export type fruitHistory = $Result.DefaultSelection<Prisma.$fruitHistoryPayload>
/**
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>
/**
 * Model profile
 * 
 */
export type profile = $Result.DefaultSelection<Prisma.$profilePayload>
/**
 * Model balance
 * 
 */
export type balance = $Result.DefaultSelection<Prisma.$balancePayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more FruitClasses
 * const fruitClasses = await prisma.fruitClass.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more FruitClasses
   * const fruitClasses = await prisma.fruitClass.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.fruitClass`: Exposes CRUD operations for the **fruitClass** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FruitClasses
    * const fruitClasses = await prisma.fruitClass.findMany()
    * ```
    */
  get fruitClass(): Prisma.fruitClassDelegate<ExtArgs>;

  /**
   * `prisma.fruitTraining`: Exposes CRUD operations for the **fruitTraining** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FruitTrainings
    * const fruitTrainings = await prisma.fruitTraining.findMany()
    * ```
    */
  get fruitTraining(): Prisma.fruitTrainingDelegate<ExtArgs>;

  /**
   * `prisma.fruitName`: Exposes CRUD operations for the **fruitName** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FruitNames
    * const fruitNames = await prisma.fruitName.findMany()
    * ```
    */
  get fruitName(): Prisma.fruitNameDelegate<ExtArgs>;

  /**
   * `prisma.fruitValue`: Exposes CRUD operations for the **fruitValue** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FruitValues
    * const fruitValues = await prisma.fruitValue.findMany()
    * ```
    */
  get fruitValue(): Prisma.fruitValueDelegate<ExtArgs>;

  /**
   * `prisma.fruitHistory`: Exposes CRUD operations for the **fruitHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FruitHistories
    * const fruitHistories = await prisma.fruitHistory.findMany()
    * ```
    */
  get fruitHistory(): Prisma.fruitHistoryDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs>;

  /**
   * `prisma.profile`: Exposes CRUD operations for the **profile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profiles
    * const profiles = await prisma.profile.findMany()
    * ```
    */
  get profile(): Prisma.profileDelegate<ExtArgs>;

  /**
   * `prisma.balance`: Exposes CRUD operations for the **balance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Balances
    * const balances = await prisma.balance.findMany()
    * ```
    */
  get balance(): Prisma.balanceDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.2.0
   * Query Engine version: 2804dc98259d2ea960602aca6b8e7fdc03c1758f
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    fruitClass: 'fruitClass',
    fruitTraining: 'fruitTraining',
    fruitName: 'fruitName',
    fruitValue: 'fruitValue',
    fruitHistory: 'fruitHistory',
    user: 'user',
    profile: 'profile',
    balance: 'balance'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.Args}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'fruitClass' | 'fruitTraining' | 'fruitName' | 'fruitValue' | 'fruitHistory' | 'user' | 'profile' | 'balance'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      fruitClass: {
        payload: Prisma.$fruitClassPayload<ExtArgs>
        fields: Prisma.fruitClassFieldRefs
        operations: {
          findUnique: {
            args: Prisma.fruitClassFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$fruitClassPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.fruitClassFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$fruitClassPayload>
          }
          findFirst: {
            args: Prisma.fruitClassFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$fruitClassPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.fruitClassFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$fruitClassPayload>
          }
          findMany: {
            args: Prisma.fruitClassFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$fruitClassPayload>[]
          }
          create: {
            args: Prisma.fruitClassCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$fruitClassPayload>
          }
          createMany: {
            args: Prisma.fruitClassCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.fruitClassDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$fruitClassPayload>
          }
          update: {
            args: Prisma.fruitClassUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$fruitClassPayload>
          }
          deleteMany: {
            args: Prisma.fruitClassDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.fruitClassUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.fruitClassUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$fruitClassPayload>
          }
          aggregate: {
            args: Prisma.FruitClassAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFruitClass>
          }
          groupBy: {
            args: Prisma.fruitClassGroupByArgs<ExtArgs>,
            result: $Utils.Optional<FruitClassGroupByOutputType>[]
          }
          count: {
            args: Prisma.fruitClassCountArgs<ExtArgs>,
            result: $Utils.Optional<FruitClassCountAggregateOutputType> | number
          }
        }
      }
      fruitTraining: {
        payload: Prisma.$fruitTrainingPayload<ExtArgs>
        fields: Prisma.fruitTrainingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.fruitTrainingFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$fruitTrainingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.fruitTrainingFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$fruitTrainingPayload>
          }
          findFirst: {
            args: Prisma.fruitTrainingFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$fruitTrainingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.fruitTrainingFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$fruitTrainingPayload>
          }
          findMany: {
            args: Prisma.fruitTrainingFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$fruitTrainingPayload>[]
          }
          create: {
            args: Prisma.fruitTrainingCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$fruitTrainingPayload>
          }
          createMany: {
            args: Prisma.fruitTrainingCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.fruitTrainingDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$fruitTrainingPayload>
          }
          update: {
            args: Prisma.fruitTrainingUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$fruitTrainingPayload>
          }
          deleteMany: {
            args: Prisma.fruitTrainingDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.fruitTrainingUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.fruitTrainingUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$fruitTrainingPayload>
          }
          aggregate: {
            args: Prisma.FruitTrainingAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFruitTraining>
          }
          groupBy: {
            args: Prisma.fruitTrainingGroupByArgs<ExtArgs>,
            result: $Utils.Optional<FruitTrainingGroupByOutputType>[]
          }
          count: {
            args: Prisma.fruitTrainingCountArgs<ExtArgs>,
            result: $Utils.Optional<FruitTrainingCountAggregateOutputType> | number
          }
        }
      }
      fruitName: {
        payload: Prisma.$fruitNamePayload<ExtArgs>
        fields: Prisma.fruitNameFieldRefs
        operations: {
          findUnique: {
            args: Prisma.fruitNameFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$fruitNamePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.fruitNameFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$fruitNamePayload>
          }
          findFirst: {
            args: Prisma.fruitNameFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$fruitNamePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.fruitNameFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$fruitNamePayload>
          }
          findMany: {
            args: Prisma.fruitNameFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$fruitNamePayload>[]
          }
          create: {
            args: Prisma.fruitNameCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$fruitNamePayload>
          }
          createMany: {
            args: Prisma.fruitNameCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.fruitNameDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$fruitNamePayload>
          }
          update: {
            args: Prisma.fruitNameUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$fruitNamePayload>
          }
          deleteMany: {
            args: Prisma.fruitNameDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.fruitNameUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.fruitNameUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$fruitNamePayload>
          }
          aggregate: {
            args: Prisma.FruitNameAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFruitName>
          }
          groupBy: {
            args: Prisma.fruitNameGroupByArgs<ExtArgs>,
            result: $Utils.Optional<FruitNameGroupByOutputType>[]
          }
          count: {
            args: Prisma.fruitNameCountArgs<ExtArgs>,
            result: $Utils.Optional<FruitNameCountAggregateOutputType> | number
          }
        }
      }
      fruitValue: {
        payload: Prisma.$fruitValuePayload<ExtArgs>
        fields: Prisma.fruitValueFieldRefs
        operations: {
          findUnique: {
            args: Prisma.fruitValueFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$fruitValuePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.fruitValueFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$fruitValuePayload>
          }
          findFirst: {
            args: Prisma.fruitValueFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$fruitValuePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.fruitValueFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$fruitValuePayload>
          }
          findMany: {
            args: Prisma.fruitValueFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$fruitValuePayload>[]
          }
          create: {
            args: Prisma.fruitValueCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$fruitValuePayload>
          }
          createMany: {
            args: Prisma.fruitValueCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.fruitValueDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$fruitValuePayload>
          }
          update: {
            args: Prisma.fruitValueUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$fruitValuePayload>
          }
          deleteMany: {
            args: Prisma.fruitValueDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.fruitValueUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.fruitValueUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$fruitValuePayload>
          }
          aggregate: {
            args: Prisma.FruitValueAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFruitValue>
          }
          groupBy: {
            args: Prisma.fruitValueGroupByArgs<ExtArgs>,
            result: $Utils.Optional<FruitValueGroupByOutputType>[]
          }
          count: {
            args: Prisma.fruitValueCountArgs<ExtArgs>,
            result: $Utils.Optional<FruitValueCountAggregateOutputType> | number
          }
        }
      }
      fruitHistory: {
        payload: Prisma.$fruitHistoryPayload<ExtArgs>
        fields: Prisma.fruitHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.fruitHistoryFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$fruitHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.fruitHistoryFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$fruitHistoryPayload>
          }
          findFirst: {
            args: Prisma.fruitHistoryFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$fruitHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.fruitHistoryFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$fruitHistoryPayload>
          }
          findMany: {
            args: Prisma.fruitHistoryFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$fruitHistoryPayload>[]
          }
          create: {
            args: Prisma.fruitHistoryCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$fruitHistoryPayload>
          }
          createMany: {
            args: Prisma.fruitHistoryCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.fruitHistoryDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$fruitHistoryPayload>
          }
          update: {
            args: Prisma.fruitHistoryUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$fruitHistoryPayload>
          }
          deleteMany: {
            args: Prisma.fruitHistoryDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.fruitHistoryUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.fruitHistoryUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$fruitHistoryPayload>
          }
          aggregate: {
            args: Prisma.FruitHistoryAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFruitHistory>
          }
          groupBy: {
            args: Prisma.fruitHistoryGroupByArgs<ExtArgs>,
            result: $Utils.Optional<FruitHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.fruitHistoryCountArgs<ExtArgs>,
            result: $Utils.Optional<FruitHistoryCountAggregateOutputType> | number
          }
        }
      }
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      profile: {
        payload: Prisma.$profilePayload<ExtArgs>
        fields: Prisma.profileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.profileFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$profilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.profileFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$profilePayload>
          }
          findFirst: {
            args: Prisma.profileFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$profilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.profileFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$profilePayload>
          }
          findMany: {
            args: Prisma.profileFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$profilePayload>[]
          }
          create: {
            args: Prisma.profileCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$profilePayload>
          }
          createMany: {
            args: Prisma.profileCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.profileDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$profilePayload>
          }
          update: {
            args: Prisma.profileUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$profilePayload>
          }
          deleteMany: {
            args: Prisma.profileDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.profileUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.profileUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$profilePayload>
          }
          aggregate: {
            args: Prisma.ProfileAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProfile>
          }
          groupBy: {
            args: Prisma.profileGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.profileCountArgs<ExtArgs>,
            result: $Utils.Optional<ProfileCountAggregateOutputType> | number
          }
        }
      }
      balance: {
        payload: Prisma.$balancePayload<ExtArgs>
        fields: Prisma.balanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.balanceFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$balancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.balanceFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$balancePayload>
          }
          findFirst: {
            args: Prisma.balanceFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$balancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.balanceFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$balancePayload>
          }
          findMany: {
            args: Prisma.balanceFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$balancePayload>[]
          }
          create: {
            args: Prisma.balanceCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$balancePayload>
          }
          createMany: {
            args: Prisma.balanceCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.balanceDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$balancePayload>
          }
          update: {
            args: Prisma.balanceUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$balancePayload>
          }
          deleteMany: {
            args: Prisma.balanceDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.balanceUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.balanceUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$balancePayload>
          }
          aggregate: {
            args: Prisma.BalanceAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateBalance>
          }
          groupBy: {
            args: Prisma.balanceGroupByArgs<ExtArgs>,
            result: $Utils.Optional<BalanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.balanceCountArgs<ExtArgs>,
            result: $Utils.Optional<BalanceCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type FruitClassCountOutputType
   */

  export type FruitClassCountOutputType = {
    child: number
    fruitName: number
    fruitTraining: number
  }

  export type FruitClassCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    child?: boolean | FruitClassCountOutputTypeCountChildArgs
    fruitName?: boolean | FruitClassCountOutputTypeCountFruitNameArgs
    fruitTraining?: boolean | FruitClassCountOutputTypeCountFruitTrainingArgs
  }

  // Custom InputTypes

  /**
   * FruitClassCountOutputType without action
   */
  export type FruitClassCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FruitClassCountOutputType
     */
    select?: FruitClassCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * FruitClassCountOutputType without action
   */
  export type FruitClassCountOutputTypeCountChildArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: fruitClassWhereInput
  }


  /**
   * FruitClassCountOutputType without action
   */
  export type FruitClassCountOutputTypeCountFruitNameArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: fruitNameWhereInput
  }


  /**
   * FruitClassCountOutputType without action
   */
  export type FruitClassCountOutputTypeCountFruitTrainingArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: fruitTrainingWhereInput
  }



  /**
   * Count Type FruitNameCountOutputType
   */

  export type FruitNameCountOutputType = {
    fruitValue: number
  }

  export type FruitNameCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    fruitValue?: boolean | FruitNameCountOutputTypeCountFruitValueArgs
  }

  // Custom InputTypes

  /**
   * FruitNameCountOutputType without action
   */
  export type FruitNameCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FruitNameCountOutputType
     */
    select?: FruitNameCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * FruitNameCountOutputType without action
   */
  export type FruitNameCountOutputTypeCountFruitValueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: fruitValueWhereInput
  }



  /**
   * Count Type FruitValueCountOutputType
   */

  export type FruitValueCountOutputType = {
    fruitHistory: number
  }

  export type FruitValueCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    fruitHistory?: boolean | FruitValueCountOutputTypeCountFruitHistoryArgs
  }

  // Custom InputTypes

  /**
   * FruitValueCountOutputType without action
   */
  export type FruitValueCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FruitValueCountOutputType
     */
    select?: FruitValueCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * FruitValueCountOutputType without action
   */
  export type FruitValueCountOutputTypeCountFruitHistoryArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: fruitHistoryWhereInput
  }



  /**
   * Count Type ProfileCountOutputType
   */

  export type ProfileCountOutputType = {
    user: number
  }

  export type ProfileCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    user?: boolean | ProfileCountOutputTypeCountUserArgs
  }

  // Custom InputTypes

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileCountOutputType
     */
    select?: ProfileCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: userWhereInput
  }



  /**
   * Models
   */

  /**
   * Model fruitClass
   */

  export type AggregateFruitClass = {
    _count: FruitClassCountAggregateOutputType | null
    _min: FruitClassMinAggregateOutputType | null
    _max: FruitClassMaxAggregateOutputType | null
  }

  export type FruitClassMinAggregateOutputType = {
    id: string | null
    createAt: Date | null
    updatedAt: Date | null
    name: string | null
    description: string | null
    fatherId: string | null
  }

  export type FruitClassMaxAggregateOutputType = {
    id: string | null
    createAt: Date | null
    updatedAt: Date | null
    name: string | null
    description: string | null
    fatherId: string | null
  }

  export type FruitClassCountAggregateOutputType = {
    id: number
    createAt: number
    updatedAt: number
    name: number
    description: number
    fatherId: number
    _all: number
  }


  export type FruitClassMinAggregateInputType = {
    id?: true
    createAt?: true
    updatedAt?: true
    name?: true
    description?: true
    fatherId?: true
  }

  export type FruitClassMaxAggregateInputType = {
    id?: true
    createAt?: true
    updatedAt?: true
    name?: true
    description?: true
    fatherId?: true
  }

  export type FruitClassCountAggregateInputType = {
    id?: true
    createAt?: true
    updatedAt?: true
    name?: true
    description?: true
    fatherId?: true
    _all?: true
  }

  export type FruitClassAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which fruitClass to aggregate.
     */
    where?: fruitClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fruitClasses to fetch.
     */
    orderBy?: fruitClassOrderByWithRelationInput | fruitClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: fruitClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fruitClasses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fruitClasses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned fruitClasses
    **/
    _count?: true | FruitClassCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FruitClassMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FruitClassMaxAggregateInputType
  }

  export type GetFruitClassAggregateType<T extends FruitClassAggregateArgs> = {
        [P in keyof T & keyof AggregateFruitClass]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFruitClass[P]>
      : GetScalarType<T[P], AggregateFruitClass[P]>
  }




  export type fruitClassGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: fruitClassWhereInput
    orderBy?: fruitClassOrderByWithAggregationInput | fruitClassOrderByWithAggregationInput[]
    by: FruitClassScalarFieldEnum[] | FruitClassScalarFieldEnum
    having?: fruitClassScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FruitClassCountAggregateInputType | true
    _min?: FruitClassMinAggregateInputType
    _max?: FruitClassMaxAggregateInputType
  }

  export type FruitClassGroupByOutputType = {
    id: string
    createAt: Date
    updatedAt: Date
    name: string
    description: string
    fatherId: string | null
    _count: FruitClassCountAggregateOutputType | null
    _min: FruitClassMinAggregateOutputType | null
    _max: FruitClassMaxAggregateOutputType | null
  }

  type GetFruitClassGroupByPayload<T extends fruitClassGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FruitClassGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FruitClassGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FruitClassGroupByOutputType[P]>
            : GetScalarType<T[P], FruitClassGroupByOutputType[P]>
        }
      >
    >


  export type fruitClassSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createAt?: boolean
    updatedAt?: boolean
    name?: boolean
    description?: boolean
    fatherId?: boolean
    father?: boolean | fruitClass$fatherArgs<ExtArgs>
    child?: boolean | fruitClass$childArgs<ExtArgs>
    fruitName?: boolean | fruitClass$fruitNameArgs<ExtArgs>
    fruitTraining?: boolean | fruitClass$fruitTrainingArgs<ExtArgs>
    _count?: boolean | FruitClassCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fruitClass"]>

  export type fruitClassSelectScalar = {
    id?: boolean
    createAt?: boolean
    updatedAt?: boolean
    name?: boolean
    description?: boolean
    fatherId?: boolean
  }

  export type fruitClassInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    father?: boolean | fruitClass$fatherArgs<ExtArgs>
    child?: boolean | fruitClass$childArgs<ExtArgs>
    fruitName?: boolean | fruitClass$fruitNameArgs<ExtArgs>
    fruitTraining?: boolean | fruitClass$fruitTrainingArgs<ExtArgs>
    _count?: boolean | FruitClassCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $fruitClassPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "fruitClass"
    objects: {
      father: Prisma.$fruitClassPayload<ExtArgs> | null
      child: Prisma.$fruitClassPayload<ExtArgs>[]
      fruitName: Prisma.$fruitNamePayload<ExtArgs>[]
      fruitTraining: Prisma.$fruitTrainingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: string
      createAt: Date
      updatedAt: Date
      name: string
      description: string
      fatherId: string | null
    }, ExtArgs["result"]["fruitClass"]>
    composites: {}
  }


  type fruitClassGetPayload<S extends boolean | null | undefined | fruitClassDefaultArgs> = $Result.GetResult<Prisma.$fruitClassPayload, S>

  type fruitClassCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<fruitClassFindManyArgs, 'select' | 'include'> & {
      select?: FruitClassCountAggregateInputType | true
    }

  export interface fruitClassDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['fruitClass'], meta: { name: 'fruitClass' } }
    /**
     * Find zero or one FruitClass that matches the filter.
     * @param {fruitClassFindUniqueArgs} args - Arguments to find a FruitClass
     * @example
     * // Get one FruitClass
     * const fruitClass = await prisma.fruitClass.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends fruitClassFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, fruitClassFindUniqueArgs<ExtArgs>>
    ): Prisma__fruitClassClient<$Result.GetResult<Prisma.$fruitClassPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one FruitClass that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {fruitClassFindUniqueOrThrowArgs} args - Arguments to find a FruitClass
     * @example
     * // Get one FruitClass
     * const fruitClass = await prisma.fruitClass.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends fruitClassFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, fruitClassFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__fruitClassClient<$Result.GetResult<Prisma.$fruitClassPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first FruitClass that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fruitClassFindFirstArgs} args - Arguments to find a FruitClass
     * @example
     * // Get one FruitClass
     * const fruitClass = await prisma.fruitClass.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends fruitClassFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, fruitClassFindFirstArgs<ExtArgs>>
    ): Prisma__fruitClassClient<$Result.GetResult<Prisma.$fruitClassPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first FruitClass that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fruitClassFindFirstOrThrowArgs} args - Arguments to find a FruitClass
     * @example
     * // Get one FruitClass
     * const fruitClass = await prisma.fruitClass.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends fruitClassFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, fruitClassFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__fruitClassClient<$Result.GetResult<Prisma.$fruitClassPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more FruitClasses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fruitClassFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FruitClasses
     * const fruitClasses = await prisma.fruitClass.findMany()
     * 
     * // Get first 10 FruitClasses
     * const fruitClasses = await prisma.fruitClass.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fruitClassWithIdOnly = await prisma.fruitClass.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends fruitClassFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, fruitClassFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$fruitClassPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a FruitClass.
     * @param {fruitClassCreateArgs} args - Arguments to create a FruitClass.
     * @example
     * // Create one FruitClass
     * const FruitClass = await prisma.fruitClass.create({
     *   data: {
     *     // ... data to create a FruitClass
     *   }
     * })
     * 
    **/
    create<T extends fruitClassCreateArgs<ExtArgs>>(
      args: SelectSubset<T, fruitClassCreateArgs<ExtArgs>>
    ): Prisma__fruitClassClient<$Result.GetResult<Prisma.$fruitClassPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many FruitClasses.
     *     @param {fruitClassCreateManyArgs} args - Arguments to create many FruitClasses.
     *     @example
     *     // Create many FruitClasses
     *     const fruitClass = await prisma.fruitClass.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends fruitClassCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, fruitClassCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FruitClass.
     * @param {fruitClassDeleteArgs} args - Arguments to delete one FruitClass.
     * @example
     * // Delete one FruitClass
     * const FruitClass = await prisma.fruitClass.delete({
     *   where: {
     *     // ... filter to delete one FruitClass
     *   }
     * })
     * 
    **/
    delete<T extends fruitClassDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, fruitClassDeleteArgs<ExtArgs>>
    ): Prisma__fruitClassClient<$Result.GetResult<Prisma.$fruitClassPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one FruitClass.
     * @param {fruitClassUpdateArgs} args - Arguments to update one FruitClass.
     * @example
     * // Update one FruitClass
     * const fruitClass = await prisma.fruitClass.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends fruitClassUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, fruitClassUpdateArgs<ExtArgs>>
    ): Prisma__fruitClassClient<$Result.GetResult<Prisma.$fruitClassPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more FruitClasses.
     * @param {fruitClassDeleteManyArgs} args - Arguments to filter FruitClasses to delete.
     * @example
     * // Delete a few FruitClasses
     * const { count } = await prisma.fruitClass.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends fruitClassDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, fruitClassDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FruitClasses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fruitClassUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FruitClasses
     * const fruitClass = await prisma.fruitClass.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends fruitClassUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, fruitClassUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FruitClass.
     * @param {fruitClassUpsertArgs} args - Arguments to update or create a FruitClass.
     * @example
     * // Update or create a FruitClass
     * const fruitClass = await prisma.fruitClass.upsert({
     *   create: {
     *     // ... data to create a FruitClass
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FruitClass we want to update
     *   }
     * })
    **/
    upsert<T extends fruitClassUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, fruitClassUpsertArgs<ExtArgs>>
    ): Prisma__fruitClassClient<$Result.GetResult<Prisma.$fruitClassPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of FruitClasses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fruitClassCountArgs} args - Arguments to filter FruitClasses to count.
     * @example
     * // Count the number of FruitClasses
     * const count = await prisma.fruitClass.count({
     *   where: {
     *     // ... the filter for the FruitClasses we want to count
     *   }
     * })
    **/
    count<T extends fruitClassCountArgs>(
      args?: Subset<T, fruitClassCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FruitClassCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FruitClass.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FruitClassAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FruitClassAggregateArgs>(args: Subset<T, FruitClassAggregateArgs>): Prisma.PrismaPromise<GetFruitClassAggregateType<T>>

    /**
     * Group by FruitClass.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fruitClassGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends fruitClassGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: fruitClassGroupByArgs['orderBy'] }
        : { orderBy?: fruitClassGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, fruitClassGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFruitClassGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the fruitClass model
   */
  readonly fields: fruitClassFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for fruitClass.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__fruitClassClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    father<T extends fruitClass$fatherArgs<ExtArgs> = {}>(args?: Subset<T, fruitClass$fatherArgs<ExtArgs>>): Prisma__fruitClassClient<$Result.GetResult<Prisma.$fruitClassPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    child<T extends fruitClass$childArgs<ExtArgs> = {}>(args?: Subset<T, fruitClass$childArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$fruitClassPayload<ExtArgs>, T, 'findMany'> | Null>;

    fruitName<T extends fruitClass$fruitNameArgs<ExtArgs> = {}>(args?: Subset<T, fruitClass$fruitNameArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$fruitNamePayload<ExtArgs>, T, 'findMany'> | Null>;

    fruitTraining<T extends fruitClass$fruitTrainingArgs<ExtArgs> = {}>(args?: Subset<T, fruitClass$fruitTrainingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$fruitTrainingPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the fruitClass model
   */ 
  interface fruitClassFieldRefs {
    readonly id: FieldRef<"fruitClass", 'String'>
    readonly createAt: FieldRef<"fruitClass", 'DateTime'>
    readonly updatedAt: FieldRef<"fruitClass", 'DateTime'>
    readonly name: FieldRef<"fruitClass", 'String'>
    readonly description: FieldRef<"fruitClass", 'String'>
    readonly fatherId: FieldRef<"fruitClass", 'String'>
  }
    

  // Custom InputTypes

  /**
   * fruitClass findUnique
   */
  export type fruitClassFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fruitClass
     */
    select?: fruitClassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: fruitClassInclude<ExtArgs> | null
    /**
     * Filter, which fruitClass to fetch.
     */
    where: fruitClassWhereUniqueInput
  }


  /**
   * fruitClass findUniqueOrThrow
   */
  export type fruitClassFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fruitClass
     */
    select?: fruitClassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: fruitClassInclude<ExtArgs> | null
    /**
     * Filter, which fruitClass to fetch.
     */
    where: fruitClassWhereUniqueInput
  }


  /**
   * fruitClass findFirst
   */
  export type fruitClassFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fruitClass
     */
    select?: fruitClassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: fruitClassInclude<ExtArgs> | null
    /**
     * Filter, which fruitClass to fetch.
     */
    where?: fruitClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fruitClasses to fetch.
     */
    orderBy?: fruitClassOrderByWithRelationInput | fruitClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for fruitClasses.
     */
    cursor?: fruitClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fruitClasses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fruitClasses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of fruitClasses.
     */
    distinct?: FruitClassScalarFieldEnum | FruitClassScalarFieldEnum[]
  }


  /**
   * fruitClass findFirstOrThrow
   */
  export type fruitClassFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fruitClass
     */
    select?: fruitClassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: fruitClassInclude<ExtArgs> | null
    /**
     * Filter, which fruitClass to fetch.
     */
    where?: fruitClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fruitClasses to fetch.
     */
    orderBy?: fruitClassOrderByWithRelationInput | fruitClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for fruitClasses.
     */
    cursor?: fruitClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fruitClasses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fruitClasses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of fruitClasses.
     */
    distinct?: FruitClassScalarFieldEnum | FruitClassScalarFieldEnum[]
  }


  /**
   * fruitClass findMany
   */
  export type fruitClassFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fruitClass
     */
    select?: fruitClassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: fruitClassInclude<ExtArgs> | null
    /**
     * Filter, which fruitClasses to fetch.
     */
    where?: fruitClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fruitClasses to fetch.
     */
    orderBy?: fruitClassOrderByWithRelationInput | fruitClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing fruitClasses.
     */
    cursor?: fruitClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fruitClasses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fruitClasses.
     */
    skip?: number
    distinct?: FruitClassScalarFieldEnum | FruitClassScalarFieldEnum[]
  }


  /**
   * fruitClass create
   */
  export type fruitClassCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fruitClass
     */
    select?: fruitClassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: fruitClassInclude<ExtArgs> | null
    /**
     * The data needed to create a fruitClass.
     */
    data: XOR<fruitClassCreateInput, fruitClassUncheckedCreateInput>
  }


  /**
   * fruitClass createMany
   */
  export type fruitClassCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many fruitClasses.
     */
    data: fruitClassCreateManyInput | fruitClassCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * fruitClass update
   */
  export type fruitClassUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fruitClass
     */
    select?: fruitClassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: fruitClassInclude<ExtArgs> | null
    /**
     * The data needed to update a fruitClass.
     */
    data: XOR<fruitClassUpdateInput, fruitClassUncheckedUpdateInput>
    /**
     * Choose, which fruitClass to update.
     */
    where: fruitClassWhereUniqueInput
  }


  /**
   * fruitClass updateMany
   */
  export type fruitClassUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update fruitClasses.
     */
    data: XOR<fruitClassUpdateManyMutationInput, fruitClassUncheckedUpdateManyInput>
    /**
     * Filter which fruitClasses to update
     */
    where?: fruitClassWhereInput
  }


  /**
   * fruitClass upsert
   */
  export type fruitClassUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fruitClass
     */
    select?: fruitClassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: fruitClassInclude<ExtArgs> | null
    /**
     * The filter to search for the fruitClass to update in case it exists.
     */
    where: fruitClassWhereUniqueInput
    /**
     * In case the fruitClass found by the `where` argument doesn't exist, create a new fruitClass with this data.
     */
    create: XOR<fruitClassCreateInput, fruitClassUncheckedCreateInput>
    /**
     * In case the fruitClass was found with the provided `where` argument, update it with this data.
     */
    update: XOR<fruitClassUpdateInput, fruitClassUncheckedUpdateInput>
  }


  /**
   * fruitClass delete
   */
  export type fruitClassDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fruitClass
     */
    select?: fruitClassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: fruitClassInclude<ExtArgs> | null
    /**
     * Filter which fruitClass to delete.
     */
    where: fruitClassWhereUniqueInput
  }


  /**
   * fruitClass deleteMany
   */
  export type fruitClassDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which fruitClasses to delete
     */
    where?: fruitClassWhereInput
  }


  /**
   * fruitClass.father
   */
  export type fruitClass$fatherArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fruitClass
     */
    select?: fruitClassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: fruitClassInclude<ExtArgs> | null
    where?: fruitClassWhereInput
  }


  /**
   * fruitClass.child
   */
  export type fruitClass$childArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fruitClass
     */
    select?: fruitClassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: fruitClassInclude<ExtArgs> | null
    where?: fruitClassWhereInput
    orderBy?: fruitClassOrderByWithRelationInput | fruitClassOrderByWithRelationInput[]
    cursor?: fruitClassWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FruitClassScalarFieldEnum | FruitClassScalarFieldEnum[]
  }


  /**
   * fruitClass.fruitName
   */
  export type fruitClass$fruitNameArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fruitName
     */
    select?: fruitNameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: fruitNameInclude<ExtArgs> | null
    where?: fruitNameWhereInput
    orderBy?: fruitNameOrderByWithRelationInput | fruitNameOrderByWithRelationInput[]
    cursor?: fruitNameWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FruitNameScalarFieldEnum | FruitNameScalarFieldEnum[]
  }


  /**
   * fruitClass.fruitTraining
   */
  export type fruitClass$fruitTrainingArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fruitTraining
     */
    select?: fruitTrainingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: fruitTrainingInclude<ExtArgs> | null
    where?: fruitTrainingWhereInput
    orderBy?: fruitTrainingOrderByWithRelationInput | fruitTrainingOrderByWithRelationInput[]
    cursor?: fruitTrainingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FruitTrainingScalarFieldEnum | FruitTrainingScalarFieldEnum[]
  }


  /**
   * fruitClass without action
   */
  export type fruitClassDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fruitClass
     */
    select?: fruitClassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: fruitClassInclude<ExtArgs> | null
  }



  /**
   * Model fruitTraining
   */

  export type AggregateFruitTraining = {
    _count: FruitTrainingCountAggregateOutputType | null
    _min: FruitTrainingMinAggregateOutputType | null
    _max: FruitTrainingMaxAggregateOutputType | null
  }

  export type FruitTrainingMinAggregateOutputType = {
    id: string | null
    createAt: Date | null
    updatedAt: Date | null
    img: string | null
    date: Date | null
    fruitClassId: string | null
  }

  export type FruitTrainingMaxAggregateOutputType = {
    id: string | null
    createAt: Date | null
    updatedAt: Date | null
    img: string | null
    date: Date | null
    fruitClassId: string | null
  }

  export type FruitTrainingCountAggregateOutputType = {
    id: number
    createAt: number
    updatedAt: number
    img: number
    date: number
    fruitClassId: number
    _all: number
  }


  export type FruitTrainingMinAggregateInputType = {
    id?: true
    createAt?: true
    updatedAt?: true
    img?: true
    date?: true
    fruitClassId?: true
  }

  export type FruitTrainingMaxAggregateInputType = {
    id?: true
    createAt?: true
    updatedAt?: true
    img?: true
    date?: true
    fruitClassId?: true
  }

  export type FruitTrainingCountAggregateInputType = {
    id?: true
    createAt?: true
    updatedAt?: true
    img?: true
    date?: true
    fruitClassId?: true
    _all?: true
  }

  export type FruitTrainingAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which fruitTraining to aggregate.
     */
    where?: fruitTrainingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fruitTrainings to fetch.
     */
    orderBy?: fruitTrainingOrderByWithRelationInput | fruitTrainingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: fruitTrainingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fruitTrainings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fruitTrainings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned fruitTrainings
    **/
    _count?: true | FruitTrainingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FruitTrainingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FruitTrainingMaxAggregateInputType
  }

  export type GetFruitTrainingAggregateType<T extends FruitTrainingAggregateArgs> = {
        [P in keyof T & keyof AggregateFruitTraining]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFruitTraining[P]>
      : GetScalarType<T[P], AggregateFruitTraining[P]>
  }




  export type fruitTrainingGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: fruitTrainingWhereInput
    orderBy?: fruitTrainingOrderByWithAggregationInput | fruitTrainingOrderByWithAggregationInput[]
    by: FruitTrainingScalarFieldEnum[] | FruitTrainingScalarFieldEnum
    having?: fruitTrainingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FruitTrainingCountAggregateInputType | true
    _min?: FruitTrainingMinAggregateInputType
    _max?: FruitTrainingMaxAggregateInputType
  }

  export type FruitTrainingGroupByOutputType = {
    id: string
    createAt: Date
    updatedAt: Date
    img: string
    date: Date
    fruitClassId: string
    _count: FruitTrainingCountAggregateOutputType | null
    _min: FruitTrainingMinAggregateOutputType | null
    _max: FruitTrainingMaxAggregateOutputType | null
  }

  type GetFruitTrainingGroupByPayload<T extends fruitTrainingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FruitTrainingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FruitTrainingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FruitTrainingGroupByOutputType[P]>
            : GetScalarType<T[P], FruitTrainingGroupByOutputType[P]>
        }
      >
    >


  export type fruitTrainingSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createAt?: boolean
    updatedAt?: boolean
    img?: boolean
    date?: boolean
    fruitClassId?: boolean
    fruitClass?: boolean | fruitTraining$fruitClassArgs<ExtArgs>
  }, ExtArgs["result"]["fruitTraining"]>

  export type fruitTrainingSelectScalar = {
    id?: boolean
    createAt?: boolean
    updatedAt?: boolean
    img?: boolean
    date?: boolean
    fruitClassId?: boolean
  }

  export type fruitTrainingInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    fruitClass?: boolean | fruitTraining$fruitClassArgs<ExtArgs>
  }


  export type $fruitTrainingPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "fruitTraining"
    objects: {
      fruitClass: Prisma.$fruitClassPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetResult<{
      id: string
      createAt: Date
      updatedAt: Date
      img: string
      date: Date
      fruitClassId: string
    }, ExtArgs["result"]["fruitTraining"]>
    composites: {}
  }


  type fruitTrainingGetPayload<S extends boolean | null | undefined | fruitTrainingDefaultArgs> = $Result.GetResult<Prisma.$fruitTrainingPayload, S>

  type fruitTrainingCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<fruitTrainingFindManyArgs, 'select' | 'include'> & {
      select?: FruitTrainingCountAggregateInputType | true
    }

  export interface fruitTrainingDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['fruitTraining'], meta: { name: 'fruitTraining' } }
    /**
     * Find zero or one FruitTraining that matches the filter.
     * @param {fruitTrainingFindUniqueArgs} args - Arguments to find a FruitTraining
     * @example
     * // Get one FruitTraining
     * const fruitTraining = await prisma.fruitTraining.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends fruitTrainingFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, fruitTrainingFindUniqueArgs<ExtArgs>>
    ): Prisma__fruitTrainingClient<$Result.GetResult<Prisma.$fruitTrainingPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one FruitTraining that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {fruitTrainingFindUniqueOrThrowArgs} args - Arguments to find a FruitTraining
     * @example
     * // Get one FruitTraining
     * const fruitTraining = await prisma.fruitTraining.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends fruitTrainingFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, fruitTrainingFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__fruitTrainingClient<$Result.GetResult<Prisma.$fruitTrainingPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first FruitTraining that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fruitTrainingFindFirstArgs} args - Arguments to find a FruitTraining
     * @example
     * // Get one FruitTraining
     * const fruitTraining = await prisma.fruitTraining.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends fruitTrainingFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, fruitTrainingFindFirstArgs<ExtArgs>>
    ): Prisma__fruitTrainingClient<$Result.GetResult<Prisma.$fruitTrainingPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first FruitTraining that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fruitTrainingFindFirstOrThrowArgs} args - Arguments to find a FruitTraining
     * @example
     * // Get one FruitTraining
     * const fruitTraining = await prisma.fruitTraining.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends fruitTrainingFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, fruitTrainingFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__fruitTrainingClient<$Result.GetResult<Prisma.$fruitTrainingPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more FruitTrainings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fruitTrainingFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FruitTrainings
     * const fruitTrainings = await prisma.fruitTraining.findMany()
     * 
     * // Get first 10 FruitTrainings
     * const fruitTrainings = await prisma.fruitTraining.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fruitTrainingWithIdOnly = await prisma.fruitTraining.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends fruitTrainingFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, fruitTrainingFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$fruitTrainingPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a FruitTraining.
     * @param {fruitTrainingCreateArgs} args - Arguments to create a FruitTraining.
     * @example
     * // Create one FruitTraining
     * const FruitTraining = await prisma.fruitTraining.create({
     *   data: {
     *     // ... data to create a FruitTraining
     *   }
     * })
     * 
    **/
    create<T extends fruitTrainingCreateArgs<ExtArgs>>(
      args: SelectSubset<T, fruitTrainingCreateArgs<ExtArgs>>
    ): Prisma__fruitTrainingClient<$Result.GetResult<Prisma.$fruitTrainingPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many FruitTrainings.
     *     @param {fruitTrainingCreateManyArgs} args - Arguments to create many FruitTrainings.
     *     @example
     *     // Create many FruitTrainings
     *     const fruitTraining = await prisma.fruitTraining.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends fruitTrainingCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, fruitTrainingCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FruitTraining.
     * @param {fruitTrainingDeleteArgs} args - Arguments to delete one FruitTraining.
     * @example
     * // Delete one FruitTraining
     * const FruitTraining = await prisma.fruitTraining.delete({
     *   where: {
     *     // ... filter to delete one FruitTraining
     *   }
     * })
     * 
    **/
    delete<T extends fruitTrainingDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, fruitTrainingDeleteArgs<ExtArgs>>
    ): Prisma__fruitTrainingClient<$Result.GetResult<Prisma.$fruitTrainingPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one FruitTraining.
     * @param {fruitTrainingUpdateArgs} args - Arguments to update one FruitTraining.
     * @example
     * // Update one FruitTraining
     * const fruitTraining = await prisma.fruitTraining.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends fruitTrainingUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, fruitTrainingUpdateArgs<ExtArgs>>
    ): Prisma__fruitTrainingClient<$Result.GetResult<Prisma.$fruitTrainingPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more FruitTrainings.
     * @param {fruitTrainingDeleteManyArgs} args - Arguments to filter FruitTrainings to delete.
     * @example
     * // Delete a few FruitTrainings
     * const { count } = await prisma.fruitTraining.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends fruitTrainingDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, fruitTrainingDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FruitTrainings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fruitTrainingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FruitTrainings
     * const fruitTraining = await prisma.fruitTraining.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends fruitTrainingUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, fruitTrainingUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FruitTraining.
     * @param {fruitTrainingUpsertArgs} args - Arguments to update or create a FruitTraining.
     * @example
     * // Update or create a FruitTraining
     * const fruitTraining = await prisma.fruitTraining.upsert({
     *   create: {
     *     // ... data to create a FruitTraining
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FruitTraining we want to update
     *   }
     * })
    **/
    upsert<T extends fruitTrainingUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, fruitTrainingUpsertArgs<ExtArgs>>
    ): Prisma__fruitTrainingClient<$Result.GetResult<Prisma.$fruitTrainingPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of FruitTrainings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fruitTrainingCountArgs} args - Arguments to filter FruitTrainings to count.
     * @example
     * // Count the number of FruitTrainings
     * const count = await prisma.fruitTraining.count({
     *   where: {
     *     // ... the filter for the FruitTrainings we want to count
     *   }
     * })
    **/
    count<T extends fruitTrainingCountArgs>(
      args?: Subset<T, fruitTrainingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FruitTrainingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FruitTraining.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FruitTrainingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FruitTrainingAggregateArgs>(args: Subset<T, FruitTrainingAggregateArgs>): Prisma.PrismaPromise<GetFruitTrainingAggregateType<T>>

    /**
     * Group by FruitTraining.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fruitTrainingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends fruitTrainingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: fruitTrainingGroupByArgs['orderBy'] }
        : { orderBy?: fruitTrainingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, fruitTrainingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFruitTrainingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the fruitTraining model
   */
  readonly fields: fruitTrainingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for fruitTraining.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__fruitTrainingClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    fruitClass<T extends fruitTraining$fruitClassArgs<ExtArgs> = {}>(args?: Subset<T, fruitTraining$fruitClassArgs<ExtArgs>>): Prisma__fruitClassClient<$Result.GetResult<Prisma.$fruitClassPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the fruitTraining model
   */ 
  interface fruitTrainingFieldRefs {
    readonly id: FieldRef<"fruitTraining", 'String'>
    readonly createAt: FieldRef<"fruitTraining", 'DateTime'>
    readonly updatedAt: FieldRef<"fruitTraining", 'DateTime'>
    readonly img: FieldRef<"fruitTraining", 'String'>
    readonly date: FieldRef<"fruitTraining", 'DateTime'>
    readonly fruitClassId: FieldRef<"fruitTraining", 'String'>
  }
    

  // Custom InputTypes

  /**
   * fruitTraining findUnique
   */
  export type fruitTrainingFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fruitTraining
     */
    select?: fruitTrainingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: fruitTrainingInclude<ExtArgs> | null
    /**
     * Filter, which fruitTraining to fetch.
     */
    where: fruitTrainingWhereUniqueInput
  }


  /**
   * fruitTraining findUniqueOrThrow
   */
  export type fruitTrainingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fruitTraining
     */
    select?: fruitTrainingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: fruitTrainingInclude<ExtArgs> | null
    /**
     * Filter, which fruitTraining to fetch.
     */
    where: fruitTrainingWhereUniqueInput
  }


  /**
   * fruitTraining findFirst
   */
  export type fruitTrainingFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fruitTraining
     */
    select?: fruitTrainingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: fruitTrainingInclude<ExtArgs> | null
    /**
     * Filter, which fruitTraining to fetch.
     */
    where?: fruitTrainingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fruitTrainings to fetch.
     */
    orderBy?: fruitTrainingOrderByWithRelationInput | fruitTrainingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for fruitTrainings.
     */
    cursor?: fruitTrainingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fruitTrainings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fruitTrainings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of fruitTrainings.
     */
    distinct?: FruitTrainingScalarFieldEnum | FruitTrainingScalarFieldEnum[]
  }


  /**
   * fruitTraining findFirstOrThrow
   */
  export type fruitTrainingFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fruitTraining
     */
    select?: fruitTrainingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: fruitTrainingInclude<ExtArgs> | null
    /**
     * Filter, which fruitTraining to fetch.
     */
    where?: fruitTrainingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fruitTrainings to fetch.
     */
    orderBy?: fruitTrainingOrderByWithRelationInput | fruitTrainingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for fruitTrainings.
     */
    cursor?: fruitTrainingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fruitTrainings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fruitTrainings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of fruitTrainings.
     */
    distinct?: FruitTrainingScalarFieldEnum | FruitTrainingScalarFieldEnum[]
  }


  /**
   * fruitTraining findMany
   */
  export type fruitTrainingFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fruitTraining
     */
    select?: fruitTrainingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: fruitTrainingInclude<ExtArgs> | null
    /**
     * Filter, which fruitTrainings to fetch.
     */
    where?: fruitTrainingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fruitTrainings to fetch.
     */
    orderBy?: fruitTrainingOrderByWithRelationInput | fruitTrainingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing fruitTrainings.
     */
    cursor?: fruitTrainingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fruitTrainings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fruitTrainings.
     */
    skip?: number
    distinct?: FruitTrainingScalarFieldEnum | FruitTrainingScalarFieldEnum[]
  }


  /**
   * fruitTraining create
   */
  export type fruitTrainingCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fruitTraining
     */
    select?: fruitTrainingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: fruitTrainingInclude<ExtArgs> | null
    /**
     * The data needed to create a fruitTraining.
     */
    data: XOR<fruitTrainingCreateInput, fruitTrainingUncheckedCreateInput>
  }


  /**
   * fruitTraining createMany
   */
  export type fruitTrainingCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many fruitTrainings.
     */
    data: fruitTrainingCreateManyInput | fruitTrainingCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * fruitTraining update
   */
  export type fruitTrainingUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fruitTraining
     */
    select?: fruitTrainingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: fruitTrainingInclude<ExtArgs> | null
    /**
     * The data needed to update a fruitTraining.
     */
    data: XOR<fruitTrainingUpdateInput, fruitTrainingUncheckedUpdateInput>
    /**
     * Choose, which fruitTraining to update.
     */
    where: fruitTrainingWhereUniqueInput
  }


  /**
   * fruitTraining updateMany
   */
  export type fruitTrainingUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update fruitTrainings.
     */
    data: XOR<fruitTrainingUpdateManyMutationInput, fruitTrainingUncheckedUpdateManyInput>
    /**
     * Filter which fruitTrainings to update
     */
    where?: fruitTrainingWhereInput
  }


  /**
   * fruitTraining upsert
   */
  export type fruitTrainingUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fruitTraining
     */
    select?: fruitTrainingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: fruitTrainingInclude<ExtArgs> | null
    /**
     * The filter to search for the fruitTraining to update in case it exists.
     */
    where: fruitTrainingWhereUniqueInput
    /**
     * In case the fruitTraining found by the `where` argument doesn't exist, create a new fruitTraining with this data.
     */
    create: XOR<fruitTrainingCreateInput, fruitTrainingUncheckedCreateInput>
    /**
     * In case the fruitTraining was found with the provided `where` argument, update it with this data.
     */
    update: XOR<fruitTrainingUpdateInput, fruitTrainingUncheckedUpdateInput>
  }


  /**
   * fruitTraining delete
   */
  export type fruitTrainingDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fruitTraining
     */
    select?: fruitTrainingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: fruitTrainingInclude<ExtArgs> | null
    /**
     * Filter which fruitTraining to delete.
     */
    where: fruitTrainingWhereUniqueInput
  }


  /**
   * fruitTraining deleteMany
   */
  export type fruitTrainingDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which fruitTrainings to delete
     */
    where?: fruitTrainingWhereInput
  }


  /**
   * fruitTraining.fruitClass
   */
  export type fruitTraining$fruitClassArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fruitClass
     */
    select?: fruitClassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: fruitClassInclude<ExtArgs> | null
    where?: fruitClassWhereInput
  }


  /**
   * fruitTraining without action
   */
  export type fruitTrainingDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fruitTraining
     */
    select?: fruitTrainingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: fruitTrainingInclude<ExtArgs> | null
  }



  /**
   * Model fruitName
   */

  export type AggregateFruitName = {
    _count: FruitNameCountAggregateOutputType | null
    _min: FruitNameMinAggregateOutputType | null
    _max: FruitNameMaxAggregateOutputType | null
  }

  export type FruitNameMinAggregateOutputType = {
    id: string | null
    createAt: Date | null
    updatedAt: Date | null
    name: string | null
    fruitClassId: string | null
  }

  export type FruitNameMaxAggregateOutputType = {
    id: string | null
    createAt: Date | null
    updatedAt: Date | null
    name: string | null
    fruitClassId: string | null
  }

  export type FruitNameCountAggregateOutputType = {
    id: number
    createAt: number
    updatedAt: number
    name: number
    fruitClassId: number
    _all: number
  }


  export type FruitNameMinAggregateInputType = {
    id?: true
    createAt?: true
    updatedAt?: true
    name?: true
    fruitClassId?: true
  }

  export type FruitNameMaxAggregateInputType = {
    id?: true
    createAt?: true
    updatedAt?: true
    name?: true
    fruitClassId?: true
  }

  export type FruitNameCountAggregateInputType = {
    id?: true
    createAt?: true
    updatedAt?: true
    name?: true
    fruitClassId?: true
    _all?: true
  }

  export type FruitNameAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which fruitName to aggregate.
     */
    where?: fruitNameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fruitNames to fetch.
     */
    orderBy?: fruitNameOrderByWithRelationInput | fruitNameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: fruitNameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fruitNames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fruitNames.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned fruitNames
    **/
    _count?: true | FruitNameCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FruitNameMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FruitNameMaxAggregateInputType
  }

  export type GetFruitNameAggregateType<T extends FruitNameAggregateArgs> = {
        [P in keyof T & keyof AggregateFruitName]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFruitName[P]>
      : GetScalarType<T[P], AggregateFruitName[P]>
  }




  export type fruitNameGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: fruitNameWhereInput
    orderBy?: fruitNameOrderByWithAggregationInput | fruitNameOrderByWithAggregationInput[]
    by: FruitNameScalarFieldEnum[] | FruitNameScalarFieldEnum
    having?: fruitNameScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FruitNameCountAggregateInputType | true
    _min?: FruitNameMinAggregateInputType
    _max?: FruitNameMaxAggregateInputType
  }

  export type FruitNameGroupByOutputType = {
    id: string
    createAt: Date
    updatedAt: Date
    name: string
    fruitClassId: string
    _count: FruitNameCountAggregateOutputType | null
    _min: FruitNameMinAggregateOutputType | null
    _max: FruitNameMaxAggregateOutputType | null
  }

  type GetFruitNameGroupByPayload<T extends fruitNameGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FruitNameGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FruitNameGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FruitNameGroupByOutputType[P]>
            : GetScalarType<T[P], FruitNameGroupByOutputType[P]>
        }
      >
    >


  export type fruitNameSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createAt?: boolean
    updatedAt?: boolean
    name?: boolean
    fruitClassId?: boolean
    fruitClass?: boolean | fruitName$fruitClassArgs<ExtArgs>
    fruitValue?: boolean | fruitName$fruitValueArgs<ExtArgs>
    _count?: boolean | FruitNameCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fruitName"]>

  export type fruitNameSelectScalar = {
    id?: boolean
    createAt?: boolean
    updatedAt?: boolean
    name?: boolean
    fruitClassId?: boolean
  }

  export type fruitNameInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    fruitClass?: boolean | fruitName$fruitClassArgs<ExtArgs>
    fruitValue?: boolean | fruitName$fruitValueArgs<ExtArgs>
    _count?: boolean | FruitNameCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $fruitNamePayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "fruitName"
    objects: {
      fruitClass: Prisma.$fruitClassPayload<ExtArgs> | null
      fruitValue: Prisma.$fruitValuePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: string
      createAt: Date
      updatedAt: Date
      name: string
      fruitClassId: string
    }, ExtArgs["result"]["fruitName"]>
    composites: {}
  }


  type fruitNameGetPayload<S extends boolean | null | undefined | fruitNameDefaultArgs> = $Result.GetResult<Prisma.$fruitNamePayload, S>

  type fruitNameCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<fruitNameFindManyArgs, 'select' | 'include'> & {
      select?: FruitNameCountAggregateInputType | true
    }

  export interface fruitNameDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['fruitName'], meta: { name: 'fruitName' } }
    /**
     * Find zero or one FruitName that matches the filter.
     * @param {fruitNameFindUniqueArgs} args - Arguments to find a FruitName
     * @example
     * // Get one FruitName
     * const fruitName = await prisma.fruitName.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends fruitNameFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, fruitNameFindUniqueArgs<ExtArgs>>
    ): Prisma__fruitNameClient<$Result.GetResult<Prisma.$fruitNamePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one FruitName that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {fruitNameFindUniqueOrThrowArgs} args - Arguments to find a FruitName
     * @example
     * // Get one FruitName
     * const fruitName = await prisma.fruitName.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends fruitNameFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, fruitNameFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__fruitNameClient<$Result.GetResult<Prisma.$fruitNamePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first FruitName that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fruitNameFindFirstArgs} args - Arguments to find a FruitName
     * @example
     * // Get one FruitName
     * const fruitName = await prisma.fruitName.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends fruitNameFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, fruitNameFindFirstArgs<ExtArgs>>
    ): Prisma__fruitNameClient<$Result.GetResult<Prisma.$fruitNamePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first FruitName that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fruitNameFindFirstOrThrowArgs} args - Arguments to find a FruitName
     * @example
     * // Get one FruitName
     * const fruitName = await prisma.fruitName.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends fruitNameFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, fruitNameFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__fruitNameClient<$Result.GetResult<Prisma.$fruitNamePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more FruitNames that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fruitNameFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FruitNames
     * const fruitNames = await prisma.fruitName.findMany()
     * 
     * // Get first 10 FruitNames
     * const fruitNames = await prisma.fruitName.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fruitNameWithIdOnly = await prisma.fruitName.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends fruitNameFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, fruitNameFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$fruitNamePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a FruitName.
     * @param {fruitNameCreateArgs} args - Arguments to create a FruitName.
     * @example
     * // Create one FruitName
     * const FruitName = await prisma.fruitName.create({
     *   data: {
     *     // ... data to create a FruitName
     *   }
     * })
     * 
    **/
    create<T extends fruitNameCreateArgs<ExtArgs>>(
      args: SelectSubset<T, fruitNameCreateArgs<ExtArgs>>
    ): Prisma__fruitNameClient<$Result.GetResult<Prisma.$fruitNamePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many FruitNames.
     *     @param {fruitNameCreateManyArgs} args - Arguments to create many FruitNames.
     *     @example
     *     // Create many FruitNames
     *     const fruitName = await prisma.fruitName.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends fruitNameCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, fruitNameCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FruitName.
     * @param {fruitNameDeleteArgs} args - Arguments to delete one FruitName.
     * @example
     * // Delete one FruitName
     * const FruitName = await prisma.fruitName.delete({
     *   where: {
     *     // ... filter to delete one FruitName
     *   }
     * })
     * 
    **/
    delete<T extends fruitNameDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, fruitNameDeleteArgs<ExtArgs>>
    ): Prisma__fruitNameClient<$Result.GetResult<Prisma.$fruitNamePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one FruitName.
     * @param {fruitNameUpdateArgs} args - Arguments to update one FruitName.
     * @example
     * // Update one FruitName
     * const fruitName = await prisma.fruitName.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends fruitNameUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, fruitNameUpdateArgs<ExtArgs>>
    ): Prisma__fruitNameClient<$Result.GetResult<Prisma.$fruitNamePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more FruitNames.
     * @param {fruitNameDeleteManyArgs} args - Arguments to filter FruitNames to delete.
     * @example
     * // Delete a few FruitNames
     * const { count } = await prisma.fruitName.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends fruitNameDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, fruitNameDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FruitNames.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fruitNameUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FruitNames
     * const fruitName = await prisma.fruitName.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends fruitNameUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, fruitNameUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FruitName.
     * @param {fruitNameUpsertArgs} args - Arguments to update or create a FruitName.
     * @example
     * // Update or create a FruitName
     * const fruitName = await prisma.fruitName.upsert({
     *   create: {
     *     // ... data to create a FruitName
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FruitName we want to update
     *   }
     * })
    **/
    upsert<T extends fruitNameUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, fruitNameUpsertArgs<ExtArgs>>
    ): Prisma__fruitNameClient<$Result.GetResult<Prisma.$fruitNamePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of FruitNames.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fruitNameCountArgs} args - Arguments to filter FruitNames to count.
     * @example
     * // Count the number of FruitNames
     * const count = await prisma.fruitName.count({
     *   where: {
     *     // ... the filter for the FruitNames we want to count
     *   }
     * })
    **/
    count<T extends fruitNameCountArgs>(
      args?: Subset<T, fruitNameCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FruitNameCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FruitName.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FruitNameAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FruitNameAggregateArgs>(args: Subset<T, FruitNameAggregateArgs>): Prisma.PrismaPromise<GetFruitNameAggregateType<T>>

    /**
     * Group by FruitName.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fruitNameGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends fruitNameGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: fruitNameGroupByArgs['orderBy'] }
        : { orderBy?: fruitNameGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, fruitNameGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFruitNameGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the fruitName model
   */
  readonly fields: fruitNameFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for fruitName.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__fruitNameClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    fruitClass<T extends fruitName$fruitClassArgs<ExtArgs> = {}>(args?: Subset<T, fruitName$fruitClassArgs<ExtArgs>>): Prisma__fruitClassClient<$Result.GetResult<Prisma.$fruitClassPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    fruitValue<T extends fruitName$fruitValueArgs<ExtArgs> = {}>(args?: Subset<T, fruitName$fruitValueArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$fruitValuePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the fruitName model
   */ 
  interface fruitNameFieldRefs {
    readonly id: FieldRef<"fruitName", 'String'>
    readonly createAt: FieldRef<"fruitName", 'DateTime'>
    readonly updatedAt: FieldRef<"fruitName", 'DateTime'>
    readonly name: FieldRef<"fruitName", 'String'>
    readonly fruitClassId: FieldRef<"fruitName", 'String'>
  }
    

  // Custom InputTypes

  /**
   * fruitName findUnique
   */
  export type fruitNameFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fruitName
     */
    select?: fruitNameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: fruitNameInclude<ExtArgs> | null
    /**
     * Filter, which fruitName to fetch.
     */
    where: fruitNameWhereUniqueInput
  }


  /**
   * fruitName findUniqueOrThrow
   */
  export type fruitNameFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fruitName
     */
    select?: fruitNameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: fruitNameInclude<ExtArgs> | null
    /**
     * Filter, which fruitName to fetch.
     */
    where: fruitNameWhereUniqueInput
  }


  /**
   * fruitName findFirst
   */
  export type fruitNameFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fruitName
     */
    select?: fruitNameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: fruitNameInclude<ExtArgs> | null
    /**
     * Filter, which fruitName to fetch.
     */
    where?: fruitNameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fruitNames to fetch.
     */
    orderBy?: fruitNameOrderByWithRelationInput | fruitNameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for fruitNames.
     */
    cursor?: fruitNameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fruitNames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fruitNames.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of fruitNames.
     */
    distinct?: FruitNameScalarFieldEnum | FruitNameScalarFieldEnum[]
  }


  /**
   * fruitName findFirstOrThrow
   */
  export type fruitNameFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fruitName
     */
    select?: fruitNameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: fruitNameInclude<ExtArgs> | null
    /**
     * Filter, which fruitName to fetch.
     */
    where?: fruitNameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fruitNames to fetch.
     */
    orderBy?: fruitNameOrderByWithRelationInput | fruitNameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for fruitNames.
     */
    cursor?: fruitNameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fruitNames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fruitNames.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of fruitNames.
     */
    distinct?: FruitNameScalarFieldEnum | FruitNameScalarFieldEnum[]
  }


  /**
   * fruitName findMany
   */
  export type fruitNameFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fruitName
     */
    select?: fruitNameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: fruitNameInclude<ExtArgs> | null
    /**
     * Filter, which fruitNames to fetch.
     */
    where?: fruitNameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fruitNames to fetch.
     */
    orderBy?: fruitNameOrderByWithRelationInput | fruitNameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing fruitNames.
     */
    cursor?: fruitNameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fruitNames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fruitNames.
     */
    skip?: number
    distinct?: FruitNameScalarFieldEnum | FruitNameScalarFieldEnum[]
  }


  /**
   * fruitName create
   */
  export type fruitNameCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fruitName
     */
    select?: fruitNameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: fruitNameInclude<ExtArgs> | null
    /**
     * The data needed to create a fruitName.
     */
    data: XOR<fruitNameCreateInput, fruitNameUncheckedCreateInput>
  }


  /**
   * fruitName createMany
   */
  export type fruitNameCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many fruitNames.
     */
    data: fruitNameCreateManyInput | fruitNameCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * fruitName update
   */
  export type fruitNameUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fruitName
     */
    select?: fruitNameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: fruitNameInclude<ExtArgs> | null
    /**
     * The data needed to update a fruitName.
     */
    data: XOR<fruitNameUpdateInput, fruitNameUncheckedUpdateInput>
    /**
     * Choose, which fruitName to update.
     */
    where: fruitNameWhereUniqueInput
  }


  /**
   * fruitName updateMany
   */
  export type fruitNameUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update fruitNames.
     */
    data: XOR<fruitNameUpdateManyMutationInput, fruitNameUncheckedUpdateManyInput>
    /**
     * Filter which fruitNames to update
     */
    where?: fruitNameWhereInput
  }


  /**
   * fruitName upsert
   */
  export type fruitNameUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fruitName
     */
    select?: fruitNameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: fruitNameInclude<ExtArgs> | null
    /**
     * The filter to search for the fruitName to update in case it exists.
     */
    where: fruitNameWhereUniqueInput
    /**
     * In case the fruitName found by the `where` argument doesn't exist, create a new fruitName with this data.
     */
    create: XOR<fruitNameCreateInput, fruitNameUncheckedCreateInput>
    /**
     * In case the fruitName was found with the provided `where` argument, update it with this data.
     */
    update: XOR<fruitNameUpdateInput, fruitNameUncheckedUpdateInput>
  }


  /**
   * fruitName delete
   */
  export type fruitNameDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fruitName
     */
    select?: fruitNameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: fruitNameInclude<ExtArgs> | null
    /**
     * Filter which fruitName to delete.
     */
    where: fruitNameWhereUniqueInput
  }


  /**
   * fruitName deleteMany
   */
  export type fruitNameDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which fruitNames to delete
     */
    where?: fruitNameWhereInput
  }


  /**
   * fruitName.fruitClass
   */
  export type fruitName$fruitClassArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fruitClass
     */
    select?: fruitClassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: fruitClassInclude<ExtArgs> | null
    where?: fruitClassWhereInput
  }


  /**
   * fruitName.fruitValue
   */
  export type fruitName$fruitValueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fruitValue
     */
    select?: fruitValueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: fruitValueInclude<ExtArgs> | null
    where?: fruitValueWhereInput
    orderBy?: fruitValueOrderByWithRelationInput | fruitValueOrderByWithRelationInput[]
    cursor?: fruitValueWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FruitValueScalarFieldEnum | FruitValueScalarFieldEnum[]
  }


  /**
   * fruitName without action
   */
  export type fruitNameDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fruitName
     */
    select?: fruitNameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: fruitNameInclude<ExtArgs> | null
  }



  /**
   * Model fruitValue
   */

  export type AggregateFruitValue = {
    _count: FruitValueCountAggregateOutputType | null
    _avg: FruitValueAvgAggregateOutputType | null
    _sum: FruitValueSumAggregateOutputType | null
    _min: FruitValueMinAggregateOutputType | null
    _max: FruitValueMaxAggregateOutputType | null
  }

  export type FruitValueAvgAggregateOutputType = {
    valueUnid: Decimal | null
  }

  export type FruitValueSumAggregateOutputType = {
    valueUnid: Decimal | null
  }

  export type FruitValueMinAggregateOutputType = {
    id: string | null
    createAt: Date | null
    updatedAt: Date | null
    description: string | null
    valueUnid: Decimal | null
    date: Date | null
    fruitNameId: string | null
  }

  export type FruitValueMaxAggregateOutputType = {
    id: string | null
    createAt: Date | null
    updatedAt: Date | null
    description: string | null
    valueUnid: Decimal | null
    date: Date | null
    fruitNameId: string | null
  }

  export type FruitValueCountAggregateOutputType = {
    id: number
    createAt: number
    updatedAt: number
    description: number
    valueUnid: number
    date: number
    fruitNameId: number
    _all: number
  }


  export type FruitValueAvgAggregateInputType = {
    valueUnid?: true
  }

  export type FruitValueSumAggregateInputType = {
    valueUnid?: true
  }

  export type FruitValueMinAggregateInputType = {
    id?: true
    createAt?: true
    updatedAt?: true
    description?: true
    valueUnid?: true
    date?: true
    fruitNameId?: true
  }

  export type FruitValueMaxAggregateInputType = {
    id?: true
    createAt?: true
    updatedAt?: true
    description?: true
    valueUnid?: true
    date?: true
    fruitNameId?: true
  }

  export type FruitValueCountAggregateInputType = {
    id?: true
    createAt?: true
    updatedAt?: true
    description?: true
    valueUnid?: true
    date?: true
    fruitNameId?: true
    _all?: true
  }

  export type FruitValueAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which fruitValue to aggregate.
     */
    where?: fruitValueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fruitValues to fetch.
     */
    orderBy?: fruitValueOrderByWithRelationInput | fruitValueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: fruitValueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fruitValues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fruitValues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned fruitValues
    **/
    _count?: true | FruitValueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FruitValueAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FruitValueSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FruitValueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FruitValueMaxAggregateInputType
  }

  export type GetFruitValueAggregateType<T extends FruitValueAggregateArgs> = {
        [P in keyof T & keyof AggregateFruitValue]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFruitValue[P]>
      : GetScalarType<T[P], AggregateFruitValue[P]>
  }




  export type fruitValueGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: fruitValueWhereInput
    orderBy?: fruitValueOrderByWithAggregationInput | fruitValueOrderByWithAggregationInput[]
    by: FruitValueScalarFieldEnum[] | FruitValueScalarFieldEnum
    having?: fruitValueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FruitValueCountAggregateInputType | true
    _avg?: FruitValueAvgAggregateInputType
    _sum?: FruitValueSumAggregateInputType
    _min?: FruitValueMinAggregateInputType
    _max?: FruitValueMaxAggregateInputType
  }

  export type FruitValueGroupByOutputType = {
    id: string
    createAt: Date
    updatedAt: Date
    description: string
    valueUnid: Decimal
    date: Date
    fruitNameId: string
    _count: FruitValueCountAggregateOutputType | null
    _avg: FruitValueAvgAggregateOutputType | null
    _sum: FruitValueSumAggregateOutputType | null
    _min: FruitValueMinAggregateOutputType | null
    _max: FruitValueMaxAggregateOutputType | null
  }

  type GetFruitValueGroupByPayload<T extends fruitValueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FruitValueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FruitValueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FruitValueGroupByOutputType[P]>
            : GetScalarType<T[P], FruitValueGroupByOutputType[P]>
        }
      >
    >


  export type fruitValueSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createAt?: boolean
    updatedAt?: boolean
    description?: boolean
    valueUnid?: boolean
    date?: boolean
    fruitNameId?: boolean
    fruitName?: boolean | fruitValue$fruitNameArgs<ExtArgs>
    fruitHistory?: boolean | fruitValue$fruitHistoryArgs<ExtArgs>
    _count?: boolean | FruitValueCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fruitValue"]>

  export type fruitValueSelectScalar = {
    id?: boolean
    createAt?: boolean
    updatedAt?: boolean
    description?: boolean
    valueUnid?: boolean
    date?: boolean
    fruitNameId?: boolean
  }

  export type fruitValueInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    fruitName?: boolean | fruitValue$fruitNameArgs<ExtArgs>
    fruitHistory?: boolean | fruitValue$fruitHistoryArgs<ExtArgs>
    _count?: boolean | FruitValueCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $fruitValuePayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "fruitValue"
    objects: {
      fruitName: Prisma.$fruitNamePayload<ExtArgs> | null
      fruitHistory: Prisma.$fruitHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: string
      createAt: Date
      updatedAt: Date
      description: string
      valueUnid: Prisma.Decimal
      date: Date
      fruitNameId: string
    }, ExtArgs["result"]["fruitValue"]>
    composites: {}
  }


  type fruitValueGetPayload<S extends boolean | null | undefined | fruitValueDefaultArgs> = $Result.GetResult<Prisma.$fruitValuePayload, S>

  type fruitValueCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<fruitValueFindManyArgs, 'select' | 'include'> & {
      select?: FruitValueCountAggregateInputType | true
    }

  export interface fruitValueDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['fruitValue'], meta: { name: 'fruitValue' } }
    /**
     * Find zero or one FruitValue that matches the filter.
     * @param {fruitValueFindUniqueArgs} args - Arguments to find a FruitValue
     * @example
     * // Get one FruitValue
     * const fruitValue = await prisma.fruitValue.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends fruitValueFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, fruitValueFindUniqueArgs<ExtArgs>>
    ): Prisma__fruitValueClient<$Result.GetResult<Prisma.$fruitValuePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one FruitValue that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {fruitValueFindUniqueOrThrowArgs} args - Arguments to find a FruitValue
     * @example
     * // Get one FruitValue
     * const fruitValue = await prisma.fruitValue.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends fruitValueFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, fruitValueFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__fruitValueClient<$Result.GetResult<Prisma.$fruitValuePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first FruitValue that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fruitValueFindFirstArgs} args - Arguments to find a FruitValue
     * @example
     * // Get one FruitValue
     * const fruitValue = await prisma.fruitValue.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends fruitValueFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, fruitValueFindFirstArgs<ExtArgs>>
    ): Prisma__fruitValueClient<$Result.GetResult<Prisma.$fruitValuePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first FruitValue that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fruitValueFindFirstOrThrowArgs} args - Arguments to find a FruitValue
     * @example
     * // Get one FruitValue
     * const fruitValue = await prisma.fruitValue.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends fruitValueFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, fruitValueFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__fruitValueClient<$Result.GetResult<Prisma.$fruitValuePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more FruitValues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fruitValueFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FruitValues
     * const fruitValues = await prisma.fruitValue.findMany()
     * 
     * // Get first 10 FruitValues
     * const fruitValues = await prisma.fruitValue.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fruitValueWithIdOnly = await prisma.fruitValue.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends fruitValueFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, fruitValueFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$fruitValuePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a FruitValue.
     * @param {fruitValueCreateArgs} args - Arguments to create a FruitValue.
     * @example
     * // Create one FruitValue
     * const FruitValue = await prisma.fruitValue.create({
     *   data: {
     *     // ... data to create a FruitValue
     *   }
     * })
     * 
    **/
    create<T extends fruitValueCreateArgs<ExtArgs>>(
      args: SelectSubset<T, fruitValueCreateArgs<ExtArgs>>
    ): Prisma__fruitValueClient<$Result.GetResult<Prisma.$fruitValuePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many FruitValues.
     *     @param {fruitValueCreateManyArgs} args - Arguments to create many FruitValues.
     *     @example
     *     // Create many FruitValues
     *     const fruitValue = await prisma.fruitValue.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends fruitValueCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, fruitValueCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FruitValue.
     * @param {fruitValueDeleteArgs} args - Arguments to delete one FruitValue.
     * @example
     * // Delete one FruitValue
     * const FruitValue = await prisma.fruitValue.delete({
     *   where: {
     *     // ... filter to delete one FruitValue
     *   }
     * })
     * 
    **/
    delete<T extends fruitValueDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, fruitValueDeleteArgs<ExtArgs>>
    ): Prisma__fruitValueClient<$Result.GetResult<Prisma.$fruitValuePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one FruitValue.
     * @param {fruitValueUpdateArgs} args - Arguments to update one FruitValue.
     * @example
     * // Update one FruitValue
     * const fruitValue = await prisma.fruitValue.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends fruitValueUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, fruitValueUpdateArgs<ExtArgs>>
    ): Prisma__fruitValueClient<$Result.GetResult<Prisma.$fruitValuePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more FruitValues.
     * @param {fruitValueDeleteManyArgs} args - Arguments to filter FruitValues to delete.
     * @example
     * // Delete a few FruitValues
     * const { count } = await prisma.fruitValue.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends fruitValueDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, fruitValueDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FruitValues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fruitValueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FruitValues
     * const fruitValue = await prisma.fruitValue.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends fruitValueUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, fruitValueUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FruitValue.
     * @param {fruitValueUpsertArgs} args - Arguments to update or create a FruitValue.
     * @example
     * // Update or create a FruitValue
     * const fruitValue = await prisma.fruitValue.upsert({
     *   create: {
     *     // ... data to create a FruitValue
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FruitValue we want to update
     *   }
     * })
    **/
    upsert<T extends fruitValueUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, fruitValueUpsertArgs<ExtArgs>>
    ): Prisma__fruitValueClient<$Result.GetResult<Prisma.$fruitValuePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of FruitValues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fruitValueCountArgs} args - Arguments to filter FruitValues to count.
     * @example
     * // Count the number of FruitValues
     * const count = await prisma.fruitValue.count({
     *   where: {
     *     // ... the filter for the FruitValues we want to count
     *   }
     * })
    **/
    count<T extends fruitValueCountArgs>(
      args?: Subset<T, fruitValueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FruitValueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FruitValue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FruitValueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FruitValueAggregateArgs>(args: Subset<T, FruitValueAggregateArgs>): Prisma.PrismaPromise<GetFruitValueAggregateType<T>>

    /**
     * Group by FruitValue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fruitValueGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends fruitValueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: fruitValueGroupByArgs['orderBy'] }
        : { orderBy?: fruitValueGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, fruitValueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFruitValueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the fruitValue model
   */
  readonly fields: fruitValueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for fruitValue.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__fruitValueClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    fruitName<T extends fruitValue$fruitNameArgs<ExtArgs> = {}>(args?: Subset<T, fruitValue$fruitNameArgs<ExtArgs>>): Prisma__fruitNameClient<$Result.GetResult<Prisma.$fruitNamePayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    fruitHistory<T extends fruitValue$fruitHistoryArgs<ExtArgs> = {}>(args?: Subset<T, fruitValue$fruitHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$fruitHistoryPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the fruitValue model
   */ 
  interface fruitValueFieldRefs {
    readonly id: FieldRef<"fruitValue", 'String'>
    readonly createAt: FieldRef<"fruitValue", 'DateTime'>
    readonly updatedAt: FieldRef<"fruitValue", 'DateTime'>
    readonly description: FieldRef<"fruitValue", 'String'>
    readonly valueUnid: FieldRef<"fruitValue", 'Decimal'>
    readonly date: FieldRef<"fruitValue", 'DateTime'>
    readonly fruitNameId: FieldRef<"fruitValue", 'String'>
  }
    

  // Custom InputTypes

  /**
   * fruitValue findUnique
   */
  export type fruitValueFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fruitValue
     */
    select?: fruitValueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: fruitValueInclude<ExtArgs> | null
    /**
     * Filter, which fruitValue to fetch.
     */
    where: fruitValueWhereUniqueInput
  }


  /**
   * fruitValue findUniqueOrThrow
   */
  export type fruitValueFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fruitValue
     */
    select?: fruitValueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: fruitValueInclude<ExtArgs> | null
    /**
     * Filter, which fruitValue to fetch.
     */
    where: fruitValueWhereUniqueInput
  }


  /**
   * fruitValue findFirst
   */
  export type fruitValueFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fruitValue
     */
    select?: fruitValueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: fruitValueInclude<ExtArgs> | null
    /**
     * Filter, which fruitValue to fetch.
     */
    where?: fruitValueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fruitValues to fetch.
     */
    orderBy?: fruitValueOrderByWithRelationInput | fruitValueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for fruitValues.
     */
    cursor?: fruitValueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fruitValues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fruitValues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of fruitValues.
     */
    distinct?: FruitValueScalarFieldEnum | FruitValueScalarFieldEnum[]
  }


  /**
   * fruitValue findFirstOrThrow
   */
  export type fruitValueFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fruitValue
     */
    select?: fruitValueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: fruitValueInclude<ExtArgs> | null
    /**
     * Filter, which fruitValue to fetch.
     */
    where?: fruitValueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fruitValues to fetch.
     */
    orderBy?: fruitValueOrderByWithRelationInput | fruitValueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for fruitValues.
     */
    cursor?: fruitValueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fruitValues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fruitValues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of fruitValues.
     */
    distinct?: FruitValueScalarFieldEnum | FruitValueScalarFieldEnum[]
  }


  /**
   * fruitValue findMany
   */
  export type fruitValueFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fruitValue
     */
    select?: fruitValueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: fruitValueInclude<ExtArgs> | null
    /**
     * Filter, which fruitValues to fetch.
     */
    where?: fruitValueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fruitValues to fetch.
     */
    orderBy?: fruitValueOrderByWithRelationInput | fruitValueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing fruitValues.
     */
    cursor?: fruitValueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fruitValues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fruitValues.
     */
    skip?: number
    distinct?: FruitValueScalarFieldEnum | FruitValueScalarFieldEnum[]
  }


  /**
   * fruitValue create
   */
  export type fruitValueCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fruitValue
     */
    select?: fruitValueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: fruitValueInclude<ExtArgs> | null
    /**
     * The data needed to create a fruitValue.
     */
    data: XOR<fruitValueCreateInput, fruitValueUncheckedCreateInput>
  }


  /**
   * fruitValue createMany
   */
  export type fruitValueCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many fruitValues.
     */
    data: fruitValueCreateManyInput | fruitValueCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * fruitValue update
   */
  export type fruitValueUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fruitValue
     */
    select?: fruitValueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: fruitValueInclude<ExtArgs> | null
    /**
     * The data needed to update a fruitValue.
     */
    data: XOR<fruitValueUpdateInput, fruitValueUncheckedUpdateInput>
    /**
     * Choose, which fruitValue to update.
     */
    where: fruitValueWhereUniqueInput
  }


  /**
   * fruitValue updateMany
   */
  export type fruitValueUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update fruitValues.
     */
    data: XOR<fruitValueUpdateManyMutationInput, fruitValueUncheckedUpdateManyInput>
    /**
     * Filter which fruitValues to update
     */
    where?: fruitValueWhereInput
  }


  /**
   * fruitValue upsert
   */
  export type fruitValueUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fruitValue
     */
    select?: fruitValueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: fruitValueInclude<ExtArgs> | null
    /**
     * The filter to search for the fruitValue to update in case it exists.
     */
    where: fruitValueWhereUniqueInput
    /**
     * In case the fruitValue found by the `where` argument doesn't exist, create a new fruitValue with this data.
     */
    create: XOR<fruitValueCreateInput, fruitValueUncheckedCreateInput>
    /**
     * In case the fruitValue was found with the provided `where` argument, update it with this data.
     */
    update: XOR<fruitValueUpdateInput, fruitValueUncheckedUpdateInput>
  }


  /**
   * fruitValue delete
   */
  export type fruitValueDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fruitValue
     */
    select?: fruitValueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: fruitValueInclude<ExtArgs> | null
    /**
     * Filter which fruitValue to delete.
     */
    where: fruitValueWhereUniqueInput
  }


  /**
   * fruitValue deleteMany
   */
  export type fruitValueDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which fruitValues to delete
     */
    where?: fruitValueWhereInput
  }


  /**
   * fruitValue.fruitName
   */
  export type fruitValue$fruitNameArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fruitName
     */
    select?: fruitNameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: fruitNameInclude<ExtArgs> | null
    where?: fruitNameWhereInput
  }


  /**
   * fruitValue.fruitHistory
   */
  export type fruitValue$fruitHistoryArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fruitHistory
     */
    select?: fruitHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: fruitHistoryInclude<ExtArgs> | null
    where?: fruitHistoryWhereInput
    orderBy?: fruitHistoryOrderByWithRelationInput | fruitHistoryOrderByWithRelationInput[]
    cursor?: fruitHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FruitHistoryScalarFieldEnum | FruitHistoryScalarFieldEnum[]
  }


  /**
   * fruitValue without action
   */
  export type fruitValueDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fruitValue
     */
    select?: fruitValueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: fruitValueInclude<ExtArgs> | null
  }



  /**
   * Model fruitHistory
   */

  export type AggregateFruitHistory = {
    _count: FruitHistoryCountAggregateOutputType | null
    _avg: FruitHistoryAvgAggregateOutputType | null
    _sum: FruitHistorySumAggregateOutputType | null
    _min: FruitHistoryMinAggregateOutputType | null
    _max: FruitHistoryMaxAggregateOutputType | null
  }

  export type FruitHistoryAvgAggregateOutputType = {
    valuWeight: Decimal | null
    valueTotal: Decimal | null
  }

  export type FruitHistorySumAggregateOutputType = {
    valuWeight: Decimal | null
    valueTotal: Decimal | null
  }

  export type FruitHistoryMinAggregateOutputType = {
    id: string | null
    createAt: Date | null
    updatedAt: Date | null
    dateCapture: Date | null
    valuWeight: Decimal | null
    valueTotal: Decimal | null
    fruitValueId: string | null
  }

  export type FruitHistoryMaxAggregateOutputType = {
    id: string | null
    createAt: Date | null
    updatedAt: Date | null
    dateCapture: Date | null
    valuWeight: Decimal | null
    valueTotal: Decimal | null
    fruitValueId: string | null
  }

  export type FruitHistoryCountAggregateOutputType = {
    id: number
    createAt: number
    updatedAt: number
    dateCapture: number
    valuWeight: number
    valueTotal: number
    fruitValueId: number
    _all: number
  }


  export type FruitHistoryAvgAggregateInputType = {
    valuWeight?: true
    valueTotal?: true
  }

  export type FruitHistorySumAggregateInputType = {
    valuWeight?: true
    valueTotal?: true
  }

  export type FruitHistoryMinAggregateInputType = {
    id?: true
    createAt?: true
    updatedAt?: true
    dateCapture?: true
    valuWeight?: true
    valueTotal?: true
    fruitValueId?: true
  }

  export type FruitHistoryMaxAggregateInputType = {
    id?: true
    createAt?: true
    updatedAt?: true
    dateCapture?: true
    valuWeight?: true
    valueTotal?: true
    fruitValueId?: true
  }

  export type FruitHistoryCountAggregateInputType = {
    id?: true
    createAt?: true
    updatedAt?: true
    dateCapture?: true
    valuWeight?: true
    valueTotal?: true
    fruitValueId?: true
    _all?: true
  }

  export type FruitHistoryAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which fruitHistory to aggregate.
     */
    where?: fruitHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fruitHistories to fetch.
     */
    orderBy?: fruitHistoryOrderByWithRelationInput | fruitHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: fruitHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fruitHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fruitHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned fruitHistories
    **/
    _count?: true | FruitHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FruitHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FruitHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FruitHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FruitHistoryMaxAggregateInputType
  }

  export type GetFruitHistoryAggregateType<T extends FruitHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateFruitHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFruitHistory[P]>
      : GetScalarType<T[P], AggregateFruitHistory[P]>
  }




  export type fruitHistoryGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: fruitHistoryWhereInput
    orderBy?: fruitHistoryOrderByWithAggregationInput | fruitHistoryOrderByWithAggregationInput[]
    by: FruitHistoryScalarFieldEnum[] | FruitHistoryScalarFieldEnum
    having?: fruitHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FruitHistoryCountAggregateInputType | true
    _avg?: FruitHistoryAvgAggregateInputType
    _sum?: FruitHistorySumAggregateInputType
    _min?: FruitHistoryMinAggregateInputType
    _max?: FruitHistoryMaxAggregateInputType
  }

  export type FruitHistoryGroupByOutputType = {
    id: string
    createAt: Date
    updatedAt: Date
    dateCapture: Date
    valuWeight: Decimal
    valueTotal: Decimal
    fruitValueId: string
    _count: FruitHistoryCountAggregateOutputType | null
    _avg: FruitHistoryAvgAggregateOutputType | null
    _sum: FruitHistorySumAggregateOutputType | null
    _min: FruitHistoryMinAggregateOutputType | null
    _max: FruitHistoryMaxAggregateOutputType | null
  }

  type GetFruitHistoryGroupByPayload<T extends fruitHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FruitHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FruitHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FruitHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], FruitHistoryGroupByOutputType[P]>
        }
      >
    >


  export type fruitHistorySelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createAt?: boolean
    updatedAt?: boolean
    dateCapture?: boolean
    valuWeight?: boolean
    valueTotal?: boolean
    fruitValueId?: boolean
    fruitValue?: boolean | fruitHistory$fruitValueArgs<ExtArgs>
  }, ExtArgs["result"]["fruitHistory"]>

  export type fruitHistorySelectScalar = {
    id?: boolean
    createAt?: boolean
    updatedAt?: boolean
    dateCapture?: boolean
    valuWeight?: boolean
    valueTotal?: boolean
    fruitValueId?: boolean
  }

  export type fruitHistoryInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    fruitValue?: boolean | fruitHistory$fruitValueArgs<ExtArgs>
  }


  export type $fruitHistoryPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "fruitHistory"
    objects: {
      fruitValue: Prisma.$fruitValuePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetResult<{
      id: string
      createAt: Date
      updatedAt: Date
      dateCapture: Date
      valuWeight: Prisma.Decimal
      valueTotal: Prisma.Decimal
      fruitValueId: string
    }, ExtArgs["result"]["fruitHistory"]>
    composites: {}
  }


  type fruitHistoryGetPayload<S extends boolean | null | undefined | fruitHistoryDefaultArgs> = $Result.GetResult<Prisma.$fruitHistoryPayload, S>

  type fruitHistoryCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<fruitHistoryFindManyArgs, 'select' | 'include'> & {
      select?: FruitHistoryCountAggregateInputType | true
    }

  export interface fruitHistoryDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['fruitHistory'], meta: { name: 'fruitHistory' } }
    /**
     * Find zero or one FruitHistory that matches the filter.
     * @param {fruitHistoryFindUniqueArgs} args - Arguments to find a FruitHistory
     * @example
     * // Get one FruitHistory
     * const fruitHistory = await prisma.fruitHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends fruitHistoryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, fruitHistoryFindUniqueArgs<ExtArgs>>
    ): Prisma__fruitHistoryClient<$Result.GetResult<Prisma.$fruitHistoryPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one FruitHistory that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {fruitHistoryFindUniqueOrThrowArgs} args - Arguments to find a FruitHistory
     * @example
     * // Get one FruitHistory
     * const fruitHistory = await prisma.fruitHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends fruitHistoryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, fruitHistoryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__fruitHistoryClient<$Result.GetResult<Prisma.$fruitHistoryPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first FruitHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fruitHistoryFindFirstArgs} args - Arguments to find a FruitHistory
     * @example
     * // Get one FruitHistory
     * const fruitHistory = await prisma.fruitHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends fruitHistoryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, fruitHistoryFindFirstArgs<ExtArgs>>
    ): Prisma__fruitHistoryClient<$Result.GetResult<Prisma.$fruitHistoryPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first FruitHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fruitHistoryFindFirstOrThrowArgs} args - Arguments to find a FruitHistory
     * @example
     * // Get one FruitHistory
     * const fruitHistory = await prisma.fruitHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends fruitHistoryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, fruitHistoryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__fruitHistoryClient<$Result.GetResult<Prisma.$fruitHistoryPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more FruitHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fruitHistoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FruitHistories
     * const fruitHistories = await prisma.fruitHistory.findMany()
     * 
     * // Get first 10 FruitHistories
     * const fruitHistories = await prisma.fruitHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fruitHistoryWithIdOnly = await prisma.fruitHistory.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends fruitHistoryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, fruitHistoryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$fruitHistoryPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a FruitHistory.
     * @param {fruitHistoryCreateArgs} args - Arguments to create a FruitHistory.
     * @example
     * // Create one FruitHistory
     * const FruitHistory = await prisma.fruitHistory.create({
     *   data: {
     *     // ... data to create a FruitHistory
     *   }
     * })
     * 
    **/
    create<T extends fruitHistoryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, fruitHistoryCreateArgs<ExtArgs>>
    ): Prisma__fruitHistoryClient<$Result.GetResult<Prisma.$fruitHistoryPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many FruitHistories.
     *     @param {fruitHistoryCreateManyArgs} args - Arguments to create many FruitHistories.
     *     @example
     *     // Create many FruitHistories
     *     const fruitHistory = await prisma.fruitHistory.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends fruitHistoryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, fruitHistoryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FruitHistory.
     * @param {fruitHistoryDeleteArgs} args - Arguments to delete one FruitHistory.
     * @example
     * // Delete one FruitHistory
     * const FruitHistory = await prisma.fruitHistory.delete({
     *   where: {
     *     // ... filter to delete one FruitHistory
     *   }
     * })
     * 
    **/
    delete<T extends fruitHistoryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, fruitHistoryDeleteArgs<ExtArgs>>
    ): Prisma__fruitHistoryClient<$Result.GetResult<Prisma.$fruitHistoryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one FruitHistory.
     * @param {fruitHistoryUpdateArgs} args - Arguments to update one FruitHistory.
     * @example
     * // Update one FruitHistory
     * const fruitHistory = await prisma.fruitHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends fruitHistoryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, fruitHistoryUpdateArgs<ExtArgs>>
    ): Prisma__fruitHistoryClient<$Result.GetResult<Prisma.$fruitHistoryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more FruitHistories.
     * @param {fruitHistoryDeleteManyArgs} args - Arguments to filter FruitHistories to delete.
     * @example
     * // Delete a few FruitHistories
     * const { count } = await prisma.fruitHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends fruitHistoryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, fruitHistoryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FruitHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fruitHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FruitHistories
     * const fruitHistory = await prisma.fruitHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends fruitHistoryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, fruitHistoryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FruitHistory.
     * @param {fruitHistoryUpsertArgs} args - Arguments to update or create a FruitHistory.
     * @example
     * // Update or create a FruitHistory
     * const fruitHistory = await prisma.fruitHistory.upsert({
     *   create: {
     *     // ... data to create a FruitHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FruitHistory we want to update
     *   }
     * })
    **/
    upsert<T extends fruitHistoryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, fruitHistoryUpsertArgs<ExtArgs>>
    ): Prisma__fruitHistoryClient<$Result.GetResult<Prisma.$fruitHistoryPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of FruitHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fruitHistoryCountArgs} args - Arguments to filter FruitHistories to count.
     * @example
     * // Count the number of FruitHistories
     * const count = await prisma.fruitHistory.count({
     *   where: {
     *     // ... the filter for the FruitHistories we want to count
     *   }
     * })
    **/
    count<T extends fruitHistoryCountArgs>(
      args?: Subset<T, fruitHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FruitHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FruitHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FruitHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FruitHistoryAggregateArgs>(args: Subset<T, FruitHistoryAggregateArgs>): Prisma.PrismaPromise<GetFruitHistoryAggregateType<T>>

    /**
     * Group by FruitHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fruitHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends fruitHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: fruitHistoryGroupByArgs['orderBy'] }
        : { orderBy?: fruitHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, fruitHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFruitHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the fruitHistory model
   */
  readonly fields: fruitHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for fruitHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__fruitHistoryClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    fruitValue<T extends fruitHistory$fruitValueArgs<ExtArgs> = {}>(args?: Subset<T, fruitHistory$fruitValueArgs<ExtArgs>>): Prisma__fruitValueClient<$Result.GetResult<Prisma.$fruitValuePayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the fruitHistory model
   */ 
  interface fruitHistoryFieldRefs {
    readonly id: FieldRef<"fruitHistory", 'String'>
    readonly createAt: FieldRef<"fruitHistory", 'DateTime'>
    readonly updatedAt: FieldRef<"fruitHistory", 'DateTime'>
    readonly dateCapture: FieldRef<"fruitHistory", 'DateTime'>
    readonly valuWeight: FieldRef<"fruitHistory", 'Decimal'>
    readonly valueTotal: FieldRef<"fruitHistory", 'Decimal'>
    readonly fruitValueId: FieldRef<"fruitHistory", 'String'>
  }
    

  // Custom InputTypes

  /**
   * fruitHistory findUnique
   */
  export type fruitHistoryFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fruitHistory
     */
    select?: fruitHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: fruitHistoryInclude<ExtArgs> | null
    /**
     * Filter, which fruitHistory to fetch.
     */
    where: fruitHistoryWhereUniqueInput
  }


  /**
   * fruitHistory findUniqueOrThrow
   */
  export type fruitHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fruitHistory
     */
    select?: fruitHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: fruitHistoryInclude<ExtArgs> | null
    /**
     * Filter, which fruitHistory to fetch.
     */
    where: fruitHistoryWhereUniqueInput
  }


  /**
   * fruitHistory findFirst
   */
  export type fruitHistoryFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fruitHistory
     */
    select?: fruitHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: fruitHistoryInclude<ExtArgs> | null
    /**
     * Filter, which fruitHistory to fetch.
     */
    where?: fruitHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fruitHistories to fetch.
     */
    orderBy?: fruitHistoryOrderByWithRelationInput | fruitHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for fruitHistories.
     */
    cursor?: fruitHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fruitHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fruitHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of fruitHistories.
     */
    distinct?: FruitHistoryScalarFieldEnum | FruitHistoryScalarFieldEnum[]
  }


  /**
   * fruitHistory findFirstOrThrow
   */
  export type fruitHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fruitHistory
     */
    select?: fruitHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: fruitHistoryInclude<ExtArgs> | null
    /**
     * Filter, which fruitHistory to fetch.
     */
    where?: fruitHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fruitHistories to fetch.
     */
    orderBy?: fruitHistoryOrderByWithRelationInput | fruitHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for fruitHistories.
     */
    cursor?: fruitHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fruitHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fruitHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of fruitHistories.
     */
    distinct?: FruitHistoryScalarFieldEnum | FruitHistoryScalarFieldEnum[]
  }


  /**
   * fruitHistory findMany
   */
  export type fruitHistoryFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fruitHistory
     */
    select?: fruitHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: fruitHistoryInclude<ExtArgs> | null
    /**
     * Filter, which fruitHistories to fetch.
     */
    where?: fruitHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fruitHistories to fetch.
     */
    orderBy?: fruitHistoryOrderByWithRelationInput | fruitHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing fruitHistories.
     */
    cursor?: fruitHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fruitHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fruitHistories.
     */
    skip?: number
    distinct?: FruitHistoryScalarFieldEnum | FruitHistoryScalarFieldEnum[]
  }


  /**
   * fruitHistory create
   */
  export type fruitHistoryCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fruitHistory
     */
    select?: fruitHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: fruitHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a fruitHistory.
     */
    data: XOR<fruitHistoryCreateInput, fruitHistoryUncheckedCreateInput>
  }


  /**
   * fruitHistory createMany
   */
  export type fruitHistoryCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many fruitHistories.
     */
    data: fruitHistoryCreateManyInput | fruitHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * fruitHistory update
   */
  export type fruitHistoryUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fruitHistory
     */
    select?: fruitHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: fruitHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a fruitHistory.
     */
    data: XOR<fruitHistoryUpdateInput, fruitHistoryUncheckedUpdateInput>
    /**
     * Choose, which fruitHistory to update.
     */
    where: fruitHistoryWhereUniqueInput
  }


  /**
   * fruitHistory updateMany
   */
  export type fruitHistoryUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update fruitHistories.
     */
    data: XOR<fruitHistoryUpdateManyMutationInput, fruitHistoryUncheckedUpdateManyInput>
    /**
     * Filter which fruitHistories to update
     */
    where?: fruitHistoryWhereInput
  }


  /**
   * fruitHistory upsert
   */
  export type fruitHistoryUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fruitHistory
     */
    select?: fruitHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: fruitHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the fruitHistory to update in case it exists.
     */
    where: fruitHistoryWhereUniqueInput
    /**
     * In case the fruitHistory found by the `where` argument doesn't exist, create a new fruitHistory with this data.
     */
    create: XOR<fruitHistoryCreateInput, fruitHistoryUncheckedCreateInput>
    /**
     * In case the fruitHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<fruitHistoryUpdateInput, fruitHistoryUncheckedUpdateInput>
  }


  /**
   * fruitHistory delete
   */
  export type fruitHistoryDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fruitHistory
     */
    select?: fruitHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: fruitHistoryInclude<ExtArgs> | null
    /**
     * Filter which fruitHistory to delete.
     */
    where: fruitHistoryWhereUniqueInput
  }


  /**
   * fruitHistory deleteMany
   */
  export type fruitHistoryDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which fruitHistories to delete
     */
    where?: fruitHistoryWhereInput
  }


  /**
   * fruitHistory.fruitValue
   */
  export type fruitHistory$fruitValueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fruitValue
     */
    select?: fruitValueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: fruitValueInclude<ExtArgs> | null
    where?: fruitValueWhereInput
  }


  /**
   * fruitHistory without action
   */
  export type fruitHistoryDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fruitHistory
     */
    select?: fruitHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: fruitHistoryInclude<ExtArgs> | null
  }



  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    createAt: Date | null
    updatedAt: Date | null
    name: string | null
    description: string | null
    login: string | null
    password: string | null
    profileId: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    createAt: Date | null
    updatedAt: Date | null
    name: string | null
    description: string | null
    login: string | null
    password: string | null
    profileId: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    createAt: number
    updatedAt: number
    name: number
    description: number
    login: number
    password: number
    profileId: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    createAt?: true
    updatedAt?: true
    name?: true
    description?: true
    login?: true
    password?: true
    profileId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    createAt?: true
    updatedAt?: true
    name?: true
    description?: true
    login?: true
    password?: true
    profileId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    createAt?: true
    updatedAt?: true
    name?: true
    description?: true
    login?: true
    password?: true
    profileId?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type userGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    createAt: Date
    updatedAt: Date
    name: string
    description: string | null
    login: string
    password: string
    profileId: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createAt?: boolean
    updatedAt?: boolean
    name?: boolean
    description?: boolean
    login?: boolean
    password?: boolean
    profileId?: boolean
    profile?: boolean | user$profileArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type userSelectScalar = {
    id?: boolean
    createAt?: boolean
    updatedAt?: boolean
    name?: boolean
    description?: boolean
    login?: boolean
    password?: boolean
    profileId?: boolean
  }

  export type userInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    profile?: boolean | user$profileArgs<ExtArgs>
  }


  export type $userPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      profile: Prisma.$profilePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetResult<{
      id: string
      createAt: Date
      updatedAt: Date
      name: string
      description: string | null
      login: string
      password: string
      profileId: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<userFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends userFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends userFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends userFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends userCreateArgs<ExtArgs>>(
      args: SelectSubset<T, userCreateArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {userCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends userCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends userDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, userDeleteArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends userUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends userDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends userUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends userUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, userUpsertArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    profile<T extends user$profileArgs<ExtArgs> = {}>(args?: Subset<T, user$profileArgs<ExtArgs>>): Prisma__profileClient<$Result.GetResult<Prisma.$profilePayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the user model
   */ 
  interface userFieldRefs {
    readonly id: FieldRef<"user", 'String'>
    readonly createAt: FieldRef<"user", 'DateTime'>
    readonly updatedAt: FieldRef<"user", 'DateTime'>
    readonly name: FieldRef<"user", 'String'>
    readonly description: FieldRef<"user", 'String'>
    readonly login: FieldRef<"user", 'String'>
    readonly password: FieldRef<"user", 'String'>
    readonly profileId: FieldRef<"user", 'String'>
  }
    

  // Custom InputTypes

  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }


  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }


  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }


  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }


  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
  }


  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }


  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }


  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
  }


  /**
   * user.profile
   */
  export type user$profileArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profile
     */
    select?: profileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: profileInclude<ExtArgs> | null
    where?: profileWhereInput
  }


  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null
  }



  /**
   * Model profile
   */

  export type AggregateProfile = {
    _count: ProfileCountAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  export type ProfileMinAggregateOutputType = {
    id: string | null
    createAt: Date | null
    updatedAt: Date | null
    name: string | null
    key: string | null
  }

  export type ProfileMaxAggregateOutputType = {
    id: string | null
    createAt: Date | null
    updatedAt: Date | null
    name: string | null
    key: string | null
  }

  export type ProfileCountAggregateOutputType = {
    id: number
    createAt: number
    updatedAt: number
    name: number
    key: number
    _all: number
  }


  export type ProfileMinAggregateInputType = {
    id?: true
    createAt?: true
    updatedAt?: true
    name?: true
    key?: true
  }

  export type ProfileMaxAggregateInputType = {
    id?: true
    createAt?: true
    updatedAt?: true
    name?: true
    key?: true
  }

  export type ProfileCountAggregateInputType = {
    id?: true
    createAt?: true
    updatedAt?: true
    name?: true
    key?: true
    _all?: true
  }

  export type ProfileAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which profile to aggregate.
     */
    where?: profileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profiles to fetch.
     */
    orderBy?: profileOrderByWithRelationInput | profileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: profileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned profiles
    **/
    _count?: true | ProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfileMaxAggregateInputType
  }

  export type GetProfileAggregateType<T extends ProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfile[P]>
      : GetScalarType<T[P], AggregateProfile[P]>
  }




  export type profileGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: profileWhereInput
    orderBy?: profileOrderByWithAggregationInput | profileOrderByWithAggregationInput[]
    by: ProfileScalarFieldEnum[] | ProfileScalarFieldEnum
    having?: profileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfileCountAggregateInputType | true
    _min?: ProfileMinAggregateInputType
    _max?: ProfileMaxAggregateInputType
  }

  export type ProfileGroupByOutputType = {
    id: string
    createAt: Date
    updatedAt: Date
    name: string
    key: string
    _count: ProfileCountAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  type GetProfileGroupByPayload<T extends profileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfileGroupByOutputType[P]>
            : GetScalarType<T[P], ProfileGroupByOutputType[P]>
        }
      >
    >


  export type profileSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createAt?: boolean
    updatedAt?: boolean
    name?: boolean
    key?: boolean
    user?: boolean | profile$userArgs<ExtArgs>
    _count?: boolean | ProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type profileSelectScalar = {
    id?: boolean
    createAt?: boolean
    updatedAt?: boolean
    name?: boolean
    key?: boolean
  }

  export type profileInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    user?: boolean | profile$userArgs<ExtArgs>
    _count?: boolean | ProfileCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $profilePayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "profile"
    objects: {
      user: Prisma.$userPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: string
      createAt: Date
      updatedAt: Date
      name: string
      key: string
    }, ExtArgs["result"]["profile"]>
    composites: {}
  }


  type profileGetPayload<S extends boolean | null | undefined | profileDefaultArgs> = $Result.GetResult<Prisma.$profilePayload, S>

  type profileCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<profileFindManyArgs, 'select' | 'include'> & {
      select?: ProfileCountAggregateInputType | true
    }

  export interface profileDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['profile'], meta: { name: 'profile' } }
    /**
     * Find zero or one Profile that matches the filter.
     * @param {profileFindUniqueArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends profileFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, profileFindUniqueArgs<ExtArgs>>
    ): Prisma__profileClient<$Result.GetResult<Prisma.$profilePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Profile that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {profileFindUniqueOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends profileFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, profileFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__profileClient<$Result.GetResult<Prisma.$profilePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Profile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profileFindFirstArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends profileFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, profileFindFirstArgs<ExtArgs>>
    ): Prisma__profileClient<$Result.GetResult<Prisma.$profilePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Profile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profileFindFirstOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends profileFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, profileFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__profileClient<$Result.GetResult<Prisma.$profilePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profileFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profiles
     * const profiles = await prisma.profile.findMany()
     * 
     * // Get first 10 Profiles
     * const profiles = await prisma.profile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profileWithIdOnly = await prisma.profile.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends profileFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, profileFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$profilePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Profile.
     * @param {profileCreateArgs} args - Arguments to create a Profile.
     * @example
     * // Create one Profile
     * const Profile = await prisma.profile.create({
     *   data: {
     *     // ... data to create a Profile
     *   }
     * })
     * 
    **/
    create<T extends profileCreateArgs<ExtArgs>>(
      args: SelectSubset<T, profileCreateArgs<ExtArgs>>
    ): Prisma__profileClient<$Result.GetResult<Prisma.$profilePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Profiles.
     *     @param {profileCreateManyArgs} args - Arguments to create many Profiles.
     *     @example
     *     // Create many Profiles
     *     const profile = await prisma.profile.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends profileCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, profileCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Profile.
     * @param {profileDeleteArgs} args - Arguments to delete one Profile.
     * @example
     * // Delete one Profile
     * const Profile = await prisma.profile.delete({
     *   where: {
     *     // ... filter to delete one Profile
     *   }
     * })
     * 
    **/
    delete<T extends profileDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, profileDeleteArgs<ExtArgs>>
    ): Prisma__profileClient<$Result.GetResult<Prisma.$profilePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Profile.
     * @param {profileUpdateArgs} args - Arguments to update one Profile.
     * @example
     * // Update one Profile
     * const profile = await prisma.profile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends profileUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, profileUpdateArgs<ExtArgs>>
    ): Prisma__profileClient<$Result.GetResult<Prisma.$profilePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Profiles.
     * @param {profileDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends profileDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, profileDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends profileUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, profileUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Profile.
     * @param {profileUpsertArgs} args - Arguments to update or create a Profile.
     * @example
     * // Update or create a Profile
     * const profile = await prisma.profile.upsert({
     *   create: {
     *     // ... data to create a Profile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profile we want to update
     *   }
     * })
    **/
    upsert<T extends profileUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, profileUpsertArgs<ExtArgs>>
    ): Prisma__profileClient<$Result.GetResult<Prisma.$profilePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profileCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profile.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
    **/
    count<T extends profileCountArgs>(
      args?: Subset<T, profileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProfileAggregateArgs>(args: Subset<T, ProfileAggregateArgs>): Prisma.PrismaPromise<GetProfileAggregateType<T>>

    /**
     * Group by Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends profileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: profileGroupByArgs['orderBy'] }
        : { orderBy?: profileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, profileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the profile model
   */
  readonly fields: profileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for profile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__profileClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends profile$userArgs<ExtArgs> = {}>(args?: Subset<T, profile$userArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the profile model
   */ 
  interface profileFieldRefs {
    readonly id: FieldRef<"profile", 'String'>
    readonly createAt: FieldRef<"profile", 'DateTime'>
    readonly updatedAt: FieldRef<"profile", 'DateTime'>
    readonly name: FieldRef<"profile", 'String'>
    readonly key: FieldRef<"profile", 'String'>
  }
    

  // Custom InputTypes

  /**
   * profile findUnique
   */
  export type profileFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profile
     */
    select?: profileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: profileInclude<ExtArgs> | null
    /**
     * Filter, which profile to fetch.
     */
    where: profileWhereUniqueInput
  }


  /**
   * profile findUniqueOrThrow
   */
  export type profileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profile
     */
    select?: profileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: profileInclude<ExtArgs> | null
    /**
     * Filter, which profile to fetch.
     */
    where: profileWhereUniqueInput
  }


  /**
   * profile findFirst
   */
  export type profileFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profile
     */
    select?: profileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: profileInclude<ExtArgs> | null
    /**
     * Filter, which profile to fetch.
     */
    where?: profileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profiles to fetch.
     */
    orderBy?: profileOrderByWithRelationInput | profileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for profiles.
     */
    cursor?: profileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }


  /**
   * profile findFirstOrThrow
   */
  export type profileFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profile
     */
    select?: profileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: profileInclude<ExtArgs> | null
    /**
     * Filter, which profile to fetch.
     */
    where?: profileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profiles to fetch.
     */
    orderBy?: profileOrderByWithRelationInput | profileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for profiles.
     */
    cursor?: profileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }


  /**
   * profile findMany
   */
  export type profileFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profile
     */
    select?: profileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: profileInclude<ExtArgs> | null
    /**
     * Filter, which profiles to fetch.
     */
    where?: profileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profiles to fetch.
     */
    orderBy?: profileOrderByWithRelationInput | profileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing profiles.
     */
    cursor?: profileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profiles.
     */
    skip?: number
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }


  /**
   * profile create
   */
  export type profileCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profile
     */
    select?: profileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: profileInclude<ExtArgs> | null
    /**
     * The data needed to create a profile.
     */
    data: XOR<profileCreateInput, profileUncheckedCreateInput>
  }


  /**
   * profile createMany
   */
  export type profileCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many profiles.
     */
    data: profileCreateManyInput | profileCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * profile update
   */
  export type profileUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profile
     */
    select?: profileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: profileInclude<ExtArgs> | null
    /**
     * The data needed to update a profile.
     */
    data: XOR<profileUpdateInput, profileUncheckedUpdateInput>
    /**
     * Choose, which profile to update.
     */
    where: profileWhereUniqueInput
  }


  /**
   * profile updateMany
   */
  export type profileUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update profiles.
     */
    data: XOR<profileUpdateManyMutationInput, profileUncheckedUpdateManyInput>
    /**
     * Filter which profiles to update
     */
    where?: profileWhereInput
  }


  /**
   * profile upsert
   */
  export type profileUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profile
     */
    select?: profileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: profileInclude<ExtArgs> | null
    /**
     * The filter to search for the profile to update in case it exists.
     */
    where: profileWhereUniqueInput
    /**
     * In case the profile found by the `where` argument doesn't exist, create a new profile with this data.
     */
    create: XOR<profileCreateInput, profileUncheckedCreateInput>
    /**
     * In case the profile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<profileUpdateInput, profileUncheckedUpdateInput>
  }


  /**
   * profile delete
   */
  export type profileDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profile
     */
    select?: profileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: profileInclude<ExtArgs> | null
    /**
     * Filter which profile to delete.
     */
    where: profileWhereUniqueInput
  }


  /**
   * profile deleteMany
   */
  export type profileDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which profiles to delete
     */
    where?: profileWhereInput
  }


  /**
   * profile.user
   */
  export type profile$userArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null
    where?: userWhereInput
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    cursor?: userWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * profile without action
   */
  export type profileDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profile
     */
    select?: profileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: profileInclude<ExtArgs> | null
  }



  /**
   * Model balance
   */

  export type AggregateBalance = {
    _count: BalanceCountAggregateOutputType | null
    _min: BalanceMinAggregateOutputType | null
    _max: BalanceMaxAggregateOutputType | null
  }

  export type BalanceMinAggregateOutputType = {
    id: string | null
    createAt: Date | null
    updatedAt: Date | null
    nome: string | null
    ip: string | null
    local: string | null
  }

  export type BalanceMaxAggregateOutputType = {
    id: string | null
    createAt: Date | null
    updatedAt: Date | null
    nome: string | null
    ip: string | null
    local: string | null
  }

  export type BalanceCountAggregateOutputType = {
    id: number
    createAt: number
    updatedAt: number
    nome: number
    ip: number
    local: number
    _all: number
  }


  export type BalanceMinAggregateInputType = {
    id?: true
    createAt?: true
    updatedAt?: true
    nome?: true
    ip?: true
    local?: true
  }

  export type BalanceMaxAggregateInputType = {
    id?: true
    createAt?: true
    updatedAt?: true
    nome?: true
    ip?: true
    local?: true
  }

  export type BalanceCountAggregateInputType = {
    id?: true
    createAt?: true
    updatedAt?: true
    nome?: true
    ip?: true
    local?: true
    _all?: true
  }

  export type BalanceAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which balance to aggregate.
     */
    where?: balanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of balances to fetch.
     */
    orderBy?: balanceOrderByWithRelationInput | balanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: balanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` balances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` balances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned balances
    **/
    _count?: true | BalanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BalanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BalanceMaxAggregateInputType
  }

  export type GetBalanceAggregateType<T extends BalanceAggregateArgs> = {
        [P in keyof T & keyof AggregateBalance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBalance[P]>
      : GetScalarType<T[P], AggregateBalance[P]>
  }




  export type balanceGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: balanceWhereInput
    orderBy?: balanceOrderByWithAggregationInput | balanceOrderByWithAggregationInput[]
    by: BalanceScalarFieldEnum[] | BalanceScalarFieldEnum
    having?: balanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BalanceCountAggregateInputType | true
    _min?: BalanceMinAggregateInputType
    _max?: BalanceMaxAggregateInputType
  }

  export type BalanceGroupByOutputType = {
    id: string
    createAt: Date
    updatedAt: Date
    nome: string
    ip: string
    local: string
    _count: BalanceCountAggregateOutputType | null
    _min: BalanceMinAggregateOutputType | null
    _max: BalanceMaxAggregateOutputType | null
  }

  type GetBalanceGroupByPayload<T extends balanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BalanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BalanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BalanceGroupByOutputType[P]>
            : GetScalarType<T[P], BalanceGroupByOutputType[P]>
        }
      >
    >


  export type balanceSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createAt?: boolean
    updatedAt?: boolean
    nome?: boolean
    ip?: boolean
    local?: boolean
  }, ExtArgs["result"]["balance"]>

  export type balanceSelectScalar = {
    id?: boolean
    createAt?: boolean
    updatedAt?: boolean
    nome?: boolean
    ip?: boolean
    local?: boolean
  }


  export type $balancePayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "balance"
    objects: {}
    scalars: $Extensions.GetResult<{
      id: string
      createAt: Date
      updatedAt: Date
      nome: string
      ip: string
      local: string
    }, ExtArgs["result"]["balance"]>
    composites: {}
  }


  type balanceGetPayload<S extends boolean | null | undefined | balanceDefaultArgs> = $Result.GetResult<Prisma.$balancePayload, S>

  type balanceCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<balanceFindManyArgs, 'select' | 'include'> & {
      select?: BalanceCountAggregateInputType | true
    }

  export interface balanceDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['balance'], meta: { name: 'balance' } }
    /**
     * Find zero or one Balance that matches the filter.
     * @param {balanceFindUniqueArgs} args - Arguments to find a Balance
     * @example
     * // Get one Balance
     * const balance = await prisma.balance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends balanceFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, balanceFindUniqueArgs<ExtArgs>>
    ): Prisma__balanceClient<$Result.GetResult<Prisma.$balancePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Balance that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {balanceFindUniqueOrThrowArgs} args - Arguments to find a Balance
     * @example
     * // Get one Balance
     * const balance = await prisma.balance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends balanceFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, balanceFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__balanceClient<$Result.GetResult<Prisma.$balancePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Balance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {balanceFindFirstArgs} args - Arguments to find a Balance
     * @example
     * // Get one Balance
     * const balance = await prisma.balance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends balanceFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, balanceFindFirstArgs<ExtArgs>>
    ): Prisma__balanceClient<$Result.GetResult<Prisma.$balancePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Balance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {balanceFindFirstOrThrowArgs} args - Arguments to find a Balance
     * @example
     * // Get one Balance
     * const balance = await prisma.balance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends balanceFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, balanceFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__balanceClient<$Result.GetResult<Prisma.$balancePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Balances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {balanceFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Balances
     * const balances = await prisma.balance.findMany()
     * 
     * // Get first 10 Balances
     * const balances = await prisma.balance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const balanceWithIdOnly = await prisma.balance.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends balanceFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, balanceFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$balancePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Balance.
     * @param {balanceCreateArgs} args - Arguments to create a Balance.
     * @example
     * // Create one Balance
     * const Balance = await prisma.balance.create({
     *   data: {
     *     // ... data to create a Balance
     *   }
     * })
     * 
    **/
    create<T extends balanceCreateArgs<ExtArgs>>(
      args: SelectSubset<T, balanceCreateArgs<ExtArgs>>
    ): Prisma__balanceClient<$Result.GetResult<Prisma.$balancePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Balances.
     *     @param {balanceCreateManyArgs} args - Arguments to create many Balances.
     *     @example
     *     // Create many Balances
     *     const balance = await prisma.balance.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends balanceCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, balanceCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Balance.
     * @param {balanceDeleteArgs} args - Arguments to delete one Balance.
     * @example
     * // Delete one Balance
     * const Balance = await prisma.balance.delete({
     *   where: {
     *     // ... filter to delete one Balance
     *   }
     * })
     * 
    **/
    delete<T extends balanceDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, balanceDeleteArgs<ExtArgs>>
    ): Prisma__balanceClient<$Result.GetResult<Prisma.$balancePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Balance.
     * @param {balanceUpdateArgs} args - Arguments to update one Balance.
     * @example
     * // Update one Balance
     * const balance = await prisma.balance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends balanceUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, balanceUpdateArgs<ExtArgs>>
    ): Prisma__balanceClient<$Result.GetResult<Prisma.$balancePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Balances.
     * @param {balanceDeleteManyArgs} args - Arguments to filter Balances to delete.
     * @example
     * // Delete a few Balances
     * const { count } = await prisma.balance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends balanceDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, balanceDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Balances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {balanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Balances
     * const balance = await prisma.balance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends balanceUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, balanceUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Balance.
     * @param {balanceUpsertArgs} args - Arguments to update or create a Balance.
     * @example
     * // Update or create a Balance
     * const balance = await prisma.balance.upsert({
     *   create: {
     *     // ... data to create a Balance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Balance we want to update
     *   }
     * })
    **/
    upsert<T extends balanceUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, balanceUpsertArgs<ExtArgs>>
    ): Prisma__balanceClient<$Result.GetResult<Prisma.$balancePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Balances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {balanceCountArgs} args - Arguments to filter Balances to count.
     * @example
     * // Count the number of Balances
     * const count = await prisma.balance.count({
     *   where: {
     *     // ... the filter for the Balances we want to count
     *   }
     * })
    **/
    count<T extends balanceCountArgs>(
      args?: Subset<T, balanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BalanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Balance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BalanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BalanceAggregateArgs>(args: Subset<T, BalanceAggregateArgs>): Prisma.PrismaPromise<GetBalanceAggregateType<T>>

    /**
     * Group by Balance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {balanceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends balanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: balanceGroupByArgs['orderBy'] }
        : { orderBy?: balanceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, balanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBalanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the balance model
   */
  readonly fields: balanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for balance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__balanceClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the balance model
   */ 
  interface balanceFieldRefs {
    readonly id: FieldRef<"balance", 'String'>
    readonly createAt: FieldRef<"balance", 'DateTime'>
    readonly updatedAt: FieldRef<"balance", 'DateTime'>
    readonly nome: FieldRef<"balance", 'String'>
    readonly ip: FieldRef<"balance", 'String'>
    readonly local: FieldRef<"balance", 'String'>
  }
    

  // Custom InputTypes

  /**
   * balance findUnique
   */
  export type balanceFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the balance
     */
    select?: balanceSelect<ExtArgs> | null
    /**
     * Filter, which balance to fetch.
     */
    where: balanceWhereUniqueInput
  }


  /**
   * balance findUniqueOrThrow
   */
  export type balanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the balance
     */
    select?: balanceSelect<ExtArgs> | null
    /**
     * Filter, which balance to fetch.
     */
    where: balanceWhereUniqueInput
  }


  /**
   * balance findFirst
   */
  export type balanceFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the balance
     */
    select?: balanceSelect<ExtArgs> | null
    /**
     * Filter, which balance to fetch.
     */
    where?: balanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of balances to fetch.
     */
    orderBy?: balanceOrderByWithRelationInput | balanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for balances.
     */
    cursor?: balanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` balances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` balances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of balances.
     */
    distinct?: BalanceScalarFieldEnum | BalanceScalarFieldEnum[]
  }


  /**
   * balance findFirstOrThrow
   */
  export type balanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the balance
     */
    select?: balanceSelect<ExtArgs> | null
    /**
     * Filter, which balance to fetch.
     */
    where?: balanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of balances to fetch.
     */
    orderBy?: balanceOrderByWithRelationInput | balanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for balances.
     */
    cursor?: balanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` balances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` balances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of balances.
     */
    distinct?: BalanceScalarFieldEnum | BalanceScalarFieldEnum[]
  }


  /**
   * balance findMany
   */
  export type balanceFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the balance
     */
    select?: balanceSelect<ExtArgs> | null
    /**
     * Filter, which balances to fetch.
     */
    where?: balanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of balances to fetch.
     */
    orderBy?: balanceOrderByWithRelationInput | balanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing balances.
     */
    cursor?: balanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` balances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` balances.
     */
    skip?: number
    distinct?: BalanceScalarFieldEnum | BalanceScalarFieldEnum[]
  }


  /**
   * balance create
   */
  export type balanceCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the balance
     */
    select?: balanceSelect<ExtArgs> | null
    /**
     * The data needed to create a balance.
     */
    data: XOR<balanceCreateInput, balanceUncheckedCreateInput>
  }


  /**
   * balance createMany
   */
  export type balanceCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many balances.
     */
    data: balanceCreateManyInput | balanceCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * balance update
   */
  export type balanceUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the balance
     */
    select?: balanceSelect<ExtArgs> | null
    /**
     * The data needed to update a balance.
     */
    data: XOR<balanceUpdateInput, balanceUncheckedUpdateInput>
    /**
     * Choose, which balance to update.
     */
    where: balanceWhereUniqueInput
  }


  /**
   * balance updateMany
   */
  export type balanceUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update balances.
     */
    data: XOR<balanceUpdateManyMutationInput, balanceUncheckedUpdateManyInput>
    /**
     * Filter which balances to update
     */
    where?: balanceWhereInput
  }


  /**
   * balance upsert
   */
  export type balanceUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the balance
     */
    select?: balanceSelect<ExtArgs> | null
    /**
     * The filter to search for the balance to update in case it exists.
     */
    where: balanceWhereUniqueInput
    /**
     * In case the balance found by the `where` argument doesn't exist, create a new balance with this data.
     */
    create: XOR<balanceCreateInput, balanceUncheckedCreateInput>
    /**
     * In case the balance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<balanceUpdateInput, balanceUncheckedUpdateInput>
  }


  /**
   * balance delete
   */
  export type balanceDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the balance
     */
    select?: balanceSelect<ExtArgs> | null
    /**
     * Filter which balance to delete.
     */
    where: balanceWhereUniqueInput
  }


  /**
   * balance deleteMany
   */
  export type balanceDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which balances to delete
     */
    where?: balanceWhereInput
  }


  /**
   * balance without action
   */
  export type balanceDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the balance
     */
    select?: balanceSelect<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const FruitClassScalarFieldEnum: {
    id: 'id',
    createAt: 'createAt',
    updatedAt: 'updatedAt',
    name: 'name',
    description: 'description',
    fatherId: 'fatherId'
  };

  export type FruitClassScalarFieldEnum = (typeof FruitClassScalarFieldEnum)[keyof typeof FruitClassScalarFieldEnum]


  export const FruitTrainingScalarFieldEnum: {
    id: 'id',
    createAt: 'createAt',
    updatedAt: 'updatedAt',
    img: 'img',
    date: 'date',
    fruitClassId: 'fruitClassId'
  };

  export type FruitTrainingScalarFieldEnum = (typeof FruitTrainingScalarFieldEnum)[keyof typeof FruitTrainingScalarFieldEnum]


  export const FruitNameScalarFieldEnum: {
    id: 'id',
    createAt: 'createAt',
    updatedAt: 'updatedAt',
    name: 'name',
    fruitClassId: 'fruitClassId'
  };

  export type FruitNameScalarFieldEnum = (typeof FruitNameScalarFieldEnum)[keyof typeof FruitNameScalarFieldEnum]


  export const FruitValueScalarFieldEnum: {
    id: 'id',
    createAt: 'createAt',
    updatedAt: 'updatedAt',
    description: 'description',
    valueUnid: 'valueUnid',
    date: 'date',
    fruitNameId: 'fruitNameId'
  };

  export type FruitValueScalarFieldEnum = (typeof FruitValueScalarFieldEnum)[keyof typeof FruitValueScalarFieldEnum]


  export const FruitHistoryScalarFieldEnum: {
    id: 'id',
    createAt: 'createAt',
    updatedAt: 'updatedAt',
    dateCapture: 'dateCapture',
    valuWeight: 'valuWeight',
    valueTotal: 'valueTotal',
    fruitValueId: 'fruitValueId'
  };

  export type FruitHistoryScalarFieldEnum = (typeof FruitHistoryScalarFieldEnum)[keyof typeof FruitHistoryScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    createAt: 'createAt',
    updatedAt: 'updatedAt',
    name: 'name',
    description: 'description',
    login: 'login',
    password: 'password',
    profileId: 'profileId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProfileScalarFieldEnum: {
    id: 'id',
    createAt: 'createAt',
    updatedAt: 'updatedAt',
    name: 'name',
    key: 'key'
  };

  export type ProfileScalarFieldEnum = (typeof ProfileScalarFieldEnum)[keyof typeof ProfileScalarFieldEnum]


  export const BalanceScalarFieldEnum: {
    id: 'id',
    createAt: 'createAt',
    updatedAt: 'updatedAt',
    nome: 'nome',
    ip: 'ip',
    local: 'local'
  };

  export type BalanceScalarFieldEnum = (typeof BalanceScalarFieldEnum)[keyof typeof BalanceScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type fruitClassWhereInput = {
    AND?: fruitClassWhereInput | fruitClassWhereInput[]
    OR?: fruitClassWhereInput[]
    NOT?: fruitClassWhereInput | fruitClassWhereInput[]
    id?: StringFilter<"fruitClass"> | string
    createAt?: DateTimeFilter<"fruitClass"> | Date | string
    updatedAt?: DateTimeFilter<"fruitClass"> | Date | string
    name?: StringFilter<"fruitClass"> | string
    description?: StringFilter<"fruitClass"> | string
    fatherId?: StringNullableFilter<"fruitClass"> | string | null
    father?: XOR<FruitClassNullableRelationFilter, fruitClassWhereInput> | null
    child?: FruitClassListRelationFilter
    fruitName?: FruitNameListRelationFilter
    fruitTraining?: FruitTrainingListRelationFilter
  }

  export type fruitClassOrderByWithRelationInput = {
    id?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    description?: SortOrder
    fatherId?: SortOrderInput | SortOrder
    father?: fruitClassOrderByWithRelationInput
    child?: fruitClassOrderByRelationAggregateInput
    fruitName?: fruitNameOrderByRelationAggregateInput
    fruitTraining?: fruitTrainingOrderByRelationAggregateInput
  }

  export type fruitClassWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: fruitClassWhereInput | fruitClassWhereInput[]
    OR?: fruitClassWhereInput[]
    NOT?: fruitClassWhereInput | fruitClassWhereInput[]
    createAt?: DateTimeFilter<"fruitClass"> | Date | string
    updatedAt?: DateTimeFilter<"fruitClass"> | Date | string
    description?: StringFilter<"fruitClass"> | string
    fatherId?: StringNullableFilter<"fruitClass"> | string | null
    father?: XOR<FruitClassNullableRelationFilter, fruitClassWhereInput> | null
    child?: FruitClassListRelationFilter
    fruitName?: FruitNameListRelationFilter
    fruitTraining?: FruitTrainingListRelationFilter
  }, "id" | "name">

  export type fruitClassOrderByWithAggregationInput = {
    id?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    description?: SortOrder
    fatherId?: SortOrderInput | SortOrder
    _count?: fruitClassCountOrderByAggregateInput
    _max?: fruitClassMaxOrderByAggregateInput
    _min?: fruitClassMinOrderByAggregateInput
  }

  export type fruitClassScalarWhereWithAggregatesInput = {
    AND?: fruitClassScalarWhereWithAggregatesInput | fruitClassScalarWhereWithAggregatesInput[]
    OR?: fruitClassScalarWhereWithAggregatesInput[]
    NOT?: fruitClassScalarWhereWithAggregatesInput | fruitClassScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"fruitClass"> | string
    createAt?: DateTimeWithAggregatesFilter<"fruitClass"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"fruitClass"> | Date | string
    name?: StringWithAggregatesFilter<"fruitClass"> | string
    description?: StringWithAggregatesFilter<"fruitClass"> | string
    fatherId?: StringNullableWithAggregatesFilter<"fruitClass"> | string | null
  }

  export type fruitTrainingWhereInput = {
    AND?: fruitTrainingWhereInput | fruitTrainingWhereInput[]
    OR?: fruitTrainingWhereInput[]
    NOT?: fruitTrainingWhereInput | fruitTrainingWhereInput[]
    id?: StringFilter<"fruitTraining"> | string
    createAt?: DateTimeFilter<"fruitTraining"> | Date | string
    updatedAt?: DateTimeFilter<"fruitTraining"> | Date | string
    img?: StringFilter<"fruitTraining"> | string
    date?: DateTimeFilter<"fruitTraining"> | Date | string
    fruitClassId?: StringFilter<"fruitTraining"> | string
    fruitClass?: XOR<FruitClassNullableRelationFilter, fruitClassWhereInput> | null
  }

  export type fruitTrainingOrderByWithRelationInput = {
    id?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
    img?: SortOrder
    date?: SortOrder
    fruitClassId?: SortOrder
    fruitClass?: fruitClassOrderByWithRelationInput
  }

  export type fruitTrainingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: fruitTrainingWhereInput | fruitTrainingWhereInput[]
    OR?: fruitTrainingWhereInput[]
    NOT?: fruitTrainingWhereInput | fruitTrainingWhereInput[]
    createAt?: DateTimeFilter<"fruitTraining"> | Date | string
    updatedAt?: DateTimeFilter<"fruitTraining"> | Date | string
    img?: StringFilter<"fruitTraining"> | string
    date?: DateTimeFilter<"fruitTraining"> | Date | string
    fruitClassId?: StringFilter<"fruitTraining"> | string
    fruitClass?: XOR<FruitClassNullableRelationFilter, fruitClassWhereInput> | null
  }, "id">

  export type fruitTrainingOrderByWithAggregationInput = {
    id?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
    img?: SortOrder
    date?: SortOrder
    fruitClassId?: SortOrder
    _count?: fruitTrainingCountOrderByAggregateInput
    _max?: fruitTrainingMaxOrderByAggregateInput
    _min?: fruitTrainingMinOrderByAggregateInput
  }

  export type fruitTrainingScalarWhereWithAggregatesInput = {
    AND?: fruitTrainingScalarWhereWithAggregatesInput | fruitTrainingScalarWhereWithAggregatesInput[]
    OR?: fruitTrainingScalarWhereWithAggregatesInput[]
    NOT?: fruitTrainingScalarWhereWithAggregatesInput | fruitTrainingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"fruitTraining"> | string
    createAt?: DateTimeWithAggregatesFilter<"fruitTraining"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"fruitTraining"> | Date | string
    img?: StringWithAggregatesFilter<"fruitTraining"> | string
    date?: DateTimeWithAggregatesFilter<"fruitTraining"> | Date | string
    fruitClassId?: StringWithAggregatesFilter<"fruitTraining"> | string
  }

  export type fruitNameWhereInput = {
    AND?: fruitNameWhereInput | fruitNameWhereInput[]
    OR?: fruitNameWhereInput[]
    NOT?: fruitNameWhereInput | fruitNameWhereInput[]
    id?: StringFilter<"fruitName"> | string
    createAt?: DateTimeFilter<"fruitName"> | Date | string
    updatedAt?: DateTimeFilter<"fruitName"> | Date | string
    name?: StringFilter<"fruitName"> | string
    fruitClassId?: StringFilter<"fruitName"> | string
    fruitClass?: XOR<FruitClassNullableRelationFilter, fruitClassWhereInput> | null
    fruitValue?: FruitValueListRelationFilter
  }

  export type fruitNameOrderByWithRelationInput = {
    id?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    fruitClassId?: SortOrder
    fruitClass?: fruitClassOrderByWithRelationInput
    fruitValue?: fruitValueOrderByRelationAggregateInput
  }

  export type fruitNameWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: fruitNameWhereInput | fruitNameWhereInput[]
    OR?: fruitNameWhereInput[]
    NOT?: fruitNameWhereInput | fruitNameWhereInput[]
    createAt?: DateTimeFilter<"fruitName"> | Date | string
    updatedAt?: DateTimeFilter<"fruitName"> | Date | string
    name?: StringFilter<"fruitName"> | string
    fruitClassId?: StringFilter<"fruitName"> | string
    fruitClass?: XOR<FruitClassNullableRelationFilter, fruitClassWhereInput> | null
    fruitValue?: FruitValueListRelationFilter
  }, "id">

  export type fruitNameOrderByWithAggregationInput = {
    id?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    fruitClassId?: SortOrder
    _count?: fruitNameCountOrderByAggregateInput
    _max?: fruitNameMaxOrderByAggregateInput
    _min?: fruitNameMinOrderByAggregateInput
  }

  export type fruitNameScalarWhereWithAggregatesInput = {
    AND?: fruitNameScalarWhereWithAggregatesInput | fruitNameScalarWhereWithAggregatesInput[]
    OR?: fruitNameScalarWhereWithAggregatesInput[]
    NOT?: fruitNameScalarWhereWithAggregatesInput | fruitNameScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"fruitName"> | string
    createAt?: DateTimeWithAggregatesFilter<"fruitName"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"fruitName"> | Date | string
    name?: StringWithAggregatesFilter<"fruitName"> | string
    fruitClassId?: StringWithAggregatesFilter<"fruitName"> | string
  }

  export type fruitValueWhereInput = {
    AND?: fruitValueWhereInput | fruitValueWhereInput[]
    OR?: fruitValueWhereInput[]
    NOT?: fruitValueWhereInput | fruitValueWhereInput[]
    id?: StringFilter<"fruitValue"> | string
    createAt?: DateTimeFilter<"fruitValue"> | Date | string
    updatedAt?: DateTimeFilter<"fruitValue"> | Date | string
    description?: StringFilter<"fruitValue"> | string
    valueUnid?: DecimalFilter<"fruitValue"> | Decimal | DecimalJsLike | number | string
    date?: DateTimeFilter<"fruitValue"> | Date | string
    fruitNameId?: StringFilter<"fruitValue"> | string
    fruitName?: XOR<FruitNameNullableRelationFilter, fruitNameWhereInput> | null
    fruitHistory?: FruitHistoryListRelationFilter
  }

  export type fruitValueOrderByWithRelationInput = {
    id?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
    description?: SortOrder
    valueUnid?: SortOrder
    date?: SortOrder
    fruitNameId?: SortOrder
    fruitName?: fruitNameOrderByWithRelationInput
    fruitHistory?: fruitHistoryOrderByRelationAggregateInput
  }

  export type fruitValueWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: fruitValueWhereInput | fruitValueWhereInput[]
    OR?: fruitValueWhereInput[]
    NOT?: fruitValueWhereInput | fruitValueWhereInput[]
    createAt?: DateTimeFilter<"fruitValue"> | Date | string
    updatedAt?: DateTimeFilter<"fruitValue"> | Date | string
    description?: StringFilter<"fruitValue"> | string
    valueUnid?: DecimalFilter<"fruitValue"> | Decimal | DecimalJsLike | number | string
    date?: DateTimeFilter<"fruitValue"> | Date | string
    fruitNameId?: StringFilter<"fruitValue"> | string
    fruitName?: XOR<FruitNameNullableRelationFilter, fruitNameWhereInput> | null
    fruitHistory?: FruitHistoryListRelationFilter
  }, "id">

  export type fruitValueOrderByWithAggregationInput = {
    id?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
    description?: SortOrder
    valueUnid?: SortOrder
    date?: SortOrder
    fruitNameId?: SortOrder
    _count?: fruitValueCountOrderByAggregateInput
    _avg?: fruitValueAvgOrderByAggregateInput
    _max?: fruitValueMaxOrderByAggregateInput
    _min?: fruitValueMinOrderByAggregateInput
    _sum?: fruitValueSumOrderByAggregateInput
  }

  export type fruitValueScalarWhereWithAggregatesInput = {
    AND?: fruitValueScalarWhereWithAggregatesInput | fruitValueScalarWhereWithAggregatesInput[]
    OR?: fruitValueScalarWhereWithAggregatesInput[]
    NOT?: fruitValueScalarWhereWithAggregatesInput | fruitValueScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"fruitValue"> | string
    createAt?: DateTimeWithAggregatesFilter<"fruitValue"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"fruitValue"> | Date | string
    description?: StringWithAggregatesFilter<"fruitValue"> | string
    valueUnid?: DecimalWithAggregatesFilter<"fruitValue"> | Decimal | DecimalJsLike | number | string
    date?: DateTimeWithAggregatesFilter<"fruitValue"> | Date | string
    fruitNameId?: StringWithAggregatesFilter<"fruitValue"> | string
  }

  export type fruitHistoryWhereInput = {
    AND?: fruitHistoryWhereInput | fruitHistoryWhereInput[]
    OR?: fruitHistoryWhereInput[]
    NOT?: fruitHistoryWhereInput | fruitHistoryWhereInput[]
    id?: StringFilter<"fruitHistory"> | string
    createAt?: DateTimeFilter<"fruitHistory"> | Date | string
    updatedAt?: DateTimeFilter<"fruitHistory"> | Date | string
    dateCapture?: DateTimeFilter<"fruitHistory"> | Date | string
    valuWeight?: DecimalFilter<"fruitHistory"> | Decimal | DecimalJsLike | number | string
    valueTotal?: DecimalFilter<"fruitHistory"> | Decimal | DecimalJsLike | number | string
    fruitValueId?: StringFilter<"fruitHistory"> | string
    fruitValue?: XOR<FruitValueNullableRelationFilter, fruitValueWhereInput> | null
  }

  export type fruitHistoryOrderByWithRelationInput = {
    id?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
    dateCapture?: SortOrder
    valuWeight?: SortOrder
    valueTotal?: SortOrder
    fruitValueId?: SortOrder
    fruitValue?: fruitValueOrderByWithRelationInput
  }

  export type fruitHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: fruitHistoryWhereInput | fruitHistoryWhereInput[]
    OR?: fruitHistoryWhereInput[]
    NOT?: fruitHistoryWhereInput | fruitHistoryWhereInput[]
    createAt?: DateTimeFilter<"fruitHistory"> | Date | string
    updatedAt?: DateTimeFilter<"fruitHistory"> | Date | string
    dateCapture?: DateTimeFilter<"fruitHistory"> | Date | string
    valuWeight?: DecimalFilter<"fruitHistory"> | Decimal | DecimalJsLike | number | string
    valueTotal?: DecimalFilter<"fruitHistory"> | Decimal | DecimalJsLike | number | string
    fruitValueId?: StringFilter<"fruitHistory"> | string
    fruitValue?: XOR<FruitValueNullableRelationFilter, fruitValueWhereInput> | null
  }, "id">

  export type fruitHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
    dateCapture?: SortOrder
    valuWeight?: SortOrder
    valueTotal?: SortOrder
    fruitValueId?: SortOrder
    _count?: fruitHistoryCountOrderByAggregateInput
    _avg?: fruitHistoryAvgOrderByAggregateInput
    _max?: fruitHistoryMaxOrderByAggregateInput
    _min?: fruitHistoryMinOrderByAggregateInput
    _sum?: fruitHistorySumOrderByAggregateInput
  }

  export type fruitHistoryScalarWhereWithAggregatesInput = {
    AND?: fruitHistoryScalarWhereWithAggregatesInput | fruitHistoryScalarWhereWithAggregatesInput[]
    OR?: fruitHistoryScalarWhereWithAggregatesInput[]
    NOT?: fruitHistoryScalarWhereWithAggregatesInput | fruitHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"fruitHistory"> | string
    createAt?: DateTimeWithAggregatesFilter<"fruitHistory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"fruitHistory"> | Date | string
    dateCapture?: DateTimeWithAggregatesFilter<"fruitHistory"> | Date | string
    valuWeight?: DecimalWithAggregatesFilter<"fruitHistory"> | Decimal | DecimalJsLike | number | string
    valueTotal?: DecimalWithAggregatesFilter<"fruitHistory"> | Decimal | DecimalJsLike | number | string
    fruitValueId?: StringWithAggregatesFilter<"fruitHistory"> | string
  }

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    id?: StringFilter<"user"> | string
    createAt?: DateTimeFilter<"user"> | Date | string
    updatedAt?: DateTimeFilter<"user"> | Date | string
    name?: StringFilter<"user"> | string
    description?: StringNullableFilter<"user"> | string | null
    login?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    profileId?: StringNullableFilter<"user"> | string | null
    profile?: XOR<ProfileNullableRelationFilter, profileWhereInput> | null
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    login?: SortOrder
    password?: SortOrder
    profileId?: SortOrderInput | SortOrder
    profile?: profileOrderByWithRelationInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    login?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    createAt?: DateTimeFilter<"user"> | Date | string
    updatedAt?: DateTimeFilter<"user"> | Date | string
    name?: StringFilter<"user"> | string
    description?: StringNullableFilter<"user"> | string | null
    password?: StringFilter<"user"> | string
    profileId?: StringNullableFilter<"user"> | string | null
    profile?: XOR<ProfileNullableRelationFilter, profileWhereInput> | null
  }, "id" | "login">

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    login?: SortOrder
    password?: SortOrder
    profileId?: SortOrderInput | SortOrder
    _count?: userCountOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"user"> | string
    createAt?: DateTimeWithAggregatesFilter<"user"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"user"> | Date | string
    name?: StringWithAggregatesFilter<"user"> | string
    description?: StringNullableWithAggregatesFilter<"user"> | string | null
    login?: StringWithAggregatesFilter<"user"> | string
    password?: StringWithAggregatesFilter<"user"> | string
    profileId?: StringNullableWithAggregatesFilter<"user"> | string | null
  }

  export type profileWhereInput = {
    AND?: profileWhereInput | profileWhereInput[]
    OR?: profileWhereInput[]
    NOT?: profileWhereInput | profileWhereInput[]
    id?: StringFilter<"profile"> | string
    createAt?: DateTimeFilter<"profile"> | Date | string
    updatedAt?: DateTimeFilter<"profile"> | Date | string
    name?: StringFilter<"profile"> | string
    key?: StringFilter<"profile"> | string
    user?: UserListRelationFilter
  }

  export type profileOrderByWithRelationInput = {
    id?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    key?: SortOrder
    user?: userOrderByRelationAggregateInput
  }

  export type profileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    key?: string
    AND?: profileWhereInput | profileWhereInput[]
    OR?: profileWhereInput[]
    NOT?: profileWhereInput | profileWhereInput[]
    createAt?: DateTimeFilter<"profile"> | Date | string
    updatedAt?: DateTimeFilter<"profile"> | Date | string
    name?: StringFilter<"profile"> | string
    user?: UserListRelationFilter
  }, "id" | "key">

  export type profileOrderByWithAggregationInput = {
    id?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    key?: SortOrder
    _count?: profileCountOrderByAggregateInput
    _max?: profileMaxOrderByAggregateInput
    _min?: profileMinOrderByAggregateInput
  }

  export type profileScalarWhereWithAggregatesInput = {
    AND?: profileScalarWhereWithAggregatesInput | profileScalarWhereWithAggregatesInput[]
    OR?: profileScalarWhereWithAggregatesInput[]
    NOT?: profileScalarWhereWithAggregatesInput | profileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"profile"> | string
    createAt?: DateTimeWithAggregatesFilter<"profile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"profile"> | Date | string
    name?: StringWithAggregatesFilter<"profile"> | string
    key?: StringWithAggregatesFilter<"profile"> | string
  }

  export type balanceWhereInput = {
    AND?: balanceWhereInput | balanceWhereInput[]
    OR?: balanceWhereInput[]
    NOT?: balanceWhereInput | balanceWhereInput[]
    id?: StringFilter<"balance"> | string
    createAt?: DateTimeFilter<"balance"> | Date | string
    updatedAt?: DateTimeFilter<"balance"> | Date | string
    nome?: StringFilter<"balance"> | string
    ip?: StringFilter<"balance"> | string
    local?: StringFilter<"balance"> | string
  }

  export type balanceOrderByWithRelationInput = {
    id?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
    nome?: SortOrder
    ip?: SortOrder
    local?: SortOrder
  }

  export type balanceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: balanceWhereInput | balanceWhereInput[]
    OR?: balanceWhereInput[]
    NOT?: balanceWhereInput | balanceWhereInput[]
    createAt?: DateTimeFilter<"balance"> | Date | string
    updatedAt?: DateTimeFilter<"balance"> | Date | string
    nome?: StringFilter<"balance"> | string
    ip?: StringFilter<"balance"> | string
    local?: StringFilter<"balance"> | string
  }, "id">

  export type balanceOrderByWithAggregationInput = {
    id?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
    nome?: SortOrder
    ip?: SortOrder
    local?: SortOrder
    _count?: balanceCountOrderByAggregateInput
    _max?: balanceMaxOrderByAggregateInput
    _min?: balanceMinOrderByAggregateInput
  }

  export type balanceScalarWhereWithAggregatesInput = {
    AND?: balanceScalarWhereWithAggregatesInput | balanceScalarWhereWithAggregatesInput[]
    OR?: balanceScalarWhereWithAggregatesInput[]
    NOT?: balanceScalarWhereWithAggregatesInput | balanceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"balance"> | string
    createAt?: DateTimeWithAggregatesFilter<"balance"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"balance"> | Date | string
    nome?: StringWithAggregatesFilter<"balance"> | string
    ip?: StringWithAggregatesFilter<"balance"> | string
    local?: StringWithAggregatesFilter<"balance"> | string
  }

  export type fruitClassCreateInput = {
    id?: string
    createAt?: Date | string
    updatedAt?: Date | string
    name: string
    description: string
    father?: fruitClassCreateNestedOneWithoutChildInput
    child?: fruitClassCreateNestedManyWithoutFatherInput
    fruitName?: fruitNameCreateNestedManyWithoutFruitClassInput
    fruitTraining?: fruitTrainingCreateNestedManyWithoutFruitClassInput
  }

  export type fruitClassUncheckedCreateInput = {
    id?: string
    createAt?: Date | string
    updatedAt?: Date | string
    name: string
    description: string
    fatherId?: string | null
    child?: fruitClassUncheckedCreateNestedManyWithoutFatherInput
    fruitName?: fruitNameUncheckedCreateNestedManyWithoutFruitClassInput
    fruitTraining?: fruitTrainingUncheckedCreateNestedManyWithoutFruitClassInput
  }

  export type fruitClassUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    father?: fruitClassUpdateOneWithoutChildNestedInput
    child?: fruitClassUpdateManyWithoutFatherNestedInput
    fruitName?: fruitNameUpdateManyWithoutFruitClassNestedInput
    fruitTraining?: fruitTrainingUpdateManyWithoutFruitClassNestedInput
  }

  export type fruitClassUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    fatherId?: NullableStringFieldUpdateOperationsInput | string | null
    child?: fruitClassUncheckedUpdateManyWithoutFatherNestedInput
    fruitName?: fruitNameUncheckedUpdateManyWithoutFruitClassNestedInput
    fruitTraining?: fruitTrainingUncheckedUpdateManyWithoutFruitClassNestedInput
  }

  export type fruitClassCreateManyInput = {
    id?: string
    createAt?: Date | string
    updatedAt?: Date | string
    name: string
    description: string
    fatherId?: string | null
  }

  export type fruitClassUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type fruitClassUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    fatherId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type fruitTrainingCreateInput = {
    id?: string
    createAt?: Date | string
    updatedAt?: Date | string
    img: string
    date: Date | string
    fruitClass?: fruitClassCreateNestedOneWithoutFruitTrainingInput
  }

  export type fruitTrainingUncheckedCreateInput = {
    id?: string
    createAt?: Date | string
    updatedAt?: Date | string
    img: string
    date: Date | string
    fruitClassId: string
  }

  export type fruitTrainingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    img?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    fruitClass?: fruitClassUpdateOneWithoutFruitTrainingNestedInput
  }

  export type fruitTrainingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    img?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    fruitClassId?: StringFieldUpdateOperationsInput | string
  }

  export type fruitTrainingCreateManyInput = {
    id?: string
    createAt?: Date | string
    updatedAt?: Date | string
    img: string
    date: Date | string
    fruitClassId: string
  }

  export type fruitTrainingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    img?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type fruitTrainingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    img?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    fruitClassId?: StringFieldUpdateOperationsInput | string
  }

  export type fruitNameCreateInput = {
    id?: string
    createAt?: Date | string
    updatedAt?: Date | string
    name: string
    fruitClass?: fruitClassCreateNestedOneWithoutFruitNameInput
    fruitValue?: fruitValueCreateNestedManyWithoutFruitNameInput
  }

  export type fruitNameUncheckedCreateInput = {
    id?: string
    createAt?: Date | string
    updatedAt?: Date | string
    name: string
    fruitClassId: string
    fruitValue?: fruitValueUncheckedCreateNestedManyWithoutFruitNameInput
  }

  export type fruitNameUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    fruitClass?: fruitClassUpdateOneWithoutFruitNameNestedInput
    fruitValue?: fruitValueUpdateManyWithoutFruitNameNestedInput
  }

  export type fruitNameUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    fruitClassId?: StringFieldUpdateOperationsInput | string
    fruitValue?: fruitValueUncheckedUpdateManyWithoutFruitNameNestedInput
  }

  export type fruitNameCreateManyInput = {
    id?: string
    createAt?: Date | string
    updatedAt?: Date | string
    name: string
    fruitClassId: string
  }

  export type fruitNameUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type fruitNameUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    fruitClassId?: StringFieldUpdateOperationsInput | string
  }

  export type fruitValueCreateInput = {
    id?: string
    createAt?: Date | string
    updatedAt?: Date | string
    description: string
    valueUnid: Decimal | DecimalJsLike | number | string
    date: Date | string
    fruitName?: fruitNameCreateNestedOneWithoutFruitValueInput
    fruitHistory?: fruitHistoryCreateNestedManyWithoutFruitValueInput
  }

  export type fruitValueUncheckedCreateInput = {
    id?: string
    createAt?: Date | string
    updatedAt?: Date | string
    description: string
    valueUnid: Decimal | DecimalJsLike | number | string
    date: Date | string
    fruitNameId: string
    fruitHistory?: fruitHistoryUncheckedCreateNestedManyWithoutFruitValueInput
  }

  export type fruitValueUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    valueUnid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    fruitName?: fruitNameUpdateOneWithoutFruitValueNestedInput
    fruitHistory?: fruitHistoryUpdateManyWithoutFruitValueNestedInput
  }

  export type fruitValueUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    valueUnid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    fruitNameId?: StringFieldUpdateOperationsInput | string
    fruitHistory?: fruitHistoryUncheckedUpdateManyWithoutFruitValueNestedInput
  }

  export type fruitValueCreateManyInput = {
    id?: string
    createAt?: Date | string
    updatedAt?: Date | string
    description: string
    valueUnid: Decimal | DecimalJsLike | number | string
    date: Date | string
    fruitNameId: string
  }

  export type fruitValueUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    valueUnid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type fruitValueUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    valueUnid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    fruitNameId?: StringFieldUpdateOperationsInput | string
  }

  export type fruitHistoryCreateInput = {
    id?: string
    createAt?: Date | string
    updatedAt?: Date | string
    dateCapture: Date | string
    valuWeight: Decimal | DecimalJsLike | number | string
    valueTotal: Decimal | DecimalJsLike | number | string
    fruitValue?: fruitValueCreateNestedOneWithoutFruitHistoryInput
  }

  export type fruitHistoryUncheckedCreateInput = {
    id?: string
    createAt?: Date | string
    updatedAt?: Date | string
    dateCapture: Date | string
    valuWeight: Decimal | DecimalJsLike | number | string
    valueTotal: Decimal | DecimalJsLike | number | string
    fruitValueId: string
  }

  export type fruitHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dateCapture?: DateTimeFieldUpdateOperationsInput | Date | string
    valuWeight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valueTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fruitValue?: fruitValueUpdateOneWithoutFruitHistoryNestedInput
  }

  export type fruitHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dateCapture?: DateTimeFieldUpdateOperationsInput | Date | string
    valuWeight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valueTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fruitValueId?: StringFieldUpdateOperationsInput | string
  }

  export type fruitHistoryCreateManyInput = {
    id?: string
    createAt?: Date | string
    updatedAt?: Date | string
    dateCapture: Date | string
    valuWeight: Decimal | DecimalJsLike | number | string
    valueTotal: Decimal | DecimalJsLike | number | string
    fruitValueId: string
  }

  export type fruitHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dateCapture?: DateTimeFieldUpdateOperationsInput | Date | string
    valuWeight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valueTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type fruitHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dateCapture?: DateTimeFieldUpdateOperationsInput | Date | string
    valuWeight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valueTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fruitValueId?: StringFieldUpdateOperationsInput | string
  }

  export type userCreateInput = {
    id?: string
    createAt?: Date | string
    updatedAt?: Date | string
    name: string
    description?: string | null
    login: string
    password: string
    profile?: profileCreateNestedOneWithoutUserInput
  }

  export type userUncheckedCreateInput = {
    id?: string
    createAt?: Date | string
    updatedAt?: Date | string
    name: string
    description?: string | null
    login: string
    password: string
    profileId?: string | null
  }

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    login?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile?: profileUpdateOneWithoutUserNestedInput
  }

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    login?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profileId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type userCreateManyInput = {
    id?: string
    createAt?: Date | string
    updatedAt?: Date | string
    name: string
    description?: string | null
    login: string
    password: string
    profileId?: string | null
  }

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    login?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    login?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profileId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type profileCreateInput = {
    id?: string
    createAt?: Date | string
    updatedAt?: Date | string
    name: string
    key: string
    user?: userCreateNestedManyWithoutProfileInput
  }

  export type profileUncheckedCreateInput = {
    id?: string
    createAt?: Date | string
    updatedAt?: Date | string
    name: string
    key: string
    user?: userUncheckedCreateNestedManyWithoutProfileInput
  }

  export type profileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    user?: userUpdateManyWithoutProfileNestedInput
  }

  export type profileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    user?: userUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type profileCreateManyInput = {
    id?: string
    createAt?: Date | string
    updatedAt?: Date | string
    name: string
    key: string
  }

  export type profileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
  }

  export type profileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
  }

  export type balanceCreateInput = {
    id?: string
    createAt?: Date | string
    updatedAt?: Date | string
    nome: string
    ip: string
    local: string
  }

  export type balanceUncheckedCreateInput = {
    id?: string
    createAt?: Date | string
    updatedAt?: Date | string
    nome: string
    ip: string
    local: string
  }

  export type balanceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nome?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    local?: StringFieldUpdateOperationsInput | string
  }

  export type balanceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nome?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    local?: StringFieldUpdateOperationsInput | string
  }

  export type balanceCreateManyInput = {
    id?: string
    createAt?: Date | string
    updatedAt?: Date | string
    nome: string
    ip: string
    local: string
  }

  export type balanceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nome?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    local?: StringFieldUpdateOperationsInput | string
  }

  export type balanceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nome?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    local?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type FruitClassNullableRelationFilter = {
    is?: fruitClassWhereInput | null
    isNot?: fruitClassWhereInput | null
  }

  export type FruitClassListRelationFilter = {
    every?: fruitClassWhereInput
    some?: fruitClassWhereInput
    none?: fruitClassWhereInput
  }

  export type FruitNameListRelationFilter = {
    every?: fruitNameWhereInput
    some?: fruitNameWhereInput
    none?: fruitNameWhereInput
  }

  export type FruitTrainingListRelationFilter = {
    every?: fruitTrainingWhereInput
    some?: fruitTrainingWhereInput
    none?: fruitTrainingWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type fruitClassOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type fruitNameOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type fruitTrainingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type fruitClassCountOrderByAggregateInput = {
    id?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    description?: SortOrder
    fatherId?: SortOrder
  }

  export type fruitClassMaxOrderByAggregateInput = {
    id?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    description?: SortOrder
    fatherId?: SortOrder
  }

  export type fruitClassMinOrderByAggregateInput = {
    id?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    description?: SortOrder
    fatherId?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type fruitTrainingCountOrderByAggregateInput = {
    id?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
    img?: SortOrder
    date?: SortOrder
    fruitClassId?: SortOrder
  }

  export type fruitTrainingMaxOrderByAggregateInput = {
    id?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
    img?: SortOrder
    date?: SortOrder
    fruitClassId?: SortOrder
  }

  export type fruitTrainingMinOrderByAggregateInput = {
    id?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
    img?: SortOrder
    date?: SortOrder
    fruitClassId?: SortOrder
  }

  export type FruitValueListRelationFilter = {
    every?: fruitValueWhereInput
    some?: fruitValueWhereInput
    none?: fruitValueWhereInput
  }

  export type fruitValueOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type fruitNameCountOrderByAggregateInput = {
    id?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    fruitClassId?: SortOrder
  }

  export type fruitNameMaxOrderByAggregateInput = {
    id?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    fruitClassId?: SortOrder
  }

  export type fruitNameMinOrderByAggregateInput = {
    id?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    fruitClassId?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type FruitNameNullableRelationFilter = {
    is?: fruitNameWhereInput | null
    isNot?: fruitNameWhereInput | null
  }

  export type FruitHistoryListRelationFilter = {
    every?: fruitHistoryWhereInput
    some?: fruitHistoryWhereInput
    none?: fruitHistoryWhereInput
  }

  export type fruitHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type fruitValueCountOrderByAggregateInput = {
    id?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
    description?: SortOrder
    valueUnid?: SortOrder
    date?: SortOrder
    fruitNameId?: SortOrder
  }

  export type fruitValueAvgOrderByAggregateInput = {
    valueUnid?: SortOrder
  }

  export type fruitValueMaxOrderByAggregateInput = {
    id?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
    description?: SortOrder
    valueUnid?: SortOrder
    date?: SortOrder
    fruitNameId?: SortOrder
  }

  export type fruitValueMinOrderByAggregateInput = {
    id?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
    description?: SortOrder
    valueUnid?: SortOrder
    date?: SortOrder
    fruitNameId?: SortOrder
  }

  export type fruitValueSumOrderByAggregateInput = {
    valueUnid?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type FruitValueNullableRelationFilter = {
    is?: fruitValueWhereInput | null
    isNot?: fruitValueWhereInput | null
  }

  export type fruitHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
    dateCapture?: SortOrder
    valuWeight?: SortOrder
    valueTotal?: SortOrder
    fruitValueId?: SortOrder
  }

  export type fruitHistoryAvgOrderByAggregateInput = {
    valuWeight?: SortOrder
    valueTotal?: SortOrder
  }

  export type fruitHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
    dateCapture?: SortOrder
    valuWeight?: SortOrder
    valueTotal?: SortOrder
    fruitValueId?: SortOrder
  }

  export type fruitHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
    dateCapture?: SortOrder
    valuWeight?: SortOrder
    valueTotal?: SortOrder
    fruitValueId?: SortOrder
  }

  export type fruitHistorySumOrderByAggregateInput = {
    valuWeight?: SortOrder
    valueTotal?: SortOrder
  }

  export type ProfileNullableRelationFilter = {
    is?: profileWhereInput | null
    isNot?: profileWhereInput | null
  }

  export type userCountOrderByAggregateInput = {
    id?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    description?: SortOrder
    login?: SortOrder
    password?: SortOrder
    profileId?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    description?: SortOrder
    login?: SortOrder
    password?: SortOrder
    profileId?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    description?: SortOrder
    login?: SortOrder
    password?: SortOrder
    profileId?: SortOrder
  }

  export type UserListRelationFilter = {
    every?: userWhereInput
    some?: userWhereInput
    none?: userWhereInput
  }

  export type userOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type profileCountOrderByAggregateInput = {
    id?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    key?: SortOrder
  }

  export type profileMaxOrderByAggregateInput = {
    id?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    key?: SortOrder
  }

  export type profileMinOrderByAggregateInput = {
    id?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    key?: SortOrder
  }

  export type balanceCountOrderByAggregateInput = {
    id?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
    nome?: SortOrder
    ip?: SortOrder
    local?: SortOrder
  }

  export type balanceMaxOrderByAggregateInput = {
    id?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
    nome?: SortOrder
    ip?: SortOrder
    local?: SortOrder
  }

  export type balanceMinOrderByAggregateInput = {
    id?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
    nome?: SortOrder
    ip?: SortOrder
    local?: SortOrder
  }

  export type fruitClassCreateNestedOneWithoutChildInput = {
    create?: XOR<fruitClassCreateWithoutChildInput, fruitClassUncheckedCreateWithoutChildInput>
    connectOrCreate?: fruitClassCreateOrConnectWithoutChildInput
    connect?: fruitClassWhereUniqueInput
  }

  export type fruitClassCreateNestedManyWithoutFatherInput = {
    create?: XOR<fruitClassCreateWithoutFatherInput, fruitClassUncheckedCreateWithoutFatherInput> | fruitClassCreateWithoutFatherInput[] | fruitClassUncheckedCreateWithoutFatherInput[]
    connectOrCreate?: fruitClassCreateOrConnectWithoutFatherInput | fruitClassCreateOrConnectWithoutFatherInput[]
    createMany?: fruitClassCreateManyFatherInputEnvelope
    connect?: fruitClassWhereUniqueInput | fruitClassWhereUniqueInput[]
  }

  export type fruitNameCreateNestedManyWithoutFruitClassInput = {
    create?: XOR<fruitNameCreateWithoutFruitClassInput, fruitNameUncheckedCreateWithoutFruitClassInput> | fruitNameCreateWithoutFruitClassInput[] | fruitNameUncheckedCreateWithoutFruitClassInput[]
    connectOrCreate?: fruitNameCreateOrConnectWithoutFruitClassInput | fruitNameCreateOrConnectWithoutFruitClassInput[]
    createMany?: fruitNameCreateManyFruitClassInputEnvelope
    connect?: fruitNameWhereUniqueInput | fruitNameWhereUniqueInput[]
  }

  export type fruitTrainingCreateNestedManyWithoutFruitClassInput = {
    create?: XOR<fruitTrainingCreateWithoutFruitClassInput, fruitTrainingUncheckedCreateWithoutFruitClassInput> | fruitTrainingCreateWithoutFruitClassInput[] | fruitTrainingUncheckedCreateWithoutFruitClassInput[]
    connectOrCreate?: fruitTrainingCreateOrConnectWithoutFruitClassInput | fruitTrainingCreateOrConnectWithoutFruitClassInput[]
    createMany?: fruitTrainingCreateManyFruitClassInputEnvelope
    connect?: fruitTrainingWhereUniqueInput | fruitTrainingWhereUniqueInput[]
  }

  export type fruitClassUncheckedCreateNestedManyWithoutFatherInput = {
    create?: XOR<fruitClassCreateWithoutFatherInput, fruitClassUncheckedCreateWithoutFatherInput> | fruitClassCreateWithoutFatherInput[] | fruitClassUncheckedCreateWithoutFatherInput[]
    connectOrCreate?: fruitClassCreateOrConnectWithoutFatherInput | fruitClassCreateOrConnectWithoutFatherInput[]
    createMany?: fruitClassCreateManyFatherInputEnvelope
    connect?: fruitClassWhereUniqueInput | fruitClassWhereUniqueInput[]
  }

  export type fruitNameUncheckedCreateNestedManyWithoutFruitClassInput = {
    create?: XOR<fruitNameCreateWithoutFruitClassInput, fruitNameUncheckedCreateWithoutFruitClassInput> | fruitNameCreateWithoutFruitClassInput[] | fruitNameUncheckedCreateWithoutFruitClassInput[]
    connectOrCreate?: fruitNameCreateOrConnectWithoutFruitClassInput | fruitNameCreateOrConnectWithoutFruitClassInput[]
    createMany?: fruitNameCreateManyFruitClassInputEnvelope
    connect?: fruitNameWhereUniqueInput | fruitNameWhereUniqueInput[]
  }

  export type fruitTrainingUncheckedCreateNestedManyWithoutFruitClassInput = {
    create?: XOR<fruitTrainingCreateWithoutFruitClassInput, fruitTrainingUncheckedCreateWithoutFruitClassInput> | fruitTrainingCreateWithoutFruitClassInput[] | fruitTrainingUncheckedCreateWithoutFruitClassInput[]
    connectOrCreate?: fruitTrainingCreateOrConnectWithoutFruitClassInput | fruitTrainingCreateOrConnectWithoutFruitClassInput[]
    createMany?: fruitTrainingCreateManyFruitClassInputEnvelope
    connect?: fruitTrainingWhereUniqueInput | fruitTrainingWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type fruitClassUpdateOneWithoutChildNestedInput = {
    create?: XOR<fruitClassCreateWithoutChildInput, fruitClassUncheckedCreateWithoutChildInput>
    connectOrCreate?: fruitClassCreateOrConnectWithoutChildInput
    upsert?: fruitClassUpsertWithoutChildInput
    disconnect?: fruitClassWhereInput | boolean
    delete?: fruitClassWhereInput | boolean
    connect?: fruitClassWhereUniqueInput
    update?: XOR<XOR<fruitClassUpdateToOneWithWhereWithoutChildInput, fruitClassUpdateWithoutChildInput>, fruitClassUncheckedUpdateWithoutChildInput>
  }

  export type fruitClassUpdateManyWithoutFatherNestedInput = {
    create?: XOR<fruitClassCreateWithoutFatherInput, fruitClassUncheckedCreateWithoutFatherInput> | fruitClassCreateWithoutFatherInput[] | fruitClassUncheckedCreateWithoutFatherInput[]
    connectOrCreate?: fruitClassCreateOrConnectWithoutFatherInput | fruitClassCreateOrConnectWithoutFatherInput[]
    upsert?: fruitClassUpsertWithWhereUniqueWithoutFatherInput | fruitClassUpsertWithWhereUniqueWithoutFatherInput[]
    createMany?: fruitClassCreateManyFatherInputEnvelope
    set?: fruitClassWhereUniqueInput | fruitClassWhereUniqueInput[]
    disconnect?: fruitClassWhereUniqueInput | fruitClassWhereUniqueInput[]
    delete?: fruitClassWhereUniqueInput | fruitClassWhereUniqueInput[]
    connect?: fruitClassWhereUniqueInput | fruitClassWhereUniqueInput[]
    update?: fruitClassUpdateWithWhereUniqueWithoutFatherInput | fruitClassUpdateWithWhereUniqueWithoutFatherInput[]
    updateMany?: fruitClassUpdateManyWithWhereWithoutFatherInput | fruitClassUpdateManyWithWhereWithoutFatherInput[]
    deleteMany?: fruitClassScalarWhereInput | fruitClassScalarWhereInput[]
  }

  export type fruitNameUpdateManyWithoutFruitClassNestedInput = {
    create?: XOR<fruitNameCreateWithoutFruitClassInput, fruitNameUncheckedCreateWithoutFruitClassInput> | fruitNameCreateWithoutFruitClassInput[] | fruitNameUncheckedCreateWithoutFruitClassInput[]
    connectOrCreate?: fruitNameCreateOrConnectWithoutFruitClassInput | fruitNameCreateOrConnectWithoutFruitClassInput[]
    upsert?: fruitNameUpsertWithWhereUniqueWithoutFruitClassInput | fruitNameUpsertWithWhereUniqueWithoutFruitClassInput[]
    createMany?: fruitNameCreateManyFruitClassInputEnvelope
    set?: fruitNameWhereUniqueInput | fruitNameWhereUniqueInput[]
    disconnect?: fruitNameWhereUniqueInput | fruitNameWhereUniqueInput[]
    delete?: fruitNameWhereUniqueInput | fruitNameWhereUniqueInput[]
    connect?: fruitNameWhereUniqueInput | fruitNameWhereUniqueInput[]
    update?: fruitNameUpdateWithWhereUniqueWithoutFruitClassInput | fruitNameUpdateWithWhereUniqueWithoutFruitClassInput[]
    updateMany?: fruitNameUpdateManyWithWhereWithoutFruitClassInput | fruitNameUpdateManyWithWhereWithoutFruitClassInput[]
    deleteMany?: fruitNameScalarWhereInput | fruitNameScalarWhereInput[]
  }

  export type fruitTrainingUpdateManyWithoutFruitClassNestedInput = {
    create?: XOR<fruitTrainingCreateWithoutFruitClassInput, fruitTrainingUncheckedCreateWithoutFruitClassInput> | fruitTrainingCreateWithoutFruitClassInput[] | fruitTrainingUncheckedCreateWithoutFruitClassInput[]
    connectOrCreate?: fruitTrainingCreateOrConnectWithoutFruitClassInput | fruitTrainingCreateOrConnectWithoutFruitClassInput[]
    upsert?: fruitTrainingUpsertWithWhereUniqueWithoutFruitClassInput | fruitTrainingUpsertWithWhereUniqueWithoutFruitClassInput[]
    createMany?: fruitTrainingCreateManyFruitClassInputEnvelope
    set?: fruitTrainingWhereUniqueInput | fruitTrainingWhereUniqueInput[]
    disconnect?: fruitTrainingWhereUniqueInput | fruitTrainingWhereUniqueInput[]
    delete?: fruitTrainingWhereUniqueInput | fruitTrainingWhereUniqueInput[]
    connect?: fruitTrainingWhereUniqueInput | fruitTrainingWhereUniqueInput[]
    update?: fruitTrainingUpdateWithWhereUniqueWithoutFruitClassInput | fruitTrainingUpdateWithWhereUniqueWithoutFruitClassInput[]
    updateMany?: fruitTrainingUpdateManyWithWhereWithoutFruitClassInput | fruitTrainingUpdateManyWithWhereWithoutFruitClassInput[]
    deleteMany?: fruitTrainingScalarWhereInput | fruitTrainingScalarWhereInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type fruitClassUncheckedUpdateManyWithoutFatherNestedInput = {
    create?: XOR<fruitClassCreateWithoutFatherInput, fruitClassUncheckedCreateWithoutFatherInput> | fruitClassCreateWithoutFatherInput[] | fruitClassUncheckedCreateWithoutFatherInput[]
    connectOrCreate?: fruitClassCreateOrConnectWithoutFatherInput | fruitClassCreateOrConnectWithoutFatherInput[]
    upsert?: fruitClassUpsertWithWhereUniqueWithoutFatherInput | fruitClassUpsertWithWhereUniqueWithoutFatherInput[]
    createMany?: fruitClassCreateManyFatherInputEnvelope
    set?: fruitClassWhereUniqueInput | fruitClassWhereUniqueInput[]
    disconnect?: fruitClassWhereUniqueInput | fruitClassWhereUniqueInput[]
    delete?: fruitClassWhereUniqueInput | fruitClassWhereUniqueInput[]
    connect?: fruitClassWhereUniqueInput | fruitClassWhereUniqueInput[]
    update?: fruitClassUpdateWithWhereUniqueWithoutFatherInput | fruitClassUpdateWithWhereUniqueWithoutFatherInput[]
    updateMany?: fruitClassUpdateManyWithWhereWithoutFatherInput | fruitClassUpdateManyWithWhereWithoutFatherInput[]
    deleteMany?: fruitClassScalarWhereInput | fruitClassScalarWhereInput[]
  }

  export type fruitNameUncheckedUpdateManyWithoutFruitClassNestedInput = {
    create?: XOR<fruitNameCreateWithoutFruitClassInput, fruitNameUncheckedCreateWithoutFruitClassInput> | fruitNameCreateWithoutFruitClassInput[] | fruitNameUncheckedCreateWithoutFruitClassInput[]
    connectOrCreate?: fruitNameCreateOrConnectWithoutFruitClassInput | fruitNameCreateOrConnectWithoutFruitClassInput[]
    upsert?: fruitNameUpsertWithWhereUniqueWithoutFruitClassInput | fruitNameUpsertWithWhereUniqueWithoutFruitClassInput[]
    createMany?: fruitNameCreateManyFruitClassInputEnvelope
    set?: fruitNameWhereUniqueInput | fruitNameWhereUniqueInput[]
    disconnect?: fruitNameWhereUniqueInput | fruitNameWhereUniqueInput[]
    delete?: fruitNameWhereUniqueInput | fruitNameWhereUniqueInput[]
    connect?: fruitNameWhereUniqueInput | fruitNameWhereUniqueInput[]
    update?: fruitNameUpdateWithWhereUniqueWithoutFruitClassInput | fruitNameUpdateWithWhereUniqueWithoutFruitClassInput[]
    updateMany?: fruitNameUpdateManyWithWhereWithoutFruitClassInput | fruitNameUpdateManyWithWhereWithoutFruitClassInput[]
    deleteMany?: fruitNameScalarWhereInput | fruitNameScalarWhereInput[]
  }

  export type fruitTrainingUncheckedUpdateManyWithoutFruitClassNestedInput = {
    create?: XOR<fruitTrainingCreateWithoutFruitClassInput, fruitTrainingUncheckedCreateWithoutFruitClassInput> | fruitTrainingCreateWithoutFruitClassInput[] | fruitTrainingUncheckedCreateWithoutFruitClassInput[]
    connectOrCreate?: fruitTrainingCreateOrConnectWithoutFruitClassInput | fruitTrainingCreateOrConnectWithoutFruitClassInput[]
    upsert?: fruitTrainingUpsertWithWhereUniqueWithoutFruitClassInput | fruitTrainingUpsertWithWhereUniqueWithoutFruitClassInput[]
    createMany?: fruitTrainingCreateManyFruitClassInputEnvelope
    set?: fruitTrainingWhereUniqueInput | fruitTrainingWhereUniqueInput[]
    disconnect?: fruitTrainingWhereUniqueInput | fruitTrainingWhereUniqueInput[]
    delete?: fruitTrainingWhereUniqueInput | fruitTrainingWhereUniqueInput[]
    connect?: fruitTrainingWhereUniqueInput | fruitTrainingWhereUniqueInput[]
    update?: fruitTrainingUpdateWithWhereUniqueWithoutFruitClassInput | fruitTrainingUpdateWithWhereUniqueWithoutFruitClassInput[]
    updateMany?: fruitTrainingUpdateManyWithWhereWithoutFruitClassInput | fruitTrainingUpdateManyWithWhereWithoutFruitClassInput[]
    deleteMany?: fruitTrainingScalarWhereInput | fruitTrainingScalarWhereInput[]
  }

  export type fruitClassCreateNestedOneWithoutFruitTrainingInput = {
    create?: XOR<fruitClassCreateWithoutFruitTrainingInput, fruitClassUncheckedCreateWithoutFruitTrainingInput>
    connectOrCreate?: fruitClassCreateOrConnectWithoutFruitTrainingInput
    connect?: fruitClassWhereUniqueInput
  }

  export type fruitClassUpdateOneWithoutFruitTrainingNestedInput = {
    create?: XOR<fruitClassCreateWithoutFruitTrainingInput, fruitClassUncheckedCreateWithoutFruitTrainingInput>
    connectOrCreate?: fruitClassCreateOrConnectWithoutFruitTrainingInput
    upsert?: fruitClassUpsertWithoutFruitTrainingInput
    disconnect?: fruitClassWhereInput | boolean
    delete?: fruitClassWhereInput | boolean
    connect?: fruitClassWhereUniqueInput
    update?: XOR<XOR<fruitClassUpdateToOneWithWhereWithoutFruitTrainingInput, fruitClassUpdateWithoutFruitTrainingInput>, fruitClassUncheckedUpdateWithoutFruitTrainingInput>
  }

  export type fruitClassCreateNestedOneWithoutFruitNameInput = {
    create?: XOR<fruitClassCreateWithoutFruitNameInput, fruitClassUncheckedCreateWithoutFruitNameInput>
    connectOrCreate?: fruitClassCreateOrConnectWithoutFruitNameInput
    connect?: fruitClassWhereUniqueInput
  }

  export type fruitValueCreateNestedManyWithoutFruitNameInput = {
    create?: XOR<fruitValueCreateWithoutFruitNameInput, fruitValueUncheckedCreateWithoutFruitNameInput> | fruitValueCreateWithoutFruitNameInput[] | fruitValueUncheckedCreateWithoutFruitNameInput[]
    connectOrCreate?: fruitValueCreateOrConnectWithoutFruitNameInput | fruitValueCreateOrConnectWithoutFruitNameInput[]
    createMany?: fruitValueCreateManyFruitNameInputEnvelope
    connect?: fruitValueWhereUniqueInput | fruitValueWhereUniqueInput[]
  }

  export type fruitValueUncheckedCreateNestedManyWithoutFruitNameInput = {
    create?: XOR<fruitValueCreateWithoutFruitNameInput, fruitValueUncheckedCreateWithoutFruitNameInput> | fruitValueCreateWithoutFruitNameInput[] | fruitValueUncheckedCreateWithoutFruitNameInput[]
    connectOrCreate?: fruitValueCreateOrConnectWithoutFruitNameInput | fruitValueCreateOrConnectWithoutFruitNameInput[]
    createMany?: fruitValueCreateManyFruitNameInputEnvelope
    connect?: fruitValueWhereUniqueInput | fruitValueWhereUniqueInput[]
  }

  export type fruitClassUpdateOneWithoutFruitNameNestedInput = {
    create?: XOR<fruitClassCreateWithoutFruitNameInput, fruitClassUncheckedCreateWithoutFruitNameInput>
    connectOrCreate?: fruitClassCreateOrConnectWithoutFruitNameInput
    upsert?: fruitClassUpsertWithoutFruitNameInput
    disconnect?: fruitClassWhereInput | boolean
    delete?: fruitClassWhereInput | boolean
    connect?: fruitClassWhereUniqueInput
    update?: XOR<XOR<fruitClassUpdateToOneWithWhereWithoutFruitNameInput, fruitClassUpdateWithoutFruitNameInput>, fruitClassUncheckedUpdateWithoutFruitNameInput>
  }

  export type fruitValueUpdateManyWithoutFruitNameNestedInput = {
    create?: XOR<fruitValueCreateWithoutFruitNameInput, fruitValueUncheckedCreateWithoutFruitNameInput> | fruitValueCreateWithoutFruitNameInput[] | fruitValueUncheckedCreateWithoutFruitNameInput[]
    connectOrCreate?: fruitValueCreateOrConnectWithoutFruitNameInput | fruitValueCreateOrConnectWithoutFruitNameInput[]
    upsert?: fruitValueUpsertWithWhereUniqueWithoutFruitNameInput | fruitValueUpsertWithWhereUniqueWithoutFruitNameInput[]
    createMany?: fruitValueCreateManyFruitNameInputEnvelope
    set?: fruitValueWhereUniqueInput | fruitValueWhereUniqueInput[]
    disconnect?: fruitValueWhereUniqueInput | fruitValueWhereUniqueInput[]
    delete?: fruitValueWhereUniqueInput | fruitValueWhereUniqueInput[]
    connect?: fruitValueWhereUniqueInput | fruitValueWhereUniqueInput[]
    update?: fruitValueUpdateWithWhereUniqueWithoutFruitNameInput | fruitValueUpdateWithWhereUniqueWithoutFruitNameInput[]
    updateMany?: fruitValueUpdateManyWithWhereWithoutFruitNameInput | fruitValueUpdateManyWithWhereWithoutFruitNameInput[]
    deleteMany?: fruitValueScalarWhereInput | fruitValueScalarWhereInput[]
  }

  export type fruitValueUncheckedUpdateManyWithoutFruitNameNestedInput = {
    create?: XOR<fruitValueCreateWithoutFruitNameInput, fruitValueUncheckedCreateWithoutFruitNameInput> | fruitValueCreateWithoutFruitNameInput[] | fruitValueUncheckedCreateWithoutFruitNameInput[]
    connectOrCreate?: fruitValueCreateOrConnectWithoutFruitNameInput | fruitValueCreateOrConnectWithoutFruitNameInput[]
    upsert?: fruitValueUpsertWithWhereUniqueWithoutFruitNameInput | fruitValueUpsertWithWhereUniqueWithoutFruitNameInput[]
    createMany?: fruitValueCreateManyFruitNameInputEnvelope
    set?: fruitValueWhereUniqueInput | fruitValueWhereUniqueInput[]
    disconnect?: fruitValueWhereUniqueInput | fruitValueWhereUniqueInput[]
    delete?: fruitValueWhereUniqueInput | fruitValueWhereUniqueInput[]
    connect?: fruitValueWhereUniqueInput | fruitValueWhereUniqueInput[]
    update?: fruitValueUpdateWithWhereUniqueWithoutFruitNameInput | fruitValueUpdateWithWhereUniqueWithoutFruitNameInput[]
    updateMany?: fruitValueUpdateManyWithWhereWithoutFruitNameInput | fruitValueUpdateManyWithWhereWithoutFruitNameInput[]
    deleteMany?: fruitValueScalarWhereInput | fruitValueScalarWhereInput[]
  }

  export type fruitNameCreateNestedOneWithoutFruitValueInput = {
    create?: XOR<fruitNameCreateWithoutFruitValueInput, fruitNameUncheckedCreateWithoutFruitValueInput>
    connectOrCreate?: fruitNameCreateOrConnectWithoutFruitValueInput
    connect?: fruitNameWhereUniqueInput
  }

  export type fruitHistoryCreateNestedManyWithoutFruitValueInput = {
    create?: XOR<fruitHistoryCreateWithoutFruitValueInput, fruitHistoryUncheckedCreateWithoutFruitValueInput> | fruitHistoryCreateWithoutFruitValueInput[] | fruitHistoryUncheckedCreateWithoutFruitValueInput[]
    connectOrCreate?: fruitHistoryCreateOrConnectWithoutFruitValueInput | fruitHistoryCreateOrConnectWithoutFruitValueInput[]
    createMany?: fruitHistoryCreateManyFruitValueInputEnvelope
    connect?: fruitHistoryWhereUniqueInput | fruitHistoryWhereUniqueInput[]
  }

  export type fruitHistoryUncheckedCreateNestedManyWithoutFruitValueInput = {
    create?: XOR<fruitHistoryCreateWithoutFruitValueInput, fruitHistoryUncheckedCreateWithoutFruitValueInput> | fruitHistoryCreateWithoutFruitValueInput[] | fruitHistoryUncheckedCreateWithoutFruitValueInput[]
    connectOrCreate?: fruitHistoryCreateOrConnectWithoutFruitValueInput | fruitHistoryCreateOrConnectWithoutFruitValueInput[]
    createMany?: fruitHistoryCreateManyFruitValueInputEnvelope
    connect?: fruitHistoryWhereUniqueInput | fruitHistoryWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type fruitNameUpdateOneWithoutFruitValueNestedInput = {
    create?: XOR<fruitNameCreateWithoutFruitValueInput, fruitNameUncheckedCreateWithoutFruitValueInput>
    connectOrCreate?: fruitNameCreateOrConnectWithoutFruitValueInput
    upsert?: fruitNameUpsertWithoutFruitValueInput
    disconnect?: fruitNameWhereInput | boolean
    delete?: fruitNameWhereInput | boolean
    connect?: fruitNameWhereUniqueInput
    update?: XOR<XOR<fruitNameUpdateToOneWithWhereWithoutFruitValueInput, fruitNameUpdateWithoutFruitValueInput>, fruitNameUncheckedUpdateWithoutFruitValueInput>
  }

  export type fruitHistoryUpdateManyWithoutFruitValueNestedInput = {
    create?: XOR<fruitHistoryCreateWithoutFruitValueInput, fruitHistoryUncheckedCreateWithoutFruitValueInput> | fruitHistoryCreateWithoutFruitValueInput[] | fruitHistoryUncheckedCreateWithoutFruitValueInput[]
    connectOrCreate?: fruitHistoryCreateOrConnectWithoutFruitValueInput | fruitHistoryCreateOrConnectWithoutFruitValueInput[]
    upsert?: fruitHistoryUpsertWithWhereUniqueWithoutFruitValueInput | fruitHistoryUpsertWithWhereUniqueWithoutFruitValueInput[]
    createMany?: fruitHistoryCreateManyFruitValueInputEnvelope
    set?: fruitHistoryWhereUniqueInput | fruitHistoryWhereUniqueInput[]
    disconnect?: fruitHistoryWhereUniqueInput | fruitHistoryWhereUniqueInput[]
    delete?: fruitHistoryWhereUniqueInput | fruitHistoryWhereUniqueInput[]
    connect?: fruitHistoryWhereUniqueInput | fruitHistoryWhereUniqueInput[]
    update?: fruitHistoryUpdateWithWhereUniqueWithoutFruitValueInput | fruitHistoryUpdateWithWhereUniqueWithoutFruitValueInput[]
    updateMany?: fruitHistoryUpdateManyWithWhereWithoutFruitValueInput | fruitHistoryUpdateManyWithWhereWithoutFruitValueInput[]
    deleteMany?: fruitHistoryScalarWhereInput | fruitHistoryScalarWhereInput[]
  }

  export type fruitHistoryUncheckedUpdateManyWithoutFruitValueNestedInput = {
    create?: XOR<fruitHistoryCreateWithoutFruitValueInput, fruitHistoryUncheckedCreateWithoutFruitValueInput> | fruitHistoryCreateWithoutFruitValueInput[] | fruitHistoryUncheckedCreateWithoutFruitValueInput[]
    connectOrCreate?: fruitHistoryCreateOrConnectWithoutFruitValueInput | fruitHistoryCreateOrConnectWithoutFruitValueInput[]
    upsert?: fruitHistoryUpsertWithWhereUniqueWithoutFruitValueInput | fruitHistoryUpsertWithWhereUniqueWithoutFruitValueInput[]
    createMany?: fruitHistoryCreateManyFruitValueInputEnvelope
    set?: fruitHistoryWhereUniqueInput | fruitHistoryWhereUniqueInput[]
    disconnect?: fruitHistoryWhereUniqueInput | fruitHistoryWhereUniqueInput[]
    delete?: fruitHistoryWhereUniqueInput | fruitHistoryWhereUniqueInput[]
    connect?: fruitHistoryWhereUniqueInput | fruitHistoryWhereUniqueInput[]
    update?: fruitHistoryUpdateWithWhereUniqueWithoutFruitValueInput | fruitHistoryUpdateWithWhereUniqueWithoutFruitValueInput[]
    updateMany?: fruitHistoryUpdateManyWithWhereWithoutFruitValueInput | fruitHistoryUpdateManyWithWhereWithoutFruitValueInput[]
    deleteMany?: fruitHistoryScalarWhereInput | fruitHistoryScalarWhereInput[]
  }

  export type fruitValueCreateNestedOneWithoutFruitHistoryInput = {
    create?: XOR<fruitValueCreateWithoutFruitHistoryInput, fruitValueUncheckedCreateWithoutFruitHistoryInput>
    connectOrCreate?: fruitValueCreateOrConnectWithoutFruitHistoryInput
    connect?: fruitValueWhereUniqueInput
  }

  export type fruitValueUpdateOneWithoutFruitHistoryNestedInput = {
    create?: XOR<fruitValueCreateWithoutFruitHistoryInput, fruitValueUncheckedCreateWithoutFruitHistoryInput>
    connectOrCreate?: fruitValueCreateOrConnectWithoutFruitHistoryInput
    upsert?: fruitValueUpsertWithoutFruitHistoryInput
    disconnect?: fruitValueWhereInput | boolean
    delete?: fruitValueWhereInput | boolean
    connect?: fruitValueWhereUniqueInput
    update?: XOR<XOR<fruitValueUpdateToOneWithWhereWithoutFruitHistoryInput, fruitValueUpdateWithoutFruitHistoryInput>, fruitValueUncheckedUpdateWithoutFruitHistoryInput>
  }

  export type profileCreateNestedOneWithoutUserInput = {
    create?: XOR<profileCreateWithoutUserInput, profileUncheckedCreateWithoutUserInput>
    connectOrCreate?: profileCreateOrConnectWithoutUserInput
    connect?: profileWhereUniqueInput
  }

  export type profileUpdateOneWithoutUserNestedInput = {
    create?: XOR<profileCreateWithoutUserInput, profileUncheckedCreateWithoutUserInput>
    connectOrCreate?: profileCreateOrConnectWithoutUserInput
    upsert?: profileUpsertWithoutUserInput
    disconnect?: profileWhereInput | boolean
    delete?: profileWhereInput | boolean
    connect?: profileWhereUniqueInput
    update?: XOR<XOR<profileUpdateToOneWithWhereWithoutUserInput, profileUpdateWithoutUserInput>, profileUncheckedUpdateWithoutUserInput>
  }

  export type userCreateNestedManyWithoutProfileInput = {
    create?: XOR<userCreateWithoutProfileInput, userUncheckedCreateWithoutProfileInput> | userCreateWithoutProfileInput[] | userUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: userCreateOrConnectWithoutProfileInput | userCreateOrConnectWithoutProfileInput[]
    createMany?: userCreateManyProfileInputEnvelope
    connect?: userWhereUniqueInput | userWhereUniqueInput[]
  }

  export type userUncheckedCreateNestedManyWithoutProfileInput = {
    create?: XOR<userCreateWithoutProfileInput, userUncheckedCreateWithoutProfileInput> | userCreateWithoutProfileInput[] | userUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: userCreateOrConnectWithoutProfileInput | userCreateOrConnectWithoutProfileInput[]
    createMany?: userCreateManyProfileInputEnvelope
    connect?: userWhereUniqueInput | userWhereUniqueInput[]
  }

  export type userUpdateManyWithoutProfileNestedInput = {
    create?: XOR<userCreateWithoutProfileInput, userUncheckedCreateWithoutProfileInput> | userCreateWithoutProfileInput[] | userUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: userCreateOrConnectWithoutProfileInput | userCreateOrConnectWithoutProfileInput[]
    upsert?: userUpsertWithWhereUniqueWithoutProfileInput | userUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: userCreateManyProfileInputEnvelope
    set?: userWhereUniqueInput | userWhereUniqueInput[]
    disconnect?: userWhereUniqueInput | userWhereUniqueInput[]
    delete?: userWhereUniqueInput | userWhereUniqueInput[]
    connect?: userWhereUniqueInput | userWhereUniqueInput[]
    update?: userUpdateWithWhereUniqueWithoutProfileInput | userUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: userUpdateManyWithWhereWithoutProfileInput | userUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: userScalarWhereInput | userScalarWhereInput[]
  }

  export type userUncheckedUpdateManyWithoutProfileNestedInput = {
    create?: XOR<userCreateWithoutProfileInput, userUncheckedCreateWithoutProfileInput> | userCreateWithoutProfileInput[] | userUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: userCreateOrConnectWithoutProfileInput | userCreateOrConnectWithoutProfileInput[]
    upsert?: userUpsertWithWhereUniqueWithoutProfileInput | userUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: userCreateManyProfileInputEnvelope
    set?: userWhereUniqueInput | userWhereUniqueInput[]
    disconnect?: userWhereUniqueInput | userWhereUniqueInput[]
    delete?: userWhereUniqueInput | userWhereUniqueInput[]
    connect?: userWhereUniqueInput | userWhereUniqueInput[]
    update?: userUpdateWithWhereUniqueWithoutProfileInput | userUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: userUpdateManyWithWhereWithoutProfileInput | userUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: userScalarWhereInput | userScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type fruitClassCreateWithoutChildInput = {
    id?: string
    createAt?: Date | string
    updatedAt?: Date | string
    name: string
    description: string
    father?: fruitClassCreateNestedOneWithoutChildInput
    fruitName?: fruitNameCreateNestedManyWithoutFruitClassInput
    fruitTraining?: fruitTrainingCreateNestedManyWithoutFruitClassInput
  }

  export type fruitClassUncheckedCreateWithoutChildInput = {
    id?: string
    createAt?: Date | string
    updatedAt?: Date | string
    name: string
    description: string
    fatherId?: string | null
    fruitName?: fruitNameUncheckedCreateNestedManyWithoutFruitClassInput
    fruitTraining?: fruitTrainingUncheckedCreateNestedManyWithoutFruitClassInput
  }

  export type fruitClassCreateOrConnectWithoutChildInput = {
    where: fruitClassWhereUniqueInput
    create: XOR<fruitClassCreateWithoutChildInput, fruitClassUncheckedCreateWithoutChildInput>
  }

  export type fruitClassCreateWithoutFatherInput = {
    id?: string
    createAt?: Date | string
    updatedAt?: Date | string
    name: string
    description: string
    child?: fruitClassCreateNestedManyWithoutFatherInput
    fruitName?: fruitNameCreateNestedManyWithoutFruitClassInput
    fruitTraining?: fruitTrainingCreateNestedManyWithoutFruitClassInput
  }

  export type fruitClassUncheckedCreateWithoutFatherInput = {
    id?: string
    createAt?: Date | string
    updatedAt?: Date | string
    name: string
    description: string
    child?: fruitClassUncheckedCreateNestedManyWithoutFatherInput
    fruitName?: fruitNameUncheckedCreateNestedManyWithoutFruitClassInput
    fruitTraining?: fruitTrainingUncheckedCreateNestedManyWithoutFruitClassInput
  }

  export type fruitClassCreateOrConnectWithoutFatherInput = {
    where: fruitClassWhereUniqueInput
    create: XOR<fruitClassCreateWithoutFatherInput, fruitClassUncheckedCreateWithoutFatherInput>
  }

  export type fruitClassCreateManyFatherInputEnvelope = {
    data: fruitClassCreateManyFatherInput | fruitClassCreateManyFatherInput[]
    skipDuplicates?: boolean
  }

  export type fruitNameCreateWithoutFruitClassInput = {
    id?: string
    createAt?: Date | string
    updatedAt?: Date | string
    name: string
    fruitValue?: fruitValueCreateNestedManyWithoutFruitNameInput
  }

  export type fruitNameUncheckedCreateWithoutFruitClassInput = {
    id?: string
    createAt?: Date | string
    updatedAt?: Date | string
    name: string
    fruitValue?: fruitValueUncheckedCreateNestedManyWithoutFruitNameInput
  }

  export type fruitNameCreateOrConnectWithoutFruitClassInput = {
    where: fruitNameWhereUniqueInput
    create: XOR<fruitNameCreateWithoutFruitClassInput, fruitNameUncheckedCreateWithoutFruitClassInput>
  }

  export type fruitNameCreateManyFruitClassInputEnvelope = {
    data: fruitNameCreateManyFruitClassInput | fruitNameCreateManyFruitClassInput[]
    skipDuplicates?: boolean
  }

  export type fruitTrainingCreateWithoutFruitClassInput = {
    id?: string
    createAt?: Date | string
    updatedAt?: Date | string
    img: string
    date: Date | string
  }

  export type fruitTrainingUncheckedCreateWithoutFruitClassInput = {
    id?: string
    createAt?: Date | string
    updatedAt?: Date | string
    img: string
    date: Date | string
  }

  export type fruitTrainingCreateOrConnectWithoutFruitClassInput = {
    where: fruitTrainingWhereUniqueInput
    create: XOR<fruitTrainingCreateWithoutFruitClassInput, fruitTrainingUncheckedCreateWithoutFruitClassInput>
  }

  export type fruitTrainingCreateManyFruitClassInputEnvelope = {
    data: fruitTrainingCreateManyFruitClassInput | fruitTrainingCreateManyFruitClassInput[]
    skipDuplicates?: boolean
  }

  export type fruitClassUpsertWithoutChildInput = {
    update: XOR<fruitClassUpdateWithoutChildInput, fruitClassUncheckedUpdateWithoutChildInput>
    create: XOR<fruitClassCreateWithoutChildInput, fruitClassUncheckedCreateWithoutChildInput>
    where?: fruitClassWhereInput
  }

  export type fruitClassUpdateToOneWithWhereWithoutChildInput = {
    where?: fruitClassWhereInput
    data: XOR<fruitClassUpdateWithoutChildInput, fruitClassUncheckedUpdateWithoutChildInput>
  }

  export type fruitClassUpdateWithoutChildInput = {
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    father?: fruitClassUpdateOneWithoutChildNestedInput
    fruitName?: fruitNameUpdateManyWithoutFruitClassNestedInput
    fruitTraining?: fruitTrainingUpdateManyWithoutFruitClassNestedInput
  }

  export type fruitClassUncheckedUpdateWithoutChildInput = {
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    fatherId?: NullableStringFieldUpdateOperationsInput | string | null
    fruitName?: fruitNameUncheckedUpdateManyWithoutFruitClassNestedInput
    fruitTraining?: fruitTrainingUncheckedUpdateManyWithoutFruitClassNestedInput
  }

  export type fruitClassUpsertWithWhereUniqueWithoutFatherInput = {
    where: fruitClassWhereUniqueInput
    update: XOR<fruitClassUpdateWithoutFatherInput, fruitClassUncheckedUpdateWithoutFatherInput>
    create: XOR<fruitClassCreateWithoutFatherInput, fruitClassUncheckedCreateWithoutFatherInput>
  }

  export type fruitClassUpdateWithWhereUniqueWithoutFatherInput = {
    where: fruitClassWhereUniqueInput
    data: XOR<fruitClassUpdateWithoutFatherInput, fruitClassUncheckedUpdateWithoutFatherInput>
  }

  export type fruitClassUpdateManyWithWhereWithoutFatherInput = {
    where: fruitClassScalarWhereInput
    data: XOR<fruitClassUpdateManyMutationInput, fruitClassUncheckedUpdateManyWithoutFatherInput>
  }

  export type fruitClassScalarWhereInput = {
    AND?: fruitClassScalarWhereInput | fruitClassScalarWhereInput[]
    OR?: fruitClassScalarWhereInput[]
    NOT?: fruitClassScalarWhereInput | fruitClassScalarWhereInput[]
    id?: StringFilter<"fruitClass"> | string
    createAt?: DateTimeFilter<"fruitClass"> | Date | string
    updatedAt?: DateTimeFilter<"fruitClass"> | Date | string
    name?: StringFilter<"fruitClass"> | string
    description?: StringFilter<"fruitClass"> | string
    fatherId?: StringNullableFilter<"fruitClass"> | string | null
  }

  export type fruitNameUpsertWithWhereUniqueWithoutFruitClassInput = {
    where: fruitNameWhereUniqueInput
    update: XOR<fruitNameUpdateWithoutFruitClassInput, fruitNameUncheckedUpdateWithoutFruitClassInput>
    create: XOR<fruitNameCreateWithoutFruitClassInput, fruitNameUncheckedCreateWithoutFruitClassInput>
  }

  export type fruitNameUpdateWithWhereUniqueWithoutFruitClassInput = {
    where: fruitNameWhereUniqueInput
    data: XOR<fruitNameUpdateWithoutFruitClassInput, fruitNameUncheckedUpdateWithoutFruitClassInput>
  }

  export type fruitNameUpdateManyWithWhereWithoutFruitClassInput = {
    where: fruitNameScalarWhereInput
    data: XOR<fruitNameUpdateManyMutationInput, fruitNameUncheckedUpdateManyWithoutFruitClassInput>
  }

  export type fruitNameScalarWhereInput = {
    AND?: fruitNameScalarWhereInput | fruitNameScalarWhereInput[]
    OR?: fruitNameScalarWhereInput[]
    NOT?: fruitNameScalarWhereInput | fruitNameScalarWhereInput[]
    id?: StringFilter<"fruitName"> | string
    createAt?: DateTimeFilter<"fruitName"> | Date | string
    updatedAt?: DateTimeFilter<"fruitName"> | Date | string
    name?: StringFilter<"fruitName"> | string
    fruitClassId?: StringFilter<"fruitName"> | string
  }

  export type fruitTrainingUpsertWithWhereUniqueWithoutFruitClassInput = {
    where: fruitTrainingWhereUniqueInput
    update: XOR<fruitTrainingUpdateWithoutFruitClassInput, fruitTrainingUncheckedUpdateWithoutFruitClassInput>
    create: XOR<fruitTrainingCreateWithoutFruitClassInput, fruitTrainingUncheckedCreateWithoutFruitClassInput>
  }

  export type fruitTrainingUpdateWithWhereUniqueWithoutFruitClassInput = {
    where: fruitTrainingWhereUniqueInput
    data: XOR<fruitTrainingUpdateWithoutFruitClassInput, fruitTrainingUncheckedUpdateWithoutFruitClassInput>
  }

  export type fruitTrainingUpdateManyWithWhereWithoutFruitClassInput = {
    where: fruitTrainingScalarWhereInput
    data: XOR<fruitTrainingUpdateManyMutationInput, fruitTrainingUncheckedUpdateManyWithoutFruitClassInput>
  }

  export type fruitTrainingScalarWhereInput = {
    AND?: fruitTrainingScalarWhereInput | fruitTrainingScalarWhereInput[]
    OR?: fruitTrainingScalarWhereInput[]
    NOT?: fruitTrainingScalarWhereInput | fruitTrainingScalarWhereInput[]
    id?: StringFilter<"fruitTraining"> | string
    createAt?: DateTimeFilter<"fruitTraining"> | Date | string
    updatedAt?: DateTimeFilter<"fruitTraining"> | Date | string
    img?: StringFilter<"fruitTraining"> | string
    date?: DateTimeFilter<"fruitTraining"> | Date | string
    fruitClassId?: StringFilter<"fruitTraining"> | string
  }

  export type fruitClassCreateWithoutFruitTrainingInput = {
    id?: string
    createAt?: Date | string
    updatedAt?: Date | string
    name: string
    description: string
    father?: fruitClassCreateNestedOneWithoutChildInput
    child?: fruitClassCreateNestedManyWithoutFatherInput
    fruitName?: fruitNameCreateNestedManyWithoutFruitClassInput
  }

  export type fruitClassUncheckedCreateWithoutFruitTrainingInput = {
    id?: string
    createAt?: Date | string
    updatedAt?: Date | string
    name: string
    description: string
    fatherId?: string | null
    child?: fruitClassUncheckedCreateNestedManyWithoutFatherInput
    fruitName?: fruitNameUncheckedCreateNestedManyWithoutFruitClassInput
  }

  export type fruitClassCreateOrConnectWithoutFruitTrainingInput = {
    where: fruitClassWhereUniqueInput
    create: XOR<fruitClassCreateWithoutFruitTrainingInput, fruitClassUncheckedCreateWithoutFruitTrainingInput>
  }

  export type fruitClassUpsertWithoutFruitTrainingInput = {
    update: XOR<fruitClassUpdateWithoutFruitTrainingInput, fruitClassUncheckedUpdateWithoutFruitTrainingInput>
    create: XOR<fruitClassCreateWithoutFruitTrainingInput, fruitClassUncheckedCreateWithoutFruitTrainingInput>
    where?: fruitClassWhereInput
  }

  export type fruitClassUpdateToOneWithWhereWithoutFruitTrainingInput = {
    where?: fruitClassWhereInput
    data: XOR<fruitClassUpdateWithoutFruitTrainingInput, fruitClassUncheckedUpdateWithoutFruitTrainingInput>
  }

  export type fruitClassUpdateWithoutFruitTrainingInput = {
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    father?: fruitClassUpdateOneWithoutChildNestedInput
    child?: fruitClassUpdateManyWithoutFatherNestedInput
    fruitName?: fruitNameUpdateManyWithoutFruitClassNestedInput
  }

  export type fruitClassUncheckedUpdateWithoutFruitTrainingInput = {
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    fatherId?: NullableStringFieldUpdateOperationsInput | string | null
    child?: fruitClassUncheckedUpdateManyWithoutFatherNestedInput
    fruitName?: fruitNameUncheckedUpdateManyWithoutFruitClassNestedInput
  }

  export type fruitClassCreateWithoutFruitNameInput = {
    id?: string
    createAt?: Date | string
    updatedAt?: Date | string
    name: string
    description: string
    father?: fruitClassCreateNestedOneWithoutChildInput
    child?: fruitClassCreateNestedManyWithoutFatherInput
    fruitTraining?: fruitTrainingCreateNestedManyWithoutFruitClassInput
  }

  export type fruitClassUncheckedCreateWithoutFruitNameInput = {
    id?: string
    createAt?: Date | string
    updatedAt?: Date | string
    name: string
    description: string
    fatherId?: string | null
    child?: fruitClassUncheckedCreateNestedManyWithoutFatherInput
    fruitTraining?: fruitTrainingUncheckedCreateNestedManyWithoutFruitClassInput
  }

  export type fruitClassCreateOrConnectWithoutFruitNameInput = {
    where: fruitClassWhereUniqueInput
    create: XOR<fruitClassCreateWithoutFruitNameInput, fruitClassUncheckedCreateWithoutFruitNameInput>
  }

  export type fruitValueCreateWithoutFruitNameInput = {
    id?: string
    createAt?: Date | string
    updatedAt?: Date | string
    description: string
    valueUnid: Decimal | DecimalJsLike | number | string
    date: Date | string
    fruitHistory?: fruitHistoryCreateNestedManyWithoutFruitValueInput
  }

  export type fruitValueUncheckedCreateWithoutFruitNameInput = {
    id?: string
    createAt?: Date | string
    updatedAt?: Date | string
    description: string
    valueUnid: Decimal | DecimalJsLike | number | string
    date: Date | string
    fruitHistory?: fruitHistoryUncheckedCreateNestedManyWithoutFruitValueInput
  }

  export type fruitValueCreateOrConnectWithoutFruitNameInput = {
    where: fruitValueWhereUniqueInput
    create: XOR<fruitValueCreateWithoutFruitNameInput, fruitValueUncheckedCreateWithoutFruitNameInput>
  }

  export type fruitValueCreateManyFruitNameInputEnvelope = {
    data: fruitValueCreateManyFruitNameInput | fruitValueCreateManyFruitNameInput[]
    skipDuplicates?: boolean
  }

  export type fruitClassUpsertWithoutFruitNameInput = {
    update: XOR<fruitClassUpdateWithoutFruitNameInput, fruitClassUncheckedUpdateWithoutFruitNameInput>
    create: XOR<fruitClassCreateWithoutFruitNameInput, fruitClassUncheckedCreateWithoutFruitNameInput>
    where?: fruitClassWhereInput
  }

  export type fruitClassUpdateToOneWithWhereWithoutFruitNameInput = {
    where?: fruitClassWhereInput
    data: XOR<fruitClassUpdateWithoutFruitNameInput, fruitClassUncheckedUpdateWithoutFruitNameInput>
  }

  export type fruitClassUpdateWithoutFruitNameInput = {
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    father?: fruitClassUpdateOneWithoutChildNestedInput
    child?: fruitClassUpdateManyWithoutFatherNestedInput
    fruitTraining?: fruitTrainingUpdateManyWithoutFruitClassNestedInput
  }

  export type fruitClassUncheckedUpdateWithoutFruitNameInput = {
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    fatherId?: NullableStringFieldUpdateOperationsInput | string | null
    child?: fruitClassUncheckedUpdateManyWithoutFatherNestedInput
    fruitTraining?: fruitTrainingUncheckedUpdateManyWithoutFruitClassNestedInput
  }

  export type fruitValueUpsertWithWhereUniqueWithoutFruitNameInput = {
    where: fruitValueWhereUniqueInput
    update: XOR<fruitValueUpdateWithoutFruitNameInput, fruitValueUncheckedUpdateWithoutFruitNameInput>
    create: XOR<fruitValueCreateWithoutFruitNameInput, fruitValueUncheckedCreateWithoutFruitNameInput>
  }

  export type fruitValueUpdateWithWhereUniqueWithoutFruitNameInput = {
    where: fruitValueWhereUniqueInput
    data: XOR<fruitValueUpdateWithoutFruitNameInput, fruitValueUncheckedUpdateWithoutFruitNameInput>
  }

  export type fruitValueUpdateManyWithWhereWithoutFruitNameInput = {
    where: fruitValueScalarWhereInput
    data: XOR<fruitValueUpdateManyMutationInput, fruitValueUncheckedUpdateManyWithoutFruitNameInput>
  }

  export type fruitValueScalarWhereInput = {
    AND?: fruitValueScalarWhereInput | fruitValueScalarWhereInput[]
    OR?: fruitValueScalarWhereInput[]
    NOT?: fruitValueScalarWhereInput | fruitValueScalarWhereInput[]
    id?: StringFilter<"fruitValue"> | string
    createAt?: DateTimeFilter<"fruitValue"> | Date | string
    updatedAt?: DateTimeFilter<"fruitValue"> | Date | string
    description?: StringFilter<"fruitValue"> | string
    valueUnid?: DecimalFilter<"fruitValue"> | Decimal | DecimalJsLike | number | string
    date?: DateTimeFilter<"fruitValue"> | Date | string
    fruitNameId?: StringFilter<"fruitValue"> | string
  }

  export type fruitNameCreateWithoutFruitValueInput = {
    id?: string
    createAt?: Date | string
    updatedAt?: Date | string
    name: string
    fruitClass?: fruitClassCreateNestedOneWithoutFruitNameInput
  }

  export type fruitNameUncheckedCreateWithoutFruitValueInput = {
    id?: string
    createAt?: Date | string
    updatedAt?: Date | string
    name: string
    fruitClassId: string
  }

  export type fruitNameCreateOrConnectWithoutFruitValueInput = {
    where: fruitNameWhereUniqueInput
    create: XOR<fruitNameCreateWithoutFruitValueInput, fruitNameUncheckedCreateWithoutFruitValueInput>
  }

  export type fruitHistoryCreateWithoutFruitValueInput = {
    id?: string
    createAt?: Date | string
    updatedAt?: Date | string
    dateCapture: Date | string
    valuWeight: Decimal | DecimalJsLike | number | string
    valueTotal: Decimal | DecimalJsLike | number | string
  }

  export type fruitHistoryUncheckedCreateWithoutFruitValueInput = {
    id?: string
    createAt?: Date | string
    updatedAt?: Date | string
    dateCapture: Date | string
    valuWeight: Decimal | DecimalJsLike | number | string
    valueTotal: Decimal | DecimalJsLike | number | string
  }

  export type fruitHistoryCreateOrConnectWithoutFruitValueInput = {
    where: fruitHistoryWhereUniqueInput
    create: XOR<fruitHistoryCreateWithoutFruitValueInput, fruitHistoryUncheckedCreateWithoutFruitValueInput>
  }

  export type fruitHistoryCreateManyFruitValueInputEnvelope = {
    data: fruitHistoryCreateManyFruitValueInput | fruitHistoryCreateManyFruitValueInput[]
    skipDuplicates?: boolean
  }

  export type fruitNameUpsertWithoutFruitValueInput = {
    update: XOR<fruitNameUpdateWithoutFruitValueInput, fruitNameUncheckedUpdateWithoutFruitValueInput>
    create: XOR<fruitNameCreateWithoutFruitValueInput, fruitNameUncheckedCreateWithoutFruitValueInput>
    where?: fruitNameWhereInput
  }

  export type fruitNameUpdateToOneWithWhereWithoutFruitValueInput = {
    where?: fruitNameWhereInput
    data: XOR<fruitNameUpdateWithoutFruitValueInput, fruitNameUncheckedUpdateWithoutFruitValueInput>
  }

  export type fruitNameUpdateWithoutFruitValueInput = {
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    fruitClass?: fruitClassUpdateOneWithoutFruitNameNestedInput
  }

  export type fruitNameUncheckedUpdateWithoutFruitValueInput = {
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    fruitClassId?: StringFieldUpdateOperationsInput | string
  }

  export type fruitHistoryUpsertWithWhereUniqueWithoutFruitValueInput = {
    where: fruitHistoryWhereUniqueInput
    update: XOR<fruitHistoryUpdateWithoutFruitValueInput, fruitHistoryUncheckedUpdateWithoutFruitValueInput>
    create: XOR<fruitHistoryCreateWithoutFruitValueInput, fruitHistoryUncheckedCreateWithoutFruitValueInput>
  }

  export type fruitHistoryUpdateWithWhereUniqueWithoutFruitValueInput = {
    where: fruitHistoryWhereUniqueInput
    data: XOR<fruitHistoryUpdateWithoutFruitValueInput, fruitHistoryUncheckedUpdateWithoutFruitValueInput>
  }

  export type fruitHistoryUpdateManyWithWhereWithoutFruitValueInput = {
    where: fruitHistoryScalarWhereInput
    data: XOR<fruitHistoryUpdateManyMutationInput, fruitHistoryUncheckedUpdateManyWithoutFruitValueInput>
  }

  export type fruitHistoryScalarWhereInput = {
    AND?: fruitHistoryScalarWhereInput | fruitHistoryScalarWhereInput[]
    OR?: fruitHistoryScalarWhereInput[]
    NOT?: fruitHistoryScalarWhereInput | fruitHistoryScalarWhereInput[]
    id?: StringFilter<"fruitHistory"> | string
    createAt?: DateTimeFilter<"fruitHistory"> | Date | string
    updatedAt?: DateTimeFilter<"fruitHistory"> | Date | string
    dateCapture?: DateTimeFilter<"fruitHistory"> | Date | string
    valuWeight?: DecimalFilter<"fruitHistory"> | Decimal | DecimalJsLike | number | string
    valueTotal?: DecimalFilter<"fruitHistory"> | Decimal | DecimalJsLike | number | string
    fruitValueId?: StringFilter<"fruitHistory"> | string
  }

  export type fruitValueCreateWithoutFruitHistoryInput = {
    id?: string
    createAt?: Date | string
    updatedAt?: Date | string
    description: string
    valueUnid: Decimal | DecimalJsLike | number | string
    date: Date | string
    fruitName?: fruitNameCreateNestedOneWithoutFruitValueInput
  }

  export type fruitValueUncheckedCreateWithoutFruitHistoryInput = {
    id?: string
    createAt?: Date | string
    updatedAt?: Date | string
    description: string
    valueUnid: Decimal | DecimalJsLike | number | string
    date: Date | string
    fruitNameId: string
  }

  export type fruitValueCreateOrConnectWithoutFruitHistoryInput = {
    where: fruitValueWhereUniqueInput
    create: XOR<fruitValueCreateWithoutFruitHistoryInput, fruitValueUncheckedCreateWithoutFruitHistoryInput>
  }

  export type fruitValueUpsertWithoutFruitHistoryInput = {
    update: XOR<fruitValueUpdateWithoutFruitHistoryInput, fruitValueUncheckedUpdateWithoutFruitHistoryInput>
    create: XOR<fruitValueCreateWithoutFruitHistoryInput, fruitValueUncheckedCreateWithoutFruitHistoryInput>
    where?: fruitValueWhereInput
  }

  export type fruitValueUpdateToOneWithWhereWithoutFruitHistoryInput = {
    where?: fruitValueWhereInput
    data: XOR<fruitValueUpdateWithoutFruitHistoryInput, fruitValueUncheckedUpdateWithoutFruitHistoryInput>
  }

  export type fruitValueUpdateWithoutFruitHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    valueUnid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    fruitName?: fruitNameUpdateOneWithoutFruitValueNestedInput
  }

  export type fruitValueUncheckedUpdateWithoutFruitHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    valueUnid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    fruitNameId?: StringFieldUpdateOperationsInput | string
  }

  export type profileCreateWithoutUserInput = {
    id?: string
    createAt?: Date | string
    updatedAt?: Date | string
    name: string
    key: string
  }

  export type profileUncheckedCreateWithoutUserInput = {
    id?: string
    createAt?: Date | string
    updatedAt?: Date | string
    name: string
    key: string
  }

  export type profileCreateOrConnectWithoutUserInput = {
    where: profileWhereUniqueInput
    create: XOR<profileCreateWithoutUserInput, profileUncheckedCreateWithoutUserInput>
  }

  export type profileUpsertWithoutUserInput = {
    update: XOR<profileUpdateWithoutUserInput, profileUncheckedUpdateWithoutUserInput>
    create: XOR<profileCreateWithoutUserInput, profileUncheckedCreateWithoutUserInput>
    where?: profileWhereInput
  }

  export type profileUpdateToOneWithWhereWithoutUserInput = {
    where?: profileWhereInput
    data: XOR<profileUpdateWithoutUserInput, profileUncheckedUpdateWithoutUserInput>
  }

  export type profileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
  }

  export type profileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
  }

  export type userCreateWithoutProfileInput = {
    id?: string
    createAt?: Date | string
    updatedAt?: Date | string
    name: string
    description?: string | null
    login: string
    password: string
  }

  export type userUncheckedCreateWithoutProfileInput = {
    id?: string
    createAt?: Date | string
    updatedAt?: Date | string
    name: string
    description?: string | null
    login: string
    password: string
  }

  export type userCreateOrConnectWithoutProfileInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutProfileInput, userUncheckedCreateWithoutProfileInput>
  }

  export type userCreateManyProfileInputEnvelope = {
    data: userCreateManyProfileInput | userCreateManyProfileInput[]
    skipDuplicates?: boolean
  }

  export type userUpsertWithWhereUniqueWithoutProfileInput = {
    where: userWhereUniqueInput
    update: XOR<userUpdateWithoutProfileInput, userUncheckedUpdateWithoutProfileInput>
    create: XOR<userCreateWithoutProfileInput, userUncheckedCreateWithoutProfileInput>
  }

  export type userUpdateWithWhereUniqueWithoutProfileInput = {
    where: userWhereUniqueInput
    data: XOR<userUpdateWithoutProfileInput, userUncheckedUpdateWithoutProfileInput>
  }

  export type userUpdateManyWithWhereWithoutProfileInput = {
    where: userScalarWhereInput
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyWithoutProfileInput>
  }

  export type userScalarWhereInput = {
    AND?: userScalarWhereInput | userScalarWhereInput[]
    OR?: userScalarWhereInput[]
    NOT?: userScalarWhereInput | userScalarWhereInput[]
    id?: StringFilter<"user"> | string
    createAt?: DateTimeFilter<"user"> | Date | string
    updatedAt?: DateTimeFilter<"user"> | Date | string
    name?: StringFilter<"user"> | string
    description?: StringNullableFilter<"user"> | string | null
    login?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    profileId?: StringNullableFilter<"user"> | string | null
  }

  export type fruitClassCreateManyFatherInput = {
    id?: string
    createAt?: Date | string
    updatedAt?: Date | string
    name: string
    description: string
  }

  export type fruitNameCreateManyFruitClassInput = {
    id?: string
    createAt?: Date | string
    updatedAt?: Date | string
    name: string
  }

  export type fruitTrainingCreateManyFruitClassInput = {
    id?: string
    createAt?: Date | string
    updatedAt?: Date | string
    img: string
    date: Date | string
  }

  export type fruitClassUpdateWithoutFatherInput = {
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    child?: fruitClassUpdateManyWithoutFatherNestedInput
    fruitName?: fruitNameUpdateManyWithoutFruitClassNestedInput
    fruitTraining?: fruitTrainingUpdateManyWithoutFruitClassNestedInput
  }

  export type fruitClassUncheckedUpdateWithoutFatherInput = {
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    child?: fruitClassUncheckedUpdateManyWithoutFatherNestedInput
    fruitName?: fruitNameUncheckedUpdateManyWithoutFruitClassNestedInput
    fruitTraining?: fruitTrainingUncheckedUpdateManyWithoutFruitClassNestedInput
  }

  export type fruitClassUncheckedUpdateManyWithoutFatherInput = {
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type fruitNameUpdateWithoutFruitClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    fruitValue?: fruitValueUpdateManyWithoutFruitNameNestedInput
  }

  export type fruitNameUncheckedUpdateWithoutFruitClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    fruitValue?: fruitValueUncheckedUpdateManyWithoutFruitNameNestedInput
  }

  export type fruitNameUncheckedUpdateManyWithoutFruitClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type fruitTrainingUpdateWithoutFruitClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    img?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type fruitTrainingUncheckedUpdateWithoutFruitClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    img?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type fruitTrainingUncheckedUpdateManyWithoutFruitClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    img?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type fruitValueCreateManyFruitNameInput = {
    id?: string
    createAt?: Date | string
    updatedAt?: Date | string
    description: string
    valueUnid: Decimal | DecimalJsLike | number | string
    date: Date | string
  }

  export type fruitValueUpdateWithoutFruitNameInput = {
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    valueUnid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    fruitHistory?: fruitHistoryUpdateManyWithoutFruitValueNestedInput
  }

  export type fruitValueUncheckedUpdateWithoutFruitNameInput = {
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    valueUnid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    fruitHistory?: fruitHistoryUncheckedUpdateManyWithoutFruitValueNestedInput
  }

  export type fruitValueUncheckedUpdateManyWithoutFruitNameInput = {
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    valueUnid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type fruitHistoryCreateManyFruitValueInput = {
    id?: string
    createAt?: Date | string
    updatedAt?: Date | string
    dateCapture: Date | string
    valuWeight: Decimal | DecimalJsLike | number | string
    valueTotal: Decimal | DecimalJsLike | number | string
  }

  export type fruitHistoryUpdateWithoutFruitValueInput = {
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dateCapture?: DateTimeFieldUpdateOperationsInput | Date | string
    valuWeight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valueTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type fruitHistoryUncheckedUpdateWithoutFruitValueInput = {
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dateCapture?: DateTimeFieldUpdateOperationsInput | Date | string
    valuWeight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valueTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type fruitHistoryUncheckedUpdateManyWithoutFruitValueInput = {
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dateCapture?: DateTimeFieldUpdateOperationsInput | Date | string
    valuWeight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valueTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type userCreateManyProfileInput = {
    id?: string
    createAt?: Date | string
    updatedAt?: Date | string
    name: string
    description?: string | null
    login: string
    password: string
  }

  export type userUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    login?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type userUncheckedUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    login?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type userUncheckedUpdateManyWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    login?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use FruitClassCountOutputTypeDefaultArgs instead
     */
    export type FruitClassCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = FruitClassCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FruitNameCountOutputTypeDefaultArgs instead
     */
    export type FruitNameCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = FruitNameCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FruitValueCountOutputTypeDefaultArgs instead
     */
    export type FruitValueCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = FruitValueCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProfileCountOutputTypeDefaultArgs instead
     */
    export type ProfileCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = ProfileCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use fruitClassDefaultArgs instead
     */
    export type fruitClassArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = fruitClassDefaultArgs<ExtArgs>
    /**
     * @deprecated Use fruitTrainingDefaultArgs instead
     */
    export type fruitTrainingArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = fruitTrainingDefaultArgs<ExtArgs>
    /**
     * @deprecated Use fruitNameDefaultArgs instead
     */
    export type fruitNameArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = fruitNameDefaultArgs<ExtArgs>
    /**
     * @deprecated Use fruitValueDefaultArgs instead
     */
    export type fruitValueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = fruitValueDefaultArgs<ExtArgs>
    /**
     * @deprecated Use fruitHistoryDefaultArgs instead
     */
    export type fruitHistoryArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = fruitHistoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use userDefaultArgs instead
     */
    export type userArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = userDefaultArgs<ExtArgs>
    /**
     * @deprecated Use profileDefaultArgs instead
     */
    export type profileArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = profileDefaultArgs<ExtArgs>
    /**
     * @deprecated Use balanceDefaultArgs instead
     */
    export type balanceArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = balanceDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
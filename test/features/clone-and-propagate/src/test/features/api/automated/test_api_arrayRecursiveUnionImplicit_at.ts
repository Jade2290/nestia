import type { IPropagation } from "@nestia/fetcher";
import typia from "typia";

import api from "../../../../api";
import type { ArrayRecursiveUnionImplicit } from "../../../../api/structures/ArrayRecursiveUnionImplicit";

export const test_api_arrayRecursiveUnionImplicit_at = async (
  connection: api.IConnection,
) => {
  const output: IPropagation<{
    200: ArrayRecursiveUnionImplicit.IBucket;
  }> = await api.functional.arrayRecursiveUnionImplicit.at(
    connection,
    typia.random<number>(),
  );
  typia.assert(output);
};

import ts from "typescript";
import { IJsDocTagInfo } from "typia";

import { INestiaConfig } from "../../INestiaConfig";
import { IRoute } from "../../structures/IRoute";
import { FormatUtil } from "../../utils/FormatUtil";
import { ImportDictionary } from "../../utils/ImportDictionary";
import { SdkFunctionProgrammer } from "./SdkFunctionProgrammer";
import { SdkNamespaceProgrammer } from "./SdkNamespaceProgrammer";

export namespace SdkRouteProgrammer {
  export const generate =
    (config: INestiaConfig) =>
    (importer: ImportDictionary) =>
    (route: IRoute): ts.Statement[] => {
      const props = {
        headers: route.parameters.find(
          (p) => p.category === "headers" && p.field === undefined,
        ),
        query: route.parameters.find(
          (p) => p.category === "query" && p.field === undefined,
        ),
        input: route.parameters.find((p) => p.category === "body"),
      };
      return [
        FormatUtil.description(
          SdkFunctionProgrammer.generate(config)(importer)(route, props),
          describe(route),
        ),
        SdkNamespaceProgrammer.generate(config)(importer)(route, props),
      ];
    };

  const describe = (route: IRoute): string => {
    // MAIN DESCRIPTION
    const comments: string[] = route.description
      ? route.description.split("\n")
      : [];

    // COMMENT TAGS
    const tags: IJsDocTagInfo[] = route.jsDocTags.filter(
      (tag) =>
        tag.name !== "param" ||
        route.parameters
          .filter((p) => p.category !== "headers")
          .some((p) => p.name === tag.text?.[0]?.text),
    );
    if (tags.length !== 0) {
      const content: string[] = tags.map((t) =>
        t.text?.length
          ? `@${t.name} ${t.text.map((e) => e.text).join("")}`
          : `@${t.name}`,
      );
      comments.push("", ...new Set(content));
    }

    // EXCEPTIONS
    for (const [key, value] of Object.entries(route.exceptions)) {
      if (
        comments.some(
          (str) =>
            str.startsWith(`@throw ${key}`) || str.startsWith(`@throws ${key}`),
        )
      )
        continue;
      comments.push(
        value.description?.length
          ? `@throws ${key} ${value.description.split("\n")[0]}`
          : `@throws ${key}`,
      );
    }

    // POSTFIX
    if (!!comments.length) comments.push("");
    comments.push(
      `@controller ${route.symbol.class}.${route.symbol.function}`,
      `@path ${route.method} ${route.path}`,
      `@nestia Generated by Nestia - https://github.com/samchon/nestia`,
    );
    return comments.join("\n");
  };
}

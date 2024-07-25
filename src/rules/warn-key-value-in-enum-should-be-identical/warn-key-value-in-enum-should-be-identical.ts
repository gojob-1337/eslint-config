import { AST_NODE_TYPES, ESLintUtils, TSESTree } from "@typescript-eslint/utils";

function isValueStringLiteral(
  node: TSESTree.Expression,
): node is TSESTree.StringLiteral {
  return (
    node.type === AST_NODE_TYPES.Literal && typeof node.value === 'string'
  );
}

function isKeyStringIdentifier(
  node: TSESTree.Expression,
): node is TSESTree.Identifier {
  return (
    node.type === AST_NODE_TYPES.Identifier
  );
}

function isValueNumberLiteral(
  node: TSESTree.Expression,
): node is TSESTree.NumberLiteral {
  return (
    node.type === AST_NODE_TYPES.Literal && typeof node.value === 'number'
  );
}

function getValue(node: TSESTree.Expression): string | number | undefined {
  if (isValueStringLiteral(node)) {
    return String(node.value);
  } else if (isValueNumberLiteral(node)) {
    return Number(node.value);
  } else {
    return undefined;
  }
}

function getKey(node: TSESTree.Expression): string | number | undefined {
  if (isKeyStringIdentifier(node)) {
    return node.name;
  } else {
    return undefined;
  }
}

export const warnKeyValueInEnumShouldBeIdenticalRule = ESLintUtils.RuleCreator.withoutDocs({
  create: (context) => {

    return {
      TSEnumDeclaration(node: TSESTree.TSEnumDeclaration) {
        const enumMembers = node.members;

        enumMembers.forEach((member) => {
          if (member.initializer === undefined) {
            return;
          }

          const value = getValue(member.initializer);

          if (value === undefined) {
            return;
          }

          const key = getKey(member.id);

          if (key === undefined) {
            return;
          }

          if (value !== key) {
            context.report({
              node: member,
              data: { key, value },
              messageId: "warnKeyValueInEnumShouldBeIdentical",
              suggest: [
                {
                  messageId: "standardizeEnumKeyAndValue",
                  data: { key, value },
                  fix: (fixer) => {
                    return fixer.replaceText(
                      node,
                      `${key}: "${key}"`
                    );
                  }
                }
              ]
            })
          }

        })
      }
    }
  },
  meta: {
    messages: {
      warnKeyValueInEnumShouldBeIdentical:
        "Enum key {{key}} and value {{value}} should be identical",
      standardizeEnumKeyAndValue: "In your enum key {{key}} and value {{value}} should be the same (case sensitive)",
    },
    type: "suggestion",
    schema: [],
    hasSuggestions: true,
  },
  defaultOptions: [],
});
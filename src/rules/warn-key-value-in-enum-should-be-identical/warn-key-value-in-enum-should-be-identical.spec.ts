import { RuleTester } from "@typescript-eslint/rule-tester";
import { resolve } from "path";
import { warnKeyValueInEnumShouldBeIdenticalRule } from "./warn-key-value-in-enum-should-be-identical";

const ruleTester = new RuleTester({
  parser: "@typescript-eslint/parser",
  parserOptions: {
    tsconfigRootDir: resolve(__dirname, "..", "..", "fixture"),
    project: "./tsconfig.json",
  },
});

ruleTester.run(
  "warn-key-value-in-enum-should-be-identical",
  warnKeyValueInEnumShouldBeIdenticalRule,
  {
    invalid: [{
      name: "Fails when the key and value in enum are not identical",
      code: `enum LinterEnum {
        ERROR = "blabla",
        WAITING = "WAITING",
      }`,
      errors: [
        {
          messageId: "warnKeyValueInEnumShouldBeIdentical",
          data: { key: "ERROR", value: "blabla" },
          suggestions: [
            {
              messageId: "standardizeEnumKeyAndValue",
              data: { key: "ERROR", value: "blabla" },
              output: `ERROR: "ERROR"`
            }
          ]
        },
      ],
    },
    {
      name: "Fails when the key and value in enum are not identical",
      code: `enum LinterEnum {
        ERROR = "error",
        WAITING = "WAITING",
      }`,
      errors: [
        {
          messageId: "warnKeyValueInEnumShouldBeIdentical",
          data: { key: "ERROR", value: "error" },
          suggestions: [
            {
              messageId: "standardizeEnumKeyAndValue",
              data: { key: "ERROR", value: "error" },
              output: `ERROR: "ERROR"`
            }
          ]
        },
      ],
    },
    {
      name: "Fails when the key and value in enum are not identical with number",
      code: `enum LinterEnum {
        ONE = 1,
      }`,
      errors: [
        {
          messageId: "warnKeyValueInEnumShouldBeIdentical",
          data: { key: "ONE", value: 1 },
          suggestions: [
            {
              messageId: "standardizeEnumKeyAndValue",
              data: { key: "ONE", value: 1 },
              output: `ONE: "ONE"`
            }
          ]
        },
      ],

    }
    ],
    valid: [
      {
        name: "Passes when the key and value in enum are identical",
        code: `enum LinterEnum {
          ERROR = "ERROR",
          WARN = "WARN",
          INFO = "INFO",
        }`,
      },
    ],
  }
);
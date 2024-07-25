import warnKeyValueInEnumShouldBeIdenticalRule from "./warn-key-value-in-enum-should-be-identical";

const keyValueEnumIdenticalPlugin = {
  meta: {
    name: "warn-key-value-in-enum-should-be-identical",
    version: "0.0.1",
  },
  rules: {
    "warn-key-value-in-enum-should-be-identical": warnKeyValueInEnumShouldBeIdenticalRule,
  },
};

export default keyValueEnumIdenticalPlugin;
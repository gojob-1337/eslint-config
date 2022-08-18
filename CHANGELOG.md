# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [5.0.0] - 2022-08-18

- upgrade `eslint-plugin-prettier` to v4 and `eslint-config-prettier`, and merge prettier configs
- **BREAKING:** upgrade `eslint-plugin-simple-import-sort` to v7 and update config
- upgrade `@typescript-eslint` monorepo to latest minor
- upgrade `eslint-plugin-import` to latest minor

## [2.0.1] - 2020-06-25

### Changed

- upgrade `@typescript-eslint` packages (v2 to v3) (see [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint/releases/tag/v3.0.0) release note)

## [1.3.2] - 2020-04-30

### Changed

- react: regroup "side-effects" and "internal" packages

## [1.3.1] - 2020-04-30

### Changed

- upgraded packages

## [1.3.0] - 2020-04-26

### Changed

- fixed the never-worked-before Import Groups for React

## [1.2.2] - 2020-04-26

### Changed

- update packages; add `prettier` as a peer dependency

## [1.2.1] - 2020-02-04

### Fixed

- indent rules conflict between eslint / prettier with jest test `it.each`

## [1.2.0] - 2020-01-29

### Added

- rule `member-ordering`

## [1.0.10] - 2019-11-24

### Changed

- update packages `@typescript-eslint`, `eslint-config-prettier`

## [1.0.9] - 2019-09-21

### Changed

- allow "unused var" if name is starting with `_`

## [1.0.8] - 2019-09-21

### Added

- configuration for React: `@gojob/eslint-config/typescript-react`

## [1.0.7] - 2019-09-21

### Changed

- upgraded `@typescript-eslint` packages and prettier

## [1.0.6] - 2019-09-21

### Added

- rule `sort-imports`

## [1.0.5] - 2019-08-07

### Changed

- `@typescript-eslint/no-non-null-assertion` disabled 🔍

## [1.0.4] - 2019-08-01

### Changed

- `@typescript-eslint/no-use-before-define` disabled 🤸

## [1.0.3] - 2019-08-01

### Fixed

- Conflict between `eslint` & `prettier` "singleQuote" rule

## [1.0.2] - 2019-07-31

### Fixed

- Typo in README (installation instructions)

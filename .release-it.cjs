/* eslint-disable no-template-curly-in-string */

// .pnpm/conventional-changelog 模块依赖的 .pnpm/conventional-changelog-conventionalcommits v8.0.0
// @commitlint/config-conventional  模块依赖的 .pnpm/conventional-changelog-conventionalcommits v7.0.2
// release-it运行时 会触发v7版本的

// "@commitlint/cli": "^19.7.1",
// "@commitlint/config-conventional": "^19.7.1",

/** @type {import('release-it').Config} */
module.exports = {
  plugins: {
    '@release-it/conventional-changelog': {
      infile: 'CHANGELOG.md',
      preset: {
        name: 'conventionalcommits',
        types: [
          { type: 'feat', section: 'Features' },
          { type: 'fix', section: 'Bug Fixes' },
          { type: 'docs', section: 'Doc Changes' },
          { type: 'style', section: 'Style Changes' },
          { type: 'refactor', section: 'Code Change' },
          { type: 'perf', section: 'Improves Performance' },
          { type: 'test', section: 'Missing Tests' },
          { type: 'build', section: 'External Dependencies' },
          { type: 'ci', section: 'CI Configuration' },
          { type: 'chore', section: 'Chore Other changes' },
          { type: 'revert', section: 'Reverts Commit' },
          { type: 'wip', section: 'Work In Process' },
          { type: 'workflow', section: 'Workflow Improvements' },
          { type: 'types', section: 'Type File Changes' },
        ],
      },
      writerOpts: {
        groupBy: 'type',
      },
    },
  },
  git: {
    requireCleanWorkingDir: false, // 是否要求提交所有文件更改
    commitMessage: 'chore: release ${version}',
    tagName: 'v${version}',
    push: false,
  },
  github: {
    release: false,
  },
}

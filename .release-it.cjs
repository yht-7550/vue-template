const types = [
  { "type": "feat", "section": "Features" },
  { "type": "fix", "section": "Bug Fixes" },
  { "type": "docs", "section": "Doc Changes" },
  { "type": "style", "section": "Style Changes" },
  { "type": "refactor", "section": "Code Change" },
  { "type": "perf", "section": "Improves Performance" },
  { "type": "test", "section": "Missing Tests" },
  { "type": "build", "section": "External Dependencies" },
  { "type": "ci", "section": "CI Configuration" },
  { "type": "chore", "section": "Chore Other changes" },
  { "type": "revert", "section": "Reverts Commit" },
  { "type": "wip", "section": "Work In Process" },
  { "type": "workflow", "section": "Workflow Improvements" },
  { "type": "types", "section": "Type File Changes" }
]

/** @type {import('release-it').Config} */
module.exports = {
  git: {
    commitMessage: "chore: release ${version}",
    tagName: "v${version}"
  },
  github: {
    release: false
  }
}

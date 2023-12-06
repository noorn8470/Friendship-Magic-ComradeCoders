class Group {
  constructor(groupName, visualElement) {
    this.name = groupName
    this.visual = visualElement
  }

  linkVisual(visualElement) {
    this.visual = visualElement
  }

  print() {
    console.log(this.name)
  }
}
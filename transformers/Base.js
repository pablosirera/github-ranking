class BaseTransformer {
  static fetchCollection(items) {
    return items.map(item => this.fetch(item))
  }

  static sendCollection(items) {
    return items.map(item => this.send(item))
  }
}

export default BaseTransformer

class Player {
  constructor(x, y, radius, color) {
    this.x = x
    this.y = y
    this.radius = radius
    this.color = color
    this.scaleX = 1.5 // Horizontal stretch factor
  }

  draw() {
    c.save()
    c.beginPath()
    // Scale horizontally before drawing the arc
    c.scale(this.scaleX, 1)
    c.arc(this.x / this.scaleX, this.y, this.radius, 0, Math.PI * 2, false)
    c.clip()
    // Draw Mallya image with adjusted coordinates
    c.drawImage(
      mallyaImage,
      (this.x - this.radius * this.scaleX) / this.scaleX,
      this.y - this.radius,
      this.radius * 2 * this.scaleX,
      this.radius * 2
    )
    c.restore()
  }
}

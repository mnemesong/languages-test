# Package

version       = "0.1.0"
author        = "Pantagruel74"
description   = "A new awesome nimble package"
license       = "MIT"
srcDir        = "src"

task compile, "Compile task": echo("nim -r c --path:\"src\" --outdir:\"c\"")


# Dependencies

requires "nim >= 1.6.12"

[**dev-sphere v2.2.5**](../../../../README.md)

***

[dev-sphere](../../../../modules.md) / [helpers/Spider/spawn.helper](../README.md) / spawn

# Function: spawn()

> **spawn**(`w`, `h`, `ctx`): [`Spider`](../../../../types/Spider/spider.type/type-aliases/Spider.md)

Defined in: [src/helpers/Spider/spawn.helper.ts:20](https://github.com/DumbNoxx/DevSphere/blob/eb3f80846f33282f6e0329ed2bac1585e686cd76/src/helpers/Spider/spawn.helper.ts#L20)

Creates and manages a "spider" object that can follow a target and render itself on a canvas.

## Parameters

### w

`number`

The width of the canvas.

### h

`number`

The height of the canvas.

### ctx

`CanvasRenderingContext2D`

The canvas rendering context.

## Returns

[`Spider`](../../../../types/Spider/spider.type/type-aliases/Spider.md)

A spider object with `follow` and `tick` methods.

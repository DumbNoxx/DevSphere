[**dev-sphere v2.2.5**](../../../../README.md)

***

[dev-sphere](../../../../modules.md) / [helpers/Spider/lerp.helper](../README.md) / lerp

# Function: lerp()

> **lerp**(`a`, `b`, `t`): `number`

Defined in: [src/helpers/Spider/lerp.helper.ts:11](https://github.com/DumbNoxx/DevSphere/blob/eb3f80846f33282f6e0329ed2bac1585e686cd76/src/helpers/Spider/lerp.helper.ts#L11)

Linearly interpolates between two values, `a` and `b`, based on a factor `t`.

## Parameters

### a

`number`

The starting value.

### b

`number`

The ending value.

### t

`number`

The interpolation factor, typically between 0 and 1.
           A value of 0 returns `a`, a value of 1 returns `b`, and values in between
           return a weighted average of `a` and `b`.

## Returns

`number`

The interpolated value.

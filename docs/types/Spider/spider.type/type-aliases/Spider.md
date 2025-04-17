[**dev-sphere v2.2.5**](../../../../README.md)

***

[dev-sphere](../../../../modules.md) / [types/Spider/spider.type](../README.md) / Spider

# Type Alias: Spider

> **Spider** = `object`

Defined in: [src/types/Spider/spider.type.ts:4](https://github.com/DumbNoxx/DevSphere/blob/eb3f80846f33282f6e0329ed2bac1585e686cd76/src/types/Spider/spider.type.ts#L4)

Represents a Spider entity with specific behaviors.

## Properties

### follow()

> **follow**: (`x`, `y`) => `void`

Defined in: [src/types/Spider/spider.type.ts:10](https://github.com/DumbNoxx/DevSphere/blob/eb3f80846f33282f6e0329ed2bac1585e686cd76/src/types/Spider/spider.type.ts#L10)

Makes the spider follow a target position.

#### Parameters

##### x

`number`

The x-coordinate of the target position.

##### y

`number`

The y-coordinate of the target position.

#### Returns

`void`

***

### tick()

> **tick**: (`t`) => `void`

Defined in: [src/types/Spider/spider.type.ts:16](https://github.com/DumbNoxx/DevSphere/blob/eb3f80846f33282f6e0329ed2bac1585e686cd76/src/types/Spider/spider.type.ts#L16)

Updates the spider's state based on the elapsed time.

#### Parameters

##### t

`number`

The time elapsed since the last update, in milliseconds.

#### Returns

`void`

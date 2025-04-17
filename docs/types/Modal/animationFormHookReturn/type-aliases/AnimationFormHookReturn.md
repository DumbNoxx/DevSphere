[**dev-sphere v2.2.5**](../../../../README.md)

***

[dev-sphere](../../../../modules.md) / [types/Modal/animationFormHookReturn](../README.md) / AnimationFormHookReturn

# Type Alias: AnimationFormHookReturn

> **AnimationFormHookReturn** = `object`

Defined in: [src/types/Modal/animationFormHookReturn.ts:9](https://github.com/DumbNoxx/DevSphere/blob/eb3f80846f33282f6e0329ed2bac1585e686cd76/src/types/Modal/animationFormHookReturn.ts#L9)

Represents the return type of a custom hook used for managing animations in a modal form.

## Properties

### formRef

> **formRef**: `React.RefObject`\<`HTMLDivElement` \| `null`\>

Defined in: [src/types/Modal/animationFormHookReturn.ts:10](https://github.com/DumbNoxx/DevSphere/blob/eb3f80846f33282f6e0329ed2bac1585e686cd76/src/types/Modal/animationFormHookReturn.ts#L10)

A React ref object pointing to the HTMLDivElement of the form or null.
                    This is used to reference the form element in the DOM.

***

### handleClose()

> **handleClose**: () => `void`

Defined in: [src/types/Modal/animationFormHookReturn.ts:11](https://github.com/DumbNoxx/DevSphere/blob/eb3f80846f33282f6e0329ed2bac1585e686cd76/src/types/Modal/animationFormHookReturn.ts#L11)

A function to handle the closing of the modal form.
                        Typically used to trigger animations or clean up resources.

#### Returns

`void`

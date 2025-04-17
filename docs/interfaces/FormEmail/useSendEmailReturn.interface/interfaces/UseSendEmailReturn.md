[**dev-sphere v2.2.5**](../../../../README.md)

***

[dev-sphere](../../../../modules.md) / [interfaces/FormEmail/useSendEmailReturn.interface](../README.md) / UseSendEmailReturn

# Interface: UseSendEmailReturn

Defined in: [src/interfaces/FormEmail/useSendEmailReturn.interface.ts:6](https://github.com/DumbNoxx/DevSphere/blob/eb3f80846f33282f6e0329ed2bac1585e686cd76/src/interfaces/FormEmail/useSendEmailReturn.interface.ts#L6)

Interface representing the return type of a custom hook for sending emails.

## Properties

### errorMessage

> **errorMessage**: `string`

Defined in: [src/interfaces/FormEmail/useSendEmailReturn.interface.ts:39](https://github.com/DumbNoxx/DevSphere/blob/eb3f80846f33282f6e0329ed2bac1585e686cd76/src/interfaces/FormEmail/useSendEmailReturn.interface.ts#L39)

Stores any error message encountered during form submission.

***

### formData

> **formData**: [`FormDatas`](../../formEmail.interface/interfaces/FormDatas.md)

Defined in: [src/interfaces/FormEmail/useSendEmailReturn.interface.ts:10](https://github.com/DumbNoxx/DevSphere/blob/eb3f80846f33282f6e0329ed2bac1585e686cd76/src/interfaces/FormEmail/useSendEmailReturn.interface.ts#L10)

The form data containing the input values.

***

### handleChange()

> **handleChange**: (`e`) => `void`

Defined in: [src/interfaces/FormEmail/useSendEmailReturn.interface.ts:16](https://github.com/DumbNoxx/DevSphere/blob/eb3f80846f33282f6e0329ed2bac1585e686cd76/src/interfaces/FormEmail/useSendEmailReturn.interface.ts#L16)

Handles changes to input fields in the form.

#### Parameters

##### e

`ChangeEvent`\<`HTMLInputElement`\>

The change event from an HTML input element.

#### Returns

`void`

***

### handleChangeTextArea()

> **handleChangeTextArea**: (`e`) => `void`

Defined in: [src/interfaces/FormEmail/useSendEmailReturn.interface.ts:22](https://github.com/DumbNoxx/DevSphere/blob/eb3f80846f33282f6e0329ed2bac1585e686cd76/src/interfaces/FormEmail/useSendEmailReturn.interface.ts#L22)

Handles changes to textarea fields in the form.

#### Parameters

##### e

`ChangeEvent`\<`HTMLTextAreaElement`\>

The change event from an HTML textarea element.

#### Returns

`void`

***

### handleSubmit()

> **handleSubmit**: (`e`) => `Promise`\<`void`\>

Defined in: [src/interfaces/FormEmail/useSendEmailReturn.interface.ts:29](https://github.com/DumbNoxx/DevSphere/blob/eb3f80846f33282f6e0329ed2bac1585e686cd76/src/interfaces/FormEmail/useSendEmailReturn.interface.ts#L29)

Handles the form submission event.

#### Parameters

##### e

`FormEvent`

The form submission event.

#### Returns

`Promise`\<`void`\>

A promise that resolves when the submission is complete.

***

### isSubmitting

> **isSubmitting**: `boolean`

Defined in: [src/interfaces/FormEmail/useSendEmailReturn.interface.ts:34](https://github.com/DumbNoxx/DevSphere/blob/eb3f80846f33282f6e0329ed2bac1585e686cd76/src/interfaces/FormEmail/useSendEmailReturn.interface.ts#L34)

Indicates whether the form is currently being submitted.

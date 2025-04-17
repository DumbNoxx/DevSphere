[**dev-sphere v2.2.5**](../../../README.md)

***

[dev-sphere](../../../modules.md) / [hooks/useTypingEffect](../README.md) / useTypingEffect

# Function: useTypingEffect()

> **useTypingEffect**(): [`TypingEffectReturn`](../../../interfaces/TypingEffect/TypingEffectReturn/interfaces/TypingEffectReturn.md)

Defined in: [src/hooks/useTypingEffect.ts:12](https://github.com/DumbNoxx/DevSphere/blob/eb3f80846f33282f6e0329ed2bac1585e686cd76/src/hooks/useTypingEffect.ts#L12)

Custom hook to create a typing effect for a given text.
It types out the text character by character, then deletes it, and repeats the process.

## Returns

[`TypingEffectReturn`](../../../interfaces/TypingEffect/TypingEffectReturn/interfaces/TypingEffectReturn.md)

- An object containing:
  - `visibleText`: The current visible portion of the text.
  - `fullText`: The full text being typed and deleted.

<script lang="ts">
    import { EmojiButton } from "@joeattardi/emoji-button";
    import { createEventDispatcher } from "svelte";
    import { getChatEmojiPicker } from "../../EmojiPicker";
    import { IconMoodSmile } from "@wa-icons";

    const dispatch = createEventDispatcher();

    let picker: EmojiButton | undefined;
    let trigger: HTMLButtonElement;

    function togglePicker() {
        // Lazy instantiation of the emoji picker. It takes ~250ms to load so we don't want to load it if we don't need it.
        if (!picker) {
            picker = getChatEmojiPicker();
            picker.on("emoji", (selection: { emoji: string; name: string }) => {
                dispatch("change", selection.emoji);
            });
        }
        picker.togglePicker(trigger);
    }
</script>

<button
    data-testid="openEmojiPickerButton"
    class="tw-p-0 tw-m-0 tw-text-white/50 hover:tw-text-white tw-transition-all"
    bind:this={trigger}
    on:click={togglePicker}
>
    <IconMoodSmile font-size={16} />
</button>
